import { useState } from "react";
import emailjs from "@emailjs/browser";
import "../App.css";
import "../styles/contact.css";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendMessage = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_228xfze",
        "template_cvow85o",
        form,
        "hzsdf1xlSCkoyKsug"
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          setForm({ name: "", email: "", message: "" });
        },
        () => setStatus("Failed to send message. Try again.")
      );
  };

  return (
    <div className="contact-container">

    <div className="particle" style={{ left: "20%", top: "70%" }}></div>
    <div className="particle" style={{ left: "60%", top: "85%" }}></div>
    <div className="particle" style={{ left: "40%", top: "30%" }}></div>
  
      
      {/* PAGE HEADER */}
      <h1 className="page-title">Contact Us</h1>
      <p className="page-sub">
        We’d love to hear from you! Send us a message.
      </p>

      {/* GRID WRAPPER */}
      <div className="contact-grid">

        {/* LEFT: CONTACT FORM */}
        <form className="contact-form" onSubmit={sendMessage}>
          
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <label>Your Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <label>Your Message</label>
          <textarea
            name="message"
            placeholder="Type your message..."
            value={form.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit" className="primary-btn">
            Send Message
          </button>

          {status && <p className="status-msg">{status}</p>}
        </form>

        {/* RIGHT: CONTACT INFO */}
        <div className="contact-info">
          <h2>Get in Touch</h2>

          <p><strong>Email:</strong> support@shikshasetu.com</p>
          <p><strong>Phone:</strong> +91 98765 43210</p>
          <p>
            <strong>Address:</strong><br />
            Mumbai, Maharashtra, India
          </p>

          <h3>Follow Us</h3>
          <div className="social-links">
            <a href="#">Instagram</a>
            <a href="#">LinkedIn</a>
            <a href="#">GitHub</a>
          </div>
        </div>

      </div>
    </div>
  );
}
