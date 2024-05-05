import { Pathnames } from 'next-intl/navigation';

export const port = process.env.PORT || 3000;
export const host = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : `http://localhost:${port}`;

export const defaultLocale = 'en' as const;
export const locales = ['en', 'fr', 'il'] as const;

export const pathnames = {
    '/': '/',
    '/how_we_work': {
        en: '/how_we_work',
        fr: '/comment_on_travaille',
        il: '/נתיבים'
    },
    '/services': {
        en: '/services',
        fr: '/services',
        il: '/שירותים'
    },
    '/about_us': {
        en: '/about_us',
        fr: '/a_propos',
        il: '/אודות'
    },
} satisfies Pathnames<typeof locales>;

// Use the default: `always`
export const localePrefix = undefined;

export type AppPathnames = keyof typeof pathnames;