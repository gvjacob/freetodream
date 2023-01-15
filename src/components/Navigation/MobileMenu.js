import Link from 'next/link';
import Image from 'next/image';
import * as Dialog from '@radix-ui/react-dialog';

import { useLocaleTranslation } from '@utils/i18n';
import hanvoiceLogo from '@img/hanvoice-logo.png';
import LocaleSwitch from './LocaleSwitch';

export default function MobileMenu({ onClose }) {
  const lt = useLocaleTranslation();

  return (
    <Dialog.Portal>
      <Dialog.Overlay />
      <Dialog.Content className="absolute top-0 left-0 w-full h-full bg-blue flex flex-col justify-between">
        <Dialog.Title className="sr-only">Menu</Dialog.Title>

        <header className="hv-site-padding flex items-center justify-center py-2">
          <div className="flex-1 flex justify-end order-1">
            <Dialog.Close className="text-white text-sm">{lt('navigation.close')}</Dialog.Close>
          </div>

          <div className="shrink-0 flex-1">
            <LocaleSwitch />
          </div>

          <Link href="/">
            <Image className="max-sm:w-6 w-8" src={hanvoiceLogo} alt="" />
          </Link>
        </header>

        <ul>
          <li>
            <Link
              className="hv-site-padding block text-white text-4xl py-8"
              href="/about"
              onClick={onClose}
            >
              {lt('navigation.about-hanvoice')}
            </Link>
          </li>

          <li>
            <Link
              className="hv-site-padding bg-blue-400 block text-white text-4xl py-8"
              href="/process"
              onClick={onClose}
            >
              {lt('navigation.process')}
            </Link>
          </li>

          <li>
            <Link
              className="hv-site-padding bg-blue-300 block text-white text-4xl py-8"
              href="/life-in-canada"
              onClick={onClose}
            >
              {lt('navigation.life-in-canada')}
            </Link>
          </li>
        </ul>
      </Dialog.Content>
    </Dialog.Portal>
  );
}
