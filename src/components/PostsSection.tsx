import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import PostCard from './PostCard';

const posts = [
  {
    id: 1,
    title: "El viaje del Sapo Psicodélico: Una experiencia transformadora",
    content: "En este relato, exploramos el viaje interior a través de la experiencia con el sapo psicodélico. Descubre cómo esta poderosa medicina puede ayudarte a conectar con tu ser auténtico y a sanar heridas del pasado.",
    hashtags: ["#sapopsicodelico", "#viajeinterior", "#sanacion", "#transformacion"],
  },
  {
    id: 2,
    title: "Las enseñanzas del Sapo: Reflexiones sobre la vida, la muerte y el universo",
    content: "Acompañemos al Sapo Psicodélico en sus reflexiones sobre la vida, la muerte y el universo. Descubre las profundas enseñanzas que esta criatura ancestral tiene para compartir con nosotros.",
    hashtags: ["#sapopsicodelico", "#reflexiones", "#vida", "#muerte", "#universo"],
  },
  {
    id: 3,
    title: "El Sapo Psicodélico y la búsqueda de la felicidad",
    content: "En este artículo, exploramos la búsqueda de la felicidad a través de la lente del Sapo Psicodélico. Descubre cómo esta criatura ancestral puede guiarte en tu camino hacia una vida plena y significativa.",
    hashtags: ["#sapopsicodelico", "#felicidad", "#plenitud", "#significado"],
  },
  {
    id: 4,
    title: "Medicina ancestral: El poder curativo del Sapo Psicodélico",
    content: "Exploramos las propiedades curativas del Sapo Psicodélico y cómo esta medicina ancestral está siendo redescubierta por la ciencia moderna para tratar diversas condiciones mentales y emocionales.",
    hashtags: ["#medicinaancestral", "#saposanador", "#cienciaypsicodelia"],
  },
  {
    id: 5,
    title: "El Sapo Psicodélico y la conexión con la naturaleza",
    content: "Descubre cómo el Sapo Psicodélico nos enseña a reconectar con la naturaleza y a entender nuestro lugar en el ecosistema global. Una llamada a la conciencia ecológica.",
    hashtags: ["#naturaleza", "#concienciaecologica", "#sabiduriasapo"],
  },
  {
    id: 6,
    title: "Viaje chamánico con el Sapo Psicodélico: Una guía espiritual",
    content: "Adéntrate en el mundo del chamanismo y descubre cómo el Sapo Psicodélico puede ser un guía espiritual en tu viaje de autodescubrimiento y crecimiento personal.",
    hashtags: ["#chamanismo", "#guiaespiritual", "#viajesapo"],
  },
];

const PostsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="bg-[#FAFAF7] py-16">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15 },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {posts.map((post) => (
            <PostCard key={post.id} {...post} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PostsSection;
