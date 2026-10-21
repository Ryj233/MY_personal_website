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
      subtitle: '功能开发｜核心成员',
      description: '完成四按键复用逻辑、新旧按键兼容策略开发，优化巡航扭矩计算与输出逻辑，提升控制平顺性及稳定性，方案应用于元UP、海豚、海鸥、海豹等经济型车型。',
      tags: ['定速巡航', '按键复用', '扭矩控制', '平台复用', '量产'],
      slug: 'cruise-button-reuse',
      cover: '/assets/images/cover-cruise-control.png',
      sections: [
        {
          type: 'heading',
          text: '项目背景'
        },
        {
          type: 'text',
          body: '定速巡航按键开关采集驾驶员输入，使汽车在运行中无需维持油门踏板开度便可按照驾驶员要求自动维持匀速行驶。不同方向盘按键方案需要适配不同的软件逻辑，在此背景下新按键方案及兼容方案的软件开发尤为急切。'
        },
        {
          type: 'heading',
          text: '参与情况'
        },
        {
          type: 'bullets',
          items: [
            '完成四按键复用逻辑、新旧按键兼容策略开发，实现不同车型按键方案统一适配',
            '针对调试中发现的巡航扭矩控制问题，优化目标车速、车辆状态及驾驶员输入等条件下的扭矩计算与输出逻辑',
            '提升巡航控制平顺性及功能稳定性，完成功能集成、实车调试及量产验证',
            '方案应用于元UP、海豚、海鸥、海豹等经济型车型，形成平台化复用方案'
          ]
        },
        {
          type: 'heading',
          text: '核心策略'
        },
        {
          type: 'image',
          src: '/assets/images/cruise-calc-logic.png',
          caption: '定速巡航扭矩计算与输出逻辑'
        },
        {
          type: 'image',
          src: '/assets/images/cruise-button-logic.png',
          caption: '四按键复用与兼容切换逻辑'
        },
        {
          type: 'image',
          src: '/assets/images/cruise-state-logic.png',
          caption: '定速巡航功能状态切换逻辑'
        }
      ]
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
      subtitle: '直线加速模式动力控制功能开发｜参与开发',
      description: '参与直线加速功能策略讨论，负责功能控制器间交互逻辑、热管理策略、整车动力协调、扭矩请求等策略开发，完成四驱动车型直线加速功能策略扭矩管理开发，应用于海狮系列车型。',
      tags: ['直线加速', '扭矩策略', '四驱动', '热管理协同'],
      slug: 'straight-line-acceleration',
      cover: '/assets/images/cover-launch-control.png',
      sections: [
        {
          type: 'heading',
          text: '项目背景'
        },
        {
          type: 'text',
          body: '直线加速模式为应用于高附直线路面的专项性能模式。该模式下会协同热管理系统对整车性能进行预调节，将整车动力调整至最强，同时维持电机、电控等关键部件处于安全工作温度区间，确保用户可体验极致动力性。'
        },
        {
          type: 'heading',
          text: '个人参与'
        },
        {
          type: 'bullets',
          items: [
            '参与直线加速模式策略设计讨论，面向高附直线路面场景',
            '负责动力域控制器侧软件开发，实现功能使能、激活及堵转状态机切换',
            '完成堵转扭矩计算与扭矩仲裁逻辑开发，支撑多执行器协同输出',
            '参与功能调试过程中的问题排查与解决，支撑功能策略落地与验证闭环'
          ]
        },
        {
          type: 'heading',
          text: '策略架构'
        },
        {
          type: 'text',
          body: '策略层面覆盖整车预调节、功能使能激活、堵转状态机三大阶段，扭矩输出与热管理协同联动，在动力性与安全性之间取得平衡。'
        },
        {
          type: 'image',
          src: '/assets/images/launch-strategy.png',
          caption: '直线加速模式整车策略架构'
        },
        {
          type: 'heading',
          text: '堵转状态机'
        },
        {
          type: 'text',
          body: '堵转状态机是直线加速功能的核心控制逻辑，管理功能从预激活 → 激活 → 堵转 → 释放 → 退出的完整生命周期，确保扭矩输出在各阶段平滑过渡、无突变冲击。'
        },
        {
          type: 'image',
          src: '/assets/images/launch-stall-state.png',
          caption: '直线加速堵转状态机切换逻辑'
        }
      ]
    },
    {
      id: 5,
      title: '纯电车辆车速限制技术研究',
      subtitle: '技术研究与专利支撑｜核心成员',
      description: '围绕纯电车型电机响应快、动力平台差异大的特性，针对传统查表限速在急加速、轻载、坡道等工况下的超调与适应性问题开展技术分析，形成分布式驱动自适应限速控制方案及专利布局。',
      tags: ['车速限制', '策略优化', '标准解析', '专利'],
      slug: 'speed-limit-research',
      cover: '/assets/images/cover-speed-limit.png',
      sections: [
        {
          type: 'heading',
          text: '项目背景'
        },
        {
          type: 'text',
          body: '纯电车型电机响应快、动力平台差异大，传统"车速偏差—查表"限速策略在急加速、轻载、坡道及频繁松踩油门等工况下存在超调明显、参数适应性不足、坡道限速失效等问题。同时，现行 GB 24545-2019 基于"最高车速限制"与"可调车速限制"的二分法框架，难以覆盖电池热管理、低电量保护、电机故障跛行等系统自主决策型限速场景；GB/T 44433-2024 虽为智能限速控制提供了方法参照，但尚未覆盖车辆内部状态触发的自主限速。项目围绕上述问题开展纯电车型限速控制技术分析，识别现有方案痛点，提出改进方向，并为分布式驱动车辆自适应限速控制方案及知识产权布局提供技术支撑。'
        },
        {
          type: 'heading',
          text: '个人参与情况'
        },
        {
          type: 'bullets',
          items: [
            '工况仿真与痛点提炼：针对急加速、不同载荷、频繁松踩油门、坡道变化、动态目标限速等典型工况完成仿真分析，归纳现有查表方案在超调抑制、参数自适应及坡道工况下的核心痛点',
            '回馈工况策略分析：分析回馈制动能力可用但未主动介入限速的问题，厘清"行车制动"与"回馈制动"的法规边界，参与提出回馈制动纳入限速闭环及油门优先权限管理的改进思路',
            '专利调研与对比：完成 4 项相关专利的技术调研，从触发源、预测能力、控制架构、分布式适配、豁免机制等维度对比，明确现有技术的共性空白',
            '标准解析：完成 GB 24545-2019 与 GB/T 44433-2024 标准解析，梳理系统分类、试验方法及法规空白，为改进方向提供依据',
            '方案研讨与专利材料形成：参与讨论纵向加速度融合、滚动车速预测、动力能力因子、多级仲裁豁免、前馈-反馈复合限速控制等关键技术方向，参与形成分布式驱动车辆自适应限速控制专利技术方案及 HMI 可视化方案',
            '报告撰写与成果输出：承担技术分析报告相关章节撰写与修订，完成标准分析、痛点总结、改进方向提炼及专利方案技术论证，支撑项目技术路线与知识产权布局'
          ]
        }
      ]
    },
    {
      id: 6,
      title: '纯电分布式驱制转悬预研项目',
      subtitle: '分布式控制预研｜核心成员',
      description: '参与纯电四轮独立驱动/制动/转向/悬架分布式控制预研，负责整车控制及扭矩管理子系统开发，输出相关技术成果并形成2项已公开发明专利。',
      tags: ['分布式控制', '整车扭矩管理', '发明专利', '预研'],
      slug: 'distributed-ev-prestudy',
      cover: '/assets/images/cover-distributed-ev.png',
      sections: [
        {
          type: 'heading',
          text: '项目背景'
        },
        {
          type: 'text',
          body: '面向下一代纯电车型的分布式控制架构，开展四轮独立驱动、四轮独立制动、四轮独立转向、四轮独立悬架的整车级预研工作。该架构打破了传统集中式底盘的约束，为整车动力学控制提供更高自由度。'
        },
        {
          type: 'heading',
          text: '个人参与'
        },
        {
          type: 'bullets',
          items: [
            '负责整车控制及扭矩管理子系统软件开发，完成相关软件方案设计、开发及验证',
            '参与分布式执行器架构下整车扭矩管理及多执行器协同控制方案研究',
            '输出相关技术成果并形成 2 项已公开发明专利'
          ]
        },
        {
          type: 'heading',
          text: '专利成果一'
        },
        {
          type: 'text',
          body: '《车辆制动降级安全控制方法、车辆及存储介质》（CN122626698A）——属于智能驾驶技术领域。该方法可应用于智能驾驶场景中：当车辆处于行车挡位且发生制动降级并存在非预期移动趋势时，触发主动安全控制模式；在主动安全控制模式下，确定用于抑制非预期移动趋势的总需求扭矩，并将总需求扭矩分配至多个驱动电机。'
        },
        {
          type: 'text',
          body: '该专利实现了对动态行驶中制动能力不足的车辆的主动稳车控制，提高车辆安全性和稳定性，同时为自动驾驶及辅助驾驶功能提供可靠的控制支持。'
        },
        {
          type: 'image',
          src: '/assets/images/patent1-brake-degradation.jpg',
          caption: 'CN122626698A 制动降级安全控制方法'
        },
        {
          type: 'heading',
          text: '专利成果二'
        },
        {
          type: 'text',
          body: '《车辆控制方法、用电设备、存储介质及程序产品》（CN122501391A）——应用于车辆安全与车辆控制技术领域，旨在解决驾驶员前方视野丧失时如何保证驾驶安全以实现车辆的智能驾驶。'
        },
        {
          type: 'bullets',
          items: [
            '获取部件状态信号、行驶状态信号和驾驶员动作信号，基于信号集合确定车辆工况',
            '基于工况确定对应的控制策略，并基于控制策略控制车辆行驶和/或显示辅助驾驶信息',
            '辅助驾驶信息包括车辆周边区域的实时影像和/或告警提示，实时影像用于提供被遮挡区域的视野',
            '当驾驶员状态满足预设条件时，释放对车辆的行驶控制'
          ]
        },
        {
          type: 'image',
          src: '/assets/images/patent2-vehicle-control.jpg',
          caption: 'CN122501391A 车辆控制方法与智能驾驶'
        }
      ]
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
