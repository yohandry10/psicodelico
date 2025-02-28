import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';

const categories = ['EXISTENCIA', 'AVENTURAS', 'ESPIRITUAL', 'PSICODELIA'];

const categoryVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 140, damping: 12 },
  },
  hover: {
    scale: 1.15,
    rotate: 3,
    color: '#00cc66',
    textShadow: '0px 0px 12px rgba(0,204,102,0.9)',
    transition: { duration: 0.3 },
  },
};

const underlineVariants = {
  initial: { scaleX: 0, opacity: 0 },
  hover: { scaleX: 1, opacity: 1 },
};

const floatVariants = {
  animate: {
    y: [0, -30, 0],
    transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
  },
};

const ExploreSection = () => (
  <section className="bg-[#FAFAF7] pt-12 pb-12 relative overflow-hidden">
    {/* SVG decorativo: Planeta con anillos en la esquina superior izquierda */}
    <motion.svg
      className="absolute top-5 left-5 w-20 h-20 text-green-500"
      variants={floatVariants}
      animate="animate"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      fill="currentColor"
    >
      <circle cx="32" cy="32" r="20" />
      <ellipse cx="32" cy="32" rx="28" ry="8" fill="none" stroke="currentColor" strokeWidth="2" />
    </motion.svg>

    {/* SVG decorativo: Sapo psicodélico en la esquina inferior derecha */}
    <motion.svg
      className="absolute bottom-5 right-5 w-24 h-24 text-green-700"
      variants={floatVariants}
      animate="animate"
      transition={{ delay: 0.5, duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      fill="currentColor"
    >
      {/* Sapo estilizado: cuerpo oval, ojos y boca */}
      <ellipse cx="32" cy="40" rx="20" ry="12" />
      <circle cx="22" cy="28" r="3" fill="#FFF" />
      <circle cx="42" cy="28" r="3" fill="#FFF" />
      <path d="M24 44 q8 6 16 0" stroke="#FFF" strokeWidth="2" fill="none" />
    </motion.svg>

    <div className="max-w-[1400px] mx-auto px-6 text-center relative z-10">
      {/* Título principal (H1) */}
      <motion.h1
        className="text-5xl md:text-6xl font-black tracking-tighter text-black"
        style={{ fontFamily: 'CryoGraffiti-Regular' }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        EXPLORA A TRAVÉS DE <br />
        <span className="text-green-600">RESEÑAS</span> Y MÁS.
      </motion.h1>

      {/* Subtítulo (H2) */}
      <motion.h2
        className="mt-4 text-2xl md:text-3xl font-medium text-gray-700"
        style={{ fontFamily: 'HolyStories' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        Descubre viajes astrales, psicodelia y la magia de lo existencial.
      </motion.h2>

      {/* Categorías */}
      <motion.div
        className="mt-10 flex flex-wrap justify-center gap-8"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } },
        }}
      >
        {categories.map((category, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center cursor-pointer"
            variants={categoryVariants}
            whileHover="hover"
            whileTap={{ scale: 0.95, rotate: -2 }}
          >
            <motion.div
              className="text-6xl md:text-7xl font-black uppercase text-gray-800"
              style={{ fontFamily: 'HolyStories' }}
            >
              {category}
            </motion.div>
            <motion.div
              className="h-1 w-28 bg-gradient-to-r from-green-400 to-green-600 mt-2 origin-left"
              variants={underlineVariants}
              initial="initial"
              transition={{ duration: 0.3, ease: 'easeOut' }}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>

    {/* Banner con efecto Parallax */}
    <Parallax y={[-30, 30]} className="mt-16">
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <motion.img
          // IMPORTANTE: la ruta es sin "/public" y con la extensión que tengas en tu archivo
          src="/sapo3.jpg"
          alt="Banner"
          className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
          initial={{ opacity: 0, scale: 0.95, rotate: 2 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />
      </div>
    </Parallax>
  </section>
);

export default ExploreSection;
