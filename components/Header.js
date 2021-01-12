import React from "react"

const Header = () => {
  return (
    <>
        <header id='header' className='header header-desktop header-1'>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-md-3 p-0'>
                <div className='header-left'>
                  <a href='./' id='branding_logo'>
                    <img
                      className='logo'
                      src='images/logo_alt.png'
                      alt='Logo'
                      title='Nine Studio'
                    />
                    <img
                      className='logo-alt'
                      src='images/logo_alt.png'
                      alt='Logo'
                      title='Nine Studio'
                    />
                  </a>
                </div>
              </div>
              <div className='col-md-9 p-0'>
                <div className='header-right'>
                  <nav id='menu' className='menu menu-primary'>
                    <ul>
                      <li className='dropdown active'>
                        <a href='#'>Home</a>
                        <ul className='sub-menu'>
                          <li>
                            <a href='./'>Home Production</a>
                          </li>
                          <li>
                            <a href='index-film-making.html'>
                              Home Film Making
                            </a>
                          </li>
                          <li>
                            <a href='index-studio.html'>Home Studio</a>
                          </li>
                          <li>
                            <a href='index-director.html'>Home Director</a>
                          </li>
                          <li>
                            <a href='index-agency.html'>Home Agency</a>
                          </li>
                          <li>
                            <a href='index-blogger.html'>Home Blogger</a>
                          </li>
                          <li>
                            <a href='index-showcase.html'>Home Showcase</a>
                          </li>
                        </ul>
                      </li>
                      <li className='dropdown'>
                        <a href='#'>Pages</a>
                        <ul className='sub-menu'>
                          <li className='dropdown'>
                            <a href='#'>About</a>
                            <ul className='sub-menu'>
                              <li>
                                <a href='about-1.html'>About 01</a>
                              </li>
                              <li>
                                <a href='about-2.html'>About 02</a>
                              </li>
                            </ul>
                          </li>
                          <li className='dropdown'>
                            <a href='#'>Our Team</a>
                            <ul className='sub-menu'>
                              <li>
                                <a href='our-team-1.html'>Our Team 01</a>
                              </li>
                              <li>
                                <a href='our-team-2.html'>Our Team 02</a>
                              </li>
                            </ul>
                          </li>
                          <li className='dropdown'>
                            <a href='#'>Our Services</a>
                            <ul className='sub-menu'>
                              <li>
                                <a href='our-services-1.html'>
                                  Our Services 01
                                </a>
                              </li>
                              <li>
                                <a href='our-services-2.html'>
                                  Our Services 02
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className='dropdown'>
                            <a href='#'>Gallery</a>
                            <ul className='sub-menu'>
                              <li>
                                <a href='gallery-1.html'>Gallery 01</a>
                              </li>
                              <li>
                                <a href='gallery-2.html'>Gallery 02</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href='404.html'>404</a>
                          </li>
                        </ul>
                      </li>
                      <li className='dropdown'>
                        <a href='#'>Productions</a>
                        <ul className='sub-menu'>
                          <li>
                            <a href='our-projects-list.html'>
                              Productions List
                            </a>
                          </li>
                          <li>
                            <a href='our-projects-grid.html'>
                              Productions Grid
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className='dropdown'>
                        <a href='#'>Blog</a>
                        <ul className='sub-menu'>
                          <li>
                            <a href='blog-list-1.html'>Blog List 01</a>
                          </li>
                          <li>
                            <a href='blog-list-2.html'>Blog List 02</a>
                          </li>
                          <li>
                            <a href='blog-list-3.html'>Blog List 03</a>
                          </li>
                          <li>
                            <a href='blog-masonry.html'>Blog Masonry</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href='contact-us.html'>Contact Us</a>
                      </li>
                    </ul>
                  </nav>
                  <div id='open-search' className='open-search top-search-btn'>
                    <i className='ion-ios-search-strong'></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <header className='header header-mobile'>
          <div className='container'>
            <div className='row'>
              <div className='col-xs-2'>
                <div className='header-left'>
                  <div id='open-left'>
                    <i className='ion-navicon'></i>
                  </div>
                </div>
              </div>
              <div className='col-xs-8'>
                <div className='header-center'>
                  <a href='./' id='logo-2'>
                    <img
                      className='logo-image'
                      src='images/logo_alt.png'
                      alt='Nine Studio Logo'
                    />
                  </a>
                </div>
              </div>
              <div className='col-xs-2'>
                <div className='header-right'>
                  <div
                    id='open-search-2'
                    className='open-search top-search-btn'
                  >
                    <i className='ion-ios-search-strong'></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
    </>
  )
}

export default Header
