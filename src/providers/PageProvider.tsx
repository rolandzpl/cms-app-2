import { useQueryClient } from "@tanstack/react-query";
import React from "react";
import { GetPagesDto } from "../hooks/usePages";
import axios from "axios";
import useAppConfiguration from "../hooks/useAppConfiguration";

type PageDto = {
    slug: string;
    content: string;
};

export type PageApi = {
    getPageBySlug: (slug: string) => Promise<string>,
    getPages: () => Promise<GetPagesDto>,
    updatePage: () => void,
    createPage: () => void,
    deletePage: (slug: string) => void
}

export const PageContext = React.createContext<PageApi | null>(null);

type PageProviderProps = {
    children: React.ReactNode;
};

export const PageProvider: React.FC<PageProviderProps> = ({ children }) => {
    const cfg = useAppConfiguration();
    return <PageContext.Provider
        value={{
            getPageBySlug: async (slug: string) => (await axios.get<string>(`${cfg.apiUrl}/cms/pages/${slug}/content`)).data,
            getPages: async () => (await axios.get<GetPagesDto>(`${cfg.apiUrl}/cms/pages`)).data,
            updatePage: () => { },
            createPage: () => { },
            deletePage: (slug: string) => { }
        }}>
        {children}
    </PageContext.Provider>;
}
