import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="min-h-screen bg-primary flex flex-col justify-center px-6 py-16 text-center md:text-left">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-accent mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h2>
        <motion.p
          className="text-primary/80 text-lg md:text-xl leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          I am a passionate web developer with experience in building modern, responsive, and user-friendly web applications. I enjoy turning ideas into interactive websites and improving user experiences with clean, efficient design.
        </motion.p>
      </div>
    </section>
  );
};

export default About;
