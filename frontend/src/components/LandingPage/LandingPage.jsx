import React from "react";
import NavBar from "../NavBar/NavBar";
import styles from "./LandingPageStyles.module.css";

export default function LandingPage() {
  return (
    <div className={styles.landing_page_container}>
      <NavBar />
      <div className={styles.landing_page}>Landing Page</div>
    </div>
  );
}
