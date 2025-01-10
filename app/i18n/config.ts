export type Locale = (typeof locales)[number];

export const locales = ['en', 'fr'];
export const defaultLocale: Locale = 'en';

export const i18n = {
    locales,
    defaultLocale,
}