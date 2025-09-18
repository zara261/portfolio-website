export default function Resume() {
  return (
    <section id="resume" className="py-20 bg-oat text-moss">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Resume</h2>
          <h3 className="text-2xl font-semibold">ZARA BATOOL</h3>
          <p className="text-lg">Full-Stack Developer & DESIGN SPECIALIST</p>
             <p className="mt-2">
            Faisalabad, Pakistan | 
            <a href="mailto:zarabatoo1006161@gmail.com" className="underline hover:text-moss ml-1">
              zarabatoo1006161@gmail.com
            </a> | 0300-1900261
          </p>
          <div className="mt-4 flex justify-center gap-6">
            <a href="https://github.com/zara261/portfolio-repository" className="px-4 py-2 bg-moss text-oat rounded-lg hover:bg-oat hover:text-moss transition">Portfolio</a>
            <a href="https://github.com/zara261" className="px-4 py-2 bg-moss text-oat rounded-lg hover:bg-oat hover:text-moss transition">GitHub</a>
            <a href="https://www.linkedin.com/in/zara-batool-1a3556373" className="px-4 py-2 bg-moss text-oat rounded-lg hover:bg-oat hover:text-moss transition">LinkedIn</a>
          </div>
        </div>

        {/* Summary */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold border-b-2 border-olive pb-2 mb-4">
            SUMMARY
          </h3>
          <p className="leading-relaxed text-lg">
          I’m a passionate Full-Stack Developer with 3+ years of experience crafting responsive and user-centric web
solutions. I specialize in transforming ideas into high-performance websites and applications using modern
technologies like React.js, Next.js, PHP, Laravel, and MySQL. My expertise spans the entire development
lifecycle, from building SEO-optimized front-ends to engineering robust back-end systems with secure
authentication and payment integrations. I have a proven track record of delivering projects that directly
impact client success, such as increasing web traffic by 40% through strategic SEO improvements. I thrive in
collaborative, agile environments and am committed to writing clean, maintainable code.

          </p>
        </div>

        {/* Skills */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold border-b-2 border-olive pb-2 mb-6">
           TECHNICAL SKILLS
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-olive text-oat p-6 rounded-lg shadow">
              <h4 className="font-bold mb-2">Frontend</h4>
              <p>HTML5, CSS3, JavaScript, React.js, Next.js, Tailwind CSS, Bootstrap</p>
            </div>
            <div className="bg-olive text-oat p-6 rounded-lg shadow">
              <h4 className="font-bold mb-2">Backend</h4>
              <p>PHP, Laravel, MySQL, REST APIs</p>
            </div>
            <div className="bg-olive text-oat p-6 rounded-lg shadow">
              <h4 className="font-bold mb-2">Tools & Workflow</h4>
              <p>SEO, Git, GitHub, Firebase, Stripe API, WordPress, cPanel</p>
            </div>
          </div>
        </div>

        {/* Experience */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold border-b-2 border-olive pb-2 mb-6">
            PROFESSIONAL EXPERIENCE
          </h3>
          <div className="space-y-10">
            <div>
              <h4 className="text-xl font-bold">Full-Stack Web Developer | Orbit Counsels</h4>
              <p className="italic text-sm mb-2">May 2023 – June 2024</p>
              <ul className="list-disc ml-6 space-y-1">
                <p>
                    I developed business and e-commerce websites using PHP, Laravel, MySQL, and Bootstrap. My
work included building secure admin dashboards with role-based access and dynamic reporting
features, which improved client operations. I also focused on SEO, helping clients grow their online
visibility.

                </p>
                <li>Increased client site traffic by 40% through SEO improvements.</li>
                <li>Built and deployed 5+ e-commerce platforms, each with scalable back-end systems.</li>
                <li>Maintained Git version control and conducted code reviews, ensuring high project quality.</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold">Front-End Developer (Remote – Contract)</h4>
              <p className="italic text-sm mb-2">June 2022 – August 2023</p>
              <ul className="list-disc ml-6 space-y-1">
                <p>I design and develop responsive, mobile-first interfaces for UK-based startups using React.js,
Tailwind, CSS, and Next.js. My role involves integrating RESTful APIs, Firebase authentication, and
third-part tools like Stripe and Google Maps to deliver user-friendly and scalable solutions. Working in
international agile teams has strengthened my collaboration and project management skills.
</p>
                <li>Delivered 15+ freelance projects with an average client satisfaction score of 4.8/5.</li>
                <li>Integrated Stripe payments & Google Maps API, enabling secure transactions and location-based
services.
</li>
                <li>Optimized site performance, reducing bounce rates and ensuring smooth mobile experiences.</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold">Junior Developer | Virtual</h4>
              <p className="italic text-sm mb-2">April 2022 – July2023</p>
              <ul className="list-disc ml-6 space-y-1">
                <p>At Innovatech Studio, I specialized in creating custom UIs for portfolio sites and landing pages using
HTML5, CSS3, JavaScript, and Bootstrap. I collaborated with designers to translate Figma files into
responsive websites while ensuring accessibility and browser compatibility. I also handled
deployment and client onboarding.
</p>
                <li>Developed 10+ portfolio and business websites, delivering polished, responsive designs</li>
                <li>Improved accessibility & cross-browser performance, ensuring consistent UX across devices.
</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Education + Certifications */}
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold border-b-2 border-olive pb-2 mb-4">
              Education
            </h3>
            <p>
              <span className="font-bold">BS Computer Science</span> – GC
              University Faisalabad (2021–2024)
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold border-b-2 border-olive pb-2 mb-4">
              Certifications
            </h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>Meta Front-End Developer</li>
              <li>freeCodeCamp Responsive Web Design</li>
              <li>Google SEO Fundamentals</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
