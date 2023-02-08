import { useLocaleTranslation } from '@utils/i18n';
import Container from '@components/Container';

function SummarySection({ title, description }) {
  return (
    <div className="px-8 max-lg:py-8">
      <h3 className="mb-2 text-xl font-bold text-blue">{title}</h3>
      <p className="max-lg:text-sm">{description}</p>
    </div>
  );
}

export default function HomeProgramSummary() {
  const lt = useLocaleTranslation();

  return (
    <Container>
      <section
        className="rounded-lg border border-gray-300 bg-white"
        aria-label={lt('home.summary.heading')}
      >
        <h2 className="sr-only">{lt('home.summary.heading')}</h2>

        <div className="divide-gray-200 max-lg:divide-y-[1px] lg:grid lg:grid-cols-3 lg:divide-x-[1px] lg:py-8">
          <SummarySection
            title={lt('home.summary.about')}
            description={lt('home.summary.about-description')}
          />

          <SummarySection
            title={lt('home.summary.eligibility')}
            description={lt('home.summary.eligibility-description')}
          />

          <SummarySection
            title={lt('home.summary.process')}
            description={lt('home.summary.process-description')}
          />
        </div>
      </section>
    </Container>
  );
}
