import React from "react";
import NavBar from "../NavBar/NavBar";
import styles from "./LandingPageStyles.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import {Button, Col, Image} from "react-bootstrap";
import landingPageImg from "../../assets/landing_page.jpg";

export default function LandingPage() {
    return (
        <Container fluid className={styles.landing_page_container}>
            <NavBar/>
            <Container className={styles.landing_page}>
                <div className="d-lg-flex justify-content-center align-items-center mb-5">
                    <div className="w-100 me-3">
                        <Image style={{width: "75%"}} fluid src={landingPageImg} rounded/>
                    </div>
                    <div className="flex-column">
                        <h1 style={{fontSize: "4rem"}} className="text-white fw-normal mb-5">On A Mission To Go Beyond
                            Sight</h1>
                        <h4 className="fw-light text-white"><b>Eyecan:</b> An App that makes it easier for visually
                            challenged people to go with their everyday tasks.</h4>
                        <Button className="btn btn-dark">Download Now</Button>
                    </div>
                </div>
            </Container>
        </Container>
    );
}
