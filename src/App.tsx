import { Routes, Route } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import Hero from './components/Hero';
import ExploreSection from './components/ExploreSection';
import PostsSection from './components/PostsSection';
import Formulario from './components/Formulario';
import Footer from './components/Footer';
import FollowCard from './components/FollowCard';
import Blog from './components/Blog';
// 1. Importa tu BlogDetail
import BlogDetail from './components/BlogDetail';

function App() {
  return (
    <ParallaxProvider>
      <Routes>
        {/* Ruta principal */}
        <Route
          path="/"
          element={
            <div className="min-h-screen flex flex-col">
              <Hero />
              <ExploreSection />
              <PostsSection />

              {/* Sección para la tarjeta de "Seguir esta página" */}
              <section className="bg-[#FAFAF7] flex justify-center py-8">
                <FollowCard />
              </section>

              {/* Formulario para unirse a la comunidad */}
              <Formulario />

              {/* Footer al final de la página */}
              <Footer />
            </div>
          }
        />

        {/* Ruta para la página de Blog */}
        <Route path="/blog" element={<Blog />} />

        {/* 2. Ruta dinámica para detalle de cada artículo */}
        <Route path="/blog/:id" element={<BlogDetail />} />
      </Routes>
    </ParallaxProvider>
  );
}

export default App;
