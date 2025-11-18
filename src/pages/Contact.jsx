import React, { useState } from "react";

function ContactPage() {
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

    if (formData.name.trim().length < 2) {
      alert("Name must be at least 2 characters.");
      return;
    }

    const emailVal = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailVal.test(formData.email)) {
      alert("Please enter a valid email.");
      return;
    }

    if (formData.message.trim().length < 5) {
      alert("Message must be at least 5 characters.");
      return;
    }

    console.log(formData);
    alert("Message sent!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-page">
      <section className="contact-hero text-center py-5 position-relative">
        <div className="container">
          <h1 className="hero-title mb-3">Get in Touch</h1>
          <p className="hero-subtitle">I'd love to hear from you!</p>
        </div>
      </section>

      <section className="contact-form-section">
        <div className="contact-form-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-accent btn-lg">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;
