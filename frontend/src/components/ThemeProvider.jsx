import { useEffect } from "react";
import { themes, useThemeStore } from "../store/usethemeStore.js";

export const ThemeProvider=({children})=>{
    const {activeTheme}=useThemeStore();

    useEffect(()=>{
        const theme=themes[activeTheme];
        if(!theme) return;

        const root=document.documentElement;
        Object.entries(theme.vars).forEach(([key,value])=>{
            root.style.setProperty(key,value)
        });

    },[activeTheme]);
    return <>{children}</>

}