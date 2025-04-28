import React, { useState, useEffect, useRef } from "react";

const sections = [
  { name: "beranda", href: "#home", id: "home" },
  { name: "fasilitas", href: "#feature", id: "feature" },
  { name: "tentang", href: "#about", id: "about" },
  { name: "album", href: "#gallery", id: "gallery" },
  { name: "tinjauan", href: "#reviews", id: "reviews" },
  { name: "kontak", href: "#contact", id: "contact" },
];

const Header = () => {
  const [sectionInView, setSectionInView] = useState("home");
  const [hoverIndex, setHoverIndex] = useState(null);
  const [hoverIndexMobile, setHoverIndexMobile] = useState(null);
  const [isNavbarHovered, setIsNavbarHovered] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const observer = useRef(null);

  const menuRef = useRef(null);
  const toggleBtnRef = useRef(null);

  useEffect(() => {
    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setSectionInView(entry.target.id);
        }
      });
    };

    observer.current = new IntersectionObserver(handleIntersect, {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    });

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.current.observe(el);
    });

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        toggleBtnRef.current &&
        !menuRef.current.contains(event.target) &&
        !toggleBtnRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  const isBeranda = sectionInView === "home";

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div
      className={`navbar fixed z-50 w-full px-4 pb-3 flex items-center bg-base-100 ${
        isBeranda
          ? `bg-opacity-0 ${
              isNavbarHovered ? "bg-opacity-100 text-base-content" : "text-white"
            }`
          : "bg-opacity-100 text-base-content"
      } transition-[background-color] duration-300`}
      onMouseEnter={() => setIsNavbarHovered(true)}
      onMouseLeave={() => setIsNavbarHovered(false)}
    >
      <div className="flex-1 flex items-center justify-between">
        <a
          className="btn btn-ghost normal-case text-xl flex items-center"
          href="#home"
          onClick={handleLinkClick}
        >
          Wisata{" "}
          <span
            className={`ml-2 font-bold transition-colors duration-700 ${
              isBeranda
                ? isNavbarHovered
                  ? "text-accent"
                  : "text-white"
                : "text-accent"
            }`}
          >
            Bukit Kebo
          </span>
        </a>

        <button
          ref={toggleBtnRef}
          className="lg:hidden btn btn-square btn-ghost"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Menu Desktop */}
      <ul className="hidden lg:flex space-x-8 uppercase text-lg absolute left-1/2 transform -translate-x-1/2 font-bold">
        {sections.map((section, index) => {
          const isActive = sectionInView === section.id;
          const isHovered = hoverIndex === index;
          return (
            <li key={index} className="relative">
              <a
                href={section.href}
                className={`transition-all ${
                  isActive || isHovered
                    ? isBeranda
                      ? isNavbarHovered
                        ? "text-accent"
                        : "text-white"
                      : "text-accent"
                    : ""
                }`}
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
              >
                {section.name}
                <span
                  className={`absolute left-0 bottom-0 h-[2px] transition-all duration-700 ${
                    isActive || isHovered
                      ? isBeranda
                        ? isNavbarHovered
                          ? "bg-accent"
                          : "bg-white"
                        : "bg-accent"
                      : "bg-base-content"
                  }`}
                  style={{
                    width: isHovered || isActive ? "100%" : "0%",
                  }}
                />
              </a>
            </li>
          );
        })}
      </ul>

      {/* Menu Mobile */}
      <ul
        ref={menuRef}
        className={`lg:hidden absolute top-full left-0 w-full bg-base-100 shadow-md flex flex-col space-y-2 py-4 px-6 uppercase font-bold z-50 transition-opacity duration-300 ease-in-out ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {sections.map((section, index) => {
          const isActive = sectionInView === section.id;
          const isHovered = hoverIndexMobile === index;
          return (
            <li
              key={index}
              onMouseEnter={() => setHoverIndexMobile(index)}
              onMouseLeave={() => setHoverIndexMobile(null)}
            >
              <a
                href={section.href}
                className={`block py-2 relative transition-colors ${
                  isActive ? "text-accent" : "text-base-content"
                } hover:text-accent focus:text-accent`}
              >
                {section.name}
                <span
                  className={`absolute left-0 bottom-0 h-[2px] bg-accent transition-all duration-500 ease-in-out`}
                  style={{
                    width: isActive || isHovered ? "100%" : "0%",
                  }}
                />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Header;
