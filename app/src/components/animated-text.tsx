"use client"

import { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"

interface AnimatedTextProps {
  text: string
  className?: string
  once?: boolean
  delay?: number
}

const AnimatedText = ({ text, className = "", once = true, delay = 0 }: AnimatedTextProps) => {
  const controls = useAnimation()

  useEffect(() => {
    const animateText = async () => {
      await new Promise((resolve) => setTimeout(resolve, delay * 1000))
      await controls.start("visible")

      if (!once) {
        setTimeout(async () => {
          await controls.start("hidden")
          setTimeout(() => {
            animateText()
          }, 2000)
        }, 4000)
      }
    }

    animateText()
  }, [controls, once, delay])

  const words = text.split(" ")

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.04,
      },
    },
  }

  const child = {
    hidden: {
      opacity: 0,
      y: 20,
      rotateX: -90,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  }

  return (
    <motion.div
      className={`flex w-full flex-wrap justify-center ${className}`}
      variants={container}
      initial="hidden"
      animate={controls}
    >
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          className="mr-4 inline-block"
          variants={child}
          style={{ transformOrigin: "50% 50%" }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  )
}

export default AnimatedText
