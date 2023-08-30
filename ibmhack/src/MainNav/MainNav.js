import React from "react";
import { Link } from "react-router-dom";

const MainNav = () => {
    const centeredDivisionStyle = {
        display: 'flex',
        justifyContent: 'center',
        
    };
    return(
        <div>
            {/*<!--====== Start Header Section ======-->*/}
        <header className="header-area">
            <div className="header-navigation navigation-one">
                <div className="nav-overlay"></div>
                <div className="container-1350">
                    <div className="primary-menu" style={centeredDivisionStyle}> 
                        {/*Remove the above inline style if nav style gets disturbed for smaller screens*/}
                        <div className="site-branding">
                            <a href="index.html" className="brand-logo"><img src="assets/images/logo/logo-1.png" alt="Site Logo" /></a>
                        </div>
                        <div className="nav-inner-menu">
                            <div className="nav-menu">
                                {/*<!--=== Mobile Logo ===-->*/}
                                <div className="mobile-logo mb-30 d-block d-xl-none text-center">
                                    <a href="index.html" className="brand-logo"><img src="assets/images/logo/logo-1.png" alt="Site Logo" /></a>
                                </div>
                                {/*<!--=== Main Menu ===-->*/}
                                <nav className="main-menu">
                                    <ul>
                                        <li><Link to='/' className="active">Home</Link></li>
                                        <li><Link to='/indian-agriculture'>Indian Agriculture</Link>
                                            
                                        </li>
                                        <li><Link to = '/explore-states'>Explore states</Link></li>
                                        <li className="menu-item has-children"><a href="#">predictions</a>
                                            <ul className="sub-menu" style={{zIndex: 1000}}>
                                                <li><Link to='/predictions/yield-prediction'>Yield Prediction</Link></li>
                                                <li><Link to='/predictions/crop-suggestion'>Crop Suggestion</Link></li>
                                            </ul>
                                        </li>
                                        
                                        <li className="menu-item has-children"><a href="#">Challenges</a>
                                            <ul className="sub-menu" style={{zIndex: 1000}}>
                                                <li><Link to='/challenges/climate-change'>Climate Change</Link></li>
                                                <li><Link to='/challenges/land-degradation'>Land Degradation</Link></li>
                                                <li><Link to='/challenges/water-scarcity-and-irrigation'>Water Scarcity & Irrigation</Link></li>
                                                <li><Link to='/challenges/post-harvest-losses'>Post Harvest Losses</Link></li>
                                                <li><Link to='/challenges/timely-access-to-information'>Access To Information</Link></li>
                                                
                                            </ul>
                                        </li>
                                        <li><Link to = '/food-security'>Food Security</Link>
                                            
                                        </li>
                                        <li>
                                            <Link to="/employment">Employment</Link>
                                            
                                        </li>
                                        {/*<li className="menu-item has-children" ><a href="#">Blog</a>
                                            <ul className="sub-menu" style={{zIndex: 1000}}>
                                                <li><a href="farmers.html">Our Farmers</a></li>
                                                <li><a href="faqs.html">Faq</a></li>
                                                <li><a href="contact.html">Contact</a></li>
                                            </ul>
                                        </li>*/}
                                    </ul>
                                </nav>
                            </div>
                            {/*<!--=== Nav Right Item ===-->*/}
                            <div className="nav-right-item">
                                <div className="navbar-toggler">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        {/*<!--====== End Header Section ======-->*/}
        </div>
    );
} 

export default MainNav;