import SVG from '@components/SVG';
import { useLocaleTranslation } from '@utils/i18n';
import Link from 'next/link';

export default function Footer() {
  const lt = useLocaleTranslation();

  return (
    <footer className="mt-auto bg-blue">
      <div className="hv-site-padding mx-auto 2xl:container">
        <div className="mx-auto flex max-w-xl flex-col items-center gap-6 py-14 text-white">
          <h2 className="text-center text-6xl tracking-tight">{lt('footer.headline')}</h2>

          <a
            className="rounded-md bg-blue-dark p-4 transition-colors hocus:bg-white hocus:text-black"
            href="https://hanvoice.ca"
          >
            {lt('footer.apply')}
          </a>
        </div>

        <div className="grid print:flex print:flex-col max-sm:grid-rows-2 max-sm:gap-10 sm:grid-cols-2 sm:gap-2">
          <div>
            <SVG.CanadaWordmark className="w-32" aria-hidden />
            <p className="mt-4 max-w-sm">{lt('footer.program-credits')}</p>
          </div>

          <ul className="space-y-2 print:hidden">
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
        </div>

        <p className="mt-10 print:mt-6">© 2022 HanVoice.ca</p>
      </div>
    </footer>
  );
}
