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
        'hv-site-padding flex flex-col-reverse mt-4',
        'sm:flex-row sm:items-center sm:justify-between sm:mt-20 sm:space-x-10',
      )}
    >
      <div>
        <h1
          className={cn(
            'text-blue text-3xl mb-4 mt-4 font-semibold',
            'sm:text-4xl sm:mb-4',
            'lg:text-6xl lg:mb-8',
          )}
        >
          {lt('home.headline')}
        </h1>

        <p className="max-w-xs">{lt('home.introduction')}</p>

        <div className="flex mt-8 space-x-4">
          <RoundCTA className="text-sm w-1/2 sm:w-32" href="/apply" variant="primary">
            {lt('home.apply')}
          </RoundCTA>

          <RoundCTA className="text-sm w-1/2 sm:w-32" href="/process">
            {lt('home.learn-more')}
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

function ProgramCard() {
  const lt = useLocaleTranslation();

  return (
    <section className="hv-site-padding mt-14 sm:mt-20">
      <div className="bg-blue-100 rounded-md p-6 sm:p-10">
        <h2 className="text-white text-3xl sm:text-4xl mb-4 font-semibold">
          {lt('home.the-program')}
        </h2>

        <p className="text-white max-w-2xl">{lt('home.program-description')}</p>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div>
      <Meta title="Home | Hanvoice" />
      <Topper />
      <ProgramCard />
    </div>
  );
}
