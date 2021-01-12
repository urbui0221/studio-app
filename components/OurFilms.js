import React from 'react'

const OurFilms = () => {
    return (
        <>
        <div className="section section-bg-5 section-cover pt-11 pb-11">
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <div className="text-center mb-7">
                        <h3 className="sub-title primary-color">Our Best Films</h3>
                        <h2 className="section-title mb-2">Featured Films</h2>
                        <p>Have a look at our best films which are high in quality and receive positive responses <br />from audience. You are gonna have these great films as well.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="film-list-item">
                    <div className="col-md-6 col-thumb">
                        <div className="thumb">
                            <a href="film-detail.html">
                                <img src="images/projects/project_585x380.jpg" alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="col-md-6 col-info">
                        <div className="info">
                            <div className="title">
                                <a href="film-detail.html"> The Secret Scripture </a>
                            </div>
                            <div className="category">
                                <a href="#">Anthology Film</a>
                                <a href="#">Short Film</a>
                            </div>
                            <div className="excerpt"> 
                                In our new film The Secret Scripture, based on the novel by Sebastian Barry, the six-time Oscar nominated director returns to themes familiar to him: politics, religion, family and truth. Vanessa Redgrave stars as Rose McNulty, a woman
                            </div>
                            <div className="meta">
                                <span className="view">215 Views</span>
                                <span className="like">
                                    <a href="#" className="like-btn">4 Likes</a>
                                </span>
                                <span className="comment">0 Comment</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="film-list-item">
                    <div className="col-md-6 col-md-push-6 col-thumb">
                        <div className="thumb">
                            <a href="film-detail.html">
                                <img src="images/projects/project_585x380.jpg" alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="col-md-6 col-md-pull-6 col-info">
                        <div className="info">
                            <div className="title">
                                <a href="film-detail.html"> Kicks </a>
                            </div>
                            <div className="category">
                                <a href="#">Short Film</a>
                            </div>
                            <div className="excerpt"> 
                                The Tribeca Film Festival kicked off on April 14 with the opening night premiere of Justin Tipping’s Kicks, an ambitious coming-of-age film set in an inner city enclave in Northern California. Though it’s Tipping’s feature debut, he’s far
                            </div>
                            <div className="meta">
                                <span className="view">155 Views</span>
                                <span className="like">
                                    <a href="#" className="like-btn">0 Like</a>
                                </span>
                                <span className="comment">0 Comment</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="film-list-item">
                    <div className="col-md-6 col-thumb">
                        <div className="thumb">
                            <a href="film-detail.html">
                                <img src="images/projects/project_585x380.jpg" alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="col-md-6 col-info">
                        <div className="info">
                            <div className="title">
                                <a href="film-detail.html"> Raising Bertie Up </a>
                            </div>
                            <div className="category">
                                <a href="#">Short Film</a>
                            </div>
                            <div className="excerpt"> 
                                Raising Bertie follows three young men over the course of five years as they grow into adulthood in Bertie County, a rural African-American-led community in North Carolina. Director Margaret Byrne had originally set out to make
                            </div>
                            <div className="meta">
                                <span className="view">177 Views</span>
                                <span className="like">
                                    <a href="#" className="like-btn">0 Like</a>
                                </span>
                                <span className="comment">0 Comment</span>
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

export default OurFilms
