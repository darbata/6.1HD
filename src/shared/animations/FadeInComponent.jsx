import { motion } from "framer-motion"

export default function MotionSection({ children, delay=0}) {
  return (
    <motion.section
      className="overflow-hidden" // stop scroll bar from showing up
      stype = {{postion: "relative", overflow: "clip"}}
      initial={{ opacity: 0}}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.section>
  )
}