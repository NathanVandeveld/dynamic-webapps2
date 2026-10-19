-- Schema initialisatie voor de tabel 'persons'
CREATE TABLE IF NOT EXISTS persons (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    score INT NOT NULL,
    city VARCHAR(100) NOT NULL,
    role VARCHAR(50) DEFAULT 'customer',
    function VARCHAR(100)
);



-- ============================================================================
-- Volumebescherming (Neon Free Plan Harde Stop)
-- Voorkomt dat tabellen ongecontroleerd vollopen door bugs of ongeautoriseerde invoer.
-- Werpt een foutmelding (RAISE EXCEPTION) en blokkeert de INSERT zodra de tabel de limiet bereikt.
-- ============================================================================
CREATE OR REPLACE FUNCTION check_table_row_limit()
RETURNS trigger AS $$
DECLARE
    current_count INT;
    max_limit INT := 200;
BEGIN
    IF TG_NARGS > 0 THEN
        max_limit := TG_ARGV[0]::INT;
    END IF;

    EXECUTE format('SELECT count(*) FROM %I', TG_TABLE_NAME) INTO current_count;

    IF current_count >= max_limit THEN
        RAISE EXCEPTION 'Tabelcapaciteit bereikt voor % (maximaal % rijen toegestaan). Invoegen geblokkeerd.', TG_TABLE_NAME, max_limit;
    END IF;

    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Triggers per tabel met bijhorend maximum aantal toegestane records
DROP TRIGGER IF EXISTS trg_limit_persons ON persons;
CREATE TRIGGER trg_limit_persons
    BEFORE INSERT ON persons
    FOR EACH ROW
    EXECUTE FUNCTION check_table_row_limit(200);
