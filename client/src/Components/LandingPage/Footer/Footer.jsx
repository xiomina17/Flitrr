import React, { useState, useEffect } from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {

    // conditionally check if the user is on the landing page for Flitrr
    const [landingPage, isLandingPage] = useState(true)

    useEffect(() => {
        if (window.location.href.includes('/Flitrr')) {
            isLandingPage(true)
        } else {
            isLandingPage(false)
        }
    }, [])

    return (
        <footer>
            <Container id="container">
                <Row>
                    <Col>
                        <p>Explore</p>
                        <ul>
                            <li>
                                <Link to='/product'>
                                    Product Overview
                                </Link>
                            </li>
                            <li>Integrations</li>
                            <li>
                                {!landingPage ? (
                                    <Link to='/Flitrr#pricing'>
                                        Pricing
                                    </Link>
                                ) : (
                                    <a href='client/src/Components/LandingPage/Footer/Footer#pricing'>
                                        Pricing
                                    </a>
                                )}
                            </li>
                            <li>CX</li>
                            <li>Compare</li>
                            <li>Live Demo</li>
                            <li>Demo Videos</li>
                        </ul>
                    </Col>
                    <Col>
                        <p>Support & Security</p>
                        <ul>
                            <li>Status</li>
                            <li>Security</li>
                            <li>Legal Center</li>
                            <li>Privacy Center</li>
                            <li>Compliance</li>
                            <li>GDPR & CCPA</li>
                        </ul>
                    </Col>
                    <Col>
                        <p>Resources</p>
                        <ul>
                            <li>Help Center</li>
                            <li>Library</li>
                            <li>Blog</li>
                            <li>Events</li>
                            <li>Product Updates</li>
                            <li>Developers</li>
                            <li>Community</li>
                        </ul>
                    </Col>
                    <Col>
                        <p>Company</p>
                        <ul>
                            <li>Contact</li>
                            <li>Careers</li>
                            <li>Media Kit</li>
                            <li>Newsroom</li>
                            <li>Engineering</li>
                            <li>Partners</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <p>Contact Us</p>
                    <Col>
                        <p>Address</p>
                        <ul>
                            <li>
                                497 Stockbridge Avenue <br/>
                                Atherton, CA 94027
                            </li>
                        </ul>
                    </Col>
                    <Col>
                        <p>Email</p>
                        <ul>
                            <li>
                                <a href="mailto:help@flitrr.com">
                                    help@flitrr.com
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
            <p style={{marginTop: '20px', textAlign: 'center'}}>
                © 2022 FlITRR ALL RIGHTS RESERVED
            </p>
        </footer>
    );
}

export default Footer;
