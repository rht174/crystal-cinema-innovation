import Image from "next/image";

interface PortfolioCardProps {
  title: string;
  category: string;
  imageUrl: string;
}

const PortfolioCard = ({ title, category, imageUrl }: PortfolioCardProps) => {
  return (
    <div className="relative group overflow-hidden rounded-lg aspect-video">
      <Image
        src={imageUrl}
        alt={title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div
        className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 
        transition-opacity duration-300 flex items-center justify-center"
      >
        <div
          className="text-white text-center p-4 transform translate-y-4 
          group-hover:translate-y-0 transition-transform duration-300"
        >
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-sm text-gray-200">{category}</p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
