import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavStyles.module.css";

export default function NavBar() {
  return (
    <nav className={styles.navbar}>
      <h1>EYECAN</h1>
      <ul>
        <li>
          <Link style={{ textDecoration: "none" }} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link style={{ textDecoration: "none" }} to="/blogs">
            Blogs
          </Link>
        </li>
      </ul>
    </nav>
  );
}
