import Image from 'next/image';

import Meta from '@components/Meta';
import { useLocaleTranslation } from '@utils/i18n';
import hanvoiceHero from '@img/hanvoice-hero.jpg';

export default function Home() {
  const lt = useLocaleTranslation();

  return (
    <div>
      <Meta title="Home | Hanvoice" />
    </div>
  );
}
