import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import * as Dialog from '@radix-ui/react-dialog';

import { useLocaleTranslation } from '@utils/i18n';
import hanvoiceLogo from '@img/hanvoice-logo.png';
import LocaleSwitch from './LocaleSwitch';
import MobileMenu from './MobileMenu';

function NavigationLink({ href, children }) {
  return (
    <Link className="text-white" href={href}>
      {children}
    </Link>
  );
}

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const lt = useLocaleTranslation();

  return (
    <React.Fragment>
      <header className="print:hidden hv-site-padding py-2 sm:py-4 flex items-center max-sm:justify-center bg-blue">
        <div className="shrink-0 max-sm:flex-1 sm:order-1 ">
          <LocaleSwitch />
        </div>

        <nav className="flex justify-between items-center sm:w-full sm:mr-10">
          <Link href="/">
            <span className="sr-only">{lt('navigation.home')}</span>
            <Image className="max-sm:w-6 w-8" src={hanvoiceLogo} alt="" />
          </Link>

          <ul className="max-sm:hidden flex space-x-10">
            <li>
              <NavigationLink href="/about">{lt('navigation.about-hanvoice')}</NavigationLink>
            </li>

            <li>
              <NavigationLink href="/process">{lt('navigation.process')}</NavigationLink>
            </li>

            <li>
              <NavigationLink href="/life-in-canada">
                {lt('navigation.life-in-canada')}
              </NavigationLink>
            </li>
          </ul>
        </nav>

        <div className="max-sm:flex-1 max-sm:flex max-sm:justify-end sm:hidden">
          <Dialog.Root open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <Dialog.Trigger className="text-white text-sm">{lt('navigation.menu')}</Dialog.Trigger>
            <MobileMenu onClose={() => setIsMobileMenuOpen(false)} />
          </Dialog.Root>
        </div>
      </header>
    </React.Fragment>
  );
}
