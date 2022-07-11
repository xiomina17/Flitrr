import React from 'react';
import './style.modules.css';
import * as Icon from 'react-bootstrap-icons';

const Pricing = () => {
  return (
    <div className='third-container'>
        <h1 className='tittle'>Pricing and Plans</h1>
        
        <div className='pricing-wrapper'>

            <div className='price-container'>
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


            <div className='price-container'>
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











        </div>











    </div>
  )
}

export default Pricing