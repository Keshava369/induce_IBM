import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './BackgroundImageSection.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';



    const BackgroundSlider = (props) =>{
        
        
        return (
            <div className='carousel-root'>
                
                {/*<!--====== End Header Section ======-->
                <!--====== Start Hero Section ======-->*/}
        
                <section className="hero-area-one">
                    <div className="hero-slider-one">
                    {/*<Carousel showThumbs={false} showStatus={false} autoPlay infiniteLoop>*/}
        
                        
                        
                        <div className="single-slider">
                            <div className="image-layer bg_cover" style={{ backgroundImage: "url('./webtend.site/html/orgarium/assets/images/hero/hero_one-slider-3.jpg')" }}></div>
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-10">
                                        <div className="hero-content text-center">
                                            {/*<span className="tag-line" data-animation="fadeInDown" data-delay=".4s">Organic Farms</span>*/}
                                            <h1 data-animation="fadeInUp" data-delay=".5s">Agrolytics</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/*</Carousel>*/}
                    </div>
                </section>
                {/*<!--====== End Hero Section ======-->
        
                <!--====== Start Footer ======-->*/}
                
                {/*<!--====== back-to-top ======-->*/}
                <a href="#" className="back-to-top" ><i className="far fa-angle-up"></i></a>
                
            </div>
            
        );
}

export default BackgroundSlider;