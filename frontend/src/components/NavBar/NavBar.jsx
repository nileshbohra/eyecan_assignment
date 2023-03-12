import React, {useEffect, useState} from "react";
import styles from "./NavStyles.module.css";
import eyecanLogo from "../../assets/CAN_light.png";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export default function NavBar() {
    const [navbar, setNavbar] = useState(false)
    const changeBackground = () => {
        if (window.scrollY >= 66) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    useEffect(() => {
        changeBackground()
        window.addEventListener("scroll", changeBackground)
    })
    const linkColor = navbar ? {color: "#000"} : {color: "#fff"}
    return (
        <Navbar className={`${styles.navbar_container} ${navbar ? styles.navbar_active : "bg-transparent"}`} expand="lg"
                sticky={"top"}>
            <Container>
                <Navbar.Brand href="/">
                    <img src={eyecanLogo} alt='eye-can_logo' width='150' height='150'
                         className="d-inline-block align-top"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav>
                        <a className="p-3 text-decoration-none" style={linkColor} href="#">Home</a>
                        <a className="p-3 text-decoration-none" style={linkColor} href="#blogs">
                            Blogs
                        </a>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
