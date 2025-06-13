
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="#">
          <div className="flex items-center space-x-2">
            <img 
              src="/images/logo.png" 
              alt="Ijaba Logo" 
              className="h-20 w-auto"
            />
          </div>
          </a>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
          <a href="/privacy" className="text-gray-600 hover:text-blue-600 transition-colors">Privacy Policy</a>
          <a href="https://apps.apple.com/de/app/ijaba-talk-to-the-quran/id6743807203?l=en-GB">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Download
            </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-blue-100 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <a href="https://apps.apple.com/de/app/ijaba-talk-to-the-quran/id6743807203?l=en-GB" target="_blank" className="text-gray-600 hover:text-blue-600 transition-colors">Download</a>
              <a href="/privacy" className="text-gray-600 hover:text-blue-600 transition-colors">Privacy Policy</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
