function MainBox(props: {screenWidth: number, mobileScreenWidth: number}) {
  return (
    <>
      <section className="main__main-box">
        <img
          src={`./assets/images/image-web-3-${props.screenWidth <= props.mobileScreenWidth ? 'mobile' : 'desktop'}.jpg`}
          alt="Banner"
          className="main__main-box__image"
        />
        <div className="main__main-box__text">
          <h1 className="main__main-box__text__title">
            The Bright Future of Web 3.0?
          </h1>
          <div className="main__main-box__text__description-box">
            <p className="main__main-box__text__description-box__description">
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </p>
            <button className="main__main-box__text__description-box__button">
              <div className="main__main-box__text__description-box__content">
                READ MORE
              </div>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default MainBox;
