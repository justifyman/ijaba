
import { MessageCircle, BookOpen, Heart, Users, Play, Star, Zap, Shield } from "lucide-react";

export const Features = () => {
  const features = [
    {
      title: "Choose your favourite reciters",
      description: "Pick from over 12+ popular reciters.",
      image: "/images/screenshot-feature1.png"
    },
    {
      title: "The Quran answers",
      description: "Speak your mind and let the Quran answer you.",
      image: "/images/screenshot-main.png"
    },
    {
      title: "Modern Interface",
      description: "A clean, intuitive design.",
      image: "/images/screenshot-feature2.png"
    },
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Discover Ijaba's Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore how Ijaba makes Quranic exploration easier and more intuitive with its advanced features.
          </p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="w-80 h-128 bg-gray-100 rounded-xl mb-4 ml-10">
                <img 
                  src={feature.image} 
                  alt={feature.title} 
                  className="w-full h-full rounded-xl object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 ml-7">{feature.title}</h3>
                <p className="text-lg text-gray-600 ml-7">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
