import SVG from '@components/SVG';
import { useLocaleTranslation } from '@utils/i18n';
import Link from 'next/link';

export default function Footer() {
  const lt = useLocaleTranslation();

  return (
    <footer className="mt-auto bg-blue text-white">
      <div className="hv-site-padding mx-auto pt-10 pb-8 lg:pt-14 lg:pb-8 2xl:container">
        <div className="mx-auto mb-8 flex max-w-xl flex-col items-center gap-6">
          <h2 className="text-center text-3xl tracking-tight sm:text-4xl xl:text-6xl">
            {lt('footer.headline')}
          </h2>

          <a
            className="rounded-md bg-blue-dark p-4 transition-colors hocus:bg-white hocus:text-black max-lg:text-sm"
            href="https://hanvoice.ca"
          >
            {lt('footer.apply')}
          </a>
        </div>

        <div className="flex max-lg:flex-col lg:items-end lg:justify-between">
          <ul className="flex gap-2 print:hidden max-lg:mb-10 max-lg:flex-col lg:order-2 lg:gap-8">
            <li>
              <Link href="/about">{lt('navigation.about-hanvoice')}</Link>
            </li>
            <li>
              <Link href="/process">{lt('navigation.process')}</Link>
            </li>
            <li>
              <Link href="/life-in-canada">{lt('navigation.life-in-canada')}</Link>
            </li>
          </ul>

          <div className="flex-1 max-sm:gap-10 sm:gap-2 lg:order-1">
            <SVG.CanadaWordmark className="w-32" aria-hidden />
            <p className="mt-4 max-w-xs">{lt('footer.program-credits')}</p>
          </div>

          <div className="flex flex-1 lg:order-3 lg:justify-end">
            <p className="print:mt-6 max-lg:mt-8 lg:ml-auto">
              © {new Date().getFullYear()} HanVoice.ca
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
