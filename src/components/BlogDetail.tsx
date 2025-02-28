import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { posts } from "./dataPosts";
import { motion, AnimatePresence } from "framer-motion";

function BlogDetail() {
  const { id } = useParams();
  const post = posts.find((item) => item.id.toString() === id);
  const [copied, setCopied] = useState(false);

  if (!post) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <h2 className="text-2xl">Artículo no encontrado</h2>
      </div>
    );
  }

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-h-screen bg-black text-white flex flex-col items-center py-8 px-4"
    >
      <div className="max-w-4xl w-full">
        <h1 className="text-4xl font-extrabold text-green-500">
          {post.title}
        </h1>
        <p className="mt-2 text-gray-400 italic">{post.date}</p>

        <motion.img
          src={post.image}
          alt={post.title}
          className="mt-4 w-full h-auto object-cover border border-green-700 rounded-lg"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        />

        <div className="mt-4 text-lg leading-relaxed whitespace-pre-line">
          {post.content}
        </div>

        <div className="mt-6 flex items-center justify-between">
          <Link to="/blog" className="text-green-500 hover:underline">
            &larr; Volver al Blog
          </Link>
          <button
            onClick={handleShare}
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md transition"
          >
            Compartir
          </button>
        </div>

        <AnimatePresence>
          {copied && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-4 p-2 bg-green-700 text-white rounded-md text-sm"
            >
              ¡Enlace copiado!
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default BlogDetail;
