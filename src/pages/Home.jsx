import { motion } from "framer-motion";

const Home = () => {
  return (
    <section className="min-h-screen bg-primary flex flex-col justify-center items-center text-center px-6">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold text-accent mb-4">
          Hello, I’m <span className="text-secondary">Zara Batool</span>
        </h1>
        <p className="text-lg md:text-xl text-accent opacity-80 mb-8">
          I build beautiful, engaging, and responsive web applications with React, Tailwind, and clean design.
        </p>
        <motion.a
          href="/projects"
          whileHover={{ scale: 1.05 }}
          className="inline-block px-8 py-4 bg-secondary text-white font-semibold rounded-lg shadow-lg transition"
        >
          View My Work
        </motion.a>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="mt-10"
      >
        <img
          src="https://source.unsplash.com/600x400/?developer,code"
          alt="Developer at work"
          className="rounded-lg shadow-lg border-4 border-accent"
        />
      </motion.div>
    </section>
  );
};

export default Home;
