import { useContext } from "react";
import { PageApi, PageContext } from "../providers/PageProvider";

export default function usePageProvider(): PageApi {
    const context = useContext(PageContext);
    if (context == null) {
        throw Error("usePageProvider must be used inside PageProvider");
    }
    return context;
}
