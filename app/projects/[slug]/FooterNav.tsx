import Link from 'next/link'

interface Project {
  slug: string
  title: string
}

export function FooterNav({
  projects,
  currentSlug,
}: {
  projects: Project[]
  currentSlug: string
}) {
  const currentIndex = projects.findIndex((p) => p.slug === currentSlug)
  const prev = currentIndex > 0 ? projects[currentIndex - 1] : null
  const next = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null

  return (
    <div className="pt-8 border-t border-black/[0.03] flex items-center justify-between gap-4">
      {prev ? (
        <Link
          href={`/projects/${prev.slug}`}
          className="flex-1 min-w-0 text-left px-4 py-3 rounded-xl bg-[#fafbfc] hover:bg-[#0066cc]/[0.04] border border-black/[0.03] transition-colors group"
        >
          <div className="text-[10px] text-[#86868b] font-en tracking-wider uppercase mb-1">
            <i className="fas fa-arrow-left text-[8px] mr-1"></i>
            Previous
          </div>
          <div className="text-sm text-[#1d1d1f] font-medium truncate group-hover:text-[#0066cc] transition-colors">
            {prev.title}
          </div>
        </Link>
      ) : (
        <div className="flex-1" />
      )}

      {next ? (
        <Link
          href={`/projects/${next.slug}`}
          className="flex-1 min-w-0 text-right px-4 py-3 rounded-xl bg-[#fafbfc] hover:bg-[#0066cc]/[0.04] border border-black/[0.03] transition-colors group"
        >
          <div className="text-[10px] text-[#86868b] font-en tracking-wider uppercase mb-1">
            Next
            <i className="fas fa-arrow-right text-[8px] ml-1"></i>
          </div>
          <div className="text-sm text-[#1d1d1f] font-medium truncate group-hover:text-[#0066cc] transition-colors">
            {next.title}
          </div>
        </Link>
      ) : (
        <div className="flex-1" />
      )}
    </div>
  )
}
