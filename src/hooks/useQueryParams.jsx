import { useSearchParams } from "react-router";

function useQueryParams(...keys) {
    const searchParams = useSearchParams();

    const result = [];
    keys.forEach(function (key) {
        result.push(searchParams[0].get(key));
    });
    return result;
}

export default useQueryParams;
