import React from 'react';
import './style.modules.css';
import '../section.css'
import { Container, Row, Col } from 'react-bootstrap'
import * as Icon from 'react-bootstrap-icons';

const Pricing = () => {
  return (
    <div className="section section-pricing">
        <Container>
            <h3>Pricing and Plans</h3>
            <Row>
                <Col sm="12" lg="6">
                    <div>
                        {/*exact same code as Mina's*/}
                        <div className='header-container'>
                            <h2> Full Data Processing</h2>
                            <p className='p-style'>(Self Infrastructure)</p>
                        </div>
               
                        <div className='body-container'>

                            <h3 className='text-style'>Contact us for a Quote</h3>
                            <div className='body-text'>
                                <p><Icon.CheckCircleFill style={{ color: 'orange', size: '50px' }}/> Full Customer Service data processing.</p>
                                <p><Icon.CheckCircleFill style={{ color: 'orange', size: '50px' }}/> Issue resolutions.</p>
                                <p><Icon.CheckCircleFill style={{ color: 'orange', size: '50px' }}/> Integrations with your favorite apps, I.e Salesforce, Hubspot, Zendesk, Snowflake, and Jira.</p>
                                <p><Icon.CheckCircleFill style={{ color: 'orange', size: '50px' }}/> Unlimited team and org structure.</p>
                            </div>
                        </div> 
                    </div>
                </Col>
                <Col sm="12" lg="6">
                    <div>
                        <div className='header-container'>
                            <h2> Full Data Processing</h2>
                            <p className='p-style'>(Provided Cloud Infrastructure)</p>
                        </div>
              
                        <div className='body-container'>
                            <h3 className='text-style'>Contact us for a Quote</h3>
                            <div className='body-text'>
                                <p><Icon.CheckCircleFill style={{ color: 'orange', size: '50px' }}/> Full Customer Service data processing.</p>
                                <p><Icon.CheckCircleFill style={{ color: 'orange', size: '50px' }}/> Issue resolutions.</p>
                                <p><Icon.CheckCircleFill style={{ color: 'orange', size: '50px' }}/> Integrations with your favorite apps, I.e Salesforce, Hubspot, Zendesk, Snowflake, and Jira.</p>
                                <p><Icon.CheckCircleFill style={{ color: 'orange', size: '50px' }}/> Unlimited team and org structure.</p>
                            </div>
                        </div> 
                    </div>
                </Col>
            </Row>
        </Container>
    </div>

    // <div className='third-container' id="pricing">
    //     <h1 className='tittle'>Pricing and Plans</h1>
        
    //     <div className='pricing-wrapper'>

    //         <div className='price-container'>
    //             <div className='header-container'>
    //             <h2> Full Data Processing</h2>
    //                 <p className='p-style'>(Self Infrastructure)</p>
    //             </div>
               
    //             <div className='body-container'>

    //             <h3 className='text-style'>Contact us for a Quote</h3>
    //                 <div className='body-text'>
    //                 <p><Icon.CheckCircleFill style={{ color: 'orange', size: '50px' }}/> Full Customer Service data processing.</p>
    //                 <p><Icon.CheckCircleFill style={{ color: 'orange', size: '50px' }}/> Issue resolutions.</p>
    //                 <p><Icon.CheckCircleFill style={{ color: 'orange', size: '50px' }}/> Integrations with your favorite apps, I.e Salesforce, Hubspot, Zendesk, Snowflake, and Jira.</p>
    //                 <p><Icon.CheckCircleFill style={{ color: 'orange', size: '50px' }}/> Unlimited team and org structure.</p>
    //                 </div>

    //         </div> 

    //         </div>


    //         <div className='price-container'>
    //             <div className='header-container'>
    //                 <h2> Full Data Processing</h2>
    //                 <p className='p-style'>(Provided Cloud Infrastructure)</p>
    //             </div>
               
    //             <div className='body-container'>

    //             <h3 className='text-style'>Contact us for a Quote</h3>
    //                 <div className='body-text'>
    //                 <p><Icon.CheckCircleFill style={{ color: 'orange', size: '50px' }}/> Full Customer Service data processing.</p>
    //                 <p><Icon.CheckCircleFill style={{ color: 'orange', size: '50px' }}/> Issue resolutions.</p>
    //                 <p><Icon.CheckCircleFill style={{ color: 'orange', size: '50px' }}/> Integrations with your favorite apps, I.e Salesforce, Hubspot, Zendesk, Snowflake, and Jira.</p>
    //                 <p><Icon.CheckCircleFill style={{ color: 'orange', size: '50px' }}/> Unlimited team and org structure.</p>
    //                 </div>
    //         </div> 

    //         </div>
    //     </div>
    // </div>
  )
}

export default Pricing