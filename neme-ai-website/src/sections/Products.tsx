import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'
import ProductCard from '../components/ProductCard'

/* ─── Data ─── */

const grSeries = [
  {
    name: 'Neme GR01 Lite',
    label: '科研教育',
    description: '轻量化双臂机器人，旨在降低前沿算法验证门槛。全面支持 ROS/ROS2 开源生态，开放底层 API 与运动控制接口。',
    features: ['开源生态支持', '算法验证平台', '视觉传感器适配', '灵活接口调用'],
    images: ['/images/Picture1.png'],
  },
  {
    name: 'Neme GR01',
    label: '工业物流',
    description: '轮臂式可升降结构，专为工业仓储优化。具备高精度 SLAM 导航与自主避障，覆盖不同高度货架的货物上下架任务。',
    features: ['智能升降机构', '自主避障导航', '工业级负载', '全天候作业'],
    images: ['/images/Picture3.png'],
  },
  {
    name: 'Neme GR01 Pro',
    label: '商务服务',
    description: '配备交互胸屏与多模态交互系统。适用于企业前台、博物馆导览解说，提供优雅的外观设计与品牌定制化服务。',
    features: ['情感交互系统', '智能导览解说', '业务咨询自动', '品牌定制外观'],
    images: ['/images/Picture2.png'],
  },
  {
    name: 'Neme GR00',
    label: '无人运送',
    description: '高效无人运送车，具备强大的自主路径规划能力。专为室内外物流转运设计，实现物料的自动化精准配送。',
    features: ['自主路径规划', '室内外通用', '精准配送能力', '模块化载货区'],
    images: ['/images/Picture4.png'],
  },
]

const grgoSeries = [
  {
    name: 'GRGO Mini',
    label: '家庭陪伴款',
    description: '轻巧灵动，具备智能语音交互与自动避障。能够识别家庭成员，提供生活提醒、娱乐互动，是理想的科技宠物与智慧生活助手。',
    images: ['/images/Picture5.png'],
  },
  {
    name: 'GRGO Pro',
    label: '安防巡检款',
    description: '搭载高清红外摄像头与环境传感器，具备全天候自主导航能力。适用于工业园区、变电站等复杂场景的 24/7 自动化安防巡逻。',
    images: ['/images/Picture6.png'],
  },
  {
    name: 'GRGO Max',
    label: '重型工业款',
    description: '高负载、高稳定性设计，可在崎岖地形下稳定运输重型物资。广泛应用于建筑工地、物流中转及应急救援等高强度作业环境。',
    images: ['/images/Picture9.png'],
  },
  {
    name: 'GRGO Air',
    label: '教育科研款',
    description: '开放底层 API 接口，全面支持 ROS/ROS2 生态。为高校和研究机构提供高性能的算法验证平台，助力足式机器人运动控制与感知研究。',
    images: ['/images/Picture7.png'],
  },
  {
    name: 'GRGO S',
    label: '更好灵活性',
    description: '采用先进足端设计与运控算法，具备更好的全向移动能力，在前后移动上有更好的优势。',
    images: ['/images/Picture8.png'],
  },
]

const grhSeries = [
  {
    name: 'Neme GR H1',
    label: '通用人形平台',
    description: '大型足式人形机器人，代表 Neme 核心研发实力。具备复杂地形适应能力与高动态平衡控制，面向未来通用作业场景。',
    features: ['高动态平衡控制算法', '复杂地形自主导航', '模块化关节驱动设计'],
    images: ['/images/Picture10.png'],
  },
  {
    name: 'Neme GR H Mini',
    label: '家庭陪伴人形',
    description: '轻量化足式人形机器人，专为家庭环境优化。具备情感交互能力与轻量化作业能力，是探索家庭陪伴场景的重要产品尝试。',
    features: ['情感交互与语音识别', '室内环境自主避障', '安全的人机协作设计'],
    images: ['/images/Picture11.png'],
  },
]

const dexgraspSeries = [
  {
    name: 'DGA Air 机械臂',
    label: undefined,
    description: '专为教育科研场景优化的轻量化机械臂。支持 ROS2 生态，具备极高的手眼协同灵活性，是算法验证与教学演示的理想平台。',
    features: ['轻量化碳纤维结构', '毫米级重复定位精度', '开放式 API 接口'],
    images: ['/images/Picture12.png'],
  },
  {
    name: 'DGH5 五指灵巧手',
    label: undefined,
    description: '高度仿真人类手部结构，具备多自由度驱动。集成触觉反馈传感器，可执行抓取细小物体、弹奏乐器等极高难度的精密任务。',
    features: ['仿生关节设计', '高灵敏触觉阵列', '复杂手势自主规划'],
    images: ['/images/Picture13.png'],
  },
  {
    name: 'DGR 工业级夹爪',
    label: undefined,
    description: '二指与三指结构可选，具备高强度抓取力。适用于产线自动化装配、物料分拣及复杂地形下的物资稳固抓取。',
    features: ['工业级防护等级', '力矩自适应控制', '快速更换接口设计'],
    images: ['/images/Picture14.png', '/images/Picture15.png'],
  },
]

