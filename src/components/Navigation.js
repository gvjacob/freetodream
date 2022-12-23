import useLocaleTranslation from 'i18n';

import Link from 'next/link';

export default function Navigation() {
  const lt = useLocaleTranslation();

  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link>{lt('navigation.about-hanvoice')}</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
