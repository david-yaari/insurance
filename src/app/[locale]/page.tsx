import Hero from '@/components/Hero';
import Services from '@/components/Services';
import {useTranslations} from 'next-intl';

export default function Index() {
  const t = useTranslations('IndexPage');

  return (
    <>
      <Hero />
      <Services />
    </>
  );
}