const masroboCapabilities = [
  {
    icon: '🔍',
    title: '多模态感知融合',
    desc: '3D 高精度建模与语义理解',
  },
  {
    icon: '⚙️',
    title: '跨平台运动控制',
    desc: '一套算法适配轮式、足式、人形及灵巧手',
  },
  {
    icon: '🧠',
    title: '自主任务规划',
    desc: '基于 VLA 大模型实现长序列任务自主拆解',
  },
]

/* ─── Sub-section component ─── */

function SubSection({
  id,
  title,
  subtitle,
  note,
  children,
}: {
  id: string
  title: string
  subtitle: string
  note?: string
  children: React.ReactNode
}) {
  return (
    <div id={id} className="mb-24 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">{title}</h3>
        <p className="text-text-secondary text-sm md:text-base max-w-3xl">{subtitle}</p>
      </motion.div>
      {children}
      {note && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 text-text-tertiary text-sm text-center max-w-3xl mx-auto"
        >
          {note}
        </motion.p>
      )}
    </div>
  )
}

/* ─── Main Products Section ─── */

export default function Products() {
  return (
    <section id="products" className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="产品中心"
          subtitle="Product Panorama — Neme Industry (工业/科研)"
        />

        {/* 3.1 GR Series */}
        <SubSection
          id="products-gr"
          title="Neme GR — GR Number 系列"
          subtitle="多模态移动作业平台"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {grSeries.map((p) => (
              <ProductCard key={p.name} {...p} />
            ))}
          </div>
        </SubSection>

        {/* 3.2 GRGO Series */}
        <SubSection
          id="products-grgo"
          title="Neme GRGO 系列"
          subtitle={'从家庭陪伴到工业装载，满足多样化应用需求的\u201C机械狗\u201D家族'}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {grgoSeries.slice(0, 3).map((p) => (
              <ProductCard key={p.name} {...p} />
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 max-w-3xl mx-auto">
            {grgoSeries.slice(3).map((p) => (
              <ProductCard key={p.name} {...p} />
            ))}
          </div>
        </SubSection>

        {/* 3.3 GR H Series */}
        <SubSection
          id="products-grh"
          title="Neme GR H 系列"
          subtitle="展示足式运动控制实力，探索通用人形机器人的无限可能"
          note="Neme 持续跟进前沿足式技术，通过 GR H 系列的研发，不断突破通用人形机器人的技术边界。"
        >
          <div className="flex items-start gap-2 mb-6">
            <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
              行业技术跟进
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {grhSeries.map((p) => (
              <ProductCard key={p.name} {...p} />
            ))}
          </div>
        </SubSection>

        {/* 3.4 DexGrasp Series */}
        <SubSection
          id="products-dexgrasp"
          title="DexGrasp 系列"
          subtitle="赋予机器人近乎人类的作业能力与工业级稳定性"
          note={'通过 Masrobo 大脑的深度集成，DexGrasp 系列可无缝适配 GR 系列移动底盘，实现\u201C移动+作业\u201D的复合型任务处理。'}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {dexgraspSeries.map((p) => (
              <ProductCard key={p.name} {...p} />
            ))}
          </div>
        </SubSection>

        {/* 3.5 Masrobo */}
        <div id="products-masrobo" className="mb-24 scroll-mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden"
          >
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.08] via-transparent to-primary/[0.04]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/[0.08] rounded-full blur-[100px]" />

            <div className="relative glass-card p-10 md:p-16 text-center">
              <span className="inline-block text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 mb-6">
                全系产品的通用技术底座
              </span>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Masrobo 智能大脑</h3>
              <p className="text-text-secondary text-base md:text-lg mb-12 max-w-2xl mx-auto">
                一套大脑驱动全系硬件，实现端到端智能
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {masroboCapabilities.map((cap) => (
                  <motion.div
                    key={cap.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass-card p-6 text-center"
                  >
                    <div className="text-3xl mb-4">{cap.icon}</div>
                    <h4 className="text-white font-semibold mb-2">{cap.title}</h4>
                    <p className="text-text-secondary text-sm">{cap.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
