import { useContext } from "react";
import { AppConfiguration, AppConfigurationContext } from "../providers/appConfigurationProvider"

export default function useAppConfiguration(): AppConfiguration {
    const context = useContext(AppConfigurationContext);
    if (context == null) {
        throw "";
    }
    return context;
}
