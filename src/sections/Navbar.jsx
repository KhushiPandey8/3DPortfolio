import { useState, useEffect } from 'react';
import { navLinks } from '../constants/index.js';

const NavItems = ({ onClick = () => {}, activeLink }) => (
  <ul className="nav-ul">
    {navLinks.map((item) => (
      <li key={item.id} className="nav-li">
        {item.id === "resume" ? (
          <a
            href={item.link}
            className="px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-md hover:shadow-lg transition-all duration-300"
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClick}
          >
            {item.title}
          </a>
        ) : (
          <a
            href={item.href}
            className={`nav-li_a ${activeLink === item.id ? 'active' : ''}`} // Apply active class
            onClick={onClick}
          >
            {item.title}
          </a>
        )}
      </li>
    ))}
  </ul>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Handle section highlighting based on scroll
  useEffect(() => {
    const sections = navLinks.filter((link) => link.href !== 'resume').map((link) => document.querySelector(link.href));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(entry.target.id); // Set active link when section is in view
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the section is in view
      }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    // Cleanup observer on component unmount
    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          <a href="/" className="text-neutral-400 font-bold text-xl hover:text-white transition-colors">
            Khushi
          </a>

          <button
            onClick={toggleMenu}
            className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
            aria-label="Toggle menu"
          >
            <img src={isOpen ? 'assets/close.svg' : 'assets/menu.svg'} alt="toggle" className="w-6 h-6" />
          </button>

          <nav className="sm:flex hidden">
            <NavItems activeLink={activeLink} />
          </nav>
        </div>
      </div>

      <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <nav className="p-5">
          <NavItems activeLink={activeLink} onClick={closeMenu} />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
    