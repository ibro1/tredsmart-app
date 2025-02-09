import { type Route } from "./+types/home";
import { SiteNavigation } from "~/components/layout/site-navigation";
import { SiteFooter } from "~/components/layout/site-footer";
import {
  ChartBarIcon,
  ShieldCheckIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "TredSmart - Crypto Influencer Tracking Platform" },
    {
      name: "description",
      content:
        "Real-time cryptocurrency influencer tracking platform with automated trading capabilities and advanced risk management",
    },
  ];
}

const features = [
  {
    name: "Influencer Tracking",
    description:
      "Monitor crypto influencers in real-time and get notified about their latest recommendations.",
    icon: UserGroupIcon,
  },
  {
    name: "AI-Powered Analysis",
    description:
      "Get insights from AI-driven sentiment analysis and token identification.",
    icon: ChartBarIcon,
  },
  {
    name: "Automated Trading",
    description:
      "Execute trades automatically based on influencer recommendations and your risk settings.",
    icon: ShieldCheckIcon,
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteNavigation />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
              TredSmart
            </h1>
            <p className="mt-4 text-xl text-indigo-100 sm:text-2xl">
              Track Crypto Influencers. Automate Trades. Manage Risk.
            </p>
            <div className="mt-10 flex justify-center space-x-4">
              <a
                href="/signup"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-800 hover:bg-indigo-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Get Started
              </a>
              <a
                href="/learn-more"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-100 bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-12 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-base text-indigo-600 dark:text-indigo-400 font-semibold tracking-wide uppercase">
                Features
              </h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                All-in-One Crypto Trading Platform
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 lg:mx-auto">
                TredSmart provides real-time influencer tracking, AI-powered
                analysis, and automated trading with advanced risk management.
              </p>
            </div>

            <div className="mt-10">
              <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
                {features.map((feature) => (
                  <div key={feature.name} className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                        <feature.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-white">
                        {feature.name}
                      </p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-400">
                      {feature.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
