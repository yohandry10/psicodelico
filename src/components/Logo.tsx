import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -10 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.2,
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: [0, 10, -10, 0],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const Logo = () => (
  <motion.div
    className="relative flex items-center justify-center mb-12 space-x-4"
    variants={containerVariants}
    initial="hidden"
    animate="visible"
  >
    {/* Fondo animado pulsante */}
    <motion.div
      className="absolute w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-green-600 opacity-50 blur-lg"
      animate={{ scale: [1, 1.3, 1], rotate: [0, 45, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    />

    {/* Imagen del logo con efecto de giro completo al hacer hover */}
    <motion.img
      src="/logosapo1.png"
      alt="Logo"
      className="w-16 h-16 relative z-10 cursor-pointer"
      variants={imageVariants}
      whileHover={{
        scale: 1.2,
        rotate: 360,
        transition: { duration: 0.6 },
      }}
      whileTap={{ scale: 0.9 }}
    />

    {/* Texto con degradado, animación y efecto hover */}
    <motion.h4
      className="text-2xl font-holy tracking-wide bg-gradient-to-r from-[#00ff88] to-[#00cc66] bg-clip-text text-transparent relative z-10 cursor-pointer"
      variants={textVariants}
      whileHover={{ scale: 1.05 }}
    >
      El Sapo Psicodélico
    </motion.h4>
  </motion.div>
);

export default Logo;
