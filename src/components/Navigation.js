import cn from 'classnames';
import { useRouter } from 'next/router';
import Link from 'next/link';

import SVG from '@components/SVG';
import { useLocaleTranslation, useLocaleSwitch } from '@utils/i18n';

function LocaleSwitch({ className, ...rest }) {
  const router = useRouter();
  const lt = useLocaleTranslation();
  const localeSwitch = useLocaleSwitch();

  return (
    <button
      className={cn(
        'bg-white py-1 px-2 rounded-sm transition',
        'hocus:bg-blue-dark hocus:text-white',
        className,
      )}
      onClick={() => localeSwitch(router.locale === 'en' ? 'ko' : 'en')}
      {...rest}
    >
      {lt('navigation.locale-switch')}
    </button>
  );
}

function NavigationLink({ href, children }) {
  return (
    <Link className="text-white" href={href}>
      {children}
    </Link>
  );
}

export default function Navigation() {
  const lt = useLocaleTranslation();

  return (
    <header className="flex items-center px-8 py-4 bg-blue">
      <nav className="flex justify-between items-center w-full mr-10">
        <SVG.HanvoiceLogo className="w-8" />

        <ul className="flex space-x-10">
          <li>
            <NavigationLink href="/about">{lt('navigation.about-hanvoice')}</NavigationLink>
          </li>

          <li>
            <NavigationLink href="/process">{lt('navigation.process')}</NavigationLink>
          </li>
        </ul>
      </nav>

      <LocaleSwitch className="shrink-0" />
    </header>
  );
}
