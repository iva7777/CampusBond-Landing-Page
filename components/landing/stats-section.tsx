"use client"

import { motion } from "framer-motion"

const stats = [
  { value: 800, suffix: "+", label: "Активни Студенти" },
  { value: 9, suffix: "", label: "Университета (Скоро)" },
  { value: 4.7, suffix: "/5", label: "Рейтинг на Приложението", decimals: 1 },
  { value: 75, suffix: "%", label: "По-доволни Студенти" }
];

function StatValue({ value, suffix, decimals = 0 }: { value: number; suffix: string; decimals?: number }) {
  return (
    <span>
      {decimals > 0 ? value.toFixed(decimals) : value.toLocaleString()}
      {suffix}
    </span>
  )
};

export function StatsSection() {
  return (
    <section className="py-20 bg-[#096271] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 hidden md:block">
        <div className="absolute top-10 left-10 w-32 h-32 border-4 border-white rounded-full" />
        <div className="absolute bottom-10 right-10 w-48 h-48 border-4 border-white rounded-full" />
        <div className="absolute top-1/2 left-1/4 w-20 h-20 border-4 border-white rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                <StatValue 
                  value={stat.value} 
                  suffix={stat.suffix} 
                  decimals={stat.decimals}
                />
              </div>
              <div className="text-white font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
