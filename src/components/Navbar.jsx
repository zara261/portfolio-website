export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-moss text-oat px-6 px-4 shadow-md z-50">
      <div className="max-w-6xl container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-bold ">Zara Batool</h1>

        {/* Menu */}
        <ul className="flex gap-6 space-x-6">
          <li>
            <a href="#hero" className="hover:text-rose transition">Home</a>
          </li>
          <li>
            <a href="#about" className="hover:text-rose transition">About</a>
          </li>
          <li>
            <a href="#services" className="hover:text-olive">Services</a>
          </li>
          <li>
            <a href="#projects" className="hover:text-rose transition">Projects</a>
          </li>
          <li>
            <a href="#resume" className="hover:text-rose transition">Resume</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-rose transition">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
