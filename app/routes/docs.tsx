import { Link, Outlet } from 'react-router-dom';

const DocsSidebar = () => {
  const sections = [
    {
      title: 'Getting Started',
      links: [
        { name: 'Introduction', to: '/docs' },
        { name: 'Quick Start', to: '/docs/quick-start' },
        { name: 'Installation', to: '/docs/installation' },
      ],
    },
    {
      title: 'Trading Guide',
      links: [
        { name: 'Basic Concepts', to: '/docs/trading/basics' },
        { name: 'Order Types', to: '/docs/trading/orders' },
        { name: 'Risk Management', to: '/docs/trading/risk' },
      ],
    },
    {
      title: 'API Reference',
      links: [
        { name: 'Authentication', to: '/docs/api/auth' },
        { name: 'Endpoints', to: '/docs/api/endpoints' },
        { name: 'WebSocket', to: '/docs/api/websocket' },
      ],
    },
    {
      title: 'FAQ',
      links: [
        { name: 'General FAQ', to: '/docs/faq' },
        { name: 'Trading FAQ', to: '/docs/faq/trading' },
        { name: 'Technical FAQ', to: '/docs/faq/technical' },
      ],
    },
  ];

  return (
    <nav className="space-y-8">
      {sections.map((section) => (
        <div key={section.title}>
          <h3 className="font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide text-sm">
            {section.title}
          </h3>
          <ul className="mt-4 space-y-4">
            {section.links.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.to}
                  className="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
};

export default function Docs() {
  return (
    <div className="bg-white dark:bg-secondary-900">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="hidden lg:block lg:col-span-3">
            <DocsSidebar />
          </div>
          <main className="lg:col-span-9">
            <div className="prose dark:prose-invert max-w-none">
              <h1>Documentation</h1>
              <p className="lead">
                Welcome to the TredSmart documentation. Here you'll find comprehensive guides and documentation to help you
                start working with TredSmart as quickly as possible.
              </p>

              <h2>What is TredSmart?</h2>
              <p>
                TredSmart is a real-time cryptocurrency influencer tracking platform that monitors Twitter influencers'
                cryptocurrency recommendations and provides automated trading capabilities with advanced risk management
                features.
              </p>

              <h2>Core Features</h2>
              <ul>
                <li>Real-time monitoring of specified crypto influencers</li>
                <li>Automated tweet collection and analysis</li>
                <li>AI-powered sentiment analysis and trade suggestions</li>
                <li>Advanced trading features with multiple order types</li>
                <li>Comprehensive risk management tools</li>
                <li>Multi-wallet support with secure management</li>
              </ul>

              <h2>Getting Started</h2>
              <p>
                To get started with TredSmart, you'll need to:
              </p>
              <ol>
                <li>Create an account and complete verification</li>
                <li>Connect your preferred crypto wallet</li>
                <li>Configure your trading preferences and risk parameters</li>
                <li>Select influencers to monitor</li>
                <li>Start receiving trade suggestions and automated execution</li>
              </ol>

              <div className="mt-8">
                <Link
                  to="/docs/quick-start"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-500 hover:bg-primary-700"
                >
                  Quick Start Guide
                </Link>
              </div>
            </div>
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}
