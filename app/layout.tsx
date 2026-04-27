import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '任俞洁 | 整车控制工程师',
  description: '整车控制工程师 / AI 创作者，用工程思维与 AI 工具，把复杂问题变成清晰、可落地的解决方案。',
  keywords: ['整车控制', '动力域控制器', '扭矩管理', 'AI工作流', '系统思维', '汽车电子'],
  authors: [{ name: '任俞洁' }],
  openGraph: {
    title: '任俞洁 | 整车控制工程师',
    description: '整车控制工程师 / AI 创作者，用工程思维与 AI 工具，把复杂问题变成清晰、可落地的解决方案。',
    url: 'https://renyujie.top',
    siteName: '任俞洁的个人主页',
    locale: 'zh_CN',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">{children}</body>
    </html>
  )
}