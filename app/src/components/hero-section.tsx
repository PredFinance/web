"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import AnimatedText from "@/components/animated-text"
import "./hero-section.css"

const HeroSection = () => {
  return (
    <section className="hero-section relative z-10 flex min-h-screen items-center justify-center">
      <div className="container mx-auto flex flex-col items-center justify-center px-4 py-16 text-center">
        {/* Logo Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotateY: 180 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{
            duration: 1.2,
            type: "spring",
            stiffness: 100,
            delay: 0.2,
          }}
          className="mb-8"
        >
          <div className="logo-container">
            <Image
              src="/wheatchain-logo.jpg"
              alt="WheatChain Protocol Logo"
              width={250}
              height={250}
              className="logo-image"
            />
          </div>
        </motion.div>

        {/* Main Title with Advanced Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-6"
        >
          <h1 className="hero-title font-poetsen text-6xl font-bold tracking-tight md:text-8xl lg:text-9xl">
            <AnimatedText text="WheatChain" className="wheat-text" />
            <AnimatedText text="Protocol" className="protocol-text" delay={0.5} />
          </h1>
        </motion.div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mb-8"
        >
          <p className="tagline mx-auto max-w-3xl text-xl font-medium text-amber-100/90 md:text-2xl">
            A modular DeFi platform on Sui, offering liquid staking and innovative yield-generating solutions
          </p>
        </motion.div>

        {/* SUI Integration with Enhanced Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 1.5,
            type: "spring",
            stiffness: 120,
          }}
          className="mb-12"
        >
          <div className="sui-integration">
            <motion.p
              className="mb-4 text-sm font-medium text-amber-200"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              Built on
            </motion.p>
            <motion.div whileHover={{ scale: 1.1, rotateY: 10 }} transition={{ type: "spring", stiffness: 300 }}>
              <Image src="/sui-logo.png" alt="SUI Blockchain Logo" width={140} height={70} className="sui-logo" />
            </motion.div>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="mb-16 flex flex-col gap-4 sm:flex-row"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="cta-primary px-8 py-6 text-lg font-bold">Explore Protocol</Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="https://suiscan.xyz/mainnet/directory/WheatChain" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="cta-secondary px-8 py-6 text-lg font-bold">
                View on Suiscan
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
