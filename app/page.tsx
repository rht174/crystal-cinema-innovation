import ServiceCard from "@/components/ServiceCard";
import PortfolioCard from "@/components/PortfolioCard";
import Image from "next/image";
import { FaVideo, FaEdit, FaFilm, FaPalette } from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/images/bg.jpg"
          alt="Background"
          fill
          className="object-cover object-center"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Hero Section - Increased negative margin */}
      <section className="h-screen relative flex items-center justify-center -mt-50">
        <div className="container mx-auto px-4 z-20 text-white text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-3">
            Crystal Cinema Innovation
          </h1>
          <p className="text-xl md:text-2xl mb-2">
            Where Imagination Meets Innovation
          </p>

          {/* Service Categories - Reduced margins */}
          <div className="flex items-center justify-center gap-4 mb-4 text-lg opacity-90">
            <span>shoot</span>
            <span className="w-2 h-2 rounded-full bg-white"></span>
            <span>edit</span>
            <span className="w-2 h-2 rounded-full bg-white"></span>
            <span>animate</span>
            <span className="w-2 h-2 rounded-full bg-white"></span>
            <span>design</span>
          </div>

          <button className="bg-white text-black px-8 py-3 rounded-full hover:bg-gray-200 transition-colors">
            Explore Our Work
          </button>
        </div>
      </section>

      {/* Services Preview Section - Increased negative margin */}
      <section className="py-10 bg-black/5 backdrop-blur-sm -mt-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              title="Video Production"
              description="Professional filming and cinematography"
              icon={<FaVideo />}
            />
            <ServiceCard
              title="Video Editing"
              description="Post-production and editing services"
              imageUrl="/images/services/editing-icon.png"
            />
            <ServiceCard title="Shoot" description="Capture the magic" />
            <ServiceCard title="Shoot" description="Capture the magic" />
            <ServiceCard title="Shoot" description="Capture the magic" />
            <ServiceCard title="Shoot" description="Capture the magic" />
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            Our Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <PortfolioCard
              title="Cinematic Commercial"
              category="Video Production"
              imageUrl="/images/portfolio-1.jpg"
            />
            <PortfolioCard
              title="Brand Story"
              category="Corporate Video"
              imageUrl="/images/portfolio-2.jpg"
            />
            <PortfolioCard
              title="Music Video"
              category="Creative Direction"
              imageUrl="/images/portfolio-3.jpg"
            />
            {/* Add more PortfolioCard components as needed */}
          </div>

          <div className="text-center mt-12">
            <button className="bg-white/10 text-white border border-white/20 px-8 py-3 rounded-full hover:bg-white/20 transition-colors">
              View All Projects
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
