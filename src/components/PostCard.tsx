import { motion } from 'framer-motion';
import { ThumbsUp, MessageCircle, Share2 } from 'lucide-react';

interface PostCardProps {
  title: string;
  content: string;
  hashtags: string[];
}

const PostCard = ({ title, content, hashtags }: PostCardProps) => (
  <a
    href="https://www.facebook.com/ElSapoPsicodelico"
    target="_blank"
    rel="noopener noreferrer"
    className="block"
  >
    <motion.article
      className="bg-white shadow-lg rounded-2xl overflow-hidden cursor-pointer transform transition duration-300 hover:scale-105"
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <div className="p-6">
        <div className="flex items-center space-x-4 mb-6">
          <img
            src="https://scontent.faqp1-1.fna.fbcdn.net/v/t39.30808-6/395632947_672718778225140_8681901499640268628_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=sYAGflu6aHEQ7kNvgGZRoDF&_nc_oc=AdgoT5M7RdiQmlodhZgM4UnLyaANmRooLRUtDCFosFYcnejKfLQpZv4ON8lbnT1ME7CHdHzgeeSgzf4lKZv9750X&_nc_zt=23&_nc_ht=scontent.faqp1-1.fna&_nc_gid=ANX6PWgxils0nboHnUptpjT&oh=00_AYA8aESeVMrMoQb0mHVOZRXXoPtlRBBtlfX_4MGRkuMLpg&oe=67BB474B"
            alt="Profile"
            className="w-12 h-12 rounded-full object-cover border-2 border-gray-300"
          />
          <div>
            <h3 className="font-bold text-sapo-green text-lg">El Sapo Psicodélico</h3>
            <p className="text-xs text-gray-500">3 days ago</p>
          </div>
        </div>
        <h2 className="text-2xl font-extrabold mb-4 text-gray-800">{title}</h2>
        <p className="text-gray-700 mb-6 text-base">{content}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {hashtags.map((tag, index) => (
            <span
              key={index}
              className="text-red-600 text-sm font-medium hover:underline"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
        <div className="flex justify-between items-center text-gray-600">
          <button className="flex items-center gap-1 text-base hover:text-gray-800 transition-colors">
            <ThumbsUp className="w-5 h-5" />
            <span>Like</span>
          </button>
          <button className="flex items-center gap-1 text-base hover:text-gray-800 transition-colors">
            <MessageCircle className="w-5 h-5" />
            <span>Comment</span>
          </button>
          <button className="flex items-center gap-1 text-base hover:text-gray-800 transition-colors">
            <Share2 className="w-5 h-5" />
            <span>Share</span>
          </button>
        </div>
      </div>
    </motion.article>
  </a>
);

export default PostCard;
