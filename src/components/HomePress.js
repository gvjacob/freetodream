import Image from 'next/image';

import Container from '@components/Container';
import APLogo from '@img/press/associated-press.png';
import CBCLogo from '@img/press/cbc.png';
import JoongAngLogo from '@img/press/joong-ang.png';
import GlobeAndMailLogo from '@img/press/the-globe-and-mail.png';
import TorontoStarLogo from '@img/press/toronto-star.png';
import YonhapLogo from '@img/press/yonhap.png';
import Link from 'next/link';

function Logo({ src, alt, href }) {
  return (
    <li>
      <Link className="flex h-72 items-center justify-center" href={href}>
        <Image className="grayscale" src={src} alt={alt} />
      </Link>
    </li>
  );
}

export default function HomePress() {
  return (
    <section className="my-10" aria-label="As seen in">
      <Container>
        <h2 className="sr-only">As seen in</h2>

        <ul className="grid grid-cols-5 divide-y-[1px] divide-x-[1px] divide-gray-200">
          <Logo
            src={APLogo}
            alt="Associated Press"
            href="https://apnews.com/article/canada-china-toronto-seoul-south-korea-bc7679693fc60196aebce2bbe3cda1c5"
          />

          <Logo
            src={CBCLogo}
            alt="CBC News"
            href="https://www.cbc.ca/news/canada/toronto/new-pilot-program-allows-canadians-to-privately-sponsor-north-korean-refugees-1.6228200"
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
