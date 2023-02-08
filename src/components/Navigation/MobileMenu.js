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
      <Dialog.Content className="absolute top-0 left-0 z-50 flex h-full w-full flex-col justify-between bg-blue">
        <Dialog.Title className="sr-only">Menu</Dialog.Title>

        <header className="hv-site-padding flex items-center justify-center py-4">
          <div className="order-1 flex flex-1 justify-end">
            <Dialog.Close className="text-sm text-white">{lt('navigation.close')}</Dialog.Close>
          </div>
          <div className="flex-1 shrink-0">
            <LocaleSwitch />
          </div>
          <Link href="/">
            <Image className="w-8 max-sm:w-6" src={hanvoiceLogo} alt="" />
          </Link>
        </header>

        <ul>
          <li>
            <Link
              className="hv-site-padding block py-8 text-4xl text-white"
              href="/about"
              onClick={onClose}
            >
              {lt('navigation.about-hanvoice')}
            </Link>
          </li>

          <li>
            <Link
              className="hv-site-padding block bg-blue-400 py-8 text-4xl text-white"
              href="/process"
              onClick={onClose}
            >
              {lt('navigation.process')}
            </Link>
          </li>

          <li>
            <Link
              className="hv-site-padding block bg-blue-300 py-8 text-4xl text-white"
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
