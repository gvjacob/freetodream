import Link from 'next/link';

import useLocaleTranslation from '@utils/i18n';

export default function Navigation() {
  const lt = useLocaleTranslation();

  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/about">{lt('navigation.about-hanvoice')}</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
