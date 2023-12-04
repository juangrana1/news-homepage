import { useState } from "react";

function SmallBox(props: {
  imgSrc: string;
  imgAlt: string;
  number: string;
  title: string;
  description: string;
}) {
  const [isHovering, setIsHovering] = useState<boolean>(false);

  return (
    <>
      <a
        href="#"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <section className="main__small-box">
          <img
            src={props.imgSrc}
            alt={props.imgAlt}
            className="main__small-box__image"
          />
          <div className="main__small-box__text-box">
            <div className="main__small-box__text-box__number">
              {props.number}
            </div>
            <h3
              className={`main__small-box__text-box__title${
                isHovering ? " main__small-box__text-box__title--hover" : ""
              }`}
            >
              {props.title}
            </h3>
            <p className="main__small-box__text-box__description">
              {props.description}
            </p>
          </div>
        </section>
      </a>
    </>
  );
}

export default SmallBox;
