import { useImperativeHandle } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Navbar() {
  const path = window.location.pathname;

  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Addison Ashworth
      </Link>
      <ul>
        <li>
          <CustomLink to="/projects">Projects</CustomLink>
        </li>
        <li>
          <CustomLink to="/contact">Contact</CustomLink>
        </li>
        <li>
          <CustomLink to="/resume">Resume</CustomLink>
        </li>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
