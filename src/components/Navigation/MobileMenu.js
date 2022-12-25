import Link from 'next/link';
import * as Dialog from '@radix-ui/react-dialog';

import SVG from '@components/SVG';
import { useLocaleTranslation } from '@utils/i18n';
import LocaleSwitch from './LocalSwitch';

export default function MobileMenu() {
  const lt = useLocaleTranslation();

  return (
    <Dialog.Content className="absolute top-0 left-0 w-screen h-screen bg-blue flex flex-col justify-between">
      <Dialog.Title className="sr-only">Menu</Dialog.Title>

      <header className="flex items-center max-sm:justify-center px-4 py-2 sm:px-8 sm:py-4">
        <div className="shrink-0 max-sm:flex-1 sm:order-1 ">
          <LocaleSwitch />
        </div>

        <Link href="/">
          <SVG.HanvoiceLogo className="max-sm:w-6 w-8" aria-hidden />
        </Link>

        <div className="max-sm:flex-1 max-sm:flex max-sm:justify-end sm:hidden">
          <Dialog.Close className="text-white text-sm">{lt('navigation.close')}</Dialog.Close>
        </div>
      </header>

      <ul className="px-4 pb-8">
        <li>
          <Link
            className="block text-white text-4xl py-4 border-b-[1px] border-white"
            href="/about"
          >
            {lt('navigation.about-hanvoice')}
          </Link>
        </li>

        <li>
          <Link
            className="block text-white text-4xl py-4 border-b-[1px] border-white"
            href="/process"
          >
            {lt('navigation.process')}
          </Link>
        </li>
      </ul>
    </Dialog.Content>
  );
}
