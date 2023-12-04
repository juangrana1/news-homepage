import { useState } from "react";

function BoxOfLateral(props: {title: string; description: string; type: string}) {
  const [isHovering, setIsHovering] = useState<boolean>(false);

  return (
    <>
      <div className="main__lateral-box__text-box">
        <a
          href="#"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          className="main__lateral-box__text-box__a"
        >
          <h3
            className={`main__lateral-box__text-box__title${
              isHovering ? " main__lateral-box__text-box__title--hover" : ""
            }`}
          >
            {props.title}
          </h3>
          <p className="main__lateral-box__text-box__description">
            {props.description}
          </p>
        </a>
      </div>
    </>
  );
}

export default BoxOfLateral;
