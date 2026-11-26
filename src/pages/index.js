import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap'}}>
          <div style={{textAlign: 'left', flex: '1', minWidth: '280px'}}>
            <Heading as="h1" className="hero__title">
              {siteConfig.title}
            </Heading>
            <p className="hero__subtitle">{siteConfig.tagline}</p>
            <div className={styles.buttons}>
              <Link
                className="button button--secondary button--lg"
                to="/docs">
                Get Started →
              </Link>
            </div>
          </div>
          <div style={{flexShrink: 0}}>
            <img src="/img/pts-logo-circle.svg" alt="PiRogue Tool Suite logo" style={{width: '200px', height: '200px', objectFit: 'contain'}} />
          </div>
        </div>
      </div>
    </header>
  );
}

const iconProps = {
  width: 16,
  height: 16,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
};

function RocketIcon() {
  return (
    <svg {...iconProps}>
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
}

function BookIcon() {
  return (
    <svg {...iconProps}>
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  );
}

function ToolCard({title, description, href, startHref, logo}) {
  return (
    <div className={styles.toolCardWrapper}>
      <div className={clsx('card', styles.toolCard)}>
        <div className="card__header" style={{display: 'flex', alignItems: 'center', gap: '0.75rem'}}>
          <img src={logo} alt={title + ' logo'} style={{width: '2.5rem', height: '2.5rem', objectFit: 'contain'}} />
          <Heading as="h3" style={{margin: 0}}>
            <Link to={href}>{title}</Link>
          </Heading>
        </div>
        <div className="card__body">
          <p>{description}</p>
        </div>
        <div className={clsx('card__footer', styles.toolCardButtons)}>
          <Link className={clsx('button button--primary button--sm', styles.toolButton)} to={startHref}>
            <RocketIcon />
            Get started
          </Link>
          <Link className={clsx('button button--outline button--primary button--sm', styles.toolButton)} to={href}>
            <BookIcon />
            View docs
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="PiRogue Tool Suite is an open-source digital forensics and network traffic analysis platform for civil society organizations.">
      <HomepageHeader />
      <main>
        <section className={styles.toolsSection}>
          <div className="container">
            <div className={styles.toolGrid}>
              <ToolCard
                title="PiRogue"
                description="Network router for capturing and analysing mobile device traffic in real-time."
                href="/docs/explanation/pirogue/what-is-a-pirogue"
                startHref="/docs/tutorials/pirogue-on-a-raspberry-pi"
                logo="/img/logos/pirogue.svg"
              />
              <ToolCard
                title="Colander"
                description="Case and digital investigation platform to manage evidence, knowledge, and team collaboration."
                href="/docs/explanation/colander/what-is-colander"
                startHref="/docs/tutorials/colander-on-your-computer"
                logo="/img/logos/colander.svg"
              />
              <ToolCard
                title="Threatr"
                description="Threat intelligence platform powering Colander's external source lookups via VirusTotal, OTX, and more."
                href="/docs/explanation/threatr/what-is-threatr"
                startHref="/docs/tutorials/threatr-on-your-computer"
                logo="/img/logos/threatr.svg"
              />
              <ToolCard
                title="Mandolin"
                description="File analysis micro-service to extract content, scan with antivirus and apply Yara rules, offline."
                href="/docs/explanation/mandolin/what-is-mandolin"
                startHref="/docs/tutorials/mandolin-on-your-computer"
                logo="/img/logos/mandolin-logo.svg"
              />
              <ToolCard
                title="Octopus"
                description="Dynamic analysis framework for Android apps: instrument apps, capture traffic and decrypt TLS."
                href="https://pts-project.org/octopus/"
                startHref="https://pts-project.org/octopus/#installation"
                logo="/img/logos/octopus-logo.svg"
              />
              <ToolCard
                title="Mongoose"
                description="Collect, enrich, store and forward Suricata alerts and network flows."
                href="https://pts-project.org/mongoose/"
                startHref="https://pts-project.org/mongoose/#installation"
                logo="/img/logos/mongoose-logo.svg"
              />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
