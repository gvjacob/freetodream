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
            <div className="relative w-full">
              <Image
                className="inline w-full rounded-md"
                src={hanvoiceHero}
                alt="Sam, North Korean man in white t-shirt, looks out in the distance."
              />
              <Dialog.Trigger className="group absolute inset-0">
                <span className="sr-only">Listen to Sam's refugee story</span>

                <div className="absolute bottom-0 right-0 flex aspect-square w-[10%] -translate-x-4 -translate-y-4 items-center justify-center rounded-full bg-blue text-white transition-colors group-hover:bg-blue-dark">
                  <svg
                    className="h-1/2 w-1/2 translate-x-[2px] transition-transform group-hover:scale-110"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </Dialog.Trigger>
            </div>

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
                  {lt('navigation.close')}
                </Dialog.Close>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </Container>
    </header>
  );
}
