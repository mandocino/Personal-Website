import Head from 'next/head';
import Footer from '../src/components/Footer';
import { ProjectGrid } from '../src/components/Portfolio';
import useScrollReveal from '../src/hooks/useScrollReveal';
import { FEATURED_PROJECTS, SUPPORTING_PROJECTS } from '../src/data/projects';

export default function FullPortfolio() {
  useScrollReveal();

  return (
    <div className="app theme-dark">
      <Head>
        <title>Full Portfolio | Armando Mancino</title>
        <meta
          name="description"
          content="Full portfolio of software projects by Armando Mancino."
        />
      </Head>

      <main className="portfolio-page">
        <section className="section">
          <div className="container">
            <div className="section-head reveal">
              <span className="section-eyebrow">Full Portfolio</span>
              <h1 className="section-title">Project Archive</h1>
              <p className="section-subtitle">
                A broader view of the tools, experiments, and shipped projects
                I have built across finance, crypto, automation, and web apps.
              </p>
            </div>

            <ProjectGrid projects={FEATURED_PROJECTS} variant="featured" />

            <div className="section-head section-head-secondary reveal">
              <span className="section-eyebrow">Additional Work</span>
              <h2 className="section-title">More Projects</h2>
              <p className="section-subtitle">
                Supporting builds, experiments, and shipped tools across
                automation, data, crypto, games, and web apps.
              </p>
            </div>

            <ProjectGrid
              projects={SUPPORTING_PROJECTS}
              variant="supporting"
              compact
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
