import SVG from '@components/SVG';
import { useLocaleTranslation } from '@utils/i18n';
import Link from 'next/link';

export default function Footer() {
  const lt = useLocaleTranslation();

  return (
    <footer className="hv-site-padding py-10 bg-white mt-10">
      <div className="grid max-sm:grid-rows-2 max-sm:gap-10 sm:grid-cols-2 sm:gap-2">
        <div>
          <SVG.CanadaWordmark className="w-32" aria-hidden />
          <p className="mt-4 max-w-sm">{lt('footer.program-credits')}</p>
        </div>

        <ul className="space-y-2">
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

      <p className="mt-10">© 2022 HanVoice.ca</p>
    </footer>
  );
}
