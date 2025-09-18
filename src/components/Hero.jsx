export default function Hero() {
  return (
    <section
     id="hero"
  className="hero-gradient min-h-screen flex flex-col justify-center items-center text-center px-6 pt-24"
>
  <h1 className="text-5xl md:text-6xl font-bold text-oat mb-4">
    Hi, I’m Zara Batool
  </h1>
  <p className="text-lg md:text-xl text-oat max-w-2xl mb-6">
        Web Developer passionate about building responsive, scalable, and
        professional applications.
      </p>
      <div className="flex gap-4">
        <a
          href="#projects"
          className="bg-oat text-moss font-bold px-6 py-3 rounded-lg shadow hover:bg-olive hover:text-oat transition"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="bg-olive text-oat font-bold px-6 py-3 rounded-lg shadow hover:bg-moss transition"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}
