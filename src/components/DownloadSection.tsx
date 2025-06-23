
import { Button } from "@/components/ui/button";
import { Smartphone, Download, Star, Play, ArrowRight } from "lucide-react";

export const DownloadSection = () => {
  return (
    <section id="download" className="py-12 sm:py-20 bg-white relative overflow-hidden">
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Download Ijaba for Free
              </h2>
              <p className="text-lg sm:text-xl text-gray-700 max-w-2xl">
                Let the Quran talk to you. Download Ijaba now and start your journey with the Quran today.
              </p>
            </div>

            <div className="space-y-6">
              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                <div className="p-4 bg-white/5 rounded-lg backdrop-blur-sm border border-gray-100/50">
                  <div className="flex items-center gap-3">
                    <Smartphone className="w-6 h-6 text-[#007379]" />
                    <span className="text-gray-700 font-medium">iOS App</span>
                  </div>
                  <p className="text-gray-500 text-sm mt-2">Available on the App Store</p>
                </div>
                <div className="p-4 bg-white/5 rounded-lg backdrop-blur-sm border border-gray-100/50">
                  <div className="flex items-center gap-3">
                    <Download className="w-6 h-6 text-[#007379]" />
                    <span className="text-gray-700 font-medium">Free Download</span>
                  </div>
                  <p className="text-gray-500 text-sm mt-2">& Frequent Updates</p>
                </div>
                <div className="p-4 bg-white/5 rounded-lg backdrop-blur-sm border border-gray-100/50">
                  <div className="flex items-center gap-3">
                    <Star className="w-6 h-6 text-yellow-400" />
                    <span className="text-gray-700 font-medium">5.0 Rating</span>
                  </div>
                  <p className="text-gray-500 text-sm mt-2">On App Store</p>
                </div>
              </div>

              {/* App Store Button */}
              
            </div>
          </div>

          {/* Visual */}
          <div className="relative animate-fade-in">
            <div className="relative mx-auto max-w-sm">
              {/* App Store Button */}
              <div className="space-y-4">
                <div className="bg-black/90 rounded-2xl p-4 flex items-center space-x-4 hover-scale cursor-pointer border border-gray-900/10">
                  <div className="w-10 h-10 bg-white/90 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                    </svg>
                  </div>
                  <a href="https://apps.apple.com/de/app/ijaba-talk-to-the-quran/id6743807203?l=en-GB" target="_blank">
                    <div className="text-white">
                      <div className="text-xs">Download on the</div>
                      <div className="text-lg font-semibold">App Store</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
