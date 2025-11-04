import React from "react";
import { assets } from "../assets/assets";
import { FaFacebook, FaInstagram, FaMailBulk } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-20">
      <div className="max-w-3xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo & Brand */}
        <div className="flex items-center gap-3">
          <img src={assets.logo} alt="Minh An" className="w-32 md:w-36" />
        </div>
        {/* Info */}
        <div className="text-gray-600 text-center md:text-left text-sm">
          <div>
            Hotline:{" "}
            <a href="tel:0943268248" className="text-orange-500 font-semibold">
              0943 268 248
            </a>
          </div>
          <div>
            Email:{" "}
            <a
              href="mailto:marenovation.vn@gmail.com"
              className="text-orange-500 font-semibold"
            >
              marenovation.vn@gmail.com
            </a>
          </div>
        </div>
        {/* Social */}
        <div className="flex gap-4">
          <a
            href="https://www.facebook.com/marenovation.vn/"
            target="_blank"
            rel="noopener"
            aria-label="Facebook"
          >
            <FaFacebook
              src="/facebook.svg"
              alt="Facebook"
              className="w-6 h-6 hover:scale-110 transition"
            />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener"
            aria-label="Zalo"
          >
            <FaInstagram
              src="/zalo.svg"
              alt="Zalo"
              className="w-6 h-6 hover:scale-110 transition"
            />
          </a>
          <a href="mailto:marenovation.vn@gmail.com" aria-label="Email">
            <FaMailBulk
              src="/mail.svg"
              alt="Email"
              className="w-6 h-6 hover:scale-110 transition"
            />
          </a>
        </div>
      </div>
      <div className="text-center text-xs text-gray-400 py-4 border-t border-gray-100">
        © {new Date().getFullYear()} M.A Renovation Interior. All rights reserved.
      </div>
    </footer>
  );
};
