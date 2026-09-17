import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="site-nav">
      <Link className="nav-link" to="/">Home</Link>
      <Link className="nav-link" to="/projects">Projects</Link>
      <Link className="nav-link" to="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;
