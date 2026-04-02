export interface Product {
  id: string
  name: string
  tag: string
  series: string
  description: string
  features?: string[]
  images: string[]
  price?: string
}

export const allProducts: Product[] = [
  // ── GR 系列 ──
  {
    id: 'gr01-lite',
    name: 'Neme GR01 Lite',
    tag: '科研教育',
    series: 'Neme GR 系列',
    description: '轻量化双臂机器人，旨在降低前沿算法验证门槛。全面支持 ROS/ROS2 开源生态，开放底层 API 与运动控制接口。',
    features: ['开源生态支持', '算法验证平台', '视觉传感器适配', '灵活接口调用'],
    images: ['/images/Picture1.png'],
  },
  {
    id: 'gr01',
    name: 'Neme GR01',
    tag: '工业物流',
    series: 'Neme GR 系列',
    description: '轮臂式可升降结构，专为工业仓储优化。具备高精度 SLAM 导航与自主避障，覆盖不同高度货架的货物上下架任务。',
    features: ['智能升降机构', '自主避障导航', '工业级负载', '全天候作业'],
    images: ['/images/Picture3.png'],
  },
  {
    id: 'gr01-pro',
    name: 'Neme GR01 Pro',
    tag: '商务服务',
    series: 'Neme GR 系列',
    description: '配备交互胸屏与多模态交互系统。适用于企业前台、博物馆导览解说，提供优雅的外观设计与品牌定制化服务。',
    features: ['情感交互系统', '智能导览解说', '业务咨询自动', '品牌定制外观'],
    images: ['/images/Picture2.png'],
  },
  {
    id: 'gr00',
    name: 'Neme GR00',
    tag: '无人运送',
    series: 'Neme GR 系列',
    description: '高效无人运送车，具备强大的自主路径规划能力。专为室内外物流转运设计，实现物料的自动化精准配送。',
    features: ['自主路径规划', '室内外通用', '精准配送能力', '模块化载货区'],
    images: ['/images/Picture4.png'],
  },
  // ── GRGO 系列 ──
  {
    id: 'grgo-mini',
    name: 'GRGO Mini',
    tag: '家庭陪伴款',
    series: 'Neme GRGO 系列',
    description: '轻巧灵动，具备智能语音交互与自动避障。能够识别家庭成员，提供生活提醒、娱乐互动，是理想的科技宠物与智慧生活助手。',
    images: ['/images/Picture5.png'],
  },
  {
    id: 'grgo-pro',
    name: 'GRGO Pro',
    tag: '安防巡检款',
    series: 'Neme GRGO 系列',
    description: '搭载高清红外摄像头与环境传感器，具备全天候自主导航能力。适用于工业园区、变电站等复杂场景的 24/7 自动化安防巡逻。',
    images: ['/images/Picture6.png'],
  },
  {
    id: 'grgo-max',
    name: 'GRGO Max',
    tag: '重型工业款',
    series: 'Neme GRGO 系列',
    description: '高负载、高稳定性设计，可在崎岖地形下稳定运输重型物资。广泛应用于建筑工地、物流中转及应急救援等高强度作业环境。',
    images: ['/images/Picture9.png'],
  },
  {
    id: 'grgo-air',
    name: 'GRGO Air',
    tag: '教育科研款',
    series: 'Neme GRGO 系列',
    description: '开放底层 API 接口，全面支持 ROS/ROS2 生态。为高校和研究机构提供高性能的算法验证平台，助力足式机器人运动控制与感知研究。',
    images: ['/images/Picture7.png'],
  },
  {
    id: 'grgo-s',
    name: 'GRGO S',
    tag: '更好灵活性',
    series: 'Neme GRGO 系列',
    description: '采用先进足端设计与运控算法，具备更好的全向移动能力，在前后移动上有更好的优势。',
    images: ['/images/Picture8.png'],
  },
  // ── GR H 系列 ──
  {
    id: 'grh1',
    name: 'Neme GR H1',
    tag: '通用人形平台',
    series: 'Neme GR H 系列',
    description: '大型足式人形机器人，代表 Neme 核心研发实力。具备复杂地形适应能力与高动态平衡控制，面向未来通用作业场景。',
    features: ['高动态平衡控制算法', '复杂地形自主导航', '模块化关节驱动设计'],
    images: ['/images/Picture10.png'],
  },
  {
    id: 'grh-mini',
    name: 'Neme GR H Mini',
    tag: '家庭陪伴人形',
    series: 'Neme GR H 系列',
    description: '轻量化足式人形机器人，专为家庭环境优化。具备情感交互能力与轻量化作业能力，是探索家庭陪伴场景的重要产品尝试。',
    features: ['情感交互与语音识别', '室内环境自主避障', '安全的人机协作设计'],
    images: ['/images/Picture11.png'],
  },
  // ── DexGrasp 系列 ──
  {
    id: 'dga-air',
    name: 'DGA Air 机械臂',
    tag: 'DexGrasp',
    series: 'DexGrasp 系列',
    description: '专为教育科研场景优化的轻量化机械臂。支持 ROS2 生态，具备极高的手眼协同灵活性，是算法验证与教学演示的理想平台。',
    features: ['轻量化碳纤维结构', '毫米级重复定位精度', '开放式 API 接口'],
    images: ['/images/Picture12.png'],
  },
  {
    id: 'dgh5',
    name: 'DGH5 五指灵巧手',
    tag: 'DexGrasp',
    series: 'DexGrasp 系列',
    description: '高度仿真人类手部结构，具备多自由度驱动。集成触觉反馈传感器，可执行抓取细小物体、弹奏乐器等极高难度的精密任务。',
    features: ['仿生关节设计', '高灵敏触觉阵列', '复杂手势自主规划'],
    images: ['/images/Picture13.png'],
  },
  {
    id: 'dgr',
    name: 'DGR 工业级夹爪',
    tag: 'DexGrasp',
    series: 'DexGrasp 系列',
    description: '二指与三指结构可选，具备高强度抓取力。适用于产线自动化装配、物料分拣及复杂地形下的物资稳固抓取。',
    features: ['工业级防护等级', '力矩自适应控制', '快速更换接口设计'],
    images: ['/images/Picture14.png', '/images/Picture15.png'],
  },
]
