import { useLocaleTranslation } from '@utils/i18n';
import MediaFeature from '@components/MediaFeature';
import hanvoiceHero from '@img/hanvoice-hero.jpg';

export default function HomeTopper() {
  const lt = useLocaleTranslation();

  return (
    <header className="relative">
      <div className="absolute inset-0 -z-10 h-[110%] bg-blue" />

      <MediaFeature
        title={lt('home.headline')}
        description={lt('home.introduction')}
        primaryLink={{
          label: lt('home.apply'),
          href: lt('navigation.apply-form'),
        }}
        secondaryLink={{
          label: lt('home.learn-more'),
          href: '/process',
        }}
        image={{
          src: hanvoiceHero,
          alt: 'Sam, North Korean man in white t-shirt, looks out in the distance.',
        }}
        video={
          <iframe
            className="max-lg:p-10 lg:h-1/2 lg:w-1/2"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/urP4kvbsXQ0?&autoplay=1"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          />
        }
      />
    </header>
  );
}
