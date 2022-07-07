import React from 'react'
import {PricingTable, PricingSlot, PricingDetail} from 'react-pricing-table';
import style from './style.modules.css';
import * as Icon from 'react-bootstrap-icons';

const Pricing = () => {
  return (
    <div className='third-container'>
        <h1 className='tittle'>Try out Flitrr today!</h1>
        
        <div className='pricing-wrapper'>

            <div className='price-container'>
                <div className='header-container'>
                <h2>Caption Full Data Processing</h2>
                    <p className='p-style'>(Self infraestructure)</p>
                </div>
               
                <div className='body-container'>

                <h3 className='text-style'>Contact us for a Quote</h3>

                    <p><Icon.CheckCircleFill/> Full Customer Service data processing.</p>
                    <p><Icon.CheckCircleFill/> Issue resolutions.</p>
                    <p><Icon.CheckCircleFill/> Integrations with your favorite apps, I.e Salesforce, Hubspot, Zendesk, Snowflake, and Jira.</p>
                    <p><Icon.CheckCircleFill/> Unlimited team and org structure.</p>

            </div> 

            </div>


            <div className='price-container'>
                <div className='header-container'>
                    <h2>Caption Full Data Processing</h2>
                    <p className='p-style'>(provided could infraestructure)</p>
                </div>
               
                <div className='body-container'>

                <h3 className='text-style'>Contact us for a Quote</h3>

                    <p><Icon.CheckCircleFill/> Full Customer Service data processing.</p>
                    <p><Icon.CheckCircleFill/> Issue resolutions.</p>
                    <p><Icon.CheckCircleFill/> Integrations with your favorite apps, I.e Salesforce, Hubspot, Zendesk, Snowflake, and Jira.</p>
                    <p><Icon.CheckCircleFill/> Unlimited team and org structure.</p>

            </div> 

            </div>











        </div>











    </div>
  )
}

export default Pricing