import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAppConfiguration from "./useAppConfiguration";
import usePageProvider from "./usePageProvider";


export type GetPagesDto = {
    pages: PageDto[];
}

export type PageDto = {
    published: boolean;
    slug: string;
    title: string;
    description: string;
}

export default function usePages(): {
    data: PageDto[],
    isLoading: boolean,
    isError: boolean,
    error: Error | null
} {
    const pageApi = usePageProvider();
    const { data, isLoading, isError, error } = useQuery<GetPagesDto>({
        queryKey: ['all-pages'],
        queryFn: pageApi.getPages
    });
    return {
        data: data?.pages || [],
        isLoading,
        isError,
        error
    }
}
