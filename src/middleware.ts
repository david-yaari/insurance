import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
    // A list of all locales that are supported
    locales: ['en', 'fr', 'il'],

    // Used when no locale matches
    defaultLocale: 'en'
});

export const config = {
    // Match only internationalized pathnames
    matcher: [
        // Enable a redirect to a matching locale at the root
        '/',
        // Set a cookie to remember the previous locale for
        '/(il|fr|en)/:path*']
};