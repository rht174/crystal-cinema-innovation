import Image from "next/image";

interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl?: string;
  icon?: React.ReactNode;
}

const ServiceCard = ({
  title,
  description,
  imageUrl,
  icon,
}: ServiceCardProps) => {
  return (
    <div
      className="backdrop-blur-sm bg-white/5 border border-white/10 p-6 rounded-lg 
      hover:bg-white/10 transition-all duration-300 group cursor-pointer"
    >
      <div className="flex flex-col items-center text-center">
        {imageUrl ? (
          <div className="relative w-16 h-16 mb-4">
            <Image src={imageUrl} alt={title} fill className="object-contain" />
          </div>
        ) : icon ? (
          <div className="text-white mb-4 text-4xl">{icon}</div>
        ) : null}

        <h3 className="text-xl font-bold mb-4 text-white group-hover:text-white/90">
          {title}
        </h3>
        <p className="text-gray-300 group-hover:text-white/80">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
