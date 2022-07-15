import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap';
import '../section.css'

const Argument = () => {
    return (
        <div className="section">
            {/*Give the section some breathing space*/}
            <Container>
                {/*Text and images separated into two columns*/}
                {/*justify-content-center: center children horizontally*/}
                {/*align-items-center: center content vertically*/}
                <Row className="justify-content-center align-items-center">
                    <Col lg="6" style={{width: "450px"}}>
                        <div className="image" id="image-1"></div>
                    </Col>
                    <Col lg="6" style={{width: "450px"}}>
                        <div className="section-content-wrap">
                            <h5>Our Value</h5>
                            <h2>The Argument for Customer Issue Analytics Software</h2>
                            <p>Flitrr provides a one of a kind customer issue analytics software that accomplishes more than the competition.</p>
                            <p><Link to="">Learn More</Link></p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>

        // OLD CODE - DO NO REMOVE, WE STILL NEED THE TEXT CONTENT FOT THE PAGES

        // CONTENT FOR ARGUMENT AND VS PAGES BELOW

        // <section className='landing-sec' id="arg">
        //     <div className='landing-sec-inner'> 
        //             <h1>The Argument for Customer Issue Analytics Software</h1>
        //             <div className="textblock">
        //                 <div className="image" id="image-1"></div>
        //                 <div>
        //                     <p className='image-p'>There are three types of softwares that companies should be using customer service. The first is a customer relationships management system, or CRM, that specializes in customer service. This is a micro resolution technology that might fix your customer needs in the moment, but this technology is limited and its ability to address macro topic issues that brew within your customer experience.</p>
        //                 </div>
        //             </div>
        //             <div className="bird-wrap">
        //                 <img id="bird-in-sec" src="Assets/bird.png"/>
        //             </div>
        //             <div className="textblock">
        //                 <div>
        //                     <p>The second is a customer sentiment analytic software. A customer sentiment analytic software is a software that helps your business identify a percentage of customer complaints that are good or bad. Some of the more advanced customer sentiment analytic software goes into detail primitively on different types of topics that it picks up from the customer review data, but this technology's purpose is primarily to help businesses understand the percentage of happy and unhappy customers in their business overtime. </p>
        //                 </div>
        //             </div>
        //             <div className="textblock">
        //                 <div className="image" id="image-3"></div>
        //                 <div>
        //                     <p className='image-p'>The last and final technology, which Flitrr is pioneering, is a customer issues analytic software, that is a macro resolution technology that identifies macro trends as topics that uses advance natural language text processing to Identify topics that are of high concern or high mentioning from your customer call volumes. A customer issue analytic software helps your business fix the problems that cause the issues that your customers call about and are taken care of by a CRM or customer service software. <br/><br/> If a company does not use a customer issues analytic software they will struggle with customer turn and customer loss regardless of the business model or the product. A CIA software is an essential customer service tool like a CRM. If you have a customer issue analytics software you can fix the issues that are hurting your business and your customers and you will have the data available to you to know which issues to fix.</p>
        //                 </div>
        //             </div>
        //     </div>
        // </section>
    )
}

export default Argument;