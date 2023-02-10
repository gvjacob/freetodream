import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import * as Dialog from '@radix-ui/react-dialog';

import { useLocaleTranslation } from '@utils/i18n';
import Container from '@components/Container';
import hanvoiceHero from '@img/hanvoice-hero.jpg';

export default function HomeTopper() {
  const lt = useLocaleTranslation();

  return (
    <header className="relative">
      <div className="absolute inset-0 -z-10 h-[110%] bg-blue" />

      <Container className="relative flex flex-col-reverse pt-32 pb-8 sm:pt-40 md:flex-row md:items-end md:justify-between md:space-x-10 lg:pt-48">
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

          <p className="max-w-sm text-lg text-white">{lt('home.introduction')}</p>

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
          <Dialog.Root>
            <Dialog.Trigger>
              <Image
                className="w-full rounded-md"
                src={hanvoiceHero}
                alt="North-Korean father and son sit beside each other."
              />
            </Dialog.Trigger>

            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 z-50 bg-black opacity-80" />
              <Dialog.Content className="fixed inset-0 z-50 flex items-center justify-center">
                <Dialog.Title className="sr-only">{lt('home.youtube-video-title')}</Dialog.Title>
                <iframe
                  className="max-lg:p-10 lg:h-1/2 lg:w-1/2"
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/urP4kvbsXQ0?&autoplay=1"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                />
                <Dialog.Close className="absolute rounded-md bg-white px-3 py-2 transition-colors hocus:bg-blue hocus:text-white max-lg:bottom-0 max-lg:left-1/2 max-lg:-translate-y-4 max-lg:-translate-x-1/2 lg:top-0 lg:right-0 lg:-translate-x-4 lg:translate-y-4">
                  Close
                </Dialog.Close>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </Container>
    </header>
  );
}
