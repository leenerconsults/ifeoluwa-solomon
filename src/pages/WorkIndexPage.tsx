import { useMemo, useState } from 'react'
import { WorkCard } from '../components/WorkCard'
import {
  getByCategory,
  getFeatured,
  getSupport,
  workCategories,
  type WorkCategory,
} from '../data/work'

type FilterId = WorkCategory | 'all'

export function WorkIndexPage() {
  const [filter, setFilter] = useState<FilterId>('all')
  const featured = getFeatured()
  const support = getSupport()
  const filtered = useMemo(() => getByCategory(filter), [filter])

  return (
    <div className="page page--work-index">
      <header className="page-head">
        <h1>Work</h1>
        <p>
          Use-case led surfaces across campaigns, corporate and IR, commerce, and
          studios. Filter by type to scan the roster.
        </p>
      </header>

      <div className="work-filters" role="tablist" aria-label="Work categories">
        {workCategories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            role="tab"
            aria-selected={filter === cat.id}
            className={`work-filter${filter === cat.id ? ' is-active' : ''}`}
            onClick={() => setFilter(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {filter === 'all' ? (
        <>
          <section className="section">
            <h2 className="eyebrow">Featured</h2>
            <div className="work-strip">
              {featured.map((p, i) => (
                <WorkCard key={p.slug} project={p} lead={i === 0} />
              ))}
            </div>
          </section>

          <section className="section">
            <h2 className="eyebrow">More work</h2>
            <div className="work-support__grid">
              {support.map((p) => (
                <WorkCard key={p.slug} project={p} variant="support" />
              ))}
            </div>
          </section>
        </>
      ) : (
        <section className="section">
          <h2 className="eyebrow">
            {workCategories.find((c) => c.id === filter)?.label}
          </h2>
          <div className="work-strip">
            {filtered.map((p, i) => (
              <WorkCard
                key={p.slug}
                project={p}
                lead={filter === 'campaigns' && i === 0}
              />
            ))}
          </div>
          {filtered.length === 0 && (
            <p className="muted">No projects in this category yet.</p>
          )}
        </section>
      )}
    </div>
  )
}
