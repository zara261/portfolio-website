import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="min-h-screen bg-primary flex flex-col justify-center items-center px-6 py-16">
      <motion.h2
        className="text-4xl font-bold text-accent mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Contact Me
      </motion.h2>
      <motion.form
        className="bg-accent p-8 rounded-2xl shadow-md w-full max-w-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <input
          type="text"
          placeholder="Name"
          className="w-full p-3 mb-4 rounded-lg border border-primary bg-primary text-accent placeholder:text-accent/70"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 rounded-lg border border-primary bg-primary text-accent placeholder:text-accent/70"
        />
        <textarea
          placeholder="Message"
          className="w-full p-3 mb-4 rounded-lg border border-primary bg-primary text-accent placeholder:text-accent/70"
        />
        <button
          type="submit"
          className="w-full bg-secondary text-white py-3 rounded-lg font-semibold hover:bg-accent transition"
        >
          Send Message
        </button>
      </motion.form>
    </section>
  );
};

export default Contact;
