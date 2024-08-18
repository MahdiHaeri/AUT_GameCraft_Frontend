import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './locales/en/translation.json';
import faTranslation from './locales/fa/translation.json';
import LanguageDetector from 'i18next-browser-languagedetector';


i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
    resources: {
        en: {
            translation: enTranslation,
        },
        fa: {
            translation: faTranslation,
        },
    },
    // lng: 'en', // default language
    fallbackLng: 'en', // fallback language if the selected language doesn't have a translation
    interpolation: {
        escapeValue: false, // React already does escaping
    },
});

export default i18n;
