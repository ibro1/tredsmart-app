import type { Route } from "./+types/home";
import { FaTwitter, FaChartLine, FaShieldAlt } from "react-icons/fa";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "TredSmart - Crypto Influencer Tracking Platform" },
    { 
      name: "description", 
      content: "Real-time cryptocurrency influencer tracking platform with automated trading capabilities and advanced risk management" 
    },
  ];
}

export function loader({ context }: Route.LoaderArgs) {
  return { message: context.VALUE_FROM_EXPRESS };
}

function FeatureCard({ icon: Icon, title, description }: { 
  icon: React.ComponentType, 
  title: string, 
  description: string 
}) {
  return (
    <div className="p-6 bg-black/20 rounded-xl border border-white/10 hover:border-primary-500 transition-all">
      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-2xl font-display font-medium mb-2 text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-display font-bold text-gradient-primary mb-6">
              Smart Crypto Trading with<br />Influencer Insights
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
              Track crypto influencers in real-time, get AI-powered trading signals, and execute trades with advanced risk management.
            </p>
            <div className="flex gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-primary rounded-lg font-medium text-white hover:opacity-90 transition-opacity">
                Get Started
              </button>
              <button className="px-8 py-3 bg-white/10 rounded-lg font-medium text-white hover:bg-white/20 transition-all">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h2 className="text-3xl md:text-4xl font-display font-semibold text-white text-center mb-16">
          Key Features
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon={FaTwitter}
            title="Real-time Monitoring"
            description="Track crypto influencers' recommendations as they happen with automated tweet collection and analysis."
          />
          <FeatureCard
            icon={FaChartLine}
            title="AI-Powered Analysis"
            description="Get instant insights with natural language processing and sentiment analysis of influencer content."
          />
          <FeatureCard
            icon={FaShieldAlt}
            title="Risk Management"
            description="Trade confidently with position size limits, stop-loss requirements, and automated execution."
          />
        </div>
      </div>
    </main>
  );
}
