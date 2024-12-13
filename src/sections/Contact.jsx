import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await 
      
      emailjs.send(
        "service_6luwlwo", 
        "template_x7ez1ac",  // Replace with your actual template ID
        {
          from_name: form.name,
          to_name: "Praveen Piske",
          from_email: form.email,
          to_email: "piskepraveen@gmail.com",
          message: form.message,
        },
        "5mvNKImtCXbquo028"
      );
      
      setLoading(false);
      alert("Thank you. I will get back to you as soon as possible.");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Email sending error:", error);
      alert("Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  return (
    <section className="c-space my-20" id="contact">
      <div className="relative min-h-screen flex items-center justify-center flex-col ">
        <img
          src="assets/terminal.png"
          alt="terminal background"
          className="absolute inset-0 min-h-screen
          md:h-110%"
        />
        <div className="contact-container">
          <h3 className="head-text mt-10">Let's talk</h3>
          <p className="text-lg text-white-600 mt-3">
            I'm open to new opportunities and always happy to connect! 
          </p>
          <form
            className="mt-12 flex flex-col space-y-7"
            ref={formRef}
            onSubmit={handleSubmit}
          >
            <label className="space-y-3">
              <span className="field-label">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Praveen Piske"
                className="field-input"
                required
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Your Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="praveenpiske@example.com"
                className="field-input"
                required
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Your Message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Hi, I'm interested in....."
                className="field-input"
              />
            </label>

            <button
  className="flex items-center justify-center gap-2 px-6 py-2 bg-gray-600 text-white font-bold rounded-md transition duration-300 transform hover:bg-gray-700 hover:scale-105 disabled:bg-gray-300 disabled:cursor-not-allowed"
  type="submit"
  disabled={loading}
>
  {loading ? "Sending..." : "Send"}
  {!loading && (
    <img
      src="assets/arrow-up.png"
      alt="arrow-up"
      className="w-4 h-4 object-contain"
    />
  )}
</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
