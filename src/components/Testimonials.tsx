
import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Aisha Rahman",
      location: "London, UK",
      rating: 5,
      text: "Ijaba has transformed my relationship with the Quran. The interactive conversations help me understand verses in a completely new way.",
      avatar: "AR"
    },
    {
      name: "Mohammed Al-Rashid",
      location: "Dubai, UAE",
      rating: 5,
      text: "As a busy professional, Ijaba fits perfectly into my schedule. The personalized learning approach is exactly what I needed.",
      avatar: "MR"
    },
    {
      name: "Fatima Hassan",
      location: "Toronto, Canada",
      rating: 5,
      text: "My children love using Ijaba! It's made learning about Islam engaging and fun for the whole family.",
      avatar: "FH"
    },
    {
      name: "Ibrahim Ali",
      location: "Jakarta, Indonesia",
      rating: 5,
      text: "The audio recitations are beautiful, and the progress tracking keeps me motivated. Highly recommended!",
      avatar: "IA"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Loved by Muslims Worldwide
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join over 1 million Muslims who have transformed their spiritual journey with Ijaba.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="p-6 bg-white border-blue-100 hover:shadow-lg transition-all duration-300 hover-scale animate-fade-in"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              
              <Quote className="w-8 h-8 text-blue-200 mb-4" />
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-sm mr-3">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
