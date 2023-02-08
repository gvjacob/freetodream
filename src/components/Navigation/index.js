import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import * as Dialog from '@radix-ui/react-dialog';

import { useLocaleTranslation } from '@utils/i18n';
import Container from '@components/Container';
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
      <header className="bg-blue print:hidden">
        <Container className="flex items-center gap-4 py-2 max-sm:justify-center sm:py-4">
          <Link href="/">
            <span className="sr-only">{lt('navigation.home')}</span>
            <Image className="w-10 max-sm:w-6" src={hanvoiceLogo} alt="" />
          </Link>

          <nav className="flex w-full flex-1 flex-col items-end divide-y-[1px] divide-blue-100">
            <LocaleSwitch className="pb-2" />

            <ul className="flex w-full justify-end space-x-10 pt-4 max-sm:hidden">
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

              <li>
                <a
                  className="rounded bg-white px-3 py-2 text-sm text-black transition-colors hocus:bg-blue-dark hocus:text-white"
                  href={lt('navigation.apply-form')}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {lt('navigation.apply')}
                </a>
              </li>
            </ul>
          </nav>

          <div className="max-sm:flex max-sm:flex-1 max-sm:justify-end sm:hidden">
            <Dialog.Root open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <Dialog.Trigger className="text-sm text-white">
                {lt('navigation.menu')}
              </Dialog.Trigger>
              <MobileMenu onClose={() => setIsMobileMenuOpen(false)} />
            </Dialog.Root>
          </div>
        </Container>
      </header>
    </React.Fragment>
  );
}
