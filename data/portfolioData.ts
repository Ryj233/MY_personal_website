export const siteConfig = {
  title: '任俞洁 | 整车控制工程师',
  description: '整车控制工程师 / AI 创作者，用工程思维与 AI 工具，把复杂问题变成清晰、可落地的解决方案。',
  url: 'https://renyujie.top',
}

export const heroData = {
  name: '任俞洁',
  nameEn: 'Ren Yujie',
  title: '整车控制工程师 / AI 创作者',
  tagline: '用工程思维与 AI 工具，把复杂问题变成清晰、可落地的解决方案。',
  subtitle: 'Vehicle Control Engineer · AI Builder · System Thinker',
  buttons: [
    { text: '查看作品', href: '#projects' },
    { text: '下载简历', href: '/assets/cv.pdf', download: true }
  ],
  videoUrl: '/assets/videos/hero-avatar.mp4',
}

export const aboutData = {
  title: '关于我',
  titleEn: 'ABOUT ME',
  intro: '我是一名关注整车控制、系统问题分析与 AI 工作流的工程师。目前主要围绕整车扭矩管理、控制策略、问题排查、实车验证等方向积累经验。',
  intro2: '同时，我也在探索 AI 工具如何提升工程研发、知识管理、内容创作与个人品牌建设效率。',
  tags: [
    '整车控制',
    '系统思维',
    '问题分析',
    'AI 工作流',
    '创造型工程师'
  ]
}

export const careerData = {
  title: '职业发展方向',
  titleEn: 'CAREER DIRECTION',
  cards: [
    {
      id: 1,
      number: '01',
      title: '整车控制',
      description: '围绕整车扭矩管理、动力响应、控制策略与故障处理持续积累。'
    },
    {
      id: 2,
      number: '02',
      title: '系统工程',
      description: '关注需求分析、功能分解、接口协同与问题闭环。'
    },
    {
      id: 3,
      number: '03',
      title: '安全与可靠性',
      description: '进一步学习 FMEA、功能安全、监控机制与故障安全策略。'
    },
    {
      id: 4,
      number: '04',
      title: 'AI 增强工作流',
      description: '用 AI 辅助分析、知识沉淀、自动化文档与创意表达。'
    }
  ]
}

export const workScenesData = {
  title: '专业工作场景',
  titleEn: 'PROFESSIONAL WORK SCENES',
  images: [
    { id: 1, title: 'Simulink 模型搭建', tag: 'Model-Based Design', src: '/assets/images/work-scene-01.webp' },
    { id: 2, title: '问题分析与响应排查', tag: 'Problem Diagnosis', src: '/assets/images/work-scene-02.webp' },
    { id: 3, title: '方案讨论与问题复盘', tag: 'System Review', src: '/assets/images/work-scene-03.webp' },
    { id: 4, title: 'ECU / 控制器调试', tag: 'ECU Validation', src: '/assets/images/work-scene-04.webp' },
    { id: 5, title: '实车调试与功能验证', tag: 'Vehicle Testing', src: '/assets/images/work-scene-05.webp' },
    { id: 6, title: '数据采集与报告输出', tag: 'Data & Report', src: '/assets/images/work-scene-06.webp' }
  ]
}

export const skillsData = {
  title: '专业技能',
  titleEn: 'SKILLS',
  modules: [
    {
      id: 1,
      title: '整车控制',
      description: '扭矩管理、控制策略、动力响应、故障处理',
      icon: 'fa-car'
    },
    {
      id: 2,
      title: '建模仿真',
      description: 'Simulink 建模、MATLAB 分析、模型验证、策略开发',
      icon: 'fa-project-diagram'
    },
    {
      id: 3,
      title: '问题诊断',
      description: '信号分析、实车数据、问题复盘、闭环验证',
      icon: 'fa-search'
    },
    {
      id: 4,
      title: 'AI 工具链',
      description: 'AI 辅助分析、自动化文档、知识管理、内容创作',
      icon: 'fa-robot'
    }
  ]
}

export const projectsData = {
  title: '项目作品',
  titleEn: 'PROJECTS',
  projects: [
    {
      id: 1,
      title: '个人品牌网站',
      description: '基于 Next.js / Vercel / Cloudflare 构建的个人主页，承载职业展示、项目作品与个人品牌。',
      tags: ['Next.js', 'React', 'Tailwind CSS'],
      link: 'https://renyujie.top'
    },
    {
      id: 2,
      title: '3D 数字形象系统',
      description: '围绕个人形象构建 3D 角色、工作场景图与首页动态素材，探索 AI 视觉表达。',
      tags: ['AI', '3D', 'Creative'],
      link: '#'
    },
    {
      id: 3,
      title: '专利创意助手',
      description: '面向工程问题与创新想法，探索 AI 辅助问题分析、专利检索建议与知识图谱构建。',
      tags: ['AI', 'Innovation', 'Patent'],
      link: '#'
    }
  ]
}

export const contactData = {
  title: '联系我',
  titleEn: 'CONTACT',
  subtitle: '期待与你交流工程技术、AI 工具、职业成长与有趣的创造性项目。',
  email: 'renyujie@outlook.com',
  github: 'https://github.com/renyujie',
  linkedin: 'https://linkedin.com/in/renyujie',
  xiaohongshu: '',
  cvUrl: '/assets/cv.pdf'
}

export const navData = {
  brand: '任俞洁',
  links: [
    { text: '关于我', href: '#about' },
    { text: '职业方向', href: '#career' },
    { text: '工作场景', href: '#scenes' },
    { text: '技能', href: '#skills' },
    { text: '项目作品', href: '#projects' },
    { text: '联系我', href: '#contact' }
  ]
}