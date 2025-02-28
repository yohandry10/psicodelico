import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import LunarEclipse from './LunarEclipse';

// Variantes para el contenedor y textos
const containerVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95, rotate: -2 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 1,
      ease: 'easeOut',
      staggerChildren: 0.15,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

// Variantes para elementos flotantes
const floatVariants = {
  animate: {
    y: [0, -30, 0],
    transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
  },
};

const Hero = () => (
  <header className="relative flex flex-col items-center justify-center min-h-[85vh] py-10 bg-black text-white overflow-hidden">
    {/* Fondo radial animado (sobre fondo negro) */}
    <motion.div
      className="absolute inset-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: [0.3, 0.5, 0.3] }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      style={{
        background:
          'radial-gradient(circle at center, rgba(0,204,102,0.2), rgba(0,0,0,0.9))',
      }}
    />

    {/* Componente con animación propia (eclipse lunar) */}
    <LunarEclipse />

    {/* SVG decorativo: Planeta astral en la esquina superior izquierda */}
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

    {/* SVG decorativo: Estrella cósmica en la esquina superior derecha */}
    <motion.svg
      className="absolute top-5 right-5 w-16 h-16 text-green-400"
      variants={floatVariants}
      animate="animate"
      transition={{ delay: 0.5, duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <polygon points="12,2 14,9 22,9 15,14 17,21 12,17 7,21 9,14 2,9 10,9" />
    </motion.svg>

    {/* SVG decorativo: Sapo psicodélico en la esquina inferior derecha */}
    <motion.svg
      className="absolute bottom-5 right-5 w-24 h-24 text-green-700"
      variants={floatVariants}
      animate="animate"
      transition={{ delay: 1, duration: 6, repeat: Infinity, ease: 'easeInOut' }}
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

    {/* SVG decorativo: Hoja cósmica en la esquina inferior izquierda */}
    <motion.svg
      className="absolute bottom-5 left-5 w-16 h-16 text-green-300"
      variants={floatVariants}
      animate="animate"
      transition={{ delay: 1.5, duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 2C8 2 4 6 4 10c0 4 4 8 8 8s8-4 8-8c0-4-4-8-8-8zm0 14a6 6 0 110-12 6 6 0 010 12z" />
    </motion.svg>

    <Parallax y={[-20, 20]} className="w-full">
      <motion.div
        className="relative w-full max-w-[1200px] mx-auto px-4 text-center space-y-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Logo />

        <motion.h1
          className="text-[5.5rem] leading-[1.15] font-black tracking-tight max-w-[900px] mx-auto"
          style={{ fontFamily: 'CryoGraffiti-Regular' }}
          variants={textVariants}
          whileHover={{
            scale: 1.02,
            textShadow: '0px 0px 8px rgba(0,204,102,0.8)',
          }}
        >
          ENCUENTRA
          <br />
          EL ECO DE TUS
          <br />
          HISTORIAS
          <br />
          EXISTENCIALES
        </motion.h1>

        <motion.div
          className="relative w-full max-w-[900px] mx-auto h-16"
          variants={textVariants}
        >
          <motion.div
            className="text-left text-2xl text-white/70 leading-snug"
            style={{ fontFamily: 'HolyStories' }}
            variants={textVariants}
          >
            <p>Descubre el viaje interior</p>
            <p>y salta entre realidades</p>
          </motion.div>

          {/* Botón modificado con efecto de llenado y navegación a /blog */}
          <Link to="/blog">
            <motion.button
              className="relative group overflow-hidden border-2 border-green-700 bg-black text-white px-8 py-3 rounded-full text-lg font-medium shadow-lg"
              style={{ fontFamily: 'HolyStories' }}
              variants={textVariants}
            >
              {/* Capa de fondo animado para el efecto de llenado */}
              <span className="absolute inset-0 bg-green-700 transform scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-500 ease-out"></span>
              <span className="relative">Descubre</span>
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </Parallax>
  </header>
);

export default Hero;
