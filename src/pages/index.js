import Meta from '@components/Meta';
import HomeTopper from '@components/HomeTopper';
import HomeProgramSummary from '@components/HomeProgramSummary';
import MediaFeature from '@components/MediaFeature';
import { useLocaleTranslation } from '@utils/i18n';

import pressCover from '@img/press-cover.png';

export default function Home() {
  const lt = useLocaleTranslation();

  return (
    <>
      <Meta title={`${lt('navigation.home')} — Free to Dream`} />
      <HomeTopper />
      <HomeProgramSummary />
      <MediaFeature
        className="py-12"
        title="코로나19가 잦아들면 캐나다도 북한 난민들이 평생 정착할 수 있는 터전이 되길 기대합니다."
        description="한보이스는 캐나다 정부와 북한 난민만을 위한 별도의 협약을 맺어 2021년 마침내 캐나다도 공식적으로 북한 난민을 수용하게 되었습니다."
        primaryLink={{
          label: '중앙일보 기사 읽기',
          href: 'https://www.joongang.co.kr/article/25031617#home',
        }}
        image={{
          src: pressCover,
          alt: '',
        }}
        video={
          <iframe
            className="max-lg:p-10 lg:h-1/2 lg:w-1/2"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/_OLwGk95ZpA"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          />
        }
        theme="light"
      />
    </>
  );
}
