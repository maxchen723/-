import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'

const solutions = [
  {
    title: '工业巡检与安全监控',
    subtitle: '常态化、无人化巡检方案，提升工业生产安全与运维效率',
    points: [
      {
        heading: '全天候自动巡检',
        text: '利用 GRGO 机器狗的卓越地形适应能力，在电力、化工、矿山等高危环境中执行 7x24h 自动巡检，替代人工进入危险区域。',
      },
      {
        heading: '异常智能识别',
        text: '基于 AI 视觉算法，自动识别表计读数、设备漏油、异物侵入及人员未佩戴安全帽等违规行为，并实时推送预警。',
      },
      {
        heading: '多维环境监测',
        text: '集成红外热成像、气体传感器等，实时监测设备温度异常及有害气体泄漏，防患于未然。',
      },
    ],
    value: '降低 80% 以上的人工巡检风险，提升 50% 的故障发现及时率，实现工业运维的数字化转型。',
    scene: '变电站与化工厂的智能化常态巡检',
  },
  {
    title: '仓储物流与 IDC 运维',
    subtitle: '赋能海外仓、前置仓及数据中心的高效、安全、智能化作业',
    points: [
      {
        heading: '智慧仓储物流方案',
        text: '通过 GR01 轮臂机器人与 GR00 无人运送车的深度协同，实现从入库、盘点到出库的全流程自动化。特性：货物自动上下架、厘米级高精度定位、动态路径规划、7x24h 连续作业。',
      },
      {
        heading: 'IDC 数据中心运维方案',
        text: '利用 GR01 的交互能力与 GRGO 的全地形巡检能力，实现 IDC 机房的常态化巡检、资产自动盘点及环境异常实时预警。特性：设备状态自动识别、资产 RFID 自动盘点、温湿度场实时建模、异常故障快速定位。',
      },
    ],
    value: '通过多机协同与 Masrobo 智能调度，提升作业效率，同时大幅降低人力成本与安全风险。',
    scene: undefined,
  },
  {
    title: '智慧零售与药房方案',
    subtitle: '解决补货、分拣、盘点痛点，提升终端运营效率',
    points: [
      {
        heading: '人工成本攀升',
        text: '药房分拣与零售补货依赖大量重复性人力，成本居高不下。',
      },
      {
        heading: '作业差错率',
        text: '高频次、小件化的分拣任务极易产生人为疏忽，影响库存准确性。',
      },
      {
        heading: '夜间作业受限',
        text: '传统模式难以支持 24/7 连续作业，影响前置仓与药房的响应速度。',
      },
    ],
    value: 'GR01 轮臂机器人自主补货、DGH 灵巧手精准抓取药品、VLA 模型实现复杂商品识别、Masrobo 平台实时库存盘点。',
    scene: '药房自动分拣系统与零售门店补货作业',
  },
]

export default function Solutions() {
  return (
    <section id="solutions" className="relative py-24 px-6">
      {/* Section divider glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <SectionTitle title="行业方案" subtitle="面向工业、物流、零售等核心场景的智能解决方案" />

        <div className="space-y-10">
          {solutions.map((sol, idx) => (
            <motion.div
              key={sol.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="glass-card overflow-hidden"
            >
              <div className="flex flex-col lg:flex-row">
                {/* Left: Content */}
                <div className="flex-1 p-8 md:p-10">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{sol.title}</h3>
                  <p className="text-text-secondary text-sm mb-6">{sol.subtitle}</p>

                  <div className="space-y-4 mb-6">
                    {sol.points.map((pt) => (
                      <div key={pt.heading}>
                        <h4 className="text-sm font-semibold text-white mb-1 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                          {pt.heading}
                        </h4>
                        <p className="text-text-secondary text-sm leading-relaxed pl-4">{pt.text}</p>
                      </div>
                    ))}
                  </div>

                  {/* Value */}
                  <div className="rounded-xl bg-primary/[0.06] border border-primary/10 p-4 mb-4">
                    <p className="text-xs text-text-tertiary mb-1">核心价值</p>
                    <p className="text-sm text-text-secondary">{sol.value}</p>
                  </div>

                  {sol.scene && (
                    <p className="text-xs text-text-tertiary">
                      <span className="text-primary">应用场景：</span>{sol.scene}
                    </p>
                  )}
                </div>

                {/* Right: Image placeholder */}
                <div className="lg:w-[400px] flex-shrink-0 bg-gradient-to-br from-[#0a1628] to-[#060d1a] flex items-center justify-center p-10 min-h-[240px]">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-3 rounded-2xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center">
                      <svg className="w-8 h-8 text-text-tertiary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span className="text-text-tertiary text-xs">方案示意图</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
