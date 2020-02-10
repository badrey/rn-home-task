import React from "react";
import {MainScreen} from "./src/screens/MainScreen/MainScreen";
import {ThemeContextProvider} from "./src/contexts/ThemeContext";

export default function App() {
    return (
        <ThemeContextProvider>
            <MainScreen />
        </ThemeContextProvider>
    );
}
