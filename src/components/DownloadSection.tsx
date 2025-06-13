
import { Button } from "@/components/ui/button";
import { Smartphone, Download, ArrowRight, Play } from "lucide-react";

export const DownloadSection = () => {
  return (
    <section id="download" className="py-20 bg-gradient-to-br from-stone-200 to-stone-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-black leading-tight">
                Download Ijaba for Free
              </h2>
              
            </div>
            <div className="flex items-center space-x-6 text-black">
              <div className="flex items-center space-x-2">
                <Smartphone className="w-5 h-5" />
                <span>iOS</span>
              </div>
              <div className="flex items-center space-x-2">
                <Download className="w-5 h-5" />
                <span>Free Download</span>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative animate-fade-in">
            <div className="relative mx-auto max-w-sm">
              {/* App Store Buttons */}
              <div className="space-y-4">
                <div className="bg-black rounded-2xl p-4 flex items-center space-x-4 hover-scale cursor-pointer">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
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
