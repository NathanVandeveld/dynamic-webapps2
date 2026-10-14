import {subDays} from "date-fns";

export const PRODUCTS_DATA = [
    {id: 1, name: "cola", price: 2.50, category: "frisdrank", categoryId: 1, categoryOrder: 10},
    {id: 2, name: "water", price: 2.20, note: "plat of bruisend", category: "frisdrank", categoryId: 1, categoryOrder: 10},
    {id: 3, name: "Mechelse Maneblusser", price: 4.00, size: 33, category: "bier", categoryId: 2, categoryOrder: 20},
    {id: 4, name: "Antwerpse De Koninck", price: 3.80, size: 25, category: "bier", categoryId: 2, categoryOrder: 20},
    {id: 5, name: "Huiswijn", price: 4.50, note: "rood, wit of rosé", category: "wijn", categoryId: 3, categoryOrder: 30},
    {id: 6, name: "Cava Reserva", price: 5.50, category: "wijn", categoryId: 3, categoryOrder: 30},
    {id: 9, name: "Kaaskroketten van 't Huis", price: 12.00, category: "voorgerecht", categoryId: 6, categoryOrder: 60},
    {id: 7, name: "Vlaams Stoofvlees met Friet", price: 18.50, category: "hoofdgerecht", categoryId: 7, categoryOrder: 70},
    {id: 8, name: "Gentse Waterzooi van Kip", price: 17.00, category: "hoofdgerecht", categoryId: 7, categoryOrder: 70},
    {id: 10, name: "Mechelse Koekoek met Archiduc", price: 21.00, category: "hoofdgerecht", categoryId: 7, categoryOrder: 70},
    {id: 11, name: "Antwerpse Handjes Dessert", price: 7.50, category: "nagerecht", categoryId: 8, categoryOrder: 80},
    {id: 12, name: "Brusselse Wafel met Slagroom", price: 6.50, category: "nagerecht", categoryId: 8, categoryOrder: 80}
];
export const PERSON_DATA = [
    {id: 1, name: "Jan Peeters", score: 28, city: "Mechelen"},
    {id: 2, name: "Marie Janssens", score: 25, city: "Antwerpen"},
    {id: 3, name: "Ahmed El Amrani", score: 22, city: "Mechelen"},
    {id: 4, name: "Yves Wouters", score: 24, city: "Antwerpen"},
    {id: 5, name: "Marijke Jacobs", score: 26, city: "Duffel"},
    {id: 6, name: "Furkan Yilmaz", score: 23, city: "Mechelen"},
    {id: 7, name: "Bart Maes", score: 32, city: "Antwerpen"},
    {id: 8, name: "Marijke Mertens", score: 28, city: "Lier"},
    {id: 9, name: "Dirk Claes", score: 45, city: "Mechelen"},
    {id: 10, name: "Layla Goossens", score: 29, city: "Lint"},
    {id: 11, name: "Kris De Smet", score: 27, city: "Antwerpen"},
    {id: 12, name: "Leen Hermans", score: 31, city: "Katelijne"},
    {id: 13, name: "Lieve Van Damme", score: 34, city: "Mechelen"},
    {id: 14, name: "Charlotte Wouters", score: 31, city: "Antwerpen"},
    {id: 15, name: "Lucas Maes", score: 42, city: "Mechelen"},
    {id: 16, name: "Fatima Zahra", score: 29, city: "Antwerpen"},
    {id: 17, name: "Thomas Pauwels", score: 23, city: "Mechelen"},
    {id: 18, name: "Julie Hendrickx", score: 38, city: "Duffel"},
    {id: 19, name: "Ruben Bogaerts", score: 47, city: "Lier"},
    {id: 20, name: "Emma Goossens", score: 26, city: "Kontich"}
];
export const NUMBER_DATA = [1, 3, 5, 2, 6, 7, 34, 12, 66, 98, 11, 2];
export const CAR_DATA = [
    {
        id: 1,
        name: "Peugeot 204",
        brand: "Peugeot",
        type: "204",
        color: "blauw",
        year: 1974,
        note: "klein maar onverwoestbaar"
    },
    {
        id: 2,
        name: "Fiat Punto",
        brand: "Fiat",
        type: "Punto",
        color: "geel",
        year: 2002,
        note: "die ging altijd kapot"
    },
    {
        id: 3,
        name: "Volvo 240",
        brand: "Volvo",
        color: "zwart",
        year: 1988,
        note: "veilig, zwaar, onverwoestbaar"
    },
    {
        id: 4,
        name: "Citroën 2CV",
        brand: "Citroën",
        type: "2CV",
        year: 1978,
        note: "het iconische 'geitje'"
    },
    {
        id: 5,
        name: "Peugeot 505",
        brand: "Peugeot",
        type: "505",
        color: "grijs",
        year: 1985
    },
    {
        id: 6,
        name: "Fiat Panda",
        brand: "Fiat",
        type: "Panda",
        color: "wit",
        year: 1990
    },
    {
        id: 7,
        name: "Fiat Tipo",
        brand: "Fiat",
        type: "Tipo",
        color: "groen",
        year: 1996
    },
    {
        id: 8,
        name: "Citroën C4",
        brand: "Citroën",
        type: "C4",
        color: "rood",
        year: 2010
    },
    {
        id: 9,
        name: "Fiat Panda II",
        brand: "Fiat",
        type: "Panda",
        color: "rood",
        year: 1995
    },
    {
        id: 10,
        name: "Opel Astra",
        brand: "Opel",
        type: "Astra",
        color: "blauw",
        year: 2008,
        note: "handig voor lange ritten"
    },
    {
        id: 11,
        name: "Volkswagen Golf",
        brand: "Volkswagen",
        type: "Golf",
        color: "geel",
        year: 2015,
        note: "betrouwbaar en zuinig"
    },
    {
        id: 12,
        name: "Mercedes 190",
        brand: "Mercedes",
        type: "190",
        color: "zwart",
        year: 1965,
        note: "prachtig stukje geschiedenis"
    },
    {
        id: 13,
        name: "Tesla Model 3",
        brand: "Tesla",
        type: "Model 3",
        color: "blauw",
        year: 2022,
        note: "stil, snel en futuristisch"
    }
];
export const PERSON_WITH_PROPS_DATA = [
    {
        id: 1,
        name: "Jan Peeters",
        score: 28,
        city: "Mechelen",
        role: "staff",
        function: "Chef-kok",
        skills: ["Franse Keuken", "HACCP", "Menu Design"],
        hobbies: ["koken", "wijnproeven", "wandelen"],
        registeredAt: subDays(new Date(), 1)
    },
    {
        id: 2,
        name: "Marie Janssens",
        score: 25,
        city: "Antwerpen",
        role: "staff",
        function: "Zaalverantwoordelijke",
        skills: ["Klantenservice", "Planning", "Sommelier"],
        hobbies: ["yoga", "lezen", "koken"],
        registeredAt: subDays(new Date(), 5)
    },
    {
        id: 3,
        name: "Ahmed El Amrani",
        score: 22,
        city: "Mechelen",
        role: "staff",
        function: "Sous-chef",
        skills: ["Grill", "Pastry"],
        hobbies: ["basketbal", "muziek"],
        registeredAt: subDays(new Date(), 10)
    },
    {
        id: 4,
        name: "Yves Wouters",
        score: 24,
        city: "Antwerpen",
        role: "staff",
        function: "Ober",
        skills: ["Kassa", "Zaalbediening"],
        hobbies: ["fitness", "zwemmen", "films"],
        registeredAt: subDays(new Date(), 15)
    },
    {
        id: 5,
        name: "Marijke Jacobs",
        score: 26,
        city: "Duffel",
        role: "staff",
        function: "Barista & Patissier",
        skills: ["Latte Art", "Desserts"],
        hobbies: ["tekenen", "schilderen"],
        registeredAt: subDays(new Date(), 20)
    },
    {
        id: 6,
        name: "Furkan Yilmaz",
        score: 23,
        city: "Mechelen",
        role: "staff",
        function: "Catering Chauffeur",
        skills: ["Rijbewijs C", "Logistiek"],
        hobbies: ["voetbal", "kickboksen"],
        registeredAt: subDays(new Date(), 25)
    },
    {
        id: 7,
        name: "Bart Maes",
        score: 32,
        city: "Antwerpen",
        role: "staff",
        function: "Sommelier",
        skills: ["Wijnkennis", "Voorraadbeheer"],
        hobbies: ["gitaar", "schaken"],
        registeredAt: subDays(new Date(), 30)
    },
    {
        id: 8,
        name: "Marijke Mertens",
        score: 28,
        city: "Lier",
        role: "staff",
        function: "Manager",
        skills: ["HR", "Financiën"],
        hobbies: ["wandelen", "reizen"],
        registeredAt: subDays(new Date(), 40)
    },
    {
        id: 9,
        name: "Dirk Claes",
        score: 45,
        city: "Mechelen",
        role: "customer",
        function: "Vaste Gast",
        skills: ["Fijnproever"],
        hobbies: ["fietsen", "films"],
        registeredAt: subDays(new Date(), 50)
    },
    {
        id: 10,
        name: "Layla Goossens",
        score: 29,
        city: "Lint",
        role: "staff",
        function: "Event Coördinator",
        skills: ["Catering Events", "Design"],
        hobbies: ["dans", "koken"],
        registeredAt: subDays(new Date(), 60)
    },
    {
        id: 11,
        name: "Kris De Smet",
        score: 27,
        city: "Antwerpen",
        role: "staff",
        function: "Keukenhulp",
        skills: ["Mise-en-place"],
        hobbies: ["fitness", "muziek"],
        registeredAt: subDays(new Date(), 70)
    },
    {
        id: 12,
        name: "Leen Hermans",
        score: 31,
        city: "Katelijne",
        role: "staff",
        function: "Boekhouder",
        skills: ["Administratie", "Excel"],
        hobbies: ["bakken", "lezen"],
        registeredAt: subDays(new Date(), 80)
    },
    {
        id: 13,
        name: "Lieve Van Damme",
        score: 34,
        city: "Mechelen",
        role: "staff",
        function: "Social Media",
        skills: ["Fotografie", "Marketing"],
        hobbies: ["fotografie", "fietsen"],
        registeredAt: subDays(new Date(), 90)
    },
    {
        id: 14,
        name: "Charlotte Wouters",
        score: 31,
        city: "Antwerpen",
        role: "customer",
        function: "Fijnproever",
        skills: ["Culinaire Reizen"],
        hobbies: ["lezen", "reizen"],
        registeredAt: subDays(new Date(), 95)
    },
    {
        id: 15,
        name: "Lucas Maes",
        score: 42,
        city: "Mechelen",
        role: "customer",
        function: "Regelmatige Bezoeker",
        skills: ["Bierproever"],
        hobbies: ["fietsen", "wandelen"],
        registeredAt: subDays(new Date(), 100)
    },
    {
        id: 16,
        name: "Fatima Zahra",
        score: 29,
        city: "Antwerpen",
        role: "customer",
        function: "Zakenluncher",
        skills: ["Netwerken"],
        hobbies: ["tennis", "cultuur"],
        registeredAt: subDays(new Date(), 105)
    },
    {
        id: 17,
        name: "Thomas Pauwels",
        score: 23,
        city: "Mechelen",
        role: "customer",
        function: "Student",
        skills: ["Programmeren"],
        hobbies: ["gamen", "muziek"],
        registeredAt: subDays(new Date(), 110)
    },
    {
        id: 18,
        name: "Julie Hendrickx",
        score: 38,
        city: "Duffel",
        role: "customer",
        function: "Buurtbewoner",
        skills: ["Lokale Evenementen"],
        hobbies: ["tuinieren", "koken"],
        registeredAt: subDays(new Date(), 115)
    },
    {
        id: 19,
        name: "Ruben Bogaerts",
        score: 47,
        city: "Lier",
        role: "customer",
        function: "Wijnliefhebber",
        skills: ["Wijnkelder Beheer"],
        hobbies: ["zeilen", "films"],
        registeredAt: subDays(new Date(), 120)
    },
    {
        id: 20,
        name: "Emma Goossens",
        score: 26,
        city: "Kontich",
        role: "customer",
        function: "Weekendgast",
        skills: ["Fotografie"],
        hobbies: ["hardlopen", "fotografie"],
        registeredAt: subDays(new Date(), 125)
    }
];
