"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import "./about-section.css"

const AboutSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} className="about-section relative z-10 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl text-center"
        >
          <motion.h2
            className="about-title mb-8 font-poetsen text-4xl font-bold md:text-5xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Redefining DeFi on Sui
          </motion.h2>

          <motion.div
            className="about-content space-y-6 text-lg leading-relaxed text-amber-100/90"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <p className="about-paragraph">
              WheatChain Protocol is a modular decentralized finance (DeFi) ecosystem built on the Sui blockchain. Our
              mission is to redefine user interaction with DeFi by delivering powerful, permissionless tools that are
              both rewarding and accessible.
            </p>

            <motion.div
              className="about-features grid gap-6 md:grid-cols-2"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="feature-card">
                <h3 className="feature-title mb-2 text-xl font-semibold text-amber-300">Modularity</h3>
                <p className="feature-description">
                  Building components that function independently or integrate seamlessly
                </p>
              </div>

              <div className="feature-card">
                <h3 className="feature-title mb-2 text-xl font-semibold text-amber-300">Community-Driven</h3>
                <p className="feature-description">
                  Prioritizing user feedback and participation in protocol development
                </p>
              </div>

              <div className="feature-card">
                <h3 className="feature-title mb-2 text-xl font-semibold text-amber-300">Security First</h3>
                <p className="feature-description">Ensuring robust safeguards and transparent communication</p>
              </div>

              <div className="feature-card">
                <h3 className="feature-title mb-2 text-xl font-semibold text-amber-300">Innovation</h3>
                <p className="feature-description">Contributing to Sui ecosystem growth and DeFi innovation</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection
