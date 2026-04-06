import React from 'react';
import { Link } from 'react-router-dom';

const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_TO_EMAIL || 'mdhuzaifa00786@gmail.com';
const CONTACT_PHONE = '+916391028860';

const Footer = () => {
  return (
    <footer className="mt-12 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-2xl font-bold">Mohammad Huzaifa</h3>
          <p className="mt-4 text-sm text-gray-200 max-w-sm">
            Passionate developer and machine learning enthusiast, dedicated to creating
            innovative solutions and turning ideas into reality through code.
          </p>
          <div className="flex gap-4 mt-6 text-gray-300">
            <a href="https://github.com/GuruMachanica" aria-label="GitHub" className="hover:text-white">GitHub</a>
            <a href="https://www.linkedin.com/in/mohammad-huzaifa-137939322/" aria-label="LinkedIn" className="hover:text-white">LinkedIn</a>
            <a href={`mailto:${CONTACT_EMAIL}`} aria-label="Email" className="hover:text-white">Email</a>
          </div>
        </div>

        <div>
          <h4 className="text-xl font-semibold">Quick Links</h4>
          <ul className="mt-4 space-y-3 text-gray-300">
            <li>
              <a href="#about" className="hover:text-white">About</a>
            </li>
            <li>
              <a href="#projects" className="hover:text-white">Projects</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white">Contact</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-semibold">Get In Touch</h4>
          <div className="mt-4 text-gray-300">
            <div>Prayagraj, Uttar Pradesh</div>
            <div className="mt-2">{CONTACT_EMAIL}</div>
            <div className="mt-2">{CONTACT_PHONE}</div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6 text-sm text-gray-400
        flex flex-col sm:flex-row gap-2 sm:gap-0 justify-between text-center sm:text-left">
          <div>© {new Date().getFullYear()} Mohammad Huzaifa. All rights reserved.</div>
          <div>Site design — black & white</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
