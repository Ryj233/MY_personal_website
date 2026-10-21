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
      subtitle: 'MBD工程化工具｜独立开发',
      description: '针对汽车电子MBD开发中实车数据回放信号配置不统一、排查效率低、验证可靠性不足等问题，独立设计自动化接口转换脚本工具，实现信号类型自动识别、自动配置与缺失信号处理，支撑子系统级仿真验证与问题复现。',
      tags: ['MBD', '数据回放', '自动化工具', '独立开发'],
      slug: 'mbd-data-replay',
      cover: '/assets/images/cover-mbd-replay.png',
      sections: [
        {
          type: 'heading',
          text: '项目背景'
        },
        {
          type: 'text',
          body: '在汽车电子 MBD 开发中，实车数据回放是模型验证的关键环节，但现有流程存在信号配置不统一、排查效率低、验证结果不可靠等问题。现有实车数据回放仿真流程包括总线数据转换、数据文件导入、模型子系统输入信号处理和仿真。其中，工程师在信号处理环节需人工识别输入信号来源（接收/发送类报文）、判断是否需要取反、校验默认值，并根据结果手动配置工作区输入模块、常量模块、类型转换模块等。对于单元级或子系统级仿真，输入信号往往接近两百个，仅靠报文分析无法快速定位问题，人工配置不仅耗时，且容易因信号缺失或映射错误影响验证可靠性。'
        },
        {
          type: 'heading',
          text: '方案设计与流程优化'
        },
        {
          type: 'bullets',
          items: [
            '在现有手动配置流程基础上，设计了自动化接口转换脚本工具，实现一键更新接口',
            '拓展信号配置表，新增发送报文标识、数据文件信号名称、是否需逻辑取反等字段，以支持接口映射和特殊逻辑处理'
          ]
        },
        {
          type: 'heading',
          text: '开发自动化接口转换工具'
        },
        {
          type: 'bullets',
          items: [
            '使用建模仿真平台自带的界面设计工具设计工具界面',
            '工具分为五个部分：数据加载提示、配置表加载导入、输入信号选中判断、输入信号预设存在性判断、输入信号类型识别与处理'
          ]
        },
        {
          type: 'heading',
          text: '实现信号类型自动识别与配置'
        },
        {
          type: 'bullets',
          items: [
            '根据配置表中"信号来源"和"发送报文标识"字段是否含特定报文标识前缀，判断信号应配置为工作区动态输入模块（用于动态回放）还是常量模块（用于固定参数）',
            '对需要取反的信号（如某有效位信号）自动创建逻辑取反模块',
            '对组合解析信号（如某状态组合信号）进行特殊处理，通过判断位域组合还原信号值'
          ]
        },
        {
          type: 'heading',
          text: '建立信号完整性与缺失处理机制'
        },
        {
          type: 'bullets',
          items: [
            '检查输入信号是否存在于预设配置表中，若不存在则提示用户补充或校验',
            '当工作空间中缺少某信号变量时，脚本自动创建该信号并赋予默认时间序列和默认值，同时以警告形式提醒工程师核查'
          ]
        }
      ]
    },
    {
      id: 8,
      title: '应用层模型自动化轻量化工具（独立开发）',
      subtitle: 'MBD工程化工具｜独立开发',
      description: '面向 ECU 应用层单元测试流程，独立开发 MATLAB Script 自动化工具链，覆盖模型拆解、配置更新、自动编译、文件汇总及设计说明书批量下载，将人工操作时间由约 60min 缩短至 5min，单次处理效率提升约 12 倍。',
      tags: ['MATLAB Script', '自动化工具链', '效率提升12x', '独立开发'],
      slug: 'model-lightweight-tool',
      cover: '/assets/images/cover-model-lightweight.png',
      sections: [
        {
          type: 'heading',
          text: '开发背景'
        },
        {
          type: 'text',
          body: '在汽车电子及嵌入式软件开发中，ECU 应用层单元测试（Flash 测试与运行时间测试）流程涉及大量重复性手工操作，包括从大模型拆解单元、修改配置、编译汇总文件以及下载多版本文档等。这些操作不仅耗时费力，还容易因人为疏忽导致错误，同时多分支版本的文档管理也较为复杂。为提高效率、减少人为差异，开发了该自动化脚本。'
        },
        {
          type: 'heading',
          text: '单元运行时间测试自动化'
        },
        {
          type: 'bullets',
          items: [
            '开发脚本实现一键将大模型中各单元子系统类型修改为原子子系统并命名，替代手动逐个修改的操作',
            '保存、运行模型及处理代数环问题仍需手动完成，脚本负责核心的类型转换环节'
          ]
        },
        {
          type: 'heading',
          text: '单元 Flash 测试的大模型拆解'
        },
        {
          type: 'bullets',
          items: [
            '提供两种从大模型拆解单元模型的方式：按模型层级、按 Model Info',
            '在指定路径下生成拆分后的单元模型文件'
          ]
        },
        {
          type: 'heading',
          text: '配置文件处理与更新'
        },
        {
          type: 'bullets',
          items: [
            '根据测试资源统计要求修改配置文件',
            '导出配置 MAT 文件（命名与配置文件保持一致）',
            '通过选择配置文件对单元模型进行配置更新'
          ]
        },
        {
          type: 'heading',
          text: '自动编译与文件汇总'
        },
        {
          type: 'bullets',
          items: [
            '选择配置更新后的模型进行自动编译',
            '自动汇总生成的 .c、.h 文件',
            '在当前工作空间路径下生成 ert_rtw 及 out 汇总文件夹'
          ]
        },
        {
          type: 'heading',
          text: '单元设计说明书批量下载'
        },
        {
          type: 'bullets',
          items: [
            '通过选择 Git 本地仓库地址自动生成分支列表',
            '保留关注分支后，根据列表批量下载各分支最新的单元设计说明书'
          ]
        }
      ]
    },
    {
      id: 9,
      title: '体系文件自动合成工具（独立开发）',
      subtitle: '工程效率工具｜独立开发',
      description: '面向应用层单元软件开发体系文件编制流程，独立开发 Python GUI 自动化合并脚本工具，预处理 + 合并两步执行，支持 Word/WPS 批量合并、多级编号、异常报告，将人工合成时间由约 3h 缩短至 20min。',
      tags: ['Python', '自动化', '文档合成', '效率提升9x', '独立开发'],
      slug: 'doc-merger-tool',
      cover: '/assets/images/cover-doc-merger.png',
      sections: [
        {
          type: 'heading',
          text: '项目背景'
        },
        {
          type: 'text',
          body: '应用层单元软件开发体系文件在编制过程中，需要开发人员手动合并各单元设计说明书并进行格式处理。由于文件内容多、软件经常卡顿，耗费了大量时间。为优化这一流程，开发了自动化合并脚本工具。'
        },
        {
          type: 'heading',
          text: '工具整体设计'
        },
        {
          type: 'bullets',
          items: [
            '开发了"Combination_unit"单元设计说明书合并工具，用于批量处理 Word 文档，将多个原始单元文档预处理后合并到一个汇总模板中',
            '工具分两步执行：第一步是单元文档预处理，第二步是文档合并，以降低内存占用和软件崩溃概率'
          ]
        },
        {
          type: 'heading',
          text: '预处理环节'
        },
        {
          type: 'bullets',
          items: [
            '支持选择办公软件（Microsoft Office 或 WPS）、原始单元文档文件夹、预处理输出文件夹等',
            '自动识别单元设计说明书中的"单元概况"小节，兼容"单元概述""单元简介""单元介绍"等命名变体',
            '根据文件名提取项目名称作为一级标题，并对文档标题进行降级处理',
            '支持多种处理顺序（按文件名升序/降序或手动顺序）'
          ]
        },
        {
          type: 'heading',
          text: '合并环节'
        },
        {
          type: 'bullets',
          items: [
            '选择汇总模板文件（体系文件模板），并删除模板中目录页后的原有标题',
            '将预处理后的文档按指定顺序合并，并统一设置多级编号',
            '提供合并报告和输出文件夹快速查看功能'
          ]
        },
        {
          type: 'heading',
          text: '通用设置与性能优化'
        },
        {
          type: 'bullets',
          items: [
            '包含日志控制、批量处理数量设置等，确保程序运行稳定',
            '支持强制关闭办公软件进程、保存临时文件（调试用）等选项',
            '采用面向对象设计：DocumentMergerGUI、ManualOrderDialog、UnitDocumentPreprocessor、TemplateMerger 等类',
            '使用 tkinter 构建界面，通过 win32com.client 操作 Word/WPS，利用线程和 COM 初始化/释放机制防止界面卡死和崩溃'
          ]
        },
        {
          type: 'heading',
          text: '异常处理与报告'
        },
        {
          type: 'bullets',
          items: [
            '预处理和合并过程中，每个失败文档均记录原因，生成报告便于排查问题',
            '脚本设置了各级标题的字体、字号、加粗等样式，并支持在合并后手动调整编号起始值或样式',
            '用户可自定义处理顺序、导出顺序文件、查看报告，并可在合并前修改模板信息，合并后按点检表核查文件，最终导出 PDF 会签'
          ]
        }
      ]
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
