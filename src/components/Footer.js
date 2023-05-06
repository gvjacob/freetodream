import Link from 'next/link';

import SVG from '@components/SVG';
import Container from '@components/Container';
import { useLocaleTranslation } from '@utils/i18n';

export default function Footer() {
  const lt = useLocaleTranslation();

  return (
    <footer className="mt-auto bg-blue text-white print:hidden">
      <Container className="pt-10 pb-8 lg:pt-14 lg:pb-8">
        <div className="mx-auto mb-10 flex max-w-xl flex-col items-center gap-6 xl:mb-32">
          <h2 className="text-center text-3xl tracking-tight sm:text-4xl lg:leading-tight xl:text-6xl">
            {lt('footer.headline')}
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <a
              className="rounded-md bg-blue-dark p-4 transition-colors hocus:bg-white hocus:text-black max-lg:text-sm"
              href={lt('navigation.apply-form')}
              target="_blank"
              rel="noopener noreferrer"
            >
              {lt('footer.apply')}
            </a>

            <a
              className="underline underline-offset-4 hocus:no-underline max-lg:text-sm"
              href={lt('footer.newsletter')}
              target="_blank"
              rel="noopener noreferrer"
            >
              {lt('footer.newsletter-sign-up')}
            </a>
          </div>
        </div>

        <div className="flex max-lg:flex-col lg:items-end lg:justify-between">
          <ul className="flex gap-2 print:hidden max-lg:mb-10 max-lg:flex-col lg:order-2 lg:gap-8">
            <li>
              <Link className="underline-offset-4 hocus:underline" href="/about">
                {lt('navigation.about-hanvoice')}
              </Link>
            </li>
            <li>
              <Link className="underline-offset-4 hocus:underline" href="/process">
                {lt('navigation.process')}
              </Link>
            </li>
            <li>
              <Link className="underline-offset-4 hocus:underline" href="/life-in-canada">
                {lt('navigation.life-in-canada')}
              </Link>
            </li>
          </ul>

          <div className="flex-1 max-sm:gap-10 sm:gap-2 lg:order-1">
            <SVG.CanadaWordmark className="w-32" aria-hidden />
            <p className="mt-4 max-w-xs">{lt('footer.program-credits')}</p>
            <a className="mt-1 block underline" href="mailto:refugee@hanvoice.ca">
              {lt('footer.contact')}
            </a>
          </div>

          <div className="flex flex-1 flex-col gap-1 max-lg:mt-8 lg:order-3 lg:justify-end">
            <a
              className="flex gap-2 underline-offset-4 hocus:underline lg:ml-auto"
              href={lt('footer.program-pdf')}
              target="_blank"
              rel="noopener noreferrer"
            >
              <SVG.PrintIcon className="w-5 fill-white" aria-hidden />
              {lt('footer.print')}
            </a>

            <a
              className="underline-offset-4 hocus:underline lg:ml-auto"
              href="https://hanvoice.ca/"
              target="_blank"
              rel="noopener noreferrer"
            >
              © HanVoice {new Date().getFullYear()}
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
