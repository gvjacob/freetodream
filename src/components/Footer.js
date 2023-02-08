import SVG from '@components/SVG';
import { useLocaleTranslation } from '@utils/i18n';
import Link from 'next/link';

export default function Footer() {
  const lt = useLocaleTranslation();

  return (
    <footer className="bg-blue text-white pt-10 print:pt-0 mt-auto">
      <div className="hv-site-padding py-10 2xl:container mx-auto">
        <h2 className="text-6xl text-center max-w-xl mx-auto tracking-tight">
          {lt('footer.headline')}
        </h2>

        <div className="grid max-sm:grid-rows-2 max-sm:gap-10 sm:grid-cols-2 sm:gap-2 print:flex print:flex-col">
          <div>
            <SVG.CanadaWordmark className="w-32" aria-hidden />
            <p className="mt-4 max-w-sm">{lt('footer.program-credits')}</p>
          </div>

          <ul className="print:hidden space-y-2">
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

        <p className="print:mt-6 mt-10">© 2022 HanVoice.ca</p>
      </div>
    </footer>
  );
}
