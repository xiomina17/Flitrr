import React from 'react';
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap';
import '../../section.css'

const FlitrrVCRM = () => {
    return (
        <div className="section">
            {/*Give the section some breathing space*/}
            <Container>
                {/*Text and images separated into two columns*/}
                {/*justify-content-center: center children horizontally*/}
                {/*align-items-center: center content vertically*/}
                <Row className="justify-content-center align-items-center">
                    <Col lg="6" style={{width: "450px"}}>
                        <div className="image" id="image-3"></div>
                    </Col>
                    <Col lg="6" style={{width: "450px"}}>
                        <div className="section-content-wrap">
                            <h5>CRM</h5>
                            <h2>What Flitrr Does Better Than CRM Software</h2>
                            <p>Flitrr provides all the functionality of existing CRM software and also exceeds where it falls short.</p>
                            <p><Link to="">Learn More</Link></p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        // <section className='landing-sec' id="crm">
        //     <div className='landing-sec-inner'>
        //         <h1>Flitrr vs Customer Service CRM</h1>
        //         <div className="textblock">
        //             <div className='image' id="image-6"></div>
        //             <div>
        //                 <p className='image-p'>While Customer Service CRM software is a great way to organize your customer feedback data and respond, it often lacks the deeper analytics and insights needed to truly understand what your customers are saying. Flitrr goes beyond just organizing, by identifying the most frequent topics, sub-topics and summaries of what's being most discussed. This helps you fix the issues at its source.</p>
        //             </div>
        //         </div>
        //         <div className="textblock tb-rev">
        //             <div className='image' id="image-7"></div>
        //             <div>
        //                 <p className='image-p'>Does your CRM give you the ability to organize and manage customer feedback in a way that lets you know what issues are most frequenting discussed and how people feel about an experience on a larger predictive scale? Flitrr does, and our predictive analytics can tell you what’s coming next and what historically has been hurting customers. The more data from a larger set of customers, the better we can predict. Flitrr also combines elements of productivity software to take action on the largest issues on the table. Whether that be for the day, month, year or past five years. All major investments require and deserve strong data to back up change. Flitrr provides you that data.</p>
        //             </div>
        //         </div>
        //     </div>
        // </section>
    )
}

export default FlitrrVCRM;
