import { useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  function sendEmail(e) {
    e.preventDefault();

    const name = e.target.from_name.value.trim();
    const email = e.target.from_email.value.trim();
    const message = e.target.message.value.trim();

    // ✅ Validation
    if (!name || !email || !message) {
      setError("⚠️ Please fill in all fields before submitting.");
      setSuccess("");
      return;
    }

    // ✅ Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("⚠️ Please enter a valid email address.");
      setSuccess("");
      return;
    }

    // ✅ Send email with EmailJS
    emailjs
      .sendForm(
        "service_khs2uvj", // Your Service ID
        "template_i9ohtoa", // Your Template ID
        e.target,
        "gKbqld_2nXJGnCXcu" // Your Public Key
      )
      .then(
        () => {
          setSuccess("✅ Message sent successfully!");
          setError("");
          e.target.reset(); // clear form
        },
        () => {
          setError("❌ Failed to send message. Please try again later.");
          setSuccess("");
        }
      );
  }

  return (
    <section id="contact" className="py-16 bg-olive text-oat">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Contact Me</h2>

        <form
          onSubmit={sendEmail}
          className="max-w-2xl mx-auto bg-moss p-8 rounded-lg shadow space-y-4"
        >
          {/* ✅ Show feedback */}
          {error && <p className="text-red-400 text-center">{error}</p>}
          {success && <p className="text-green-400 text-center">{success}</p>}

          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            className="w-full p-3 rounded bg-oat text-moss focus:outline-none"
          />
          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            className="w-full p-3 rounded bg-oat text-moss focus:outline-none"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            className="w-full p-3 rounded bg-oat text-moss focus:outline-none"
          />
          <button
            type="submit"
            className="w-full bg-oat text-moss font-semibold px-6 py-3 rounded-lg hover:bg-olive hover:text-oat transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
