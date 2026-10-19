# Database Setup & Migratie (Neon PostgreSQL - React & Vite)

Dit document beschrijft hoe deze React (Vite) applicatie rechtstreeks gekoppeld wordt aan een Neon PostgreSQL cloud-database via de Neon Serverless driver (`@neondatabase/serverless`).

## 1. Neon Database Aanmaken
1. Ga naar [Neon.tech](https://neon.tech/) en log in of maak een account aan.
2. Maak een nieuw project/database aan.
3. Kopieer de **Connection String** (bijvoorbeeld `postgres://user:password@ep-xyz.region.aws.neon.tech/neondb?sslmode=require`).

## 2. Schema & Data Initialisatie
De SQL-scripts voor het aanmaken van de tabellen en het invoegen van de testdata staan in de map `dbscripts/`:
1. Voer eerst (`dbscripts/schema.sql`) uit via de **SQL Editor** in het Neon.tech Dashboard om de tabel aan te maken. Bijvoorbeeld:
   ```sql
   CREATE TABLE IF NOT EXISTS persons (
       id SERIAL PRIMARY KEY,
       name VARCHAR(100) NOT NULL,
       score INT NOT NULL,
       city VARCHAR(100) NOT NULL
   );
   ```
2. Voer vervolgens (`dbscripts/data.sql`) uit om de initialisatierecords in te voegen.


## 3. Afhankelijkheid Installeren
Installeer de Neon Serverless driver in het React-project:

```bash
npm install @neondatabase/serverless
```

## 4. Lokale Omgevingsvariabelen (`.env.local`)
Sla de verbindinggegevens lokaal op in `.env.local` in de root van het project. Vite geladen variabelen beginnen met `VITE_`:

```env
VITE_NEON_DATABASE_URL=postgres://<user>:<password>@<neon-hostname>/neondb?sslmode=require
```

> **Beveiligingstip:** Zorg dat `.env.local` is opgenomen in het `.gitignore` bestand zodat secret credentials niet in Git terechtkomen.

## 5. Neon Client Initialisatie (`src/api/neon.js`)
Maak een centrale database-client aan in `src/api/neon.js`:
Importeer deze file in App.jsx.

```javascript
import { neon } from "@neondatabase/serverless";

const sql = neon(import.meta.env.VITE_NEON_DATABASE_URL);

export default sql;
```

## 6. Voorbeeld Query Module (`src/api/personsQueries.js`)
Gebruik de `sql` helper om data op te halen en aan te passen vanuit React-componenten:

```javascript
import sql from "./neon.js";

export async function fetchPersons() {
    const persons = await sql`SELECT * FROM persons ORDER BY name ASC`;
    return persons;
}

export async function addPerson(newPerson) {
    await sql`
        INSERT INTO persons (name, score, city)
        VALUES (${newPerson.name}, ${newPerson.score}, ${newPerson.city})
    `;
}
```

## 7. React Custom Hook Pattern 

### A. Herbruikbare Hook (`src/api/useNeonQuery.js`)
```javascript
import { useEffect, useState, useCallback } from "react";

export function useNeonQuery(queryFn) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const refetch = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const result = await queryFn();
            setData(result);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    }, [queryFn]);

    useEffect(() => {
        refetch();
    }, [refetch]);

    return [data, loading, error, refetch];
}
```

### B. Gebruik in Entity-queries (`src/api/personsQueries.js`)
```javascript
import sql from "./neon.js";
import { useNeonQuery } from "./useNeonQuery.js";

export function usePersonsData() {
    return useNeonQuery(useCallback(() => sql`SELECT * FROM persons ORDER BY name ASC`, []));
}
```

### C. Gebruik in React Componenten
```javascript
import { usePersonsData } from "../api/personsQueries.js";

export function PersonsList() {
    const [persons, loading, error, refetch] = usePersonsData();

    if (loading) return <p>Laden...</p>;
    if (error) return <p>Fout bij laden van data.</p>;

    return (
        <ul>
            {persons.map(person => (
                <li key={person.id}>{person.name} (score: {person.score}) - {person.city}</li>
            ))}
        </ul>
    );
}
```

## 8. Didactische Beveiliging & Core Principes (Voor Studenten)

### A. Productie vs. Educatieve Setup
- **Educatieve keuze:** In deze cursus verbinden we React rechtstreeks met de database. Dit stelt studenten in staat om te focussen op React-state, componenten en SQL-queries zonder de overhead van een aparte backend.
- **Productierealiteit:** In echte softwareprojecten maakt een frontend **nooit** rechtstreeks verbinding met een SQL-database. Een backend API (zoals Spring Boot of Node.js) schermt de database af voor de buitenwereld.

### B. Geen Credentials in Git (`.env.local`)
- Connection strings en wachtwoorden worden nooit hardgecodeerd in `.js` of `.jsx` bestanden.
- Sla de variabelen op in `.env.local` en zorg dat `.env.local` is opgenomen in `.gitignore` zodat geheimen niet op GitHub belanden.

### C. Preventie van SQL Injection
- Geen SQL-queries samenstellen via string-concatenatie (bijv. `"SELECT * FROM persons WHERE name = '" + name + "'"`).
- Gebruik altijd de geparametriseerde tagged template literals (`sql\`SELECT * FROM persons WHERE name = ${name}\``) om SQL Injection-aanvallen te voorkomen.

### D. Principe van Minste Privilege (Least Privilege)
- Ken databasegebruikers alleen de rechten toe die strikt noodzakelijk zijn (bijv. alleen `SELECT` en `INSERT` op specifieke tabellen).

### E. Volumebescherming & Quota Triggers (Free Plan Harde Stop)
- **Doel:** Op het Neon Free Plan is de opslag gelimiteerd tot 0.5 GiB. Omdat de database connection string aanwezig is in de frontend client, kan iedereen in theorie queries afvuren en tabellen laten vollopen.
- **Implementatie:** In `dbscripts/schema.sql` beveiligen we de datatabellen met een herbruikbare PL/pgSQL triggerfunctie: `check_table_row_limit()`.
- **Werking:**
  - Vóór elke toevoeging (`BEFORE INSERT`) telt de trigger het aantal rijen in de doeltabel.
  - Zodra de drempelwaarde (standaard 200 rijen, 500 voor detailregels) is bereikt, gooit PostgreSQL een `RAISE EXCEPTION`.
  - De transactie wordt onmiddellijk afgebroken en verdere invoer stopt.
- **Activatie in Neon:**
  - Kopieer het triggergedeelte onderaan `dbscripts/schema.sql`.
  - Plak en run dit eenmalig in de **SQL Editor** van het Neon Console dashboard.

