import React from "react";
import "./About.css"; // ✅ Import your custom CSS
import yb from "../../src/components/assets/yb.jpeg";
import dafie from "../../src/components/assets/dafie.jpeg";
import luh from "../../src/components/assets/luh.jpeg";
import hh from "../../src/components/assets/hh.jpg";

const About = () => {
  const team = [
    {
      name: "Yobe Skello",
      role: "Founder & CEO",
      img: yb, // ✅ Use imported variable
    },
    {
      name: "Daffie",
      role: "Marketing Lead",
      img: dafie, // ✅ Use imported variable
    },
    {
      name: "Lusungu Kagwira",
      role: "Technical Director",
      img: luh, // ✅ Use imported variable
    },
  ];

  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="about-hero">
        <h1>About Us</h1>
        <p>
          If it is green and eatable, you will find it here; we also have animal products.
        </p>
      </section>

      {/* Who We Are */}
      <section className="about-section">
        <div className="about-content">
          <div className="about-text">
            <h2>Who We Are</h2>
            <p>
              Our company was founded by five individuals. It began as a school project, and after its presentation, 
              it attracted a lot of attention and interest from people.
            </p>
          </div>
          <div className="about-image">
            <img
              src={hh}
              alt="Team working"
            />
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="about-section mission-vision">
        <div className="mission">
          <h3>Our Mission</h3>
          <p>
            To ensure that farmers have reliable markets for their products and to empower them to set fair prices for their produce,
            as they are the ones who work tirelessly in the fields and often bear the greatest hardships.
          </p>
        </div>
        <div className="vision">
          <h3>Our Vision</h3>
          <p>
            Our goal is to become the leading online marketplace for local and international farmers, 
            a platform that stands out not only in our country but across Africa.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="about-section team">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          {team.map((member, index) => (
            <div key={index} className="team-card">
              <img src={member.img} alt={member.name} />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
