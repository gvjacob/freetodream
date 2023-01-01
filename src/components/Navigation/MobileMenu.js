import Link from 'next/link';
import * as Dialog from '@radix-ui/react-dialog';

import SVG from '@components/SVG';
import { useLocaleTranslation } from '@utils/i18n';
import LocaleSwitch from './LocalSwitch';

export default function MobileMenu() {
  const lt = useLocaleTranslation();

  return (
    <Dialog.Portal>
      <Dialog.Overlay />
      <Dialog.Content className="absolute top-0 left-0 w-screen h-screen bg-blue flex flex-col justify-between">
        <Dialog.Title className="sr-only">Menu</Dialog.Title>

        <header className="hv-site-padding flex items-center justify-center py-2">
          <div className="flex-1 flex justify-end order-1">
            <Dialog.Close className="text-white text-sm">{lt('navigation.close')}</Dialog.Close>
          </div>

          <div className="shrink-0 flex-1">
            <LocaleSwitch />
          </div>

          <Link href="/">
            <SVG.HanvoiceLogo className="w-6" aria-hidden />
          </Link>
        </header>

        <ul>
          <li className="hv-site-padding">
            <Link className="block text-white text-4xl py-4" href="/about">
              {lt('navigation.about-hanvoice')}
            </Link>
          </li>

          <li className="hv-site-padding bg-[#2561F5]">
            <Link className="block text-white text-4xl py-4" href="/process">
              {lt('navigation.process')}
            </Link>
          </li>

          <li className="hv-site-padding bg-[#296AF6]">
            <Link className="block text-white text-4xl py-4" href="/life-in-canada">
              {lt('navigation.life-in-canada')}
            </Link>
          </li>
        </ul>
      </Dialog.Content>
    </Dialog.Portal>
  );
}
