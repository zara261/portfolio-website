export default function Footer() {
  return (
    <footer className="bg-moss text-oat py-6">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Zara Batool. All rights reserved.</p>
        <div className="mt-2 flex justify-center gap-4">
          {/* Right side - social links */}
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a
            href="https://github.com/zara261"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-secondary transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/zara-batool-1a3556373"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-secondary transition-colors"
          >
            LinkedIn
          </a>
          {/* <a
            href="mailto:zarabatool006161@gmail.com"
            className="text-accent hover:text-secondary transition-colors"
          >
            Email
          </a> */}
        </div>
        </div>
      </div>
    </footer>
  );
}
