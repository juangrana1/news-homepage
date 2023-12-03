function Header(props: {
  screenWidth: number;
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const mobileScreenWidth: number = 430;

  return (
    <>
      <header className="header">
        <img src="./assets/images/logo.svg" alt="Logo" className="logo" />
        {props.screenWidth > mobileScreenWidth ? (
          <nav className="navbar">
            <ul className="navbar__ul">
              <li className="navbar__ul__li">Home</li>
              <li className="navbar__ul__li">New</li>
              <li className="navbar__ul__li">Popular</li>
              <li className="navbar__ul__li">Trending</li>
              <li className="navbar__ul__li">Categories</li>
            </ul>
          </nav>
        ) : (
          <img
            src="./assets/images/icon-menu.svg"
            onClick={() => props.setIsMenuOpen(true)}
          />
        )}
      </header>
    </>
  );
}

export default Header;
