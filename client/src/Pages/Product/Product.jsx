import React from 'react';
import '../../Components/NavBar/Navbar.css';
import Navbar from '../../Components/NavBar/NavBar'
import Footer from '../../Components/Footer/Footer'

import './Product.css'

const Product = () => {
    return (
        <>
            <Navbar/>
            <div id="product-bckg">
                <div id="product-page">
                    <section id="product-content">
                        <h3 id="heading">
                            Flitrr reads your customer feedback information to identify topics, sub-topics and summaries of what's being most frequenting discussed. Flitrr then provides valuable analytics and insights into the data it produces to help you fix the issues at its source.
                        </h3>
                        <h4 id="subheading">
                            Flitrr makes tracking and taking action on customer feedback more productive and straightforward.
                        </h4>
                        <p>
                            We're faster and more customer centric than your existing infrastructure. We're using the newest generation of language learning, and we can read your entire organization's B2C and B2B service call volumes across all global service regions to address problems as simple as Bug-fixes for payment discrepancies on payment portals to more serious arching problems. Flitrr can keep up with all your individual Guest situations coming into your business, and segregate issues by topic and generate solutions and deploy actionable workflows to send issues to the right people to fix them. We're also able to map your issues across a timeline and geospatial vertices to give your team the Customer Service Data Dashboard your teams always wanted! Flitrr can zoom out to showcase large recurring issues, and be micros-coped in to identify individual complaints.
                        </p>
                        <p>
                            We can process complaints faster than your internal teams. We can cover more ground, and we can remove technical analysts from the feedback cycle between CX and Service deployment and Product teams that make decisions.
                        </p>
                    </section>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Product;