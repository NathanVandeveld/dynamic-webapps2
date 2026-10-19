import sql from "./neon.js";
import {useNeonQuery} from "./useNeonQuery.js";
import {useCallback} from "react";

//gebruik altijd de sql-functie, nooit gewone strings. Dit voorkomt sql-injection.
export function usePersonsData() {
    return useNeonQuery(useCallback(() => sql`SELECT * FROM persons ORDER BY name ASC`, []));
}

export function usePersonsDataWhereScoreLargerThen(score = null) {
    return useNeonQuery(useCallback(() => sql`SELECT *
                                              FROM persons
                                              WHERE (${score}::int is null or score >= ${score})
                                              order by name asc`, [score]));
}
