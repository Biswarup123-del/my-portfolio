import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { useInView } from 'react-intersection-observer'
 
type amimateprops={
  children:ReactNode,
   className?:string
}



export default function AnimatedSection({ children, className = "", } :
amimateprops
) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}   