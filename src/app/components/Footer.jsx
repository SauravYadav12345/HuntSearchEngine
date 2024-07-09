"use client";
import { CountryLookup } from "./CountryLookup";

export const Footer = () => {
  return (
    <footer className="mt-8 bg-gray-200 text-gray-700 py-8">
      <div className="container mx-auto px-4">
        <div className="border-b border-gray-300 pb-4 mb-4">
          <CountryLookup />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          <div>
            <h3 className="font-bold mb-2">About Us</h3>
            <ul className="space-y-1">
              <li>
                <a href="/about" className="hover:underline cursor-pointer">
                  About
                </a>
              </li>
              <li>
                <a href="/jobs" className="hover:underline cursor-pointer">
                  Jobs
                </a>
              </li>
              <li>
                <a href="/press" className="hover:underline cursor-pointer">
                  Press
                </a>
              </li>
              <li>
                <a
                  href="/developers"
                  className="hover:underline cursor-pointer"
                >
                  Developers
                </a>
              </li>
              <li>
                <a
                  href="/accessibility"
                  className="hover:underline cursor-pointer"
                >
                  Accessibility
                </a>
              </li>
              <li>
                <a href="/policies" className="hover:underline cursor-pointer">
                  Policies
                </a>
              </li>
              <li>
                <a href="/faqs" className="hover:underline cursor-pointer">
                  FAQs
                </a>
              </li>
              <li>
                <a href="/help" className="hover:underline cursor-pointer">
                  Help Center
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Business</h3>
            <ul className="space-y-1">
              <li>
                <a
                  href="/advertising"
                  className="hover:underline cursor-pointer"
                >
                  Advertising
                </a>
              </li>
              <li>
                <a href="/business" className="hover:underline cursor-pointer">
                  Business
                </a>
              </li>
              <li>
                <a href="/partners" className="hover:underline cursor-pointer">
                  Partners
                </a>
              </li>
              <li>
                <a
                  href="/ad-programs"
                  className="hover:underline cursor-pointer"
                >
                  Advertising Programs
                </a>
              </li>
              <li>
                <a href="/corporate" className="hover:underline cursor-pointer">
                  Corporate Information
                </a>
              </li>
              <li>
                <a href="/investors" className="hover:underline cursor-pointer">
                  Investor Relations
                </a>
              </li>
              <li>
                <a href="/news" className="hover:underline cursor-pointer">
                  News
                </a>
              </li>
              <li>
                <a href="/press-kit" className="hover:underline cursor-pointer">
                  Press Kit
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Resources</h3>
            <ul className="space-y-1">
              <li>
                <a
                  href="/how-search-works"
                  className="hover:underline cursor-pointer"
                >
                  How Search works
                </a>
              </li>
              <li>
                <a href="/community" className="hover:underline cursor-pointer">
                  Community
                </a>
              </li>
              <li>
                <a
                  href="/product-info"
                  className="hover:underline cursor-pointer"
                >
                  Product Info
                </a>
              </li>
              <li>
                <a
                  href="/product-blog"
                  className="hover:underline cursor-pointer"
                >
                  Product Blog
                </a>
              </li>
              <li>
                <a
                  href="/developer-resources"
                  className="hover:underline cursor-pointer"
                >
                  Developer Resources
                </a>
              </li>
              <li>
                <a
                  href="/open-source"
                  className="hover:underline cursor-pointer"
                >
                  Open Source
                </a>
              </li>
              <li>
                <a
                  href="/sustainability"
                  className="hover:underline cursor-pointer"
                >
                  Sustainability
                </a>
              </li>
              <li>
                <a
                  href="/economic-impact"
                  className="hover:underline cursor-pointer"
                >
                  Economic Impact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Legal</h3>
            <ul className="space-y-1">
              <li>
                <a href="/privacy" className="hover:underline cursor-pointer">
                  Privacy
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:underline cursor-pointer">
                  Terms
                </a>
              </li>
              <li>
                <a href="/settings" className="hover:underline cursor-pointer">
                  Settings
                </a>
              </li>
              <li>
                <a href="/cookies" className="hover:underline cursor-pointer">
                  Cookies
                </a>
              </li>
              <li>
                <a
                  href="/ads-settings"
                  className="hover:underline cursor-pointer"
                >
                  Ads Settings
                </a>
              </li>
              <li>
                <a
                  href="/transparency-report"
                  className="hover:underline cursor-pointer"
                >
                  Transparency Report
                </a>
              </li>
              <li>
                <a href="/security" className="hover:underline cursor-pointer">
                  Security
                </a>
              </li>
              <li>
                <a href="/legal" className="hover:underline cursor-pointer">
                  Legal
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Contact</h3>
            <ul className="space-y-1">
              <li>
                <a href="/contact" className="hover:underline cursor-pointer">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/feedback" className="hover:underline cursor-pointer">
                  Feedback
                </a>
              </li>
              <li>
                <a href="/safety" className="hover:underline cursor-pointer">
                  Safety Center
                </a>
              </li>
              <li>
                <a
                  href="/community-guidelines"
                  className="hover:underline cursor-pointer"
                >
                  Community Guidelines
                </a>
              </li>
              <li>
                <a
                  href="/social-impact"
                  className="hover:underline cursor-pointer"
                >
                  Social Impact
                </a>
              </li>
              <li>
                <a
                  href="/brand-guidelines"
                  className="hover:underline cursor-pointer"
                >
                  Brand Guidelines
                </a>
              </li>
              <li>
                <a href="/local" className="hover:underline cursor-pointer">
                  Local
                </a>
              </li>
              <li>
                <a href="/languages" className="hover:underline cursor-pointer">
                  Languages
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Other</h3>
            <ul className="space-y-1">
              <li>
                <a href="/mobile" className="hover:underline cursor-pointer">
                  Mobile
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:underline cursor-pointer">
                  Blog
                </a>
              </li>
              <li>
                <a href="/culture" className="hover:underline cursor-pointer">
                  Culture
                </a>
              </li>
              <li>
                <a
                  href="/privacy-policy"
                  className="hover:underline cursor-pointer"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms-of-service"
                  className="hover:underline cursor-pointer"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="/trademarks"
                  className="hover:underline cursor-pointer"
                >
                  Trademarks
                </a>
              </li>
              <li>
                <a href="/sitemap" className="hover:underline cursor-pointer">
                  Sitemap
                </a>
              </li>
              <li>
                <a
                  href="/affiliates"
                  className="hover:underline cursor-pointer"
                >
                  Affiliates
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
