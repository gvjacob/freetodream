import cn from 'classnames';
import Image from 'next/image';

import Meta from '@components/Meta';
import RoundCTA from '@components/RoundCTA';
import { useLocaleTranslation } from '@utils/i18n';
import hanvoiceHero from '@img/hanvoice-hero.jpg';

function Topper() {
  const lt = useLocaleTranslation();

  return (
    <header
      className={cn(
        'flex flex-col-reverse px-4 mt-4',
        'sm:flex-row sm:items-center sm:justify-between sm:mt-20 sm:px-8 sm:space-x-10',
      )}
    >
      <div>
        <h1
          className={cn(
            'text-blue text-3xl mb-4 mt-4',
            'sm:text-4xl sm:mb-4',
            'lg:text-6xl lg:mb-8',
          )}
        >
          {lt('home.headline')}
        </h1>

        <p className="max-w-xs">{lt('home.introduction')}</p>

        <div className="flex mt-8 space-x-4">
          <RoundCTA className="text-sm w-1/2 sm:w-32" href="/apply">
            Apply
          </RoundCTA>

          <RoundCTA className="text-sm w-1/2 sm:w-32" href="/process">
            Learn More
          </RoundCTA>
        </div>
      </div>

      <Image
        className="rounded-md max-sm:w-full w-1/2"
        src={hanvoiceHero}
        alt="North-Korean father and son sit beside each other."
      />
    </header>
  );
}

export default function Home() {
  return (
    <div>
      <Meta title="Home | Hanvoice" />
      <Topper />
    </div>
  );
}
