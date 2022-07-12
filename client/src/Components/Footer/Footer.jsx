import React from 'react'
import './Footer.css'

import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
    return (
        <footer>
            <Container id="container">
                <Row>
                    <Col>
                        <p>Explore</p>
                        <ul>
                            <li>Product Overview</li>
                            <li>Integrations</li>
                            <li>Pricing</li>
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
            <p style={{marginTop: '20px', textAlign: 'center'}}>
                © 2022 FlITRR ALL RIGHTS RESERVED
            </p>
        </footer>
    );
}

export default Footer;