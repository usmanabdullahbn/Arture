import React from "react";
import img from "../asserts/about img.jpg";
import img2 from "../asserts/www.jpg";

const About = () => {
  return (
    <>
      <div>
        <h1
          style={{
            textAlign: "left",
            fontWeight: "bolder",
            textAlign: "center",
            marginTop: "50px",
            fontWeight: "bolder",
          }}
        >
          About Us
        </h1>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "50px",
        }}
      >
        {/* Image on the left */}
        <div style={{ flex: "0 0 50%", paddingRight: "20px" }}>
          <img
            src={img}
            alt="About"
            style={{ width: "100%", height: "700px", borderRadius: "8px" }}
          />
        </div>

        {/* Heading and text on the right */}
        <div style={{ flex: "0 0 50%", paddingLeft: "20px" }}>
          <h3 style={{ textAlign: "left", fontWeight: "bolder", color:"#A73792" }}>
            Vision & Mission
          </h3>
          <p style={{ fontSize: "22px" }}>
            At Arture, our mission is to recognize and celebrate the unique
            beauty and creativity within each individual through art and
            painting. We believe in the power of healing, bonding, and fostering
            inner connection. Our goals also encompass promoting academic
            excellence, resilience, and helping individuals realize their full
            potential.
          </p>

          <h3 style={{ textAlign: "left", fontWeight: "bolder", color:"#A73792" }}>
            Our Approach
          </h3>
          <p style={{ fontSize: "22px" }}>
            At Arture, we adopt a holistic approach to creativity and wellbeing.
            We combine artistic practice with wellness principles to support
            both mental and physical health. Our programs are designed to
            nurture creativity while also providing practical tools for
            maintaining a balanced and healthy lifestyle.
          </p>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "50px",
        }}
      >
        {/* Heading and text on the right */}
        <div style={{ flex: "0 0 50%", paddingLeft: "20px" }}>
          <h3 style={{ textAlign: "left", fontWeight: "bolder", color:"#A73792"}}>
            What We Do
          </h3>
          <p style={{ fontSize: "22px" }}>
            At Wellness Warriors, we are committed to promoting comprehensive
            wellness and empowering individuals to reach their optimal health
            and lifestyle objectives. Through our dynamic and educational health
            sessions, we cover a diverse array of topics, including nutrition,
            fitness, mental health, and overall wellbeing. Our aim is to offer
            valuable insights, practical advice, and a supportive network that
            fosters positive transformation.
          </p>

          <h3 style={{ textAlign: "left", fontWeight: "bolder", color:"#A73792" }}>
            Who We Are
          </h3>
          <p style={{ fontSize: "22px" }}>
            ArturePk is a purpose-led brand that aims to acknowledge people for
            the worth and wonders they behold. We believe that every talent
            within us is a form of art, and we help people explore the art
            within. By recognizing and celebrating the unique beauty and
            creativity within each individual through art and painting, we
            provide a platform for self-expression and personal growth.
          </p>
        </div>
        {/* Image on the left */}
        <div style={{ flex: "0 0 50%", paddingRight: "20px" }}>
          <img
            src={img2}
            alt="About"
            style={{ width: "100%", height: "700px", borderRadius: "8px" }}
          />
        </div>
      </div>
    </>
  );
};

export default About;
