import Link from 'next/link'
import { notFound } from 'next/navigation'
import { projectsData } from '@/data/portfolioData'
import { FooterNav } from './FooterNav'

export function generateStaticParams() {
  return projectsData.projects.map((p) => ({ slug: p.slug }))
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

        {isPlaceholder ? (
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
        ) : (
          <article className="max-w-3xl mx-auto">
            <div className="text-xs text-[#86868b] font-en tracking-wider uppercase mb-2">
              Project Detail
            </div>
            <h1 className="text-2xl lg:text-4xl font-bold text-[#1d1d1f] mb-4">
              {project.title}
            </h1>
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

            <div className="aspect-video rounded-2xl bg-gradient-to-br from-[#f5f7fa] to-[#e8eaed] relative mb-10 overflow-hidden border border-black/[0.03]">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 rounded-2xl bg-[#0066cc]/[0.06] flex items-center justify-center">
                  <i className="fas fa-folder-open text-[#0066cc]/40 text-xl"></i>
                </div>
              </div>
            </div>

            <div className="prose prose-sm lg:prose-base max-w-none mb-12">
              <p className="text-base lg:text-lg text-[#1d1d1f] leading-relaxed">
                {project.description}
              </p>
              <div className="mt-6 p-5 rounded-2xl bg-[#fafbfc] border border-black/[0.03]">
                <h2 className="text-sm font-semibold text-[#1d1d1f] mb-2">页面建设中</h2>
                <p className="text-xs text-[#86868b] leading-relaxed">
                  后续将补充更多项目详情，包括策略设计、关键技术点、实车验证结果等内容。
                </p>
              </div>
            </div>

            <FooterNav projects={projectsData.projects} currentSlug={params.slug} />
          </article>
        )}
      </div>
    </main>
  )
}
