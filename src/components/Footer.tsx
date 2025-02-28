import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram } from 'lucide-react';
import { SiTiktok, SiYoutube } from 'react-icons/si';

const socialMedia = [
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/ElSapoPsicodelico',
    icon: (
      <Facebook className="relative text-gray-300 group-hover:text-green-500 transition-colors duration-500 ease-out w-8 h-8" />
    ),
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/ElSapoPsicodelico/',
    icon: (
      <Instagram className="relative text-gray-300 group-hover:text-green-500 transition-colors duration-500 ease-out w-8 h-8" />
    ),
  },
  {
    name: 'TikTok',
    url: 'https://www.tiktok.com/@ElSapoPsicodelico',
    icon: (
      <SiTiktok className="relative text-gray-300 group-hover:text-green-500 transition-colors duration-500 ease-out w-8 h-8" />
    ),
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/channel/yourchannel',
    icon: (
      <SiYoutube className="relative text-gray-300 group-hover:text-green-500 transition-colors duration-500 ease-out w-8 h-8" />
    ),
  },
];

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300">
      {/* Contenedor superior con altura fija para limitar la animación */}
      <div className="relative overflow-hidden" style={{ height: '500px' }}>
        {/* Fondo animado: degradado de negro a verde */}
        <motion.div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, #000 0%, #000 80%, #006633 80%, #006633 100%)',
            backgroundSize: '200% 200%',
          }}
          initial={{ backgroundPosition: '0% 0%' }}
          animate={{ backgroundPosition: '100% 100%' }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* SVG decorativo "onda" que se ubica al final del contenedor */}
        <motion.svg
          className="absolute bottom-0 left-0 w-full"
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <path
            d="M0,80 C360,0 1080,160 1440,80 L1440,120 L0,120 Z"
            fill="#006633"
          />
        </motion.svg>

        {/* Contenido superior */}
        <div className="relative z-10 max-w-6xl mx-auto px-8 py-16">
          <div className="flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="flex flex-col items-center md:items-start">
              <img
                src="/logosapo1.png"
                alt="Logo Sapo Psicodélico"
                className="w-28 h-28 md:w-36 md:h-36"
              />
              <motion.h1
                className="mt-4 text-4xl md:text-5xl font-extrabold tracking-wider"
                style={{ fontFamily: 'HolyStories' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                El Sapo Psicodélico
              </motion.h1>
            </div>
            <div className="flex space-x-6">
              {socialMedia.map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                  className="relative group overflow-hidden"
                >
                  <div className="flex items-center justify-center w-16 h-16 border-2 border-green-700 rounded-full transition duration-500 ease-out relative overflow-hidden group-hover:bg-green-700">
                    {/* Efecto de llenado con gradiente (verde a negro) */}
                    <span className="absolute inset-0 bg-gradient-to-t from-green-700 to-black rounded-full transform scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-500 ease-out" />
                    {item.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Frase central */}
          <div className="mt-12 text-center">
            <motion.p
              className="text-2xl md:text-3xl font-semibold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Epifanías y pálidas brindadas por Sapo que golpea.
            </motion.p>
            <motion.p
              className="text-2xl md:text-3xl font-semibold mt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Viñetas, videojuegos y videos existenciales.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Línea divisoria: la animación termina justo antes de esta línea */}
      <hr className="border-t-2 border-green-700" />

      {/* Sección inferior: Navegación, correo y derechos reservados */}
      <div className="py-8">
        <div className="max-w-6xl mx-auto px-8">
          <nav
            className="flex flex-col md:flex-row items-center justify-center gap-8 mb-4 text-xl"
            style={{ fontFamily: 'HolyStories' }}
            aria-label="Enlaces del footer"
          >
            {[
              'Síguenos',
              'El Blog Psicodélico',
              'Política de Privacidad',
              'Términos y Condiciones',
              'Contáctanos',
            ].map((link, index) => (
              <motion.a
                key={index}
                href="#"
                className="hover:underline transition-colors duration-300"
                whileHover={{ y: -3 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index }}
              >
                {link}
              </motion.a>
            ))}
          </nav>
          <div className="text-center">
            <motion.p
              className="text-xl"
              style={{ fontFamily: 'HolyStories' }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              Correo:{' '}
              <a
                href="mailto:elsapopsicodelico@hotmail.com"
                className="text-green-500 hover:underline transition-colors duration-300"
              >
                elsapopsicodelico@hotmail.com
              </a>
            </motion.p>
            <motion.p
              className="mt-4 text-lg text-green-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              &copy; {new Date().getFullYear()} El Sapo Psicodélico. Todos los derechos reservados.
            </motion.p>
            <motion.p
              className="mt-2 text-sm text-green-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
            >
              by{' '}
              <a
                href="mailto:andydev.1@outlook.com"
                className="hover:underline"
              >
                Yohandry Chirinos
              </a>
            </motion.p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
