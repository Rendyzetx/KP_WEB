import React from "react";

const sections = [
  { name: "home", href: "#home" },
  { name: "feature", href: "#feature" },
  { name: "about", href: "#about" },
  { name: "gallery", href: "#gallery" },
  { name: "reviews", href: "#reviews" },
  { name: "contact", href: "#contact" },
];

const Header = ({ sectionInView }) => {
  return (
    <div className="navbar bg-base-100 shadow-md fixed z-50 w-full px-4 flex items-center">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">
          Bukit <span className="text-accent ml-2">Kebo</span>
        </a>
      </div>
      <ul className="hidden lg:flex space-x-8 uppercase text-lg absolute left-1/2 transform -translate-x-1/2 font-bold">
        {sections.map((section, index) => (
          <li
            key={index}
            className={`hover:text-accent transition-colors ${
              sectionInView === section.name ? "text-accent" : ""
            }`}
          >
            <a href={section.href}>{section.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
