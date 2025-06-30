import { socialLinks } from "../constants/index.js";

const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      {/* Terms and Privacy Links */}
      <div className="text-white-500 flex gap-2">
        <a href="/terms" className="hover:text-white transition">
          Terms & Conditions
        </a>
        <p>|</p>
        <a href="/privacy" className="hover:text-white transition">
          Privacy Policy
        </a>
      </div>


      <div className="flex gap-3">
        <a
          href={socialLinks.github}
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <img src="/assets/github.svg" alt="GitHub" className="w-1/2 h-1/2" />
        </a>
        <a
          href={socialLinks.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <img src="/assets/twitter.svg" alt="Twitter" className="w-1/2 h-1/2" />
        </a>
        <a
          href={socialLinks.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <img src="/assets/instagram.svg" alt="Instagram" className="w-1/2 h-1/2" />
        </a>
      </div>

      {/* Footer Text */}
      <p className="text-white-500">© 2025-26 Khushi Pandey. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
