import { Link, useLocation } from "react-router-dom";
import { useEffect, useState, useRef} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import signature from "/images/Signature.png";

export default function Header() {
  const location = useLocation();
  const currentPath = location.pathname;
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null); 

  useEffect(() => {
    function handleClickOutside(e) {
      if (isOpen && navRef.current && !navRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  useEffect(() => {
    if (location.hash) {
      const sec = document.querySelector(location.hash);
      if (sec) {
        sec.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <>
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur bg-[--dark-blue]/20 flex flex-col md:flex-row justify-between items-center pl-3 pr-6 md:px-10">
        <div className="flex w-full md:w-auto justify-between items-center">
          <img src={signature} alt="MaltiRed" className="w-20 h-auto" />
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex flex-row gap-10 items-center justify-between py-0">
          <NavLinks currentPath={currentPath} hash={location.hash} />
        </nav>
      </header>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <nav ref = {navRef} className="fixed top-20 right-0 z-50 h-screen w-2/3 max-w-xs bg-[--dark-blue]/20 backdrop-blur flex flex-col gap-5 p-6 transition-transform duration-300 ease-in-out translate-x-0 md:hidden">
          <NavLinks currentPath={currentPath} hash={location.hash} />
        </nav>
      )}
    </>
  );
}

function NavLinks({ currentPath, hash }) {
  return (
    <>
      <Link
        to="/"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`hover:border-b-2 py-5 md:py-6 border-white transition-all duration-200 ${
          currentPath === "/#home" && hash !== "#contact"
            ? "border-b-2"
            : "border-auto"
        }`}
      >
        Home
      </Link>
      <Link
        to="/design"
        onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
        className={`hover:border-b-2 py-5 md:py-6 border-white transition-all duration-200 ${
          currentPath === "/design" ? "border-b-2" : "border-auto"
        }`}
      >
        Design Portfolio
      </Link>
      {/* <Link
        to="/projects"
        onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
        className={`hover:border-b-2 py-5 md:py-6 border-white transition-all duration-200 ${
          currentPath === "/projects" ? "border-b-2" : "border-auto"
        }`}
      >
        Projects
      </Link> */}
      <Link
        to="/#contact"
        className={`hover:border-b-2 py-5 md:py-6 border-white transition-all duration-200 ${
          hash === "#contact" ? "border-b-2" : "border-auto"
        }`}
      >
        Contact
      </Link>
    </>
  );
}
