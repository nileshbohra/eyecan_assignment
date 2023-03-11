import React from "react";
import {Link} from "react-router-dom";
import styles from "./NavStyles.module.css";
import eyecanLogo from "../../assets/CAN_light.png";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export default function NavBar() {
    return (
        <Navbar className={styles.navbar_container} expand="lg">
            <Container>
                <Navbar.Brand href="/">
                    <img src={eyecanLogo} alt='eye-can_logo' width='150' height='150'
                         className="d-inline-block align-top"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav>
                        <Link className="text-black p-3 text-decoration-none" to="/">
                            Home
                        </Link>
                        <Link className="text-black p-3 text-decoration-none" to="/blogs">
                            Blogs
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
