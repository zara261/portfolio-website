import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      desc: "My personal portfolio built with React and Tailwind.",
      img: "https://source.unsplash.com/400x300/?website,code",
    },
    {
      title: "E-commerce App",
      desc: "Fully responsive online store with shopping cart functionality.",
      img: "https://source.unsplash.com/400x300/?ecommerce,app",
    },
    {
      title: "Blog Platform",
      desc: "Dynamic blog platform with admin dashboard and CMS features.",
      img: "https://source.unsplash.com/400x300/?blog,platform",
    },
  ];

  return (
    <section className="min-h-screen bg-primary px-6 py-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-accent mb-12">My Projects</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-accent p-6 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <img
                src={project.img}
                alt={project.title}
                className="rounded-lg mb-4 border-2 border-secondary"
              />
              <h3 className="text-xl font-semibold text-primary mb-2">
                {project.title}
              </h3>
              <p className="text-primary/80">{project.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
