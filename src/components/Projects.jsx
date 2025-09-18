export default function Projects() {
  const projects = [
    {
      title: "Textiles E-Commerce",
      desc: "A full e-commerce platform with cart, checkout, and product management.",
      demo: " https://zara261.github.io/textiles-ecommerce-website-in-react/",   // GitHub Pages live site
      repo: "https://github.com/zara261/textiles-ecommerce-website-in-react",  // GitHub repo link
    },
    {
      title: "Orbit Council",
      desc: "A study abroad consultancy website with animations and inquiry form.",
      demo: " https://zara261.github.io/study-abroad-website/",
      repo: "https://github.com/zara261/study-abroad-website",
    },
    {
      title: "Blog Management System",
      desc: "Dynamic admin panel to manage blogs with PHP + MySQL backend.",
      demo: "https://zara261.github.io/blog-management-system/",
      repo: "https://github.com/zara261/blog-management-system",
    },
    {
      title: "Portfolio Website",
      desc: "A modern personal portfolio built with React + Tailwind, showcasing my skills, projects, and resume.",
       demo: "https://zara261.github.io/portfolio-website/",
      repo: "https://github.com/zara261/portfolio-website",
    },
    {
      title: "Oil Company Website",
      desc: "A professional multi-page website for a cooking oil brand, featuring products, CSR, careers, and contact forms.",
      demo: "https://zara261.github.io/oil-brand-website/",
      repo: "https://github.com/zara261/oil-brand-website",
    },
  ];

  return (
    <section id="projects" className="py-16 bg-olive text-oat">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div
              key={i}
              className="bg-moss p-6 rounded-lg shadow-lg hover:scale-105 transform transition"
            >
              <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
              <p className="mb-6">{project.desc}</p>

              {/* Buttons */}
              <div className="flex gap-4">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-oat text-olive font-medium rounded-lg shadow hover:bg-olive hover:text-oat transition"
                >
                  Live Demo
                </a>
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-olive text-oat font-medium rounded-lg shadow hover:bg-oat hover:text-olive transition"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
