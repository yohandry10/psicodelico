import React from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';

// Datos de ejemplo para los posts
const posts = [
  {
    id: 1,
    title: 'CÓMO SOÑAR LÚCIDAMENTE ESTANDO DESPIERTO',
    summary:
      'Descubre técnicas para entrar en un estado de ensueño consciente y explorar tu mente en plena vigilia.',
    image: '/female.jpeg', // Asegúrate de que la imagen esté en la carpeta public
    date: '12 de Enero de 2023',
  },
  {
    id: 2,
    title: 'CÓMO ENTRAR EN ESTADO: MAHASAMADHI',
    summary:
      'Explora las claves del samadhi y la iluminación según tradiciones ancestrales y su impacto en la conciencia.',
    image: '/babaji.jpg', // Asegúrate de que la imagen esté en la carpeta public
    date: '24 de Enero de 2023',
  },
];

// Perfil / Avatar
const profilePic =
  'https://scontent.faqp1-1.fna.fbcdn.net/v/t39.30808-6/395632947_672718778225140_8681901499640268628_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=sYAGflu6aHEQ7kNvgGZRoDF&_nc_oc=AdgoT5M7RdiQmlodhZgM4UnLyaANmRooLRUtDCFosFYcnejKfLQpZv4ON8lbnT1ME7CHdHzgeeSgzf4lKZv9750X&_nc_zt=23&_nc_ht=scontent.faqp1-1.fna&_nc_gid=ANX6PWgxils0nboHnUptpjT&oh=00_AYA8aESeVMrMoQb0mHVOZRXXoPtlRBBtlfX_4MGRkuMLpg&oe=67BB474B';

// Animación para las tarjetas
const cardHover = {
  whileHover: {
    scale: 1.02,
    boxShadow: '0px 8px 20px rgba(0,255,0,0.15)',
  },
  transition: { duration: 0.3 },
};

const Blog = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/"); // Redirige a la página de inicio
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Header */}
      <header className="py-8 text-center border-b border-green-700">
        <h1 className="text-5xl md:text-6xl font-bold text-green-500 uppercase tracking-wider">
          Destacados
        </h1>
        <p className="mt-2 text-lg text-gray-300 max-w-3xl mx-auto">
          Los artículos más destacados de nuestro blog están disponibles para que los leas desde aquí mismo.
        </p>
      </header>

      {/* Contenido Principal */}
      <main className="flex-1 max-w-5xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <motion.div
              key={post.id}
              className="border border-green-700 rounded-lg overflow-hidden flex flex-col"
              {...cardHover}
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-52 object-contain" // object-contain para mostrar la imagen completa
              />
              <div className="p-4 flex flex-col justify-between flex-1">
                <div>
                  <h2 className="text-2xl font-extrabold text-green-500">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-gray-300">{post.summary}</p>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm text-gray-400 italic">{post.date}</span>
                  <Link
                    to={`/blog/${post.id}`}
                    className="text-sm font-semibold text-green-500 hover:underline"
                  >
                    Leer más
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-green-700 py-6 mt-8">
        <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            {/* Avatar */}
            <img
              src={profilePic}
              alt="Perfil Sapo Psicodélico"
              className="w-12 h-12 rounded-full border-2 border-green-500 object-cover"
            />
            <div>
              <p className="text-white font-bold">El Sapo Psicodélico</p>
              <p className="text-sm text-gray-400">Explorando la conciencia y la realidad</p>
            </div>
          </div>
          <div className="text-center md:text-right text-sm text-gray-400">
            &copy; {new Date().getFullYear()} El Sapo Psicodélico. Todos los derechos reservados.
          </div>
        </div>
      </footer>

      {/* Botón flotante para volver al inicio */}
      <button
        onClick={goHome}
        className="fixed bottom-8 right-8 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition"
      >
        Volver al inicio
      </button>
    </div>
  );
};

export default Blog;
