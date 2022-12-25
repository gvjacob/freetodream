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
        'text-xs sm:text-sm bg-white py-1 px-2 rounded-sm transition',
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
    <header className="flex items-center max-sm:justify-center px-4 py-2 sm:px-8 sm:py-4 bg-blue">
      <div className="shrink-0 max-sm:flex-1 sm:order-1 ">
        <LocaleSwitch />
      </div>

      <nav className="flex justify-between items-center sm:w-full sm:mr-10">
        <Link href="/">
          <SVG.HanvoiceLogo className="max-sm:w-6 w-8" aria-hidden />
        </Link>

        <ul className="max-sm:hidden flex space-x-10">
          <li>
            <NavigationLink href="/about">{lt('navigation.about-hanvoice')}</NavigationLink>
          </li>

          <li>
            <NavigationLink href="/process">{lt('navigation.process')}</NavigationLink>
          </li>
        </ul>
      </nav>

      <div className="max-sm:flex-1 max-sm:flex max-sm:justify-end sm:hidden">
        <button className="text-white text-sm">{lt('navigation.menu')}</button>
      </div>
    </header>
  );
}
