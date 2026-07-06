import React from "react";
import "../style/Design.css";

import GraphicDesigner from "../assets/Graphic-Designer.jpeg";
// import InteriorDesigner from "../assets/Interior-Designer.png";
// import FashionDesigner from "../assets/Fashion-Designer.png";
// import ProductDesigner from "../assets/Product-Designer.png";

function Design() {

  const careers = [
    {
      id: "graphic-designer",
      title: "Graphic Designer",
      icon: GraphicDesigner,
      description:
        "Graphic designers create logos, posters, branding materials and digital content for businesses.",
    },
    {
      id: "interior-designer",
      title: "Interior Designer",
      icon: InteriorDesigner,
      description:
        "Interior designers plan and design attractive, functional and comfortable indoor spaces.",
    },
    {
      id: "fashion-designer",
      title: "Fashion Designer",
      icon: FashionDesigner,
      description:
        "Fashion designers create clothing, accessories and stylish collections for different markets.",
    },
    {
      id: "product-designer",
      title: "Product Designer",
      icon: ProductDesigner,
      description:
        "Product designers develop innovative products with creativity and user-focused designs.",
    },
  ];

  return (
    <div className="design-page">

      <header className="page-header">
        <button className="back-btn">Back</button>

        <h2>Design</h2>

        <button className="wishlist-btn">
          Wishlist ❤️
        </button>
      </header>

      <section className="hero-section">

        <div className="hero-left">

          <h1>Design</h1>

          <p>
            Explore creative careers in design where innovation,
            imagination and artistic skills shape the future of
            products, fashion and living spaces.
          </p>

          <button>Start Exploring</button>

        </div>

        <div className="hero-right"></div>

      </section>

      <section className="career-section">

        <h2>Explore Design Careers</h2>

        <p>
          Click on any field to view complete details about that career.
        </p>

        <div className="career-grid">

          {careers.map((career) => (

            <div className="career-card" key={career.id}>

              <div className="career-icon">
                <img src={career.icon} alt={career.title} />
              </div>

              <h3>{career.title}</h3>

              <p>{career.description}</p>

              <button>Explore Career →</button>

            </div>

          ))}

        </div>

      </section>

      <section className="why-section">

        <h2>Why Choose Design?</h2>

        <div className="why-grid">

          <div className="why-card">
            <span>🎨</span>
            <h3>Creativity</h3>
            <p>Express your ideas through unique and innovative designs.</p>
          </div>

          <div className="why-card">
            <span>💼</span>
            <h3>Career Growth</h3>
            <p>Excellent opportunities across different industries.</p>
          </div>

          <div className="why-card">
            <span>🌍</span>
            <h3>Global Demand</h3>
            <p>Design professionals are needed worldwide.</p>
          </div>

          <div className="why-card">
            <span>🚀</span>
            <h3>Freelancing</h3>
            <p>Build your own brand or work independently.</p>
          </div>

          <div className="why-card">
            <span>💡</span>
            <h3>Innovation</h3>
            <p>Create products and experiences that improve everyday life.</p>
          </div>

        </div>

      </section>

    </div>
  );
}

export default Design;