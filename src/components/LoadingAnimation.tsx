import { motion } from "motion/react";
import { Users, Building, Globe } from "lucide-react";

export function LoadingAnimation({ onComplete }: { onComplete: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-50 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 flex items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onAnimationComplete={() => {
        setTimeout(onComplete, 50);
      }}
    >
      {/* Professional Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

      <div className="relative text-center space-y-8">
        {/* Company Logo */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center shadow-2xl">
            <Users className="w-10 h-10 text-white" />
          </div>
        </motion.div>

        {/* Company Name */}
        <motion.h1
          className="text-4xl lg:text-5xl text-white font-semibold tracking-tight"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <span className="text-blue-400">European</span>Careers
        </motion.h1>

        {/* Tagline */}
        <motion.p
          className="text-slate-300 text-lg"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Europe's Premier Recruitment Firm
        </motion.p>

        {/* Loading Icons */}
        <motion.div
          className="flex justify-center gap-6 pt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          {[Users, Building, Globe].map((Icon, index) => (
            <motion.div
              key={index}
              className="w-12 h-12 bg-white/10 border border-white/20 rounded-xl flex items-center justify-center"
              animate={{ 
                y: [0, -8, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                delay: index * 0.2 
              }}
            >
              <Icon className="w-6 h-6 text-white/80" />
            </motion.div>
          ))}
        </motion.div>

        {/* Loading Bar */}
        <motion.div
          className="w-64 h-1 bg-white/20 rounded-full mx-auto overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <motion.div
            className="h-full bg-blue-600 rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1, delay: 0.8, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Loading Text */}
        <motion.p
          className="text-slate-400 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0 }}
        >
          Connecting talent with opportunity...
        </motion.p>
      </div>
    </motion.div>
  );
}