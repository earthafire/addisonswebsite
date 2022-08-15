export default function Navbar() {
  const path = window.location.pathname;

  return (
    <nav className="nav">
      <a href="/" className="site-title">
        Addison Ashworth
      </a>
      <ul>
        <li>
          <a href="/projects">Projects</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
        <li>
          <a href="/resume">Resume</a>
        </li>
      </ul>
    </nav>
  );
}

function CustomLink({ href, children, ...props }) {
  return (
    <li>
      <a href="/pricing"></a>
    </li>
  );
}
