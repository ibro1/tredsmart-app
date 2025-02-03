import { Link, Outlet } from 'react-router-dom';
import { useState } from 'react';

const MainLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark bg-secondary-900 text-white' : 'bg-white text-secondary-900'}`}>
      {/* Navigation */}
      <nav className="bg-white dark:bg-secondary-900 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              {/* Logo */}
              <Link to="/" className="flex-shrink-0 flex items-center">
                <span className="text-primary-500 text-xl font-bold">TredSmart</span>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <Link to="/influencers" className="text-gray-500 hover:text-primary-500 px-3 py-2 rounded-md text-sm font-medium">
                  Influencers
                </Link>
                <Link to="/trades" className="text-gray-500 hover:text-primary-500 px-3 py-2 rounded-md text-sm font-medium">
                  Trades
                </Link>
                <Link to="/analytics" className="text-gray-500 hover:text-primary-500 px-3 py-2 rounded-md text-sm font-medium">
                  Analytics
                </Link>
                <Link to="/docs" className="text-gray-500 hover:text-primary-500 px-3 py-2 rounded-md text-sm font-medium">
                  Documentation
                </Link>
              </div>
            </div>

            {/* Right side navigation items */}
            <div className="hidden sm:ml-6 sm:flex sm:items-center">
              <button
                onClick={toggleTheme}
                className="bg-gray-100 dark:bg-secondary-700 p-2 rounded-full text-gray-500 hover:text-primary-500"
              >
                {isDarkMode ? '🌞' : '🌙'}
              </button>
              <Link
                to="/dashboard"
                className="ml-4 px-4 py-2 rounded-md text-sm font-medium text-white bg-primary-500 hover:bg-primary-700"
              >
                Dashboard
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center sm:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-primary-500 hover:bg-gray-100"
              >
                <span className="sr-only">Open main menu</span>
                {/* Menu icon */}
                <svg
                  className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                {/* Close icon */}
                <svg
                  className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} sm:hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/influencers"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:text-primary-500 hover:bg-gray-50"
            >
              Influencers
            </Link>
            <Link
              to="/trades"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:text-primary-500 hover:bg-gray-50"
            >
              Trades
            </Link>
            <Link
              to="/analytics"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:text-primary-500 hover:bg-gray-50"
            >
              Analytics
            </Link>
            <Link
              to="/docs"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:text-primary-500 hover:bg-gray-50"
            >
              Documentation
            </Link>
            <Link
              to="/dashboard"
              className="block px-3 py-2 rounded-md text-base font-medium text-white bg-primary-500 hover:bg-primary-700"
            >
              Dashboard
            </Link>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-secondary-900 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Features</h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <Link to="/influencers" className="text-base text-gray-500 hover:text-primary-500">
                    Influencer Monitoring
                  </Link>
                </li>
                <li>
                  <Link to="/trades" className="text-base text-gray-500 hover:text-primary-500">
                    Trading Features
                  </Link>
                </li>
                <li>
                  <Link to="/analytics" className="text-base text-gray-500 hover:text-primary-500">
                    Analytics
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Resources</h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <Link to="/docs" className="text-base text-gray-500 hover:text-primary-500">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link to="/docs/api" className="text-base text-gray-500 hover:text-primary-500">
                    API Reference
                  </Link>
                </li>
                <li>
                  <Link to="/docs/guide" className="text-base text-gray-500 hover:text-primary-500">
                    Trading Guide
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Legal</h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <Link to="/privacy" className="text-base text-gray-500 hover:text-primary-500">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="text-base text-gray-500 hover:text-primary-500">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Social</h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a href="https://twitter.com" className="text-base text-gray-500 hover:text-primary-500">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="https://discord.com" className="text-base text-gray-500 hover:text-primary-500">
                    Discord
                  </a>
                </li>
                <li>
                  <a href="https://github.com" className="text-base text-gray-500 hover:text-primary-500">
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-200 dark:border-gray-800 pt-8">
            <p className="text-base text-gray-400 text-center">
              &copy; {new Date().getFullYear()} TredSmart. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
