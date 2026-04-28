export const navData = {
  brand: '任俞洁',
  links: [
    { text: '关于我', href: '#about' },
    { text: '职业方向', href: '#career' },
    { text: '工作场景', href: '#scenes' },
    { text: '专业技能', href: '#skills' },
    { text: '项目作品', href: '#projects' },
    { text: '联系我', href: '#contact' },
  ],
}

export const heroData = {
  name: '任俞洁',
  nameEn: 'Ren Yujie',
  title: '整车控制工程师｜系统策略方向｜AI效率实践者',
  tagline: '聚焦复杂系统问题，以工程逻辑与 AI 工具驱动结果落地。',
  subtitle: 'Vehicle Control Engineer · System Strategist · AI Efficiency Builder',
  buttons: [
    { text: '查看作品', href: '#projects' },
    { text: '下载简历', href: '/assets/cv.pdf', download: true }
  ],
  videoUrl: '/assets/videos/hero-avatar.mp4',
  badges: [
    { label: 'Vehicle Control', value: '整车控制' },
    { label: 'System Strategy', value: '系统策略' },
    { label: 'AI Workflow', value: 'AI效率' },
    { label: 'Creative Output', value: '作品输出' }
  ]
}

export const aboutData = {
  title: '关于我',
  titleEn: 'About Me',
  intro: '我长期从事整车控制相关工作，围绕扭矩管理、控制策略、问题分析与实车验证持续积累经验。',
  intro2: '同时，我也在探索 AI 工具在工程研发、知识管理、内容创作与个人品牌建设中的应用价值。',
  tags: [
    '整车控制',
    '扭矩管理',
    '控制策略',
    '系统思维',
    'AI工作流',
    '知识管理',
    '内容创作',
    '个人品牌'
  ]
}

export const careerData = {
  title: '职业发展方向',
  titleEn: 'Career Direction',
  cards: [
    {
      id: 1,
      number: '01',
      title: '整车控制',
      description: '负责核心控制逻辑、扭矩管理与驾驶性优化。'
    },
    {
      id: 2,
      number: '02',
      title: '系统工程',
      description: '擅长需求拆解、跨部门协同与问题闭环。'
    },
    {
      id: 3,
      number: '03',
      title: 'AI融合',
      description: '利用 AI 提升研发效率、知识沉淀与内容产出。'
    }
  ]
}

export const workScenesData = {
  title: '专业工作场景',
  titleEn: 'Work Scenes',
  images: [
    { id: 1, src: '/assets/images/work-scene-01.webp', title: '实车测试', tag: 'Vehicle Testing' },
    { id: 2, src: '/assets/images/work-scene-02.webp', title: '台架调试', tag: 'Bench Debugging' },
    { id: 3, src: '/assets/images/work-scene-03.webp', title: '策略开发', tag: 'Strategy Dev' },
    { id: 4, src: '/assets/images/work-scene-04.webp', title: '数据分析', tag: 'Data Analysis' },
    { id: 5, src: '/assets/images/work-scene-05.webp', title: '团队协作', tag: 'Teamwork' },
    { id: 6, src: '/assets/images/work-scene-06.webp', title: '技术分享', tag: 'Tech Sharing' }
  ]
}

export const skillsData = {
  title: '专业技能',
  titleEn: 'Professional Skills',
  modules: [
    {
      id: 1,
      icon: 'fa-car',
      title: '整车控制',
      description: '扭矩管理、控制策略、动力响应、故障处理'
    },
    {
      id: 2,
      icon: 'fa-chart-line',
      title: '建模仿真',
      description: 'Simulink 建模、MATLAB 分析、模型验证、策略开发'
    },
    {
      id: 3,
      icon: 'fa-project-diagram',
      title: '系统分析',
      description: '需求拆解、逻辑分析、问题闭环、跨团队协作'
    },
    {
      id: 4,
      icon: 'fa-robot',
      title: 'AI应用',
      description: '提示词工程、自动化流程、内容生成、效率优化'
    }
  ]
}

export const projectsData = {
  title: '项目作品',
  titleEn: 'Projects',
  projects: [
    {
      id: 1,
      title: '个人品牌网站',
      description: '基于 Next.js / Vercel / Cloudflare 构建的职业展示与品牌主页，承载个人介绍、项目作品与长期内容沉淀。',
      tags: ['Next.js', 'React', 'Tailwind CSS', 'Vercel'],
      link: '#'
    },
    {
      id: 2,
      title: '3D 数字形象系统',
      description: '围绕个人形象打造 3D 角色、工作场景图与首页视觉素材，探索 AI 视觉表达与个人品牌建设。',
      tags: ['3D建模', 'AI视觉', '品牌设计'],
      link: '#'
    },
    {
      id: 3,
      title: '专利创意助手',
      description: '面向工程问题与创新想法，探索 AI 辅助问题分析、专利检索建议与知识图谱构建。',
      tags: ['AI应用', '专利分析', '知识图谱'],
      link: '#'
    }
  ]
}

export const contactData = {
  title: '联系我',
  titleEn: 'Contact',
  subtitle: '欢迎交流工程技术、职业发展、AI 应用与有价值的合作机会。',
  subtitle2: '也欢迎交流有趣项目与长期成长话题。',
  email: 'renyujie@example.com',
  github: 'https://github.com/renyujie',
  cvUrl: '/assets/cv.pdf'
}

export const footerData = {
  copyright: '© 2026 任俞洁',
  subtitle: 'Vehicle Control Engineer',
  tagline: 'Built with Engineering, AI and Creativity.'
}