import React from 'react'
import PropTypes from 'prop-types'

const Newsletter = props => {
    return (
        <>
        <div className="section section-bg-3 section-cover footer-newsletter style-1 pt-11 pb-8">
        <div className="container">
            <div className="row">
                <div className="col-md-1">&nbsp;</div>
                <div className="col-md-4">
                    <div className="footer-newsletter-left">Subscribe to our Newsletter</div>
                </div>
                <div className="col-md-6">
                    <div className="footer-newsletter-right">
                        <form method="post">
                            <div className="form-fields">
                                <div className="form">
                                    <input type="email" name="email" placeholder="Enter your e-mail" /> 
                                    <input type="submit" value="Submit" />
                                </div>
                                <p className="note">Note* : Spectators are our passion. Creation is our core.</p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>   
        </>
    )
}

export default Newsletter
