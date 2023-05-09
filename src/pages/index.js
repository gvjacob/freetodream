import Meta from '@components/Meta';
import HomeTopper from '@components/HomeTopper';
import HomeProgramSummary from '@components/HomeProgramSummary';
import HomePress from '@components/HomePress';
import { useLocaleTranslation } from '@utils/i18n';

export default function Home() {
  const lt = useLocaleTranslation();

  return (
    <>
      <Meta title={`${lt('navigation.home')} — Free to Dream`} />
      <HomeTopper />
      <HomeProgramSummary />
    </>
  );
}
