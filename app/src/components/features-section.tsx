"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Coins, TrendingUp, Shield, Zap } from "lucide-react"
import "./features-section.css"

const FeaturesSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const features = [
    {
      icon: Coins,
      title: "Liquid Staking",
      description: "Stake without losing liquidity, enabling yield generation and DeFi participation",
      color: "from-amber-400 to-yellow-500",
    },
    {
      icon: TrendingUp,
      title: "Yield Solutions",
      description: "Innovative mechanisms to maximize returns within the DeFi ecosystem",
      color: "from-orange-400 to-amber-500",
    },
    {
      icon: Shield,
      title: "Security & Transparency",
      description: "Robust safeguards with open communication and community trust",
      color: "from-yellow-400 to-amber-400",
    },
    {
      icon: Zap,
      title: "High Performance",
      description: "Built on Sui's high-speed, low-cost blockchain infrastructure",
      color: "from-amber-500 to-orange-500",
    },
  ]

  return (
    <section ref={ref} className="features-section relative z-10 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="features-title mb-6 font-poetsen text-4xl font-bold md:text-5xl">Our Products</h2>
          <p className="mx-auto max-w-2xl text-lg text-amber-100/80">
            We are developing a comprehensive suite of DeFi products to empower users
          </p>
        </motion.div>

        <div className="features-grid grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              className="feature-item"
            >
              <div className="feature-icon-container">
                <div className={`feature-icon-bg bg-gradient-to-br ${feature.color}`}>
                  <feature.icon className="feature-icon" size={32} />
                </div>
              </div>

              <h3 className="feature-item-title">{feature.title}</h3>
              <p className="feature-item-description">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
