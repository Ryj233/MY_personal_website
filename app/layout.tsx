import type { Metadata } from 'next'
import { Inter, Manrope, Noto_Sans_SC } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
})

const notoSansSC = Noto_Sans_SC({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-noto-sans-sc',
  display: 'swap',
})

export const metadata: Metadata = {
  title: '任俞洁 | 整车控制工程师',
  description: '整车控制工程师｜系统策略方向｜AI效率实践者，聚焦复杂系统问题，以工程逻辑与AI工具驱动结果落地。',
  keywords: ['整车控制', '动力域控制器', '扭矩管理', 'AI工作流', '系统思维', '汽车电子', '系统策略'],
  authors: [{ name: '任俞洁' }],
  openGraph: {
    title: '任俞洁 | 整车控制工程师',
    description: '整车控制工程师｜系统策略方向｜AI效率实践者，聚焦复杂系统问题，以工程逻辑与AI工具驱动结果落地。',
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
    <html lang="zh-CN" className={`${inter.variable} ${manrope.variable} ${notoSansSC.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  )
}