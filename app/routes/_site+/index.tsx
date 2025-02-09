import { type Route } from "./+types/home";
import { SiteNavigation } from "~/components/layout/site-navigation";
import { SiteFooter } from "~/components/layout/site-footer";

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

export function loader({ context }: Route.LoaderArgs) {
return { message: context.VALUE_FROM_EXPRESS };
}

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
<dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
{/* Feature 1 */}
<div className="relative">
<dt>
<div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
{/* Heroicon name: outline/globe-alt */}
<svg
className="h-6 w-6"
xmlns="http://www.w3.org/2000/svg"
fill="none"
viewBox="0 0 24 24"
strokeWidth="2"
stroke="currentColor"
aria-hidden="true"
>
<path
strokeLinecap="round"
strokeLinejoin="round"
d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
/>
</svg>
</div>
<p className="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-white">
                  Influencer Tracking
</p>
</dt>
<dd className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-400">
                  Monitor crypto influencers in real-time and get notified
                  about their latest recommendations.
</dd>
</div>

{/* Feature 2 */}
<div className="relative">
<dt>
<div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
{/* Heroicon name: outline/scale */}
<svg
className="h-6 w-6"
xmlns="http://www.w3.org/2000/svg"
fill="none"
viewBox="0 0 24 24"
strokeWidth="2"
stroke="currentColor"
aria-hidden="true"
>
<path
strokeLinecap="round"
strokeLinejoin="round"
d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
/>
</svg>
</div>
<p className="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-white">
                  AI-Powered Analysis
</p>
</dt>
<dd className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-400">
                  Get insights from AI-driven sentiment analysis and token
                  identification.
</dd>
</div>

{/* Feature 3 */}
<div className="relative">
<dt>
<div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
{/* Heroicon name: outline/lightning-bolt */}
<svg
className="h-6 w-6"
xmlns="http://www.w3.org/2000/svg"
fill="none"
viewBox="0 0 24 24"
strokeWidth="2"
stroke="currentColor"
aria-hidden="true"
>
<path
strokeLinecap="round"
strokeLinejoin="round"
d="M13 10V3L4 14h7v7l9-11h-7z"
/>
</svg>
</div>
<p className="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-white">
                  Automated Trading
</p>
</dt>
<dd className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-400">
                  Execute trades automatically based on influencer
                  recommendations and your risk settings.
</dd>
</div>

{/* Feature 4 */}
<div className="relative">
<dt>
<div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
{/* Heroicon name: outline/shield-check */}
<svg
className="h-6 w-6"
xmlns="http://www.w3.org/2000/svg"
fill="none"
viewBox="0 0 24 24"
strokeWidth="2"
stroke="currentColor"
aria-hidden="true"
>
<path
strokeLinecap="round"
strokeLinejoin="round"
d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
/>
</svg>
</div>
<p className="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-white">
                  Risk Management
</p>
</dt>
<dd className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-400">
                  Set position limits, stop-loss orders, and manage your
                  portfolio with advanced risk controls.
</dd>
</div>
</dl>
</div>
</div>
</div>
</main>
<SiteFooter />
</div>
);
}
