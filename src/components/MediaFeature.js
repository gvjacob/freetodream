import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import * as Dialog from '@radix-ui/react-dialog';

import { useLocaleTranslation } from '@utils/i18n';
import Container from '@components/Container';

export default function MediaFeature({
  className,
  title,
  description,
  primaryLink,
  secondaryLink,
  image,
  video,
  theme = 'dark',
}) {
  const lt = useLocaleTranslation();

  return (
    <Container
      className={cn(
        'relative flex flex-col-reverse md:flex-row md:items-center md:justify-between md:space-x-10',
        theme === 'dark' && 'text-white',
        className,
      )}
    >
      <div>
        <h1
          className={cn(
            'mb-4 mt-4 text-3xl',
            'sm:mb-4 sm:text-4xl',
            'lg:mb-8 lg:text-6xl lg:leading-[1.1] xl:leading-tight',
          )}
        >
          {title}
        </h1>

        <p className="max-w-sm text-lg">{description}</p>

        <div className="mt-8 flex items-center gap-4">
          {primaryLink && (
            <a
              className="rounded-md bg-blue-dark p-4 text-white transition-colors hocus:bg-white hocus:text-black"
              href={primaryLink.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {primaryLink.label}
            </a>
          )}

          {secondaryLink && (
            <Link
              className="text-white underline underline-offset-4 hocus:no-underline"
              href={secondaryLink.href}
            >
              {secondaryLink.label}
            </Link>
          )}
        </div>
      </div>

      <div className="w-1/2 flex-shrink-0 max-md:w-full">
        <Dialog.Root>
          <div className="relative w-full">
            <Image className="inline w-full rounded-md" src={image.src} alt={image.alt} />

            <Dialog.Trigger className="group absolute inset-0">
              <span className="sr-only">Watch video</span>

              <div className="absolute top-1/2 left-1/2 flex aspect-square w-[10%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-blue-100 text-white transition-colors group-hover:bg-blue-dark">
                <svg
                  className="h-1/2 w-1/2 translate-x-[2px] transition-transform group-hover:scale-110"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden
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

              {video}
              <Dialog.Close className="absolute rounded-md bg-white px-3 py-2 transition-colors hocus:bg-blue hocus:text-white max-lg:bottom-0 max-lg:left-1/2 max-lg:-translate-y-4 max-lg:-translate-x-1/2 lg:top-0 lg:right-0 lg:-translate-x-4 lg:translate-y-4">
                {lt('navigation.close')}
              </Dialog.Close>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </Container>
  );
}
