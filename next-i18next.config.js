/**
 * @type {import('next-i18next').UserConfig}
 */
const path = require('path')
const resolveLocalesPath = () => path.resolve('./public/locales')
module.exports = {
    // https://www.i18next.com/overview/configuration-options#logging
    // debug: process.env.NODE_ENV === 'development',
    debug: false,
    defaultNS: 'common',
    // localeExtension: 'js',
    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'de'],
        localeDetection: false // 不检测浏览器语言环境
        // defaultNS: 'common',
        // order: ['navigator', 'querystring', 'localStorage'],
        // caches: ['localStorage', 'cookie'],
    },
    // fallbackLng: {
    //     default: ['en']
    // },
    // interpolation: {
    //     prefix: '{',
    //     suffix: '}'
    // },
    // localeStructure: '{lng}/{ns}',
    /** To avoid issues when deploying to some paas (vercel...) */
    localePath:
        typeof window === 'undefined'
            ? resolveLocalesPath()
            : '/locales',
    // ns: ['common'],
    reloadOnPrerender: process.env.NODE_ENV === 'development'
    // saveMissing: true, // do not set saveMissing to true for production and also not when using the chained backend
    /**
     * @link https://github.com/i18next/next-i18next#6-advanced-configuration
     */
    // saveMissing: false,
    // strictMode: true,
    // serializeConfig: false,
    // react: { useSuspense: false }
}
