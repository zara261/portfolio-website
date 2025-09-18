import { motion } from "framer-motion";
import { Code, Palette, Smartphone } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Code className="w-10 h-10 text-secondary" />,
      title: "Web Development",
      desc: "Modern, responsive websites using React, Tailwind, and JavaScript.",
    },
    {
      icon: <Palette className="w-10 h-10 text-secondary" />,
      title: "UI/UX Design",
      desc: "Clean, user-focused designs that enhance experience and usability.",
    },
    {
      icon: <Smartphone className="w-10 h-10 text-secondary" />,
      title: "Responsive Apps",
      desc: "Applications that look beautiful on desktop, tablet, and mobile.",
    },
  ];

  return (
    <section className="min-h-screen bg-primary flex items-center px-6 py-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-accent mb-12">My Services</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-accent p-8 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-primary mb-3">
                {service.title}
              </h3>
              <p className="text-primary/80">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
