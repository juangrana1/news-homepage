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
              <li className="navbar__ul__li"><a href="#" className="navbar__ul__li__a">Home</a></li>
              <li className="navbar__ul__li"><a href="#" className="navbar__ul__li__a">New</a></li>
              <li className="navbar__ul__li"><a href="#" className="navbar__ul__li__a">Popular</a></li>
              <li className="navbar__ul__li"><a href="#" className="navbar__ul__li__a">Trending</a></li>
              <li className="navbar__ul__li"><a href="#" className="navbar__ul__li__a">Categories</a></li>
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
