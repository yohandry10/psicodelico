import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import Confetti from 'react-confetti';

const Formulario: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [feedback, setFeedback] = useState("");
  const [showConfetti, setShowConfetti] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          'service_mzuhcqp',      // SERVICE ID
          'template_iabhvxx',    // TEMPLATE ID
          form.current,
          'YyR4uWLljS6IZIKie'    // PUBLIC KEY
        )
        .then(
          (result) => {
            console.log(result.text);
            setFeedback("¡Mensaje enviado exitosamente!");
            form.current?.reset();

            // Mostrar confeti
            setShowConfetti(true);

            // Quitar mensaje y confeti después de 3 segundos
            setTimeout(() => {
              setFeedback("");
              setShowConfetti(false);
            }, 3000);
          },
          (error) => {
            console.error(error.text);
            setFeedback("Hubo un error. Inténtalo de nuevo.");

            // Quitar mensaje de error después de 3 segundos
            setTimeout(() => setFeedback(""), 3000);
          }
        );
    }
  };

  return (
    <section className="bg-[#FAFAF7] py-16">
      {/* Confeti (aparece solo cuando showConfetti es true) */}
      {showConfetti && (
        <Confetti
          style={{ position: 'fixed', top: 0, left: 0, zIndex: 9999 }}
          recycle={false}
        />
      )}

      <div className="max-w-[1200px] mx-auto px-4 text-center">
        {/* Título principal */}
        <h2
          className="text-6xl font-black text-sapo-green mb-8 leading-tight"
          style={{ fontFamily: 'HolyStories' }}
        >
          ¡ÚNETE A NUESTRA COMUNIDAD!
        </h2>

        {/* Descripción */}
        <p
          className="text-2xl text-gray-800 max-w-[900px] mx-auto mb-12 leading-relaxed"
          style={{ fontFamily: 'HolyStories' }}
        >
          Únete a nuestra newsletter y sé el primero en recibir las aventuras del Sapo Psicodélico,
          sus más recientes críticas sociales y las epifanías que transformarán tu forma de ver el
          mundo. ¡No te pierdas ninguna de sus reflexiones psicodélicas!
        </p>

        {/* Formulario */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col md:flex-row items-center justify-center gap-6"
        >
          <input
            type="text"
            name="to_name"
            placeholder="Nombre"
            className="border border-gray-300 rounded px-12 py-5 text-xl w-full md:w-[400px]"
            required
          />
          <input
            type="email"
            name="from_name"
            placeholder="Correo electrónico"
            className="border border-gray-300 rounded px-12 py-5 text-xl w-full md:w-[400px]"
            required
          />
          <motion.button
            type="submit"
            className="relative group overflow-hidden border-2 border-green-700 bg-black text-white px-12 py-5 rounded-full font-bold transition-colors text-xl"
            style={{ fontFamily: 'HolyStories' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="absolute inset-0 bg-green-700 transform scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-500 ease-out"></span>
            <span className="relative">Enviar</span>
          </motion.button>
        </form>

        {feedback && (
          <motion.p
            className="mt-8 text-xl text-green-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {feedback}
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default Formulario;
