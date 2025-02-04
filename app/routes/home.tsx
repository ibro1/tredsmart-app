import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { Link } from "@remix-run/react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export function loader({ context }: Route.LoaderArgs) {
  return { message: context.VALUE_FROM_EXPRESS };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-500 to-primary-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Smart Crypto Trading with Influencer Insights
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100">
              Track, analyze, and trade based on real-time cryptocurrency influencer recommendations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/signup"
                className="bg-white text-primary-700 hover:bg-primary-50 px-8 py-3 rounded-lg font-semibold text-lg transition-colors"
              >
                Start Trading
              </Link>
              <Link
                to="/features"
                className="border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-lg font-semibold text-lg transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16">
            Core Features
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Influencer Monitoring */}
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="text-primary-500 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-medium mb-4">Influencer Monitoring</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Real-time tracking</li>
                <li>Historical analysis</li>
                <li>Performance metrics</li>
              </ul>
            </div>

            {/* AI-Powered Analysis */}
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="text-primary-500 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-medium mb-4">AI-Powered Analysis</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Token identification</li>
                <li>Sentiment analysis</li>
                <li>Trade suggestions</li>
              </ul>
            </div>

            {/* Automated Trading */}
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="text-primary-500 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-2xl font-medium mb-4">Automated Trading</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Multiple order types</li>
                <li>Risk management</li>
                <li>Helius RPC integration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Trading Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16">
            Trading Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Order Types */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-2xl font-medium mb-4">Order Types</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Market orders</li>
                <li>Limit orders</li>
                <li>Stop-loss & Take-profit</li>
                <li>DCA options</li>
              </ul>
            </div>

            {/* Risk Management */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-2xl font-medium mb-4">Risk Management</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Position limits</li>
                <li>Allocation controls</li>
                <li>Trading frequency</li>
              </ul>
            </div>

            {/* Wallet Features */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-2xl font-medium mb-4">Wallet Features</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Multi-wallet support</li>
                <li>Security features</li>
                <li>Import/Export</li>
              </ul>
            </div>

            {/* Fee Structure */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-2xl font-medium mb-4">Fee Structure</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Base fees: 0.1%</li>
                <li>Success fees: 5%</li>
                <li>Gas estimation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-primary-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8">
            Ready to Start Trading Smarter?
          </h2>
          <Link
            to="/signup"
            className="inline-block bg-white text-primary-700 hover:bg-primary-50 px-8 py-3 rounded-lg font-semibold text-lg transition-colors"
          >
            Create Your Account
          </Link>
        </div>
      </section>
    </div>
  );
}
