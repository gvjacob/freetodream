import React from 'react';
import Link from 'next/link';
import * as Dialog from '@radix-ui/react-dialog';

import SVG from '@components/SVG';
import { useLocaleTranslation } from '@utils/i18n';
import MobileMenu from './MobileMenu';
import LocaleSwitch from './LocalSwitch';

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
    <React.Fragment>
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
          <Dialog.Root>
            <Dialog.Trigger className="text-white text-sm">{lt('navigation.menu')}</Dialog.Trigger>

            <Dialog.Portal>
              <MobileMenu />
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </header>
    </React.Fragment>
  );
}
