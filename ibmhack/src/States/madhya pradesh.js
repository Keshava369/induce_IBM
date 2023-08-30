import React from "react";
import './CardPage.css';
import SimpleImageSlider from "react-simple-image-slider";



function madhyaPradesh () {
  const images = [
    { url: "images/madhyapradesh/linseed.jpeg" },
    { url: "images/madhyapradesh/masoor.jpeg" },
    { url: "images/madhyapradesh/soyabean.jpeg" },
    { url: "images/madhyapradesh/tur.jpeg" },
    
    { url: "images/madhyapradesh/urad.jpeg" },
  ];

    return(
    <div>
        <div className="container">
        <div class="dropdown">
          <button class="button button1">  madhyaPradesh </button>
            <div class="dropdown-content">
              <p>Madhya Pradesh is an agrarian economy with 35% share of GVA coming from primary sector, especially agriculture and allied sector. Around 152.05 lakh ha land (49.43% of total land) in the state out of total 307.56 lakh ha is under cultivation (upto 2018-19). Madhya Pradesh is known as ‘Soya Pradesh’ as around 60% of the national production is in the state. The State is blessed with 11 agro-ecological zones providing ecological support system for production of unique crops and varieties.</p>
              <p>As per Agriculture statistics at a glance of MoA& FW, GoI, Madhya Pradesh holds the first rank in production of pulses (32% of national share),& oilseeds (22% of national share) and second position in production of food grains (12% national share).</p>
            </div>
        </div>
        <div class="dropdown">
          <button class="button button1">Major Producing Crops in  madhyaPradesh </button>
        </div>
        </div>
        <div className="container">
             <img src="images/madhyapradesh/mp.jpg"></img>
             <SimpleImageSlider
              width={700}
              height={500}
              images={images}
              showBullets={true}
              showNavs={true}
              autoPlay={true}
          />
        </div>

        <div className="container">
        <div class="dropdown">
          <button class="button button1">Insights of Area and Production by Crop</button>
            <div class="dropdown-content">
              <p>Production and Area diverged the most when Crop is Banana, and when Production was nearly 6.3 million higher than the Area.</p>
              <p>Area is unusually high when Crop is Arhar/Tur and Bajra.</p>
              <p>It is projected that by 2017, Arhar/Tur will exceed Bajra in Area by nearly 117 thousand.</p>
              <p>Crop Gram has the highest values of both Area and Production.</p>
              <p>Area and Production diverged the most when Crop is Gram, and when Area was over 2.4 million higher than the Production.</p>
              <p>Area is unusually high when Crop is Gram.</p>
              <p>Crop Maize has the highest values of both Area and Production.</p>
              <p>Production and Area diverged the most when Crop is Maize, and when Production was over 8.4 million higher than the Area.</p>
              <p>Area is unusually high when Crop is Maize.</p>
              <p>Production and Area diverged the most when Crop is Onion, and when Production was over 9.2 million higher than the Area.</p>
              <p>Area is unusually high when Crop is Other Rabi pulses and Other Kharif pulses.</p>
              <p>Crop Onion has the highest Total Production but is ranked #6 in Total Area.</p>
              <p>Crop Rice has the highest values of both Area and Production.</p>
              <p>Production and Area diverged the most when Crop is Potato, and when Production was nearly 9.2 million higher than the Area.</p>
              <p>Area is unusually high when Crop is Rice.</p>
              <p>Production and Area diverged the most when Crop is Wheat, and when Production was almost 72 million higher than the Area.</p>
              <p>Area is unusually high when Crop is Soyabean and Wheat.</p>
              <p>It is projected that by 2017, Soyabean will exceed Wheat in Area by nearly 464 thousand.</p>
            </div>
        </div>
        <div class="dropdown">
          <button class="button button1">Gross Value Added by year from Agriculture</button>
            <div class="dropdown-content">
              <p>2021-22* 47055969 has the highest values of both 2012-13 and 2011-12.</p>
            </div>
        </div>
        </div>
        <div className="container"> 
          <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Fmadhyapradesh%2Fmadhyapradesh-cpa&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model00000189ee65d51f_00000000" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
          <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Fmadhyapradesh%2Fmp-gross-value&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model0000018a031b2ea5_00000002" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
        </div>
        <div className="container">
        <div class="dropdown">
          <button class="button button1">Production by Crop in Rabi</button>
            <div class="dropdown-content">
              <p>Production is unusually high when Crop is Wheat.</p>
              
              <p>Production is unusually high when the combination of Crop and Season is Wheat and Rabi.</p>
              <p>It is projected that by 2017, Wheat will exceed Rapeseed &Mustard in Production by almost fourteen million.</p>
              
            </div>
        </div>
        <div class="dropdown">
          <button class="button button1">Production by Crop in Kharif</button>
            <div class="dropdown-content">
              <p>Production is unusually high when Crop is Soyabean.</p>
              <p>Production is unusually high when the combination of Crop and Season is Soyabean and Kharif.</p>
              <p>It is projected that by 2017, Soyabean will exceed Maize in Production by over 3.9 million.</p>
            </div>
        </div>
        </div>
        <div className="container"> 
            <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Fmadhyapradesh%2Fmadhyapradesh-rabi&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model00000189ee5fa43d_00000003" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
            <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Fmadhyapradesh%2Fmadhyapradesh-kharif&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model00000189ee5dad3f_00000003" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
        </div>
        <div className="container">
        <div class="dropdown">
          <button class="button button1">Cost of production of various crops by year</button>
            <div class="dropdown-content">
              <p>
              crop SugarCane has the lowest total 2017-18 at 146.0, followed by Maize at 800.0.</p>
              <p>crop Soya Bean and copra have the highest total 2017-18 at 0.0.</p>
              <p>Across all crops, the average of 2017-18 is over 2500.</p>
              <p>Production is low for SugarCane, Paddy, Maize, Jowar.</p>
              <p>There is constant increase in the cost of production for Moong, Groundnut.
              </p>
            </div>
        </div>
        <div class="dropdown">
          <button class="button button1">Employers in agriculture</button>
            <div class="dropdown-content">
              <p>Total / Urban / Rural Total has the highest values of both Female Cultivators (Main and Marginal) and Agricultural Labour (Main and Marginal).</p>
              <p>Total / Urban / Rural Total has the highest values of both Male Cultivators (Main and Marginal) and Agricultural Labour (Main and Marginal).</p>
              <p>Total / Urban / Rural Total has the highest values of both Female Agricultural Labour (Main and Marginal) and Cultivators (Main and Marginal).</p>
            </div>
        </div>
        </div>
        <div className="container">
            <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2FAndhra-Pradesh%2Fap-crop-cost&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
            <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Fmadhyapradesh%2Fmp-agri-labor&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model0000018a0311f2cf_00000001" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
        </div>
        <div className="container">
        <div class="dropdown">
          <button class="button button1">Land in use</button>
            <div class="dropdown-content">
              <p>
              year 2019 has the lowest total Cropping intensity at 120.6.</p>
              <p>year 2020 has the highest total Cropping intensity at 123.9.</p>
              <p>From 2019 to 2020, Cropping intensity increased by 3%.
              </p>
            </div>
        </div>
        <div class="dropdown">
          <button class="button button1">Area under micro irrigation</button>
            <div class="dropdown-content">
              <p>
              Area under drip irrigation is more than area under sprinkler</p>
              <p>Area under drip irrigation is 357328 acres.</p>
              <p>Area under sprinkler irrigation is 301497 acres.
              </p>
            </div>
        </div>
        </div>
        <div className="container">
            <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2FAndhra-Pradesh%2FAP-land-in-use&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model00000189f42a8ffe_00000003" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
            <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Fmadhyapradesh%2Fmp-drip&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model0000018a0318687c_00000000" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
        </div>
        <div className="container">
        <div class="dropdown">
          <button class="button button1">Insights of production of horticulture</button>
            <div class="dropdown-content">
              <p>
              Vegetables are more produced followed by Fruits and plantation
              </p>
            </div>
        </div>
        <div class="dropdown">
          <button class="button button1">Insights of production of milk, meat, wool, egg, fish by year</button>
            <div class="dropdown-content">
              <p>Type 2021-2022 has the highest Total fish but is ranked #8 in Total egg.</p>
              <p>Type 2020-2021 has the highest Total egg but is ranked #2 in Total fish.</p>
              <p>Across all types, the sum of egg is over 134 thousand.</p>
              
            </div>
        </div>
        </div>
        <div className="container">
            <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Fmadhyapradesh%2Fmp-horticulture&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model0000018a032108a5_00000000" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
            <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Fmadhyapradesh%2Fmp-mm&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model0000018a032aaa5c_00000000" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
        </div>
        <div className="container">
        <div class="dropdown">
          <button class="button button1">Insights on yield of major producing crops by year</button>
            <div class="dropdown-content">
              <p>
              <p>Over all crops, the average of Bhajra is nearly two thousand.</p>
              <p>Across all crops, the average of grams is over a thousand.</p>
              <p>Over all crops, the average of groundnut is almost 1500.</p>
              </p>
            </div>
        </div>
        <div class="dropdown">
          <button class="button button1">Storage capacity by year</button>
            <div class="dropdown-content">
               <p>The average storage capacity of madhyaPradesh is 129.66 metric tonnes.</p>
              
            </div>
        </div>
        </div>
        <div className="container">
        <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Fmadhyapradesh%2Fmp-rjc&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model0000018a03282378_00000002" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
        <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Fmadhyapradesh%2Fmp-storagr-capacity&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model0000018a03238d55_00000002" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
        </div>
       </div> 
    
    );
}

export default madhyaPradesh;