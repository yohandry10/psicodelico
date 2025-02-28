import React from 'react';
import { Facebook, Share2 } from 'lucide-react';

const FollowCard = () => {
  return (
    <a
      href="https://www.facebook.com/ElSapoPsicodelico"
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      <div className="relative w-[320px] h-[180px] rounded-lg overflow-hidden shadow-md cursor-pointer">
        {/* Imagen de fondo (banner) */}
        <img
          src="/sapo3.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />

        {/* Capa oscura para resaltar el contenido */}
        <div className="absolute inset-0 bg-black bg-opacity-20" />

        {/* Foto de perfil en la esquina superior izquierda */}
        <div className="absolute top-4 left-4">
          <img
            src="https://scontent.faqp1-1.fna.fbcdn.net/v/t39.30808-6/395632947_672718778225140_8681901499640268628_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=sYAGflu6aHEQ7kNvgGZRoDF&_nc_oc=AdgoT5M7RdiQmlodhZgM4UnLyaANmRooLRUtDCFosFYcnejKfLQpZv4ON8lbnT1ME7CHdHzgeeSgzf4lKZv9750X&_nc_zt=23&_nc_ht=scontent.faqp1-1.fna&_nc_gid=ANX6PWgxils0nboHnUptpjT&oh=00_AYA8aESeVMrMoQb0mHVOZRXXoPtlRBBtlfX_4MGRkuMLpg&oe=67BB474B"
            alt="Profile"
            className="w-10 h-10 rounded-full border-2 border-white object-cover"
          />
        </div>

        {/* Barra inferior: Izquierda: "Seguir esta página" con ícono de Facebook; Derecha: "Compartir" con su ícono */}
        <div className="absolute bottom-2 left-0 right-0 px-4 flex justify-between items-center">
          <div className="flex items-center gap-1">
            <span className="text-white text-sm font-bold">Seguir esta página</span>
            <Facebook className="w-4 h-4 text-[#1877F2]" />
          </div>
          <div className="flex items-center gap-1">
            <Share2 className="w-4 h-4 text-white" />
            <span className="text-white text-sm font-bold">Compartir</span>
          </div>
        </div>
      </div>
    </a>
  );
};

export default FollowCard;
