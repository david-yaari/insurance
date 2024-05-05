import '../../app/globals.css';
import Navigation from '@/components/Navigation';
import {getTranslations, unstable_setRequestLocale} from 'next-intl/server';
import {locales} from '@/config';
import {ReactNode} from 'react';
import Footer from '@/components/Footer';

type Props = {
  children: ReactNode;
  params: {locale: string};
};

export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

export async function generateMetadata({
  params: {locale},
}: Omit<Props, 'children'>) {
  const t = await getTranslations({locale, namespace: 'LocaleLayout'});

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default function LocaleLayout({children, params: {locale}}: Props) {
  return (
    <html lang={locale}>
      <body>
        <Navigation />
        <main className='relative overflow-hidden'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
