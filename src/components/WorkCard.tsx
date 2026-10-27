import { Link } from 'react-router-dom'
import type { WorkProject } from '../data/work'

type Props = {
  project: WorkProject
  variant?: 'featured' | 'support'
  /** Spans the full work strip (IPO lead) */
  lead?: boolean
}

export function WorkCard({ project, variant = 'featured', lead = false }: Props) {
  const className = [
    'work-card',
    `work-card--${variant}`,
    lead ? 'work-card--lead' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <article className={className}>
      <Link to={`/work/${project.slug}`} className="work-card__link">
        <div
          className={`work-card__preview${project.preview ? ' work-card__preview--shot' : ''}`}
          aria-hidden="true"
        >
          {project.preview ? (
            <div className="work-card__shot">
              <img src={project.preview} alt="" loading="lazy" />
            </div>
          ) : (
            <>
              <span className="work-card__preview-label">Preview</span>
              <span className="work-card__preview-name">{project.name}</span>
            </>
          )}
        </div>
        <div className="work-card__body">
          <p className="work-card__client">{project.client}</p>
          <h3 className="work-card__title">{project.name}</h3>
          <p className="work-card__angle">{project.angle}</p>
        </div>
      </Link>
    </article>
  )
}
