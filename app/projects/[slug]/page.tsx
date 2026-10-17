import Link from 'next/link'
import { notFound } from 'next/navigation'
import { projectsData } from '@/data/portfolioData'
import { FooterNav } from './FooterNav'

export function generateStaticParams() {
  return projectsData.projects.map((p) => ({ slug: p.slug }))
}

interface Section {
  type: string
  text?: string
  body?: string
  items?: string[]
  src?: string
  caption?: string
}

export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string }
}) {
  const project = projectsData.projects.find((p) => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  const isPlaceholder = (project as any).placeholder === true
  const hasContent = (project as any).sections && (project as any).sections.length > 0

  if (isPlaceholder || !hasContent) {
    return (
      <main className="min-h-screen bg-white pt-16">
        <div className="section-container py-8 lg:py-12">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-1.5 text-sm text-[#86868b] hover:text-[#0066cc] transition-colors mb-8"
          >
            <i className="fas fa-arrow-left text-[10px]"></i>
            返回项目列表
          </Link>

          <div className="max-w-2xl mx-auto text-center py-20">
            <div className="w-16 h-16 rounded-2xl bg-[#0066cc]/[0.06] flex items-center justify-center mx-auto mb-5">
              <i className="fas fa-tools text-[#0066cc] text-xl"></i>
            </div>
            <h1 className="text-2xl lg:text-3xl font-bold text-[#1d1d1f] mb-3">
              {project.title}
            </h1>
            <p className="text-sm text-[#86868b] leading-relaxed mb-6">
              本项目详情页正在整理中，即将更新，请稍候…
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-10">
              {project.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="px-3 py-1 bg-[#fafbfc] text-[#86868b] text-xs rounded-full border border-black/[0.03]"
                >
                  {tag}
                </span>
              ))}
            </div>
            <FooterNav projects={projectsData.projects} currentSlug={params.slug} />
          </div>
        </div>
      </main>
    )
  }

  const sections = (project as any).sections as Section[]

  return (
    <main className="min-h-screen bg-white pt-16">
      <div className="section-container py-8 lg:py-12">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-1.5 text-sm text-[#86868b] hover:text-[#0066cc] transition-colors mb-8"
        >
          <i className="fas fa-arrow-left text-[10px]"></i>
          返回项目列表
        </Link>

        <article className="max-w-3xl mx-auto">
          <div className="text-xs text-[#86868b] font-en tracking-wider uppercase mb-2">
            Project Detail
          </div>
          <h1 className="text-2xl lg:text-4xl font-bold text-[#1d1d1f] mb-2">
            {project.title}
          </h1>
          {(project as any).subtitle && (
            <p className="text-sm lg:text-base text-[#0066cc] font-medium mb-4">
              {(project as any).subtitle}
            </p>
          )}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="px-3 py-1 bg-[#fafbfc] text-[#86868b] text-xs rounded-full border border-black/[0.03]"
              >
                {tag}
              </span>
            ))}
          </div>

          {(project as any).cover && (
            <div className="rounded-2xl overflow-hidden border border-black/[0.03] mb-10">
              <img
                src={(project as any).cover}
                alt={project.title}
                className="w-full h-auto"
              />
            </div>
          )}

          <div className="space-y-8">
            {sections.map((section, idx) => {
              if (section.type === 'heading') {
                return (
                  <div key={idx} className="pt-2">
                    <h2 className="text-lg lg:text-xl font-bold text-[#1d1d1f] relative pl-4">
                      <span className="absolute left-0 top-1 bottom-1 w-1 rounded-full bg-[#0066cc]" />
                      {section.text}
                    </h2>
                  </div>
                )
              }

              if (section.type === 'text') {
                return (
                  <p key={idx} className="text-base lg:text-lg text-[#1d1d1f] leading-[1.9]">
                    {section.body}
                  </p>
                )
              }

              if (section.type === 'bullets') {
                return (
                  <ul key={idx} className="space-y-2.5 pl-1">
                    {section.items?.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-[#1d1d1f] leading-relaxed">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#0066cc] flex-shrink-0" />
                        <span className="text-sm lg:text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                )
              }

              if (section.type === 'image') {
                return (
                  <figure key={idx} className="rounded-2xl overflow-hidden border border-black/[0.03] bg-[#fafbfc]">
                    <img
                      src={section.src}
                      alt={section.caption || ''}
                      className="w-full h-auto"
                    />
                    {section.caption && (
                      <figcaption className="px-4 py-3 text-xs lg:text-sm text-[#86868b] border-t border-black/[0.03]">
                        <i className="fas fa-image text-[10px] mr-1.5 text-[#0066cc]/60"></i>
                        {section.caption}
                      </figcaption>
                    )}
                  </figure>
                )
              }

              return null
            })}
          </div>

          <div className="mt-14">
            <FooterNav projects={projectsData.projects} currentSlug={params.slug} />
          </div>
        </article>
      </div>
    </main>
  )
}
