import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

// #region Nav items
const navItems = [
  { name: "About", width: "w-[4rem]", path: "/" },
  // { name: "Games", width: "w-[4rem]", path: "/games" },
  // { name: "Software", width: "w-[5rem]", path: "/software" },
  { name: "Resume", width: "w-[4.5rem]", path: "/resume" },
  { name: "Contact", width: "w-[4.5rem]", path: "/contact" },
];
// #endregion

// #region TypeScript Interface definitions
interface ActiveNavTarget {
  offsetWidth: number;
  offsetLeft: number;
}

interface ActiveNavTargetMobile {
  offsetHeight: number;
  offsetTop: number;
}
// #endregion

export const Navbar: React.FC = () => {
  // #region Mobile navbar
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  // #endregion

  // #region Window resize
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setIsOpen(false);
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  // #endregion

  // #region Active navlink bar
  const location = useLocation();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const currentIndex = navItems.findIndex(
      (item) => item.path === location.pathname,
    );
    setActiveIndex(currentIndex !== -1 ? currentIndex : 0);
  }, [location, navItems]);

  const navRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const [underlineProps, setUnderlineProps] = useState({
    width: 0,
    left: 0,
  });

  const navRefsMobile = useRef<(HTMLAnchorElement | null)[]>([]);
  const [underlinePropsMobile, setUnderlinePropsMobile] = useState({
    height: 0,
    top: 0,
  });

  useEffect(() => {
    if (navRefs.current[activeIndex]) {
      const activeNav = navRefs.current[activeIndex] as ActiveNavTarget;
      setUnderlineProps({
        width: activeNav?.offsetWidth || 0,
        left: activeNav?.offsetLeft || 0,
      });
    }
    if (navRefsMobile.current[activeIndex]) {
      const activeNav = navRefsMobile.current[
        activeIndex
      ] as ActiveNavTargetMobile;
      setUnderlinePropsMobile({
        height: activeNav?.offsetHeight || 0, // For mobile bar height
        top: activeNav?.offsetTop || 0, // For mobile bar position
      });
    }
  }, [activeIndex, windowWidth]);
  // #endregion

  // #region Navbar self-hiding callback
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [autoHideActive, setAutoHideActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (window.scrollY === 0) {
        setVisible(true);
        setAutoHideActive(false);
      } else {
        setAutoHideActive(true);
      }

      if (currentScrollY > lastScrollY) {
        setVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    interface MouseMoveTarget {
      clientY: number;
    }

    const handleMouseMove = (e: MouseMoveTarget) => {
      if (autoHideActive) {
        setVisible(e.clientY <= 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [autoHideActive, lastScrollY]);
  // #endregion

  return (
    <nav
      className={`fixed inset-x-0 top-0 bg-secondaryVariant p-4 font-header font-light text-primary ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto flex justify-between">
        <div className="sm:hidden">
          <button onClick={toggleMenu} className="flex focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        {
          // #region Navbar
          <div className={`ml-auto hidden space-x-8 sm:flex`}>
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className={`relative ${item.width} text-center hover:font-semibold ${index === activeIndex ? "font-semibold" : ""}`}
                ref={(el) => (navRefs.current[index] = el)}
              >
                {item.name}
              </Link>
            ))}
            <span
              className="absolute bottom-0 h-1 bg-accent transition-all duration-300"
              style={{
                width: `${underlineProps.width}px`,
                left: `${underlineProps.left}px`,
                marginLeft: "0",
              }}
            />
          </div>
          // #endregion
        }
      </div>

      {
        // #region Mobile navbar
        <div
          className={`overflow-hidden sm:hidden ${isOpen ? `max-h-56` : "max-h-0"} transition-all duration-300`}
        >
          <div className="flex flex-col space-y-4 pt-4">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className={`relative ${item.width} hover:font-semibold ${index === activeIndex ? "font-semibold" : ""}`}
                ref={(el) => (navRefsMobile.current[index] = el)}
              >
                {item.name}
              </Link>
            ))}
            <span
              className={`${isOpen ? "translate-x-0" : "-translate-x-5"} absolute left-0 w-1 bg-accent transition-all duration-300`}
              style={{
                height: `${underlinePropsMobile.height}px`,
                top: `${underlinePropsMobile.top}px`,
                marginTop: "0",
              }}
            />
          </div>
        </div>
        // #endregion
      }
    </nav>
  );
};
