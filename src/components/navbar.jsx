import { Link } from "react-router-dom";
import logo from "../assets/logo1.png";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand bg-dark">
        <div className="container">
          <ul className="nav">
            <img src={logo} alt="" style={{ height: "50px" }} />
            <li>
              <Link to="/" className="nav-link">
                HOME
              </Link>
            </li>
            <li>
              <Link to="/manajemen-buku" className="nav-link">
                Book Management
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
