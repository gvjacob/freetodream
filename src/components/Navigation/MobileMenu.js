import Link from 'next/link';

import SVG from '@components/SVG';
import { useLocaleTranslation } from '@utils/i18n';
import LocaleSwitch from './LocalSwitch';

export default function MobileMenu() {
  const lt = useLocaleTranslation();

  return (
    <div className="flex items-center max-sm:justify-center px-4 py-2 sm:px-8 sm:py-4 bg-blue">
      <div className="shrink-0 max-sm:flex-1 sm:order-1 ">
        <LocaleSwitch />
      </div>

      <Link href="/">
        <SVG.HanvoiceLogo className="max-sm:w-6 w-8" aria-hidden />
      </Link>

      <div className="max-sm:flex-1 max-sm:flex max-sm:justify-end sm:hidden">
        <button className="text-white text-sm">{lt('navigation.menu')}</button>
      </div>
    </div>
  );
}
