import {useEffect, useState, useCallback} from "react";

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
        // eslint-disable-next-line react-hooks/set-state-in-effect
        refetch();
    }, [refetch]);

    return [data, loading, error, refetch];
}
