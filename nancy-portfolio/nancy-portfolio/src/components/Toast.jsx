import { AnimatePresence, motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

export default function Toast({ message, visible }) {
  return (
    <div className="toast-wrap">
      <AnimatePresence>
        {visible && (
          <motion.div
            className="toast glass-strong"
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <CheckCircle2 size={18} className="toast-icon" />
            <span>{message}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
