import Image from 'next/image';
import cn from 'classnames';

import { useLocaleTranslation } from '@utils/i18n';
import Container from '@components/Container';
import APLogo from '@img/press/associated-press.png';
import CBCLogo from '@img/press/cbc.png';
import JoongAngLogo from '@img/press/joong-ang.png';
import GlobeAndMailLogo from '@img/press/the-globe-and-mail.png';
import TorontoStarLogo from '@img/press/toronto-star.png';
import YonhapLogo from '@img/press/yonhap.png';

function Logo({ src, alt, href, small, medium }) {
  return (
    <li>
      <a
        className="flex h-32 items-center justify-center transition-colors hocus:bg-gray-200 sm:h-48 xl:h-56"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          className={cn('w-3/5 grayscale', small && 'scale-75', medium && 'scale-90')}
          src={src}
          alt={alt}
        />
      </a>
    </li>
  );
}

export default function HomePress() {
  const lt = useLocaleTranslation();

  return (
    <section className="mt-20 mb-10" aria-label="As seen in">
      <Container>
        <h2 className="mb-8 text-center text-2xl font-bold">{lt('home.as-seen-in')}</h2>

        <ul className="grid grid-cols-3 divide-x-[1px] divide-gray-300 border-x border-x-gray-300 lg:grid-cols-6">
          <Logo
            src={APLogo}
            alt="Associated Press"
            href="https://apnews.com/article/canada-china-toronto-seoul-south-korea-bc7679693fc60196aebce2bbe3cda1c5"
            medium
          />

          <Logo
            src={CBCLogo}
            alt="CBC News"
            href="https://www.cbc.ca/news/canada/toronto/new-pilot-program-allows-canadians-to-privately-sponsor-north-korean-refugees-1.6228200"
            medium
          />

          <Logo
            src={JoongAngLogo}
            alt="Joong Ang"
            href="https://www.joongang.co.kr/article/25031617"
          />

          <Logo
            src={GlobeAndMailLogo}
            alt="The Globe and Mail"
            href="https://www.theglobeandmail.com/canada/article-canadian-citizens-will-be-able-to-sponsor-fleeing-north-koreans-for/"
            small
          />

          <Logo
            src={TorontoStarLogo}
            alt="Toronto Star"
            href="https://www.thestar.com/news/world/2021/10/26/canada-launches-pilot-program-to-accept-n-korean-refugees.html"
          />

          <Logo
            src={YonhapLogo}
            alt="Yonhap News"
            href="https://www.yna.co.kr/view/AKR20211026183700009"
          />
        </ul>
      </Container>
    </section>
  );
}
