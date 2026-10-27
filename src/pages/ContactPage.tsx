import { site } from '../data/site'

export function ContactPage() {
  return (
    <div className="page page--contact">
      <header className="page-head">
        <h1>Contact</h1>
        <p className="lede">{site.availability}</p>
      </header>

      <section className="section">
        <p>
          Agencies, retainers, and high-stakes builds: campaigns, IR, corporate
          rebuilds, launches.
        </p>
        <ul className="contact-list">
          <li>
            <span className="contact-list__label">Email</span>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </li>
          <li>
            <span className="contact-list__label">Phone</span>
            <a href={site.telHref}>{site.phoneDisplay}</a>
          </li>
          <li>
            <span className="contact-list__label">WhatsApp</span>
            <a href={site.whatsappHref} target="_blank" rel="noopener noreferrer">
              {site.phoneDisplay}
            </a>
          </li>
        </ul>
      </section>
    </div>
  )
}
