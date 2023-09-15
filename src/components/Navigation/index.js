import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import * as Dialog from '@radix-ui/react-dialog';

import { useLocaleTranslation } from '@utils/i18n';
import Container from '@components/Container';
import hanvoiceLogo from '@img/hanvoice-logo.png';
import MobileMenu from './MobileMenu';

function NavigationLink({ href, children }) {
  return (
    <Link className="text-white underline-offset-4 hocus:underline" href={href}>
      {children}
    </Link>
  );
}

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const lt = useLocaleTranslation();

  return (
    <React.Fragment>
      <header className="absolute top-0 z-10 w-full print:hidden">
        <Container className="flex items-center gap-4 py-4 max-lg:justify-center">
          {/* 
            <div className="flex-1 md:hidden">
              <LocaleSwitch className="" />
            </div>
          */}

          <Link href="/">
            <span className="sr-only">{lt('navigation.home')}</span>
            <Image className="w-8 max-sm:w-6 lg:w-10" src={hanvoiceLogo} alt="" />
          </Link>

          <nav className="flex w-full flex-1 flex-col items-end max-md:hidden">
            {/* <LocaleSwitch className="pb-2 max-md:hidden" /> */}

            <ul className="flex w-full items-center justify-end pt-4 max-sm:hidden">
              <li className="mx-5">
                <NavigationLink href="/about">{lt('navigation.about-hanvoice')}</NavigationLink>
              </li>

              <li className="mx-5">
                <NavigationLink href="/process">{lt('navigation.process')}</NavigationLink>
              </li>

              <li className="mx-5">
                <NavigationLink href="/life-in-canada">
                  {lt('navigation.life-in-canada')}
                </NavigationLink>
              </li>

              <li className="mx-5">
                <NavigationLink href="/faqs">{lt('navigation.faqs')}</NavigationLink>
              </li>

              <li className="mx-5">
                <a
                  className="text-white underline-offset-4 hocus:underline"
                  href="http://pf.kakao.com/_DxfZYxj/chat"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {lt('navigation.kakao-link')}
                </a>
              </li>

              <li className="mx-5">
                <div data-tf-live="01H8QM0Q8G3158ER5MBA42TCQ3"></div>
              </li>
            </ul>
          </nav>

          <div className="flex flex-1 justify-end md:hidden">
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
