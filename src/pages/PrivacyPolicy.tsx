import { Header } from "../components/Header";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const PrivacyPolicy = () => {
  const navigate = useNavigate();
  return (
    <>
<Header />
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
        <h1 className="text-4xl font-bold text-gray-900 text-center mb-4">Privacy Policy</h1>
        <p className="text-center text-gray-600">Last updated: May 2025</p>
        
        <div className="prose prose-lg text-gray-700 max-w-none">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h1>
          <p>Welcome to Ijaba. Your privacy is important to us. This Privacy Policy explains how we handle your information when you use our app. We are committed to transparency and to protecting your data in compliance with Apple's App Store requirements.</p>
<br />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect:</h2>

          <ul className="list-disc list-inside space-y-2">
            <li><strong>Payments (RevenueCat):</strong> We use RevenueCat to manage in-app purchases and subscriptions. RevenueCat does not require you to create an account or log in. RevenueCat may collect purchase history, device identifiers, and anonymized transaction data. As a developer, we can see anonymized purchase and subscription status in our RevenueCat dashboard, but we do not have access to your personal information or payment details.</li>
            <li><strong>Query Understanding (Large Language Models):</strong> When you enter a search or request, your query is temporarily processed by third-party Large Language Models (such as Google Gemini and OpenAI GPT-4.1) to understand your intent and provide relevant Quranic verses. These queries are not stored by us, but may be processed by the LLM provider in accordance with their privacy policies.</li>
            <li><strong>Backend Routing (Supabase Edge Functions):</strong> Our backend is managed via Supabase Edge Functions, which route and process requests. We do not store any personal data or search queries on our servers.</li>
            <li><strong>No Personal Data Storage:</strong> We do not store your queries, personal information, or any other user data on our servers or in the app.</li>
          </ul>
<br />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Information:</h2>
 
          <ul className="list-disc list-inside space-y-2">
            <li>To process payments and manage subscriptions via RevenueCat.</li>
            <li>To understand your search queries and provide relevant Quranic verses using LLMs (queries are not stored).</li>
            <li>To route and process requests using Supabase Edge Functions (no data is stored).</li>
          </ul>
<br />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Services:</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>RevenueCat:</strong> Used for payment processing and subscription management. For more information, see <a href="https://www.revenuecat.com/privacy" className="text-blue-600 hover:text-blue-700">RevenueCat Privacy Policy</a>.</li>
            <li><strong>Large Language Models:</strong> Queries are processed by Google Gemini and OpenAI GPT-4.1. For more information, see <a href="https://policies.google.com/privacy" className="text-blue-600 hover:text-blue-700">Google Privacy Policy</a> and <a href="https://openai.com/policies/privacy-policy" className="text-blue-600 hover:text-blue-700">OpenAI Privacy Policy</a>.</li>
            <li><strong>Supabase:</strong> Used for backend routing. For more information, see <a href="https://supabase.com/legal/privacy" className="text-blue-600 hover:text-blue-700">Supabase Privacy Policy</a>.</li>
          </ul>
<br />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
          <p>We use industry-standard security measures to protect your information. Since we do not store personal data or queries, the risk of data exposure is minimized.</p>
<br />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
          <p>Ijaba does not knowingly collect or store any personal information from children under the age of 13. If you believe a child has provided us with personal information, please contact us and we will promptly delete it.</p>
<br />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
          <p>Since we do not store any personal data, there is no data to access, correct, or delete. If you have any questions about your privacy, please contact us.</p>
<br />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p>If you have any questions or concerns about this Privacy Policy, please contact us at:</p>
          <p className="mt-2 text-blue-600 hover:text-blue-700">Email: ijabatheapp@gmail.com</p>
<br />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default PrivacyPolicy;
