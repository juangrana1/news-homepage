import BoxOfLateral from "./BoxOfLateral";

function LateralBox() {
  return (
    <section className="main__lateral-box">
      <h2 className="main__lateral-box__title">New</h2>
      <BoxOfLateral
        title="Hydrogen VS Electric Cars"
        description="Will hydrogen-fueled cars ever catch up to EVs?"
        type="first"
      />

      <div className="main__lateral-box__divider"></div>
      <BoxOfLateral
        title="The Downsides of AI Artistry"
        description="What are the possible adverse effects of on-demand AI image generation?"
        type="second"
      />
      <div className="main__lateral-box__divider"></div>
      <BoxOfLateral
        title="Is VC Funding Drying Up?"
        description="Private funding by VC firms is down 50% YOY. We take a look at what that means."
        type="third"
      />
    </section>
  );
}

export default LateralBox;
