import styles from "./Navbar.module.css";
import NavbarLink from "./NavbarLink";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <NavbarLink to="/">Home</NavbarLink>
      <NavbarLink to="/movies">Movies</NavbarLink>
    </nav>
  );
}

export default Navbar;
