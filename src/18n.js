import i18n from "i18next";
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from "react-i18next";

import translationEN from "../src/locales/en/translation.json";
import translationRU from "../src/locales/ru/translation.json";

const resources = {
    en: {
        translation: translationEN
    },
    ru: {
        translation: translationRU
    }
};

i18n
    .use(Backend).use(LanguageDetector).use(initReactI18next).init({
        fallbackLng: 'en',
        debug: true,
        detection: {
            order: ['queryString', 'cookie'],
            cache: ['cookie']
        },
        interpolation: {
            escapeValue: false,
        },
        resources,
        lng: "en",
    });
export default i18n;