import { Link, Outlet } from 'react-router-dom'
import { site } from '../data/site'
import { WhatsAppFab } from './WhatsAppFab'

export function Shell() {
  return (
    <div className="shell">
      <header className="site-header">
        <Link to="/" className="brand">
          {site.name}
        </Link>
        <nav className="site-nav" aria-label="Primary">
          {site.nav.map((item) =>
            item.href.startsWith('/') && !item.href.includes('#') ? (
              <Link key={item.href} to={item.href}>
                {item.label}
              </Link>
            ) : (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ),
          )}
        </nav>
      </header>

      <main className="site-main">
        <Outlet />
      </main>

      <footer className="site-footer">
        <div>
          <p className="footer-brand">{site.name}</p>
          <p className="footer-line">{site.line}</p>
        </div>
        <div className="footer-meta">
          <p>{site.availability}</p>
          <p>
            <a href={site.telHref}>{site.phoneDisplay}</a>
          </p>
          <Link to="/contact">Contact</Link>
        </div>
      </footer>

      <WhatsAppFab />
    </div>
  )
}
