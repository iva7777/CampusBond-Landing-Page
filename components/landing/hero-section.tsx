"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowDown, Sparkles } from "lucide-react"
import Link from "next/link"
import LottieAnimation from "./lottie-animation"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-b from-[#E0F7FA] via-[#B2EBF2] to-background">
      {/* Animated clouds */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-32 h-16 bg-white rounded-full opacity-80"
          animate={{ x: [0, 30, 0], y: [0, -10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-40 right-20 w-48 h-20 bg-white rounded-full opacity-70"
          animate={{ x: [0, -40, 0], y: [0, 15, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-60 left-1/4 w-24 h-12 bg-white rounded-full opacity-60"
          animate={{ x: [0, 20, 0], y: [0, -8, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-40 right-1/3 w-36 h-14 bg-white rounded-full opacity-50"
          animate={{ x: [0, -25, 0], y: [0, 12, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-48 bg-linear-to-t from-[#1A535C]/20 to-transparent" />
      <div className="container mx-auto px-4 pt-24 pb-16 md:pb-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center items-center">
            <LottieAnimation />
          </div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold text-[#096271] mb-4 tracking-tight"
          >
            CampusBond
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-xl md:text-2xl text-foreground font-medium mb-6 uppercase"
          >
            Твоят дигитален кампус
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Направи студентския си живот по-балансиран с CampusBond – срещай нови колеги, 
            откривай събития и учи по-лесно чрез споделените материали.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >

            <Link href="#download">
              <Button
                size="lg"
                className="bg-[#096271] hover:bg-primary/90 hover:cursor-pointer text-primary-foreground rounded-full px-8 py-6 text-lg font-semibold 
                shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Присъедини се сега
              </Button>
            </Link>

            <Link href="#features">
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8 py-6 text-lg font-semibold border-2 border-[#096271] text-[#096271] hover:cursor-pointer hover:bg-[#0d798b] 
                hover:text-primary-foreground transition-all duration-300"
              >
                Научи повече
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="mt-16"
          >
            <Link href="#features">
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-flex flex-col items-center text-[#096271] cursor-pointer hover:text-primary transition-colors"
              >
                <span className="text-sm font-medium mb-2">Продължи напред</span>
                <ArrowDown className="w-6 h-6" />
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
