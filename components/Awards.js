import React from "react"

const Awards = () => {
  return (
    <>
      <div className='section section-bg-7 section-cover pt-10 pb-10'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-4 col-sm-12'>
              <h3 className='sub-title primary-color'> Awards</h3>
              <h2 className='section-title small fz-40 white mb-2'>
                A selection of some recent awards
              </h2>
              <p className='gray'>
                Since 2008, I have shot more than 50 short formats (commercials,
                music videos, documentaries and short movies). In 2014 I
                finished the masterclass in cinematography at Hamburg Media
                School. Now freelancing as cinematographer.
              </p>
            </div>
            <div className='col-md-8 col-sm-12'>
              <div className='mt-3 hidden-xs'></div>
              <div
                className='logo-carousel no-opacity'
                data-auto-play='true'
                data-desktop='4'
                data-laptop='3'
                data-tablet='3'
                data-mobile='2'
              >
                <div className='logo-item'>
                  <img src='images/logo/logo_130x88.jpg' alt='' />
                </div>
                <div className='logo-item'>
                  <img src='images/logo/logo_130x88.jpg' alt='' />
                </div>
                <div className='logo-item'>
                  <img src='images/logo/logo_130x88.jpg' alt='' />
                </div>
                <div className='logo-item'>
                  <img src='images/logo/logo_130x88.jpg' alt='' />
                </div>
              </div>
              <div className='row'>
                <div className='col-sm-6'>
                  <div className='icon-boxes icon-boxes-small'>
                    <div className='icon-boxes-icon'>
                      <i className='ion-trophy'></i>
                    </div>
                    <h5 className='icon-boxes-title white'>
                      {" "}
                      06 Awards in 2014/2015.
                    </h5>
                    <div className='icon-boxes-content gray'>
                      These awards are both national and international in
                      2014/2015
                    </div>
                  </div>
                </div>
                <div className='col-sm-6'>
                  <div className='icon-boxes icon-boxes-small'>
                    <div className='icon-boxes-icon'>
                      <i className='ion-trophy'></i>
                    </div>
                    <h5 className='icon-boxes-title white'> 04 Awards in 2016</h5>
                    <div className='icon-boxes-content gray'>
                      These awards are both national and international in 2016
                    </div>
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

export default Awards
