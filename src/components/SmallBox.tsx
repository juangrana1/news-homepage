function SmallBox(props: {
  imgSrc: string;
  imgAlt: string;
  number: string;
  title: string;
  description: string;
}) {
  return (
    <>
      <section className="main__small-box">
        <img
          src={props.imgSrc}
          alt={props.imgAlt}
          className="main__small-box__image"
        />
        <div className="main__small-box__text-box">
          <div className="main__small-box__text-box__number">{props.number}</div>
          <h3 className="main__small-box__text-box__title">
            {props.title}
          </h3>
          <p className="main__small-box__text-box__description">
            {props.description}
          </p>
        </div>
      </section>
    </>
  );
}

export default SmallBox;
