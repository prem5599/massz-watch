import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  const footerLinks = [
    { title: "Home", href: "#" },
    { title: "Features", href: "#" },
    { title: "Pricing", href: "#" },
    { title: "FAQs", href: "#" },
    { title: "About", href: "#" },
  ];

  const socialLinks = [
    { icon: Twitter, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Facebook, href: "#" },
  ];

  return (
    <div>
    <footer className="container mx-auto px-3 py-3  ">
      <div className="grid d-flex justify-content-around">
        {/* Footer Sections - Each takes 2 columns on md screens */}
        {[1 ].map((section) => (
          <div key={section} className="text-center">
            <h5 className="font-semibold mb-2">Menus</h5>
            <ul className="me-4">
              {footerLinks.map((link) => (
                <li key={link.title}>
                  <a 
                    href={link.href}
                    className="text-warning hover:text-warning-200 transition-colors"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="col-span-1  gap-5">
          <form>
            <h5 className="font-semibold mb-2">Subscribe to our newsletter</h5>
            <p className="text-gray-600 mb-4">
              Monthly digest of what's new and exciting from us.
            </p>
            <div className="d-flex flex-col  gap-2">
              <label htmlFor="newsletter1" className="sr-only pt-2 mx-3">
                Email address
              </label>
              <input
                id="newsletter1"
                type="email"
                className="d-flex px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Email address"
              />
              <button 
                type="button"
                className="bg-blue-600 text-white px-4 py-2 btn btn-warning "
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
<hr/>
      {/* Bottom Section */}
      <div className="d-flex flex-col justify-between items-center justify-content-around mt-5">
        <p className="text-gray-500 mb-0 sm:mb-0">
          © 2024 Massz, Inc. All rights reserved.
        </p>
        <ul className="d-flex items-center  gap-3 ">
          {socialLinks.map(({ icon: Icon, href }) => (
            <li key={Icon.name}>
              <a 
                href={href}
                className="text-warning-600 hover:text-warning-900 transition-colors"
                aria-label={`Visit our ${Icon.name} page`}
              >
                <Icon size={24} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
    </div>
  );
};

export default Footer;