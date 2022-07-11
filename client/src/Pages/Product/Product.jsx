import React from 'react';
import '../../Components/NavBar/Navbar.css';
import Navbar from '../../Components/NavBar/NavBar'

import './Product.css'

const Product = () => {
    return (
        <>
            <Navbar/>
            <div id="product-page">
                <section id="product-content">
                    <h3 id="opening">
                        We're a California (Silicon Valley) based startup who aims to help leading companies like Vrbo simplify customer service and track customer sentiment in a new way, Flitrr Makes Fixing systems, processes, experiences, and Product Issues Faster, and More Customer Centric &#128230; &#129351;
                    </h3>
                    <p>
                        We're faster and more customer centric than your existing infrastructure. We're using the newest generation of language learning, and we can read your entire organization's B2C and B2B service call volumes across all global service regions to address problems as simple as Bug-fixes for payment discrepancies on payment portals to more serious arching problems. Flitrr can keep up with all your individual Guest situations coming into your business, and segregate issues by topic and generate solutions and deploy actionable workflows to send issues to the right people to fix them. We're also able to map your issues across a timeline and geospatial vertices to give your team the Customer Service Data Dashboard your teams always wanted! Flitrr can zoom out to showcase large recurring issues, and be micros-coped in to identify individual complaints.
                    </p>
                    <p>
                        We can process complaints faster than your internal teams. We can cover more ground, and we can remove technical analysts from the feedback cycle between CX and Service deployment and Product teams that make decisions
                    </p>
                    <p>
                        In essence what Flitrr does is it processes customer feedback, and then decides which items are most important from a product end to then send to Zellle's engineering teams to fix and deploy as Jira issues for product enhancement. Flitrr connects your customers to your engineers without having middle men in-between conveying information . Product improvement can track easily what customers are saying to review, or from a much higher level, to more quickly address topics for improvement and build more customer centric products.
                    </p>
                </section>
            </div>
        </>
    )
}

export default Product;