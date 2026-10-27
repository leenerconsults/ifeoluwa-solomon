import { Link } from 'react-router-dom'
import { site } from '../data/site'

export function AboutPage() {
  return (
    <div className="page page--about">
      <header className="page-head page-head--about">
        <p className="about-kicker">{site.name}</p>
        <h1>{site.line}</h1>
        <p className="lede">
          I’m {site.shortName}. I design and ship digital product for brands and
          markets: campaign sites, investor relations, corporate rebuilds, and
          commerce that runs.
        </p>
      </header>

      <section className="section">
        <header className="section-head">
          <h2>Where I focus</h2>
          <p>Three lanes. Same standard: stakeholder-grade and shippable.</p>
        </header>
        <ul className="about-focus">
          {site.focus.map((item) => (
            <li key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="section">
        <header className="section-head">
          <h2>How I work</h2>
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

      <section className="section section--close about-close">
        <h2>Agencies, retainers, high-stakes builds.</h2>
        <p>{site.availability}</p>
        <div className="hero-cta">
          <Link className="btn btn--primary" to="/contact">
            Start a conversation
          </Link>
          <Link className="btn btn--ghost" to="/work">
            See the work
          </Link>
        </div>
      </section>
    </div>
  )
}
