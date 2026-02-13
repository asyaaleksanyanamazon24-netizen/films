import Backend from "i18next-http-backend";
import {initReactI18next } from "react-i18next";

i18n
    .use(Backend)
    // .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: "en",
        ns: ["common"],
        defaultNS: "common",
        backend: {
            loadPath: "/locales/{{lng}}/{{ns}}.json"
        }
    });
