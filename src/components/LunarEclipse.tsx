import { motion } from 'framer-motion';

const LunarEclipse = () => (
  <div className="absolute inset-0 w-full h-full">
    <motion.svg
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      width="200%"
      height="160%"
      viewBox="0 0 2000 1200"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <path
        d="M400 600 Q 1000 200, 1600 600 Q 1000 1000, 400 600"
        stroke="rgba(0,204,102,0.3)"
        strokeWidth="1"
        fill="none"
      />
    </motion.svg>
  </div>
);

export default LunarEclipse;