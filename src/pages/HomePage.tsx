import { Link } from 'react-router-dom'
import { WorkCard } from '../components/WorkCard'
import { site } from '../data/site'
import { getFeatured, getSupport } from '../data/work'

export function HomePage() {
  const featured = getFeatured()
  const support = getSupport().filter((p) => p.status !== 'archive').slice(0, 4)

  return (
    <>
      <section className="hero">
        <p className="hero-brand">{site.name}</p>
        <h1 className="hero-line">{site.line}</h1>
        <p className="hero-support">{site.support}</p>
        <div className="hero-cta">
          <a className="btn btn--primary" href={site.cta.primary.href}>
            {site.cta.primary.label}
          </a>
          <Link className="btn btn--ghost" to="/contact">
            {site.cta.secondary.label}
          </Link>
        </div>
        <p className="hero-avail">{site.availability}</p>
      </section>

      <section id="work" className="section section--work">
        <header className="section-head">
          <h2>Selected work</h2>
          <p>
            High-stakes surfaces: campaigns, IR, group rebuilds, and products that ship.
            Full case studies for the strongest; the rest as proof depth.
          </p>
        </header>
        <div className="work-strip">
          {featured.map((project, i) => (
            <WorkCard
              key={project.slug}
              project={project}
              variant="featured"
              lead={i === 0}
            />
          ))}
        </div>
        {support.length > 0 && (
          <div className="work-support">
            <h3 className="work-support__label">Also in the field</h3>
            <div className="work-support__grid">
              {support.map((project) => (
                <WorkCard key={project.slug} project={project} variant="support" />
              ))}
            </div>
          </div>
        )}
        <p className="section-foot">
          <Link to="/work">Browse all projects →</Link>
        </p>
      </section>

      <section id="approach" className="section section--approach">
        <header className="section-head">
          <h2>Approach</h2>
          <p>Use-case led. Not a generic site builder roster.</p>
        </header>
        <ol className="approach-list">
          {site.approach.map((item, i) => (
            <li key={item.title}>
              <span className="approach-num">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="section section--close">
        <h2>High-stakes builds. Clear outcomes.</h2>
        <p>{site.availability}</p>
        <Link className="btn btn--primary" to="/contact">
          Start a conversation
        </Link>
      </section>
    </>
  )
}
