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
  title: '动力域控制器应用层软件开发工程师',
  tagline: '3年+纯电汽车动力域控制器应用层软件开发经验，聚焦扭矩流管理、扭矩仲裁监控及动力控制相关策略设计与软件开发。',
  subtitle: 'PDC Application Layer Software Developer · Torque Management · MBD Engineer',
  buttons: [
    { text: '查看作品', href: '#projects' }
  ],
  videoUrl: '/assets/videos/hero-avatar.mp4',
  badges: [
    { label: 'PDC Software', value: 'PDC应用层' },
    { label: 'Torque Mgmt', value: '扭矩管理' },
    { label: 'MBD', value: 'MBD工程化' },
    { label: 'Volume Prod.', value: '量产交付' }
  ]
}

export const aboutData = {
  title: '关于我',
  titleEn: 'About Me',
  intro: '3年+纯电汽车动力域控制器（PDC）应用层软件开发经验，聚焦扭矩流管理、扭矩仲裁及动力控制，具备25个量产车型开发经验，其中23个车型完成S1至SOP全流程开发。',
  points: [
    '主导多项功能逻辑优化开发并实现平台化量产',
    '负责ADAS匹配、定速巡航、扭矩仲裁、扭矩安全等功能开发，拥有2项公开发明专利',
    '参与多项企业/团队软件开发规范及技术标准建设',
    '具备自动化工具链开发与软件工程效率提升能力'
  ],
  tags: [
    'PDC应用层开发',
    '扭矩管理',
    '扭矩仲裁',
    'MBD工程化',
    'Simulink建模',
    'ADAS匹配',
    '自动化工具链',
    '平台化量产'
  ]
}

export const careerData = {
  title: '职业发展方向',
  titleEn: 'Career Direction',
  cards: [
    {
      id: 1,
      number: '01',
      title: '动力域软件开发',
      description: '负责PDC应用层扭矩管理子系统开发、策略验证及问题排查，支撑纯电车型量产交付。'
    },
    {
      id: 2,
      number: '02',
      title: '架构与平台化',
      description: '主导扭矩仲裁架构优化、策略落地及平台化方案建设，减少维护成本、提升复用效率。'
    },
    {
      id: 3,
      number: '03',
      title: '工程效率提升',
      description: '开发自动化工具链（模型拆分、自动编译、数据回放等），持续提升MBD研发效率与质量。'
    }
  ]
}

export const workScenesData = {
  title: '专业工作场景',
  titleEn: 'Work Scenes',
  images: [
    { id: 1, src: '/assets/images/scene-strategy.png', title: '策略设计与优化', tag: 'Strategy Design' },
    { id: 2, src: '/assets/images/scene-dev.png', title: '软件开发', tag: 'Software Dev' },
    { id: 3, src: '/assets/images/scene-vehicle-test.png', title: '实车调试', tag: 'Vehicle Debug' },
    { id: 4, src: '/assets/images/scene-data-analysis.png', title: '问题分析', tag: 'Problem Analysis' },
    { id: 5, src: '/assets/images/scene-teamwork.png', title: '团队协作', tag: 'Teamwork' },
    { id: 6, src: '/assets/images/scene-report.png', title: '方案总结与汇报', tag: 'Solution Report' }
  ]
}

export const skillsData = {
  title: '专业技能',
  titleEn: 'Professional Skills',
  modules: [
    {
      id: 1,
      icon: 'fa-car',
      title: '动力域控制',
      description: 'PDC/VCU应用层软件开发、多功能扭矩请求协同、软件集成与实车调试'
    },
    {
      id: 2,
      icon: 'fa-chart-line',
      title: 'MBD开发',
      description: 'MATLAB/Simulink/Stateflow模型开发及优化、模型自动化处理、软件编译及集成'
    },
    {
      id: 3,
      icon: 'fa-project-diagram',
      title: '系统与架构',
      description: '扭矩仲裁架构设计、扭矩流管理、ADAS功能匹配、跨域协同控制'
    },
    {
      id: 4,
      icon: 'fa-robot',
      title: '工具与效率',
      description: 'CANalyzer、Git、MATLAB Script自动化、数据回放、标定量平台化'
    }
  ]
}

