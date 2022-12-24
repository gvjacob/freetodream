import Meta from '@components/Meta';
import { useLocaleTranslation } from '@utils/i18n';

export default function Home() {
  const lt = useLocaleTranslation();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Meta title="Home | Hanvoice" />

      <h1 className="text-6xl font-bold">Hanvoice</h1>
      <p>{lt('navigation.about-hanvoice')}</p>
    </div>
  );
}
