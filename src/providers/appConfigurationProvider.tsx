import React from "react";

export type AppConfiguration = {
    apiUrl: string
}

export const AppConfigurationContext = React.createContext<AppConfiguration | null>(null);

type AppConfigurationProviderProps = {
    configuration: AppConfiguration;
    children: React.ReactNode;
};

export const AppConfigurationProvider: React.FC<AppConfigurationProviderProps> = ({ configuration, children }) => {
    return <AppConfigurationContext.Provider value={configuration}>{children}</AppConfigurationContext.Provider>;
}

