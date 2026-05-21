"use client"
import { motion } from "framer-motion"

const features = [
  {
    index: "01",
    title: "Бъди в центъра на събитията",
    description:
      "От студентски партита и гост-лекции до спортни турнири – никога повече няма да изпуснеш какво се случва в кампуса.",
    color: "#0D91AF",
  },
  {
    index: "02",
    title: "Учебни материали и взаимопомощ",
    description:
      "Споделяй записки, обсъждай проекти и се подготвяй за изпити с колеги.",
    color: "#a1ef76",
  },
  {
    index: "03",
    title: "Свържи се със съмишленици",
    description:
      "Намери студенти от твоето общежитие, факултет или хора със сходни интереси и хобита.",
    color: "#52a7ef",
  },
  {
    index: "04",
    title: "Локален фийд",
    description:
      "Задавай въпроси, търси съвети за преподаватели или просто сподели забавна случка от деня с цялата университетска общност.",
    color: "#e856da",
  },
  {
    index: "05",
    title: "Напомняния за крайни срокове",
    description:
      "Никога не пропускай краен срок с напомняния за задачи, изпити и събития в кампуса.",
    color: "#FE9462",
  },
  {
    index: "06",
    title: "Студентска борса",
    description:
      "Купувай, продавай или разменяй вещи директно с колеги от кампуса.",
    color: "#de6f6e",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

function FeatureItem({
  feature,
  titleSize = "text-lg",
  descSize = "text-sm",
}: {
  feature: (typeof features)[0];
  titleSize?: string;
  descSize?: string;
}) {
  return (
    <motion.div variants={itemVariants} className="flex flex-col gap-4">
      <span
        className="text-xs tracking-widest"
        style={{ color: "oklch(var(--muted-foreground))" }}
      >
        {feature.index}
      </span>

      <span
        className="inline-block w-2 h-2 rounded-full -mt-2"
        style={{ backgroundColor: feature.color }}
      />

      <div className="flex flex-col gap-2">
        <h3
          className={`${titleSize} font-semibold leading-snug text-foreground`}
        >
          {feature.title}
        </h3>
        <p className={`${descSize} text-muted-foreground leading-relaxed`}>
          {feature.description}
        </p>
      </div>
    </motion.div>
  )
}

export function FeaturesSection() {
  const [f01, f02, f03, f04, f05, f06] = features

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Всичко, от което се нуждаеш, за да{" "}
            <span className="text-[#096271]">успееш</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Какво ти дава CampusBond?
          </p>
        </motion.div>

        {/* Top row — 3 columns */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-[1.6fr_1fr_1fr] border-b border-border"
        >
          <div className="py-8 pr-0 md:pr-8 border-b md:border-b-0 md:border-r border-border">
            <motion.div variants={itemVariants} className="flex flex-col gap-4">
              <span className="text-xs tracking-widest text-muted-foreground">
                {f01.index}
              </span>
              <span
                className="inline-block w-2 h-2 rounded-full -mt-2"
                style={{ backgroundColor: f01.color }}
              />
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-semibold leading-snug text-foreground">
                  {f01.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {f01.description}
                </p>
              </div>
            </motion.div>
          </div>

          <div className="py-8 md:px-8 border-b md:border-b-0 md:border-r border-border">
            <FeatureItem feature={f02} />
          </div>

          <div className="py-8 md:pl-8">
            <FeatureItem feature={f03} />
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2"
        >

          <div className="py-8 pr-0 md:pr-8 border-b md:border-b-0 md:border-r border-border">
            <FeatureItem feature={f04} titleSize="text-xl" />
          </div>

          <div className="py-8 md:pl-8 flex flex-col">
            <div className="pb-6">
              <FeatureItem
                feature={f05}
                titleSize="text-base"
                descSize="text-[13px]"
              />
            </div>
            <div className="border-b border-border -mx-8" />
            <div className="pt-6">
              <FeatureItem
                feature={f06}
                titleSize="text-base"
                descSize="text-[13px]"
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}