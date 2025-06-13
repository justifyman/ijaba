import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Demo = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex justify-end mb-8">
          <Button 
            onClick={() => navigate("/")}
            variant="outline"
            className="text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-lg hover-scale"
          >
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
            Back to Home
          </Button>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 text-center mb-4">Demo Video</h1>
        <div className="prose prose-lg text-gray-700 max-w-none">
          <div className="aspect-video bg-black rounded-lg overflow-hidden">
            <video 
              src="/images/app-demo.mov"
              controls
              className="w-full"
              poster="/images/app-demo.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;
