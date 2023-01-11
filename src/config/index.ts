const config = {
    // production
    isProduction: process.env.ENV === 'production',
    appName: process.env.APP_NAME,
    domain:
        process.env.NODE_ENV === 'production'
            ? process.env.DOMAIN
            : process.env.DOMAIN_DEV,
    logoPath: '/vercel.svg',
    api: process.env.NEXT_PUBLIC_API_DEVELOPMENT,
};

export default config;
