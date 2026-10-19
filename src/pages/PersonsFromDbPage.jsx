import {usePersonsData} from "../api/personsQueries.js";

export function PersonsFromDbPage(){
    const [persons] = usePersonsData();
    console.log("PersonsFromDbPage", persons);
}