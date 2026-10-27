import { Link, useParams } from 'react-router-dom'
import { getBySlug, getNextProject } from '../data/work'

export function WorkCasePage() {
  const { slug } = useParams()
  const project = slug ? getBySlug(slug) : undefined
  const next = slug ? getNextProject(slug) : undefined

  if (!project) {
    return (
      <div className="page">
        <h1>Not found</h1>
        <p>That project isn’t in the list.</p>
        <Link to="/work">Back to work</Link>
      </div>
    )
  }

  const live = project.url || project.stagedUrl
  const study = project.caseStudy

  return (
    <article className="page page--case">
      <p className="case-client">{project.client}</p>
      <h1>{project.name}</h1>
      <p className="case-angle">{project.angle}</p>
      <p className="case-use-case">{project.useCase}</p>

      <div className="case-meta">
        <span>{project.kind}</span>
        <span>{project.status}</span>
        {project.year && <span>{project.year}</span>}
      </div>

      {project.preview && (
        <div className="case-shot">
          <img src={project.preview} alt={`${project.name} homepage`} />
        </div>
      )}

      {study ? (
        <div className="case-sections">
          <section className="case-section">
            <h2>Goal</h2>
            <p>{study.goal}</p>
          </section>

          <section className="case-section">
            <h2>Context</h2>
            <p>{study.context}</p>
          </section>

          <section className="case-section">
            <h2>Approach</h2>
            <ol className="case-list">
              {study.approach.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </section>

          <section className="case-section">
            <h2>What shipped</h2>
            <ul className="case-list case-list--check">
              {study.shipped.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="case-section">
            <h2>Outcome</h2>
            <p>{study.outcome}</p>
          </section>
        </div>
      ) : (
        <section className="case-body">
          <h2>Overview</h2>
          <p>{project.summary}</p>
        </section>
      )}

      <div className="case-actions">
        {live && (
          <a className="btn btn--primary" href={live} target="_blank" rel="noreferrer">
            {project.url ? 'View live site' : 'View staged site'}
          </a>
        )}
        <Link className="btn btn--ghost" to="/work">
          All work
        </Link>
      </div>

      {next && next.slug !== project.slug && (
        <nav className="case-next" aria-label="Next project">
          <p className="case-next__label">Next</p>
          <Link to={`/work/${next.slug}`} className="case-next__link">
            {next.preview && (
              <div className="case-next__shot" aria-hidden="true">
                <img src={next.preview} alt="" />
              </div>
            )}
            <div className="case-next__copy">
              <span className="case-next__client">{next.client}</span>
              <span className="case-next__name">{next.name}</span>
              <span className="case-next__angle">{next.angle}</span>
            </div>
          </Link>
        </nav>
      )}
    </article>
  )
}
