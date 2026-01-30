import React, { FormEvent } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact: React.FC = () => {
  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
  .sendForm(
    "service_bg2l9gq",
    "template_4r8s3pb",
    e.currentTarget,
    "159ga6Mu-eTjBdb4M"
  )
  .then(() => {
    alert("Message sent successfully!");
  })
  .catch((error) => {
    console.error("EmailJS error:", error);
    alert(error.text || "EmailJS failed");
  });

    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact</h2>

      {/* Existing contact info */}
      <div className="contact-info">
        <p>
          <strong>✉ Email:</strong>{" "}
          <a href="mailto:sheryncuabo55@gmail.com">
            sheryncuabo55@gmail.com
          </a>
        </p>

        <p>
          <strong>✪ LinkedIn:</strong>{" "}
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/yourprofile
          </a>
        </p>
      </div>

      {/* NEW Contact Form */}
      <form className="contact-form" onSubmit={sendEmail}>
        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          required
        />

        <input
          type="email"
          name="from_email"
          placeholder="Your Email"
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          required
        ></textarea>

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
