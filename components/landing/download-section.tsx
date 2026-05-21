"use client"

import { motion } from "framer-motion"
import { QRCodeSVG } from "qrcode.react"
import { Smartphone, Apple } from "lucide-react"
import { Button } from "@/components/ui/button"

export function DownloadSection() {
  return (
    <section className="py-24 bg-linear-to-b from-background to-[#E0F7FA]/30 relative overflow-hidden">
      <motion.div
        className="absolute top-20 left-20 w-16 h-16 bg-primary/20 rounded-full"
        animate={{ y: [0, -20, 0], rotate: [0, 180, 360] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-40 right-20 w-12 h-12 bg-accent/30 rounded-full"
        animate={{ y: [0, 20, 0], rotate: [360, 180, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 right-1/4 w-8 h-8 bg-secondary/30 rounded-full"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Изтегли{" "}
            <span className="text-[#096271]">CampusBond</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Не оставай извън играта. Присъедини се към всички студенти, които вече използват CampusBond, за да се свързват, учат и забавляват заедно.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
            className="bg-card rounded-3xl p-8 shadow-xl border border-border/50 text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-14 h-14 bg-foreground rounded-2xl flex items-center justify-center">
                <Apple className="w-8 h-8 text-card" />
              </div>
              <div className="text-left">
                <div className="text-sm text-muted-foreground">Свали от</div>
                <div className="text-xl font-bold text-foreground">App Store</div>
              </div>
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-block p-4 bg-white rounded-2xl shadow-lg mb-6"
            >
              <QRCodeSVG
                value="https://apps.apple.com/app/campusbond"
                size={180}
                bgColor="#FFFFFF"
                fgColor="#333333"
                level="H"
                role="img"
                aria-label="QR code linking to the CampusBond iOS app on Apple Store"
              />
            </motion.div>

            <p className="text-sm text-muted-foreground mb-4">
              Сканирай с камерата на твоя iPhone
            </p>

            <Button
              className="w-full rounded-full bg-foreground hover:bg-foreground/90 text-card py-6 text-lg font-semibold hover:cursor-pointer"
            >
              <Apple className="w-5 h-5 mr-2" />
              App Store
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
            className="bg-card rounded-3xl p-8 shadow-xl border border-border/50 text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-14 h-14 bg-[#096271] rounded-2xl flex items-center justify-center">
                <Smartphone className="w-8 h-8 text-primary-foreground" />
              </div>
              <div className="text-left">
                <div className="text-sm text-muted-foreground">Свали от</div>
                <div className="text-xl font-bold text-foreground">Google Play</div>
              </div>
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-block p-4 bg-white rounded-2xl shadow-lg mb-6"
            >
              <QRCodeSVG
                value="https://play.google.com/store/apps/details?id=com.campusbond"
                size={180}
                bgColor="#FFFFFF"
                fgColor="#0d798b"
                level="H"
                role="img"
                aria-label="QR code linking to the CampusBond Android app on Google Play"
              />
            </motion.div>

            <p className="text-sm text-muted-foreground mb-4">
              Сканирай с камерата на твоя Android
            </p>

            <Button
              className="w-full rounded-full bg-[#096271] hover:bg-primary/90 text-primary-foreground py-6 text-lg font-semibold hover:cursor-pointer"
            >
              <Smartphone className="w-5 h-5 mr-2" />
              Google Play
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-8 mt-16 text-muted-foreground"
        >
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
              <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span>Безплатно</span>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
              <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span>Без реклами</span>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
              <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span>Сигурност на първо място</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
