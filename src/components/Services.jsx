export default function Services() {
  return (
    <section id="services" className="py-16 bg-oat text-moss">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <h2 className="text-3xl font-bold text-center mb-10">My Services</h2>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Web Development */}
          <div className="bg-oat border border-moss p-6 rounded-lg shadow hover:bg-olive hover:text-oat transition">
            <h3 className="text-xl font-semibold mb-4">Web Development</h3>
            <p>
              Responsive and modern websites using HTML, CSS, React, Tailwind, Bootstrap, and
              JavaScript.
            </p>
          </div>

          {/* UI/UX Design */}
          <div className="bg-oat border border-moss p-6 rounded-lg shadow hover:bg-olive hover:text-oat transition">
            <h3 className="text-xl font-semibold mb-4">UI/UX Design</h3>
            <p>
              User-centered, minimal, and aesthetic designs with smooth animations
              and usability in mind.
            </p>
          </div>

          {/* Backend Integration */}
          <div className="bg-oat border border-moss p-6 rounded-lg shadow hover:bg-olive hover:text-oat transition">
            <h3 className="text-xl font-semibold mb-4">Backend Integration</h3>
            <p>
              REST APIs & database connectivity with PHP, MySQL, and Node.js for
              full-stack apps.
            </p>
          </div>

          {/* SEO Optimization */}
          <div className="bg-oat border border-moss p-6 rounded-lg shadow hover:bg-olive hover:text-oat transition">
            <h3 className="text-xl font-semibold mb-4">SEO Optimization</h3>
            <p>
              Optimized websites with faster loading speeds, semantic HTML, and
              SEO-friendly structure to improve search engine ranking.
            </p>
          </div>

          {/* E-Commerce Solutions */}
          <div className="bg-oat border border-moss p-6 rounded-lg shadow hover:bg-olive hover:text-oat transition">
            <h3 className="text-xl font-semibold mb-4">E-Commerce Solutions</h3>
            <p>
              Custom online stores with cart, checkout, and secure payment gateway
              integration.
            </p>
          </div>

          {/* Performance & Deployment */}
          <div className="bg-oat border border-moss p-6 rounded-lg shadow hover:bg-olive hover:text-oat transition">
            <h3 className="text-xl font-semibold mb-4">Performance & Deployment</h3>
            <p>
              Website speed optimization and deployment to GitHub Pages, Netlify,
              or Vercel with CI/CD pipelines.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
