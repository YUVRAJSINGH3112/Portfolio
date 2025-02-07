import {useState,useEffect} from 'react'
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 350) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className={isVisible? "opacity-1 header":"opacity-0 header"}>
      <a href="#home" className='logo blue'>YuvrajSingh</a>
      <button className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>
       <nav className={menuOpen? "navbar open":"navbar"}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#projects" onClick={closeMenu}>Project</a>
          <a href="#footer" onClick={closeMenu}>Contact</a>
          </nav>
    </div>
  )
}

export default Header
