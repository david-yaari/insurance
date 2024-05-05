import {useTranslations} from 'next-intl';
import LocaleSwitcher from './LocaleSwitcher';
import NavigationLink from './NavigationLink';

export default function Navigation() {
  const t = useTranslations('Navigation');

  return (
    <nav className='flexBetween max-container padding-container relative z-30 py-5'>
      <div className='flex'>
        <NavigationLink href='/'>{t('home')}</NavigationLink>
        <NavigationLink href='/how_we_work'>{t('how_we_work')}</NavigationLink>
        <NavigationLink href='/services'>{t('services')}</NavigationLink>
        <NavigationLink href='/about_us'>{t('about_us')}</NavigationLink>
      </div>
      <LocaleSwitcher />
    </nav>
  );
}
