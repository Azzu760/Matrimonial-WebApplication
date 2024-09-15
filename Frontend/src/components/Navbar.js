import { useState, useEffect } from "react";
import { FaHeart } from "react-icons/fa";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("");

  const handleScroll = () => {
    const sections = document.querySelectorAll("section");
    let currentSection = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (
        window.scrollY >= sectionTop - 60 &&
        window.scrollY < sectionTop + sectionHeight - 60
      ) {
        currentSection = section.getAttribute("id");
      }
    });

    setActiveLink(currentSection);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const linkStyle = (sectionId) => ({
    position: "relative",
    paddingBottom: "8px",
    color: activeLink === sectionId ? "#f472b6" : "",
    borderBottom: activeLink === sectionId ? "2px solid #f472b6" : "",
    transition: "color 0.3s, border-bottom 0.3s",
  });

  const handleLinkClick = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="bg-white shadow-lg p-4 fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <a
          href="/home"
          className="text-2xl font-bold text-pink-500 flex items-center"
        >
          <FaHeart className="mr-2" />
          Swyamvar.com
        </a>
        <div className="hidden md:flex space-x-6">
          <a
            href="#home"
            style={linkStyle("home")}
            onClick={(e) => handleLinkClick(e, "home")}
          >
            Home
          </a>
          <a
            href="#reviews"
            style={linkStyle("reviews")}
            onClick={(e) => handleLinkClick(e, "reviews")}
          >
            Reviews
          </a>
          <a
            href="#about-us"
            style={linkStyle("about-us")}
            onClick={(e) => handleLinkClick(e, "about-us")}
          >
            About
          </a>
          <a
            href="#pricing"
            style={linkStyle("pricing")}
            onClick={(e) => handleLinkClick(e, "pricing")}
          >
            Pricing
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
