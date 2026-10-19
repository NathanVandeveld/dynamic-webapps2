import sql from "./neon.js";
import {useNeonQuery} from "./useNeonQuery.js";
import {useCallback} from "react";

//gebruik altijd de sql-functie, nooit gewone strings. Dit voorkomt sql-injection.
export function usePersonsData() {
    return useNeonQuery(useCallback(() => sql`SELECT * FROM persons ORDER BY name ASC`, []));
}
