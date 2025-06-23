

import { Button } from "@/components/ui/button";
import { Play, ArrowRight, Star } from "lucide-react";

export const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-white py-8 sm:py-12 lg:py-20 relative overflow-hidden">
      {/* Custom background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#007379] rounded-full opacity-20"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#007478] rounded-full opacity-25"></div>
        <div className="absolute top-20 right-20 w-32 h-32 bg-[#007379] rounded-full opacity-40"></div>
        <div className="absolute top-60 left-10 w-24 h-24 bg-[#007478] rounded-full opacity-30"></div>
        <div className="absolute bottom-20 right-60 w-16 h-16 bg-[#007379] rounded-full opacity-25"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-flex items-center bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                <Star className="w-4 h-4 mr-1" />
                Ijaba
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                Let the Quran
                <span className="text-[#007478]">
                  {" "}Talk to You
                </span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
              Instantly find the most relevant Quranic verses for any topic, emotion, or request—just type what's on your mind.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a href="https://apps.apple.com/de/app/ijaba-talk-to-the-quran/id6743807203?l=en-GB" target="_blank">
                <Button 
                  size="lg" 
                  className="bg-[#007379] hover:bg-[#007360] text-white px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold rounded-xl hover-scale"
                >
                Download Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              </a>
              <a href="/demo">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-[#007a80] text-[#007379] hover:bg-blue-50 px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold rounded-xl hover-scale"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </Button>
              </a>
              
            </div>
          </div>

          {/* Visual */}
          <div className="relative animate-fade-in">
            <div className="relative mx-auto max-w-sm">
              {/* Phone mockup */}
              <div className="bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
                <div className="bg-white rounded-[2.5rem] overflow-hidden">
                  <div className="aspect-[9/19] bg-gradient-to-br from-blue-50 to-blue-100 p-8 flex flex-col justify-center items-center">
                    <div className="w-full h-full">
                      <img 
                        src="/images/preview.png" 
                        alt="Ijaba App Preview" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -left-4 bg-white rounded-2xl shadow-lg p-4 animate-float">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-700">Active Now</span>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-lg p-4 animate-float" style={{animationDelay: '1s'}}>
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <span className="text-sm font-medium text-gray-700">5/5</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

                    
