import {
    NAV_MENU,
    NAV_PERSONS,
    NAV_NUMBERS,
    NAV_STATE,
    NAV_SYNTHETIC_EVENT,
    NAV_INPUT,
    NAV_PERSONS_SEARCH, NAV_NUMBERS_PLAIN
} from "./navConstants.js";

export const RENDER_DATA_EXERCISES = [
    {key: NAV_MENU, title: "Menukaart", description: "Menukaart met data uit data.js"},
    {key: NAV_PERSONS, title: "Personen", description: "Lijst met personen - simpel"},
    {key: NAV_NUMBERS, title: "Getallen", description: "Werken met lijsten van getallen"},
    {key: NAV_NUMBERS_PLAIN,title:"alle getallen", description: "lijst van alle getallen"}
    /*{key: NAV_PICTURES, title: "Afbeeldingen", description: "Fotogalerij"},
    {key: NAV_CARS, title: "Auto's", description: "Lijst van auto's"},
    {key: NAV_WIKI, title: "Wiki", description: "Informatie over ons"}*/
];
export const STATE_EVENTS_EXERCISES = [
    {key: NAV_STATE, title: "State", description: "Oefenen met useState en events"},
    {key:NAV_SYNTHETIC_EVENT, title: "Synthetic event", description: "onclick en clientX/clientY uit het synthetic event"}

];
export const INPUT_EXERCISES = [
    {key:NAV_INPUT, title:"Invoer demo", description: "Formulieren en inputafhandeling"},
    {key:NAV_PERSONS_SEARCH, title:"Zoeken in personen", description: "zoeken en filteren in personen"}
];