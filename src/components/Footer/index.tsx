import React from "react";
import { PhoneIcon, MapPinIcon } from "@phosphor-icons/react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Left Section - Logo and Copyright */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">DAANPitara</h2>
          <p className="text-sm">
            © DAANPitara 2025 <br />
            Design By <span className="text-indigo-400 font-semibold">RTM</span>
          </p>
        </div>

        {/* Middle Section - Useful Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Useful Links</h3>
          <ul className="space-y-2 text-sm">
            {[
              "About DAANPitara",
              "Privacy Policy",
              "Terms & Condition",
              "Refund Policy",
              "Getting Started",
              "Trust & Safety",
              "Investor Relations",
              "Connect Guidelines",
              "Terms of Services",
              "Paid Advertising",
              "DAANPitara Blog",
              "DAANPitara Business",
              "DAANPitara for Business",
              "Advertise on DAANPitara",
              "Login on DAANPitara",
              "Claim for Business Page",
              "Support for B2B",
              "Table Management",
            ].map((link, index) => (
              <li key={index} className="hover:text-indigo-400 transition">
                <a href="#">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section - Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Get In Touch</h3>
          <p className="flex items-start gap-2 text-sm mb-3">
            <MapPinIcon size={18} weight="fill" className="text-indigo-400 mt-1" />
            706 First Floor, Phase 4, Sector 59, Mohali – 160059
          </p>
          <p className="flex items-center gap-2 text-sm mb-3">
            <PhoneIcon size={18} weight="fill" className="text-indigo-400" />
            <a href="tel:9876577721" className="hover:text-indigo-400">
              98765 77721
            </a>
          </p>
          <p className="text-sm">Mon - Sat 10am - 6PM</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-xs text-gray-500">
        <p>© {new Date().getFullYear()} DAANPitara. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
