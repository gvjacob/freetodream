import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

import { useLocaleTranslation } from '@utils/i18n';
import Container from '@components/Container';
import hanvoiceHero from '@img/hanvoice-hero.jpg';

export default function HomeTopper() {
  const lt = useLocaleTranslation();

  return (
    <header className="bg-blue">
      <Container className="flex flex-col-reverse pt-48 pb-8 md:flex-row md:items-end md:justify-between md:space-x-10">
        <div>
          <h1
            className={cn(
              'mb-4 mt-4 text-3xl text-white',
              'sm:mb-4 sm:text-4xl',
              'lg:mb-8 lg:text-6xl',
            )}
          >
            {lt('home.headline')}
          </h1>

          <p className="max-w-xs text-white">{lt('home.introduction')}</p>

          <div className="mt-8 flex items-center gap-4">
            <a
              className="rounded-md bg-blue-dark p-4 text-white transition-colors hocus:bg-white hocus:text-black"
              href="/apply"
              target="_blank"
              rel="noopener noreferrer"
            >
              {lt('home.apply')}
            </a>

            <Link className="text-white underline underline-offset-4" href="/process">
              {lt('home.learn-more')}
            </Link>
          </div>
        </div>

        <div className="w-1/2 flex-shrink-0 max-md:w-full">
          <Image
            className="w-full rounded-md"
            src={hanvoiceHero}
            alt="North-Korean father and son sit beside each other."
          />
        </div>
      </Container>
    </header>
  );
}
