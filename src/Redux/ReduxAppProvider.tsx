"use client";
import { Provider } from "react-redux";
import { store } from "../Redux/Store";

export const ReduxAppProvider = ({ children }: { children: React.ReactNode }) => {
   return <Provider store={store}>{children}</Provider>;
};
