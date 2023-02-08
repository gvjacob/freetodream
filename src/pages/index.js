import cn from 'classnames';
import Image from 'next/image';

import Meta from '@components/Meta';
import Container from '@components/Container';
import RoundCTA from '@components/RoundCTA';
import { useLocaleTranslation } from '@utils/i18n';
import hanvoiceHero from '@img/hanvoice-hero.jpg';

function Topper() {
  const lt = useLocaleTranslation();

  return (
    <header className="mt-4 flex flex-col-reverse sm:mt-20 sm:flex-row sm:items-center sm:justify-between sm:space-x-10">
      <div>
        <h1
          className={cn(
            'mb-4 mt-4 text-3xl text-blue',
            'sm:mb-4 sm:text-4xl',
            'lg:mb-8 lg:text-6xl',
          )}
        >
          {lt('home.headline')}
        </h1>

        <p className="max-w-xs">{lt('home.introduction')}</p>

        <div className="mt-8 flex space-x-4">
          <RoundCTA className="w-1/2 text-sm sm:w-32" href="/apply" variant="primary">
            {lt('home.apply')}
          </RoundCTA>

          <RoundCTA className="w-1/2 text-sm sm:w-32" href="/process">
            {lt('home.learn-more')}
          </RoundCTA>
        </div>
      </div>

      <div className="w-1/2 flex-shrink-0 max-sm:w-full">
        <Image
          className="w-full rounded-md"
          src={hanvoiceHero}
          alt="North-Korean father and son sit beside each other."
        />
      </div>
    </header>
  );
}

export default function Home() {
  const lt = useLocaleTranslation();

  return (
    <Container>
      <Meta title={`${lt('navigation.home')} — Free to Dream`} />
      <Topper />
    </Container>
  );
}
