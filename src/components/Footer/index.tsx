import React from "react";
import { PhoneIcon, MapPinIcon } from "@phosphor-icons/react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-6 md:px-12">
        {/* Top Section: Brand + Get in Touch */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-10 gap-8">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">DAANPitara</h2>
            <p className="text-sm">
              © DAANPitara 2025
            </p>
          </div>

          {/* Get in Touch */}
          <div className="text-sm space-y-2">
            <h4 className="font-semibold text-indigo-400 mb-2">Get In Touch</h4>
            <p className="flex items-start gap-2">
              <MapPinIcon size={18} weight="fill" className="text-indigo-400 mt-1" />
              706 First Floor, Phase 4, Sector 59, Mohali – 160059
            </p>
            <p className="flex items-center gap-2">
              <PhoneIcon size={18} weight="fill" className="text-indigo-400" />
              <a href="tel:9876577721" className="hover:text-indigo-400">98765 77721</a>
            </p>
            <p>Mon - Sat 10am - 6PM</p>
          </div>
        </div>

        {/* Useful Links Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Pages */}
          <div>
            <h4 className="font-semibold text-indigo-400 mb-3">Pages</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-indigo-400">About DAANPitara</a></li>
              <li><a href="#" className="hover:text-indigo-400">Getting Started</a></li>
              <li><a href="#" className="hover:text-indigo-400">Trust & Safety</a></li>
              <li><a href="#" className="hover:text-indigo-400">Investor Relations</a></li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="font-semibold text-indigo-400 mb-3">Policies</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-indigo-400">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-indigo-400">Terms & Condition</a></li>
              <li><a href="#" className="hover:text-indigo-400">Refund Policy</a></li>
              <li><a href="#" className="hover:text-indigo-400">Terms of Services</a></li>
            </ul>
          </div>

          {/* Advertisement */}
          <div>
            <h4 className="font-semibold text-indigo-400 mb-3">Advertisement</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-indigo-400">Paid Advertising</a></li>
              <li><a href="#" className="hover:text-indigo-400">Advertise on DAANPitara</a></li>
              <li><a href="#" className="hover:text-indigo-400">DAANPitara Business</a></li>
              <li><a href="#" className="hover:text-indigo-400">DAANPitara for Business</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-indigo-400 mb-3">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-indigo-400">Login on DAANPitara</a></li>
              <li><a href="#" className="hover:text-indigo-400">Claim for Business Page</a></li>
              <li><a href="#" className="hover:text-indigo-400">Support for B2B</a></li>
              <li><a href="#" className="hover:text-indigo-400">Table Management</a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 pt-4 text-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} DAANPitara. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
