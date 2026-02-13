import {createContext, useContext, useEffect, useState} from "react";
import {languages} from "../translations/index.js";


const LanguageContext = createContext()



export const LanguageProvider = ({children}) => {
    const [lang, setLang] = useState(localStorage.getItem("lang") || "en")

    useEffect(() => {
        localStorage.setItem("lang", lang)
    }, [lang]);


    const t = (key) =>{
        const keys = key.split('.')
        let value = languages[lang]

        keys.forEach(k => {
            value = value?.[k]
        })

        return value || key
    }

    return (
        <LanguageContext.Provider value={{lang, setLang, t}}>
            {children}
        </LanguageContext.Provider>
    )



}


export const useLanguage = () => useContext(LanguageContext)