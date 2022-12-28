import SVG from '@components/SVG';
import { useLocaleTranslation } from '@utils/i18n';
import Link from 'next/link';

export default function Footer() {
  const lt = useLocaleTranslation();

  return (
    <footer className="hv-site-padding bg-white">
      <ul>
        <li>
          <Link href="/about">{lt('navigation.about-hanvoice')}</Link>
        </li>
        <li>
          <Link href="/process">{lt('navigation.process')}</Link>
        </li>
      </ul>

      <SVG.CanadaWordmark aria-hidden />

      <p>{lt('footer.program-credits')}</p>

      <p>© 2022 HanVoice.ca</p>
    </footer>
  );
}
