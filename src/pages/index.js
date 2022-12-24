import Image from 'next/image';

import Meta from '@components/Meta';
import { useLocaleTranslation } from '@utils/i18n';
import hanvoiceHero from '@img/hanvoice-hero.jpg';

export default function Home() {
  const lt = useLocaleTranslation();

  return (
    <div>
      <Meta title="Home | Hanvoice" />

      <header className="flex items-center justify-between mt-20 px-8 space-x-10">
        <div>
          <h1 className="text-6xl text-blue mb-8">{lt('home.headline')}</h1>
          <p className="max-w-xs">{lt('home.introduction')}</p>
        </div>

        <Image
          className="rounded-md w-1/2"
          src={hanvoiceHero}
          alt="North-Korean father and son sit beside each other."
        />
      </header>
    </div>
  );
}
