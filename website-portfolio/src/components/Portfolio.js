import React from 'react';
import { FEATURED_PROJECTS } from '../data/projects';

function ProjectCard({ project, index, compact = false }) {
  const hasPrimaryLink = project.live && !project.private;
  const MainContentTag = hasPrimaryLink ? 'a' : 'div';
  const mainContentProps = hasPrimaryLink
    ? {
        href: project.live,
        target: '_blank',
        rel: 'noreferrer',
        'aria-label': `Open ${project.title}`,
      }
    : {};

  return (
    <article
      className={`project-card project-card-${project.size || 'medium'} ${
        compact ? 'project-card-compact' : ''
      } reveal`}
      style={{
        '--reveal-delay': `${(index % 3) * 0.08}s`,
        '--project-accent': project.accent || 'var(--accent)',
      }}
    >
      <MainContentTag className="project-main-link" {...mainContentProps}>
        <div className={`project-thumb ${project.image ? '' : 'project-thumb-fallback'}`}>
          {project.image ? (
            <img src={project.image} alt={project.title} loading="lazy" />
          ) : (
            <span className="project-fallback-mark">
              {project.title
                .split(' ')
                .map((word) => word[0])
                .join('')
                .slice(0, 3)}
            </span>
          )}
        </div>

        <div className="project-body">
          <div>
            {project.status && <span className="project-status">{project.status}</span>}
            <h3 className="project-title">{project.title}</h3>
          </div>
          <p className="project-desc">{project.description}</p>
          <div className="project-tags">
            {project.tags.map((tag) => (
              <span className="tag" key={tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>
        {hasPrimaryLink && (
          <span className="project-card-link-icon" aria-hidden="true">
            <i className="fas fa-arrow-up-right-from-square" />
          </span>
        )}
      </MainContentTag>

      <div className="project-links">
        {project.private ? (
          <span className="project-link project-link-private">
            <i className="fas fa-lock" />
            {project.privateMessage || 'Private'}
          </span>
        ) : (
          <>
            {project.github && (
              <a
                className="project-link"
                href={project.github}
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-github" />
                Source
              </a>
            )}
            {project.live && !project.hideLiveLink && (
              <a
                className="project-link"
                href={project.live}
                target="_blank"
                rel="noreferrer"
              >
                <i className="fas fa-arrow-up-right-from-square" />
                Live Demo
              </a>
            )}
          </>
        )}
      </div>
    </article>
  );
}

function ProjectGrid({
  projects = FEATURED_PROJECTS,
  variant = 'standard',
  compact = false,
}) {
  return (
    <div className={`project-grid project-grid-${variant}`}>
      {projects.map((project, index) => (
        <ProjectCard
          project={project}
          index={index}
          compact={compact}
          key={project.title}
        />
      ))}
    </div>
  );
}

function Portfolio() {
  const fullPortfolioUrl =
    process.env.NEXT_PUBLIC_FULL_PORTFOLIO_URL || 'https://armandoportfolio.vercel.app/';

  return (
    <section id="portfolio" className="section">
      <div className="container">
        <div className="section-head reveal">
          <span className="section-eyebrow">Selected Work</span>
          <h2 className="section-title">Featured Work</h2>
          <p className="section-subtitle">
            A curated showcase of product-focused apps, finance workflows, and
            deployed tools with real project structure.
          </p>
        </div>

        <ProjectGrid projects={FEATURED_PROJECTS} variant="featured" />

        <div className="portfolio-actions reveal">
          <a
            href={fullPortfolioUrl}
            className="btn-c btn-primary-c"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fas fa-folder-open" />
            Explore All Projects
          </a>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
export { ProjectGrid };
