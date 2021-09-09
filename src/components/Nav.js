import logo from "../assets/images/logo-bg.png";
import styles from "../styles/Nav.module.css";
import Account from "./Account";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <a href="index.html" className={styles.brand}>
            <img src={logo} alt="Quiz App" />
            <h3>Quiz App</h3>
          </a>
        </li>
      </ul>
      <Account />
    </nav>
  );
}
