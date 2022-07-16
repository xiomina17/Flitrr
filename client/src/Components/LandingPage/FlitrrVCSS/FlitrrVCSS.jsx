import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap';
import '../../section.css'

const FlitrrVCSS = () => {
    return (
        <div className="section secondary-sec">
            {/*Give the section some breathing space*/}
            <Container>
                {/*Text and images separated into two columns*/}
                {/*justify-content-center: center children horizontally*/}
                {/*align-items-center: center content vertically*/}
                <Row className="justify-content-center align-items-center">
                    <Col lg="6" style={{width: "450px"}}>
                        <div className="section-content-wrap">
                            <h5>Customer Sentiment Software</h5>
                            <h2>What Flitrr Does Better Than Customer Sentiment Software</h2>
                            <p>Flitrr provides all the functionality of existing customer sentiment software and also exceeds where it falls short.</p>
                            <p><Link to="">Learn More</Link></p>
                        </div>
                    </Col>
                    <Col lg="6" style={{width: "450px"}}>
                        <div className="image" id="image-2"></div>
                    </Col>
                </Row>
            </Container>
        </div>
        // Just like arg section, do not remove
        //
        // <section className='landing-sec' id="css">
        //     <div className='landing-sec-inner'>
        //         <h1>Flitrr vs Customer Sentiment Software</h1>
        //         <div className="textblock">
        //             <div className='image' id="image-4"></div>
        //             <div>
        //                 <p className='image-p'>Like customer service softwares, Flitrr provides valuable insights into how your company is being discussed online. Unlike customer service software, Flitrr also identifies topics, sub-topics and summaries of what's being most frequenting discussed. In other words, it helps you to fix the issues at its source.</p>
        //             </div>
        //         </div>
        //         <div className="textblock tb-rev">
        //             <div className='image' id="image-5"></div>
        //             <div>
        //                 <p className='image-p'>Flitrr goes beyond customer sentiment. Flitrr uses advanced AI and natural language processing to identify key topics from customer service complaint data. Flitrr identifies recurring topics, and sub-topics all the way down to individual complaints, keywords and phrases that give insight into what your customers are complaining most about your product or service. This unique tool provides valuable insights into the feedback being received so you can take action to fix problems before they become bigger issues.</p>
        //             </div>
        //         </div>
        //     </div>
        // </section>
    )
}

export default FlitrrVCSS;
