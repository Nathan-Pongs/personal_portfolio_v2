import React, { useState, useEffect } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { motion } from "framer-motion";

const tabs = ["Home", "About", "Skills", "Projects", "Contact"];

const Header = () => {
  const [selected, setSelected] = useState(tabs[0]);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.clientHeight;

      // Check if user has scrolled to the bottom of the page
      if (scrollPosition + windowHeight >= documentHeight) {
        setSelected("Contact");
        return;
      }

      // Proceed with the existing logic for other sections
      const sectionOffsets = tabs.map((tab) => {
        const element = document.getElementById(tab.toLowerCase());
        if (element) {
          return {
            id: tab,
            offsetTop: element.offsetTop,
            offsetBottom: element.offsetTop + element.offsetHeight,
          };
        }
        return null;
      }).filter(Boolean); // Filter out null values

      let activeTab = tabs[0];
      for (let i = 0; i < sectionOffsets.length; i++) {
        if (
          scrollPosition >= sectionOffsets[i].offsetTop &&
          scrollPosition < sectionOffsets[i].offsetBottom
        ) {
          activeTab = sectionOffsets[i].id;
          break;
        }
      }
      setSelected(activeTab);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleToggle = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };

  const handleTabClick = (tab) => {
    setSelected(tab);
    const element = document.getElementById(tab.toLowerCase());
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
    }
    setMenuOpen(false);
  };

  return (
    <div className="fixed justify-center items-center bg-white top-4 2xl:top-8 right-4 z-50">
      {/* Mobile Menu (Hamburger Menu) */}
      <div className="md:hidden block">
        <div
          className={`fixed bg-white top-4 2xl:top-8 right-4 bg-indigo-600 hover:bg-indigo-600 p-[2px] z-20 ${
            menuOpen ? "rounded-bl-md rounded-tr-md" : "rounded-md"
          }`}
        >
          <Hamburger toggled={menuOpen} toggle={handleToggle} size={28} />
        </div>
        <div
          className="menu grid p-4"
          style={{
            width: menuOpen ? "calc(100vw - 2rem)" : "0",
            height: menuOpen ? "calc(100dvh - 2rem)" : "0",
            overflow: "hidden",
            transition: menuOpen
              ? "width 0.3s ease-in-out, height 0.3s ease"
              : "height 0.3s ease 0.7s, width 0.3s ease 0.7s",
          }}
        >
          <ul className="flex flex-col gap-4">
            {tabs.map((tab, index) => (
              <li
                key={tab}
                className="text-3xl text-left font-mono"
                style={{
                  opacity: menuOpen ? "1" : "0",
                  transition: `opacity 0.3s ease ${
                    menuOpen
                      ? `calc(${index + 1} * 0.15s)`
                      : `calc(${tabs.length + 1 - (index + 1)} * 0.15s)`
                  }`,
                }}
              >
                <a
                  href={`#${tab.toLowerCase()}-anchor`}
                  onClick={() => handleTabClick(tab)}
                >
                  {tab}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Desktop Menu (Center-Aligned) */}
      <div className="fixed top-4 left-1/2 transform -translate-x-1/2 px-4 py-4 bg-slate-900 md:flex hidden items-center flex-wrap justify-center gap-4 rounded-full">
        {tabs.map((tab) => (
          <Chip text={tab} selected={selected === tab} tabId={tab} key={tab} />
        ))}
      </div>
    </div>
  );  
};

const Chip = ({ text, selected, tabId }) => {
  useEffect(() => {
    const handleSmoothScroll = (event) => {
      event.preventDefault();
      const element = document.getElementById(tabId.toLowerCase());
      if (element) {
        window.scrollTo({
          top: element.offsetTop,
          behavior: "smooth",
        });
      }
    };

    const anchor = document.getElementById(tabId.toLowerCase() + "-anchor");
    if (anchor) {
      anchor.addEventListener("click", handleSmoothScroll);
      return () => {
        anchor.removeEventListener("click", handleSmoothScroll);
      };
    }
  }, [tabId]);

  return (
    <a id={`${tabId.toLowerCase()}-anchor`} href={`#${tabId.toLowerCase()}`}>
      <span
        className={`${
          selected
            ? "text-black"
            : "text-slate-300 hover:text-slate-200 hover:bg-slate-700"
        } text-[1rem] transition-colors px-2.5 py-0.5 rounded-full relative `}
      >
        <span className="relative z-10">{text}</span>
        {selected && (
          <motion.span
            layoutId="pill-tab"
            transition={{ type: "spring", duration: 0.5 }}
            className="absolute inset-0 z-0 bg-white rounded-full"
          ></motion.span>
        )}
      </span>
    </a>
  );
};

export default Header;