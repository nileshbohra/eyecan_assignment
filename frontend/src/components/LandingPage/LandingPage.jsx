import React from "react";
import NavBar from "../NavBar/NavBar";
import styles from "./LandingPageStyles.module.css";
import Container from "react-bootstrap/Container";
import {Image} from "react-bootstrap";
import landingPageImg from "../../assets/landing_page.jpg";
import Blog from "../Blog/Blog";
import { IoLogoGooglePlaystore } from "react-icons/io5";
export default function LandingPage() {
    return (
        <Container fluid className={`${styles.landing_page_container} d-flex flex-column p-0`}>
            <NavBar/>
            <Container className={`${styles.landing_page} d-lg-flex justify-content-center align-items-center`}>
                <div className="w-100 me-3 d-sm-none d-md-none d-lg-block">
                    <Image style={{width: "90%"}} fluid src={landingPageImg} rounded/>
                </div>
                <div
                    className="d-flex flex-column h-100 align-items-center justify-content-center">
                    <h1 style={{fontSize: "4rem", textShadow: "0px 0px 1px black"}} className="text-white fw-normal mb-5">On A Mission To Go Beyond
                        Sight</h1>
                    <h4 className="fw-light text-white" style={{textShadow: "0px 0px 1px black"}}><b>Eyecan:</b> An App that makes it easier for visually
                        challenged people to go with their everyday tasks.</h4>
                    <div className={`d-flex`}>
                        <a href={`https://play.google.com/store/apps/details?id=com.eyecan.app&hl=en_IN&gl=US`}
                           className="btn btn-dark mt-5 me-4 p-3 ps-5 pe-5"><IoLogoGooglePlaystore /> Download Now</a>
                        <a className="mt-5 p-3 ps-5 pe-5 text-decoration-none text-dark border border-2 border-dark"
                           href={`#blogs`}>Explore Our
                            Blogs >>></a>
                    </div>
                </div>
            </Container>
            <Blog/>
        </Container>
    );
}
