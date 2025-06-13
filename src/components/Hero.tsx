

import { Button } from "@/components/ui/button";
import { Play, ArrowRight, Star } from "lucide-react";

export const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-white py-12 lg:py-20 relative overflow-hidden">
      {/* Custom background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full opacity-100"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 rounded-full opacity-25"></div>
        <div className="absolute top-20 right-20 w-32 h-32 bg-blue-400 rounded-full opacity-90"></div>
        <div className="absolute top-60 left-10 w-24 h-24 bg-blue-200 rounded-full opacity-35"></div>
        <div className="absolute bottom-20 right-60 w-16 h-16 bg-blue-300 rounded-full opacity-40"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-flex items-center bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                <Star className="w-4 h-4 mr-1" />
                Ijaba
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Let the Quran
                <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                  {" "}Talk to You
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
              Instantly find the most relevant Quranic verses for any topic, emotion, or request—just type what's on your mind.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://apps.apple.com/de/app/ijaba-talk-to-the-quran/id6743807203?l=en-GB" target="_blank">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-xl hover-scale"
              >
                Download Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              </a>
              <a href="/demo">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-blue-200 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold rounded-xl hover-scale"
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
