import React from 'react'
import PropTypes from 'prop-types'

const SectionFeatures = props => {
    return (
        <>
        <div className="section pb-8">
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <hr className="mb-8"></hr>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <div className="icon-boxes icon-boxes-bg text-center">
                        <div className="icon-boxes-icon" data-bg-image="images/icon-boxes/icon_bg_1.png" style={{backgroundImage: "url('images/icon-boxes/icon_bg_1.png')"}}>
                            <i className="ns-tripod"></i>
                        </div>
                        <div className="icon-boxes-inner">
                            <h5 className="icon-boxes-title">FILMING SERVICES</h5>
                            <div className="icon-boxes-content">
                                We can film your project whether it is a commercial advertise, a short film or a document film. We have expertise in these fields.
                            </div>
                            <div className="icon-boxes-link">
                                <a href="#"><span className="ion-android-arrow-forward"></span></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="icon-boxes icon-boxes-bg text-center">
                        <div className="icon-boxes-icon" data-bg-image="images/icon-boxes/icon_bg_2.png" style={{backgroundImage: "url('images/icon-boxes/icon_bg_2.png')"}}>
                            <i className="ns-seats"></i>
                        </div>
                        <div className="icon-boxes-inner">
                            <h5 className="icon-boxes-title">WORKSHOPS &amp; PRIVATE TUITION</h5>
                            <div className="icon-boxes-content">
                                Some workshops have invited us to come lecturing. We also offer private tuitions for absolute beginners or mid-level producers who need more advice.
                            </div>
                            <div className="icon-boxes-link">
                                <a href="#"><span className="ion-android-arrow-forward"></span></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="icon-boxes icon-boxes-bg text-center">
                        <div className="icon-boxes-icon" data-bg-image="images/icon-boxes/icon_bg_3.png" style={{backgroundImage: "url('images/icon-boxes/icon_bg_3.png')"}}>
                            <i className="ns-video-camera"></i>
                        </div>
                        <div className="icon-boxes-inner">
                            <h5 className="icon-boxes-title">Equipment hire</h5>
                            <div className="icon-boxes-content">
                                Sometimes we don’t use our equipment so you can hire them for your filming. Check our schedule and contact if it suits your time.
                            </div>
                            <div className="icon-boxes-link">
                                <a href="#"><span className="ion-android-arrow-forward"></span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
        </div>
        </>
    )
}



export default SectionFeatures
