import React, { useState } from "react";
import "./Contact.css"; // Import the CSS file

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    alert("Thank you for contacting us!");
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-container">
      {/* Hero Section */}
      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>Have questions or suggestions? We’d love to hear from you!</p>
      </section>

      {/* Contact Form */}
      <section className="contact-section">
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />
          </label>

          <label>
            Email
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
            />
          </label>

          <label>
            Message
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="5"
              required
            ></textarea>
          </label>

          <button type="submit">Send Message</button>
        </form>

        {/* Optional: Side info */}
        <div className="contact-info">
          <h3>We are in</h3>
          <p>Zomba</p>
          <p>Email: skellosangster5@mail.com</p>
          <p>Phone: +265 994 886 218</p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
