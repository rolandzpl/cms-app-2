import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { PageContext } from "../providers/PageProvider";


export default function usePage(slug: string): {
    data?: string,
    isLoading: boolean,
    isError: boolean,
    error: Error | null
} {
    const pageApi = useContext(PageContext);
    if (pageApi == null) {
        throw Error();
    }
    const { data, isLoading, isError, error } = useQuery<string>({
        queryKey: ['page', slug],
        queryFn: () => pageApi.getPageBySlug(slug)
    });
    return {
        data: data,
        isLoading,
        isError,
        error
    }
}
