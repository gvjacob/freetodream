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

        <div className="flex items-end justify-between">
          <div className="flex-1 max-sm:gap-10 sm:gap-2">
            <SVG.CanadaWordmark className="w-32" aria-hidden />
            <p className="mt-4 max-w-sm">{lt('footer.program-credits')}</p>
          </div>

          <ul className="flex gap-8 print:hidden">
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

          <div className="flex flex-1 justify-end">
            <p className="mt-10 ml-auto print:mt-6">© 2022 HanVoice.ca</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
