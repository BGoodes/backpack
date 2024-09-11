import './Navbar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li className="nav-item">
          <a href="#home" className="nav-link">Home</a>
        </li>

        <li className="nav-item">
          <a href="#mybackpack" className="nav-link">My Backpack</a>
        </li>
        <li className="nav-item">
          <a href="#browser" className="nav-link">Article browser</a>
        </li>
        <li className="nav-item">
          <a href="#about" className="nav-link">About</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
