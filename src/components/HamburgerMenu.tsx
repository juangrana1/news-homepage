import { useState } from "react";

function HamburgerMenu(props: {
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
    const [isClosing, setIsClosing] = useState<boolean>(false);

    function closeClick() {
        setTimeout(() => props.setIsMenuOpen(false), 250);
        setIsClosing(true);
    }

  return (
    <div className="background-navbar-mobile">
      <nav className={`navbar-mobile ${isClosing && 'is-closing'}`}>
        <img
          src="./assets/images/icon-menu-close.svg"
          alt="Close Menu"
          className="navbar-mobile__close-menu-icon"
          onClick={closeClick}
        />
        <ul className="navbar-mobile__ul">
          <li className="navbar-mobile__ul__li">Home</li>
          <li className="navbar-mobile__ul__li">New</li>
          <li className="navbar-mobile__ul__li">Popular</li>
          <li className="navbar-mobile__ul__li">Trending</li>
          <li className="navbar-mobile__ul__li">Categories</li>
        </ul>
      </nav>
    </div>
  );
}

export default HamburgerMenu;