export const projectsData = {
  title: '项目作品',
  titleEn: 'Projects',
  projects: [
    {
      id: 1,
      title: '定速巡航四按键复用及兼容方案开发',
      description: '完成四按键复用逻辑、新旧按键兼容策略开发，优化巡航扭矩计算与输出逻辑，提升控制平顺性及稳定性，方案应用于元UP、海豚、海鸥、海豹等经济型车型。',
      tags: ['定速巡航', '按键复用', '平台复用'],
      slug: 'cruise-button-reuse'
    },
    {
      id: 2,
      title: 'PDC三段式扭矩仲裁架构优化',
      description: '主导三段式扭矩仲裁架构软件开发，解决原架构VLC正扭退出卸载慢、巡航回馈转驱动响应慢等问题，基于海狮系列两驱项目首次量产搭载，形成平台化方案推广至所有在研项目。',
      tags: ['扭矩仲裁', '架构优化', '平台化', '量产'],
      slug: 'pdc-torque-arbitration'
    },
    {
      id: 3,
      title: 'ADAS两驱平台方案开发',
      description: '首次完成平台国内两驱车型ADAS匹配功能开发，负责ADAS功能握手、扭矩仲裁及扭矩响应策略，支撑智驾与动力域顺利协同量产，形成两驱平台化方案。',
      tags: ['ADAS匹配', '扭矩协同', '平台化'],
      slug: 'adas-fwd-platform'
    },
    {
      id: 4,
      title: '直线加速策略设计及功能开发',
      description: '参与直线加速功能策略讨论，负责功能控制器间交互逻辑、热管理策略、整车动力协调、扭矩请求等策略开发，完成四驱动车型直线加速功能策略扭矩管理开发，应用于海狮系列车型。',
      tags: ['直线加速', '扭矩策略', '四驱动'],
      slug: 'straight-line-acceleration'
    },
    {
      id: 5,
      title: '纯电车辆车速限制策略解析与优化分析',
      description: '详情待更新，后续补充具体策略设计与优化内容。',
      tags: ['车速限制', '策略优化'],
      slug: 'speed-limit-strategy',
      placeholder: true
    },
    {
      id: 6,
      title: '纯电分布式驱制转悬预研项目',
      description: '参与纯电四轮独立驱动/制动/转向/悬架分布式控制预研，负责整车控制及扭矩管理子系统开发，输出相关技术成果并形成2项已公开发明专利。',
      tags: ['分布式控制', '整车扭矩管理', '发明专利'],
      slug: 'distributed-ev-prestudy'
    },
    {
      id: 7,
      title: 'MBD子系统实车数据回放方法（独立开发）',
      description: '针对MBD开发过程中完整实车环境复现效率较低的问题，建立面向应用层子系统的实车数据回放及问题复现方法，开发配套数据处理、数据录制及回放脚本，输出技术研究报告。',
      tags: ['MBD', '数据回放', '独立开发'],
      slug: 'mbd-data-replay'
    },
    {
      id: 8,
      title: '应用层模型自动化轻量化工具（独立开发）',
      description: '开发应用层模型自动化拆分、配置文件更新及自动编译脚本，将人工操作时间由约60min缩短至5min，单次处理效率提升约12倍，降低重复劳动及配置错误风险。',
      tags: ['MATLAB Script', '自动化', '效率提升12x'],
      slug: 'model-lightweight-tool'
    },
    {
      id: 9,
      title: '标定量平台化处理与自动导入（参与开发）',
      description: '推动模型中标定量命名统一，建立以Excel为载体的标定量管理方式，管理700+标定参数；开发自动化脚本完成Excel转换，通过M脚本将脚本维护Excel转换为MAT文件，实现标定量自动导入。',
      tags: ['标定量', '平台化', '自动化导入'],
      slug: 'calibration-import-tool'
    }
  ]
}

export const contactData = {
  title: '联系我',
  titleEn: 'Contact',
  subtitle: '欢迎交流动力域控制、MBD开发、架构优化、工程效率工具与有价值的合作机会。',
  subtitle2: '也欢迎交流量产经验、扭矩管理策略与长期成长话题。',
  email: '809889124@qq.com',
  github: 'https://github.com/renyujie',
  cvUrl: '/assets/cv.pdf'
}

export const footerData = {
  copyright: '© 2026 任俞洁',
  subtitle: 'PDC Application Layer Software Developer',
  tagline: 'Built with Engineering, MBD and Efficiency.'
}
