import React from "react";
import './CardPage.css';
import SimpleImageSlider from "react-simple-image-slider";



function himachal () {
  const images = [
    { url: "images/himachal/maize.jpg" },
    { url: "images/himachal/paddy.jpg" },
    
    { url: "images/himachal/potato.jpg" },
    { url: "images/himachal/sugarcane.jpg" },
    { url: "images/himachal/swheat.jpg" },
  ];

    return(
    <div>
        <div className="container">
        <div class="dropdown">
          <button class="button button1"> himachal </button>
            <div class="dropdown-content">
              <p>The major crops grown are wheat, maize, paddy, gram, sugarcane, mustard, potato, vegetables, etc.</p>
              <p>Out of the total geographical area of 55.67 lakh hectare the area of operational holdings is about 9.55 lakh hectares and is operated by 9.61lakh farmers. The average land holding size is about 1.00 hectare.</p>
            </div>
        </div>
        <div class="dropdown">
          <button class="button button1">Major Producing Crops in himachal</button>
        </div>
        </div>
        <div className="container">
             <img src="images/himachal/himachal.png"></img>
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
              <p>Crop Barley has the highest values of both Area and Production.</p>
              <p>Production and Area diverged the most when Crop is Dry ginger, and when Production was over 106 thousand higher than the Area.</p>
              <p> Area is unusually high when Crop is Barley.</p>
              <p>Crop Maize has the highest values of both Area and Production.</p>
              <p>Production and Area diverged the most when Crop is Maize, and when Production was over 4.2 million higher than the Area.</p>
              <p>Area is unusually high when Crop is Maize.</p>
              <p>Crop Rice has the highest values of both Area and Production.</p>
              <p>Production and Area diverged the most when Crop is Potato, and when Production was over 1.1 million higher than the Area.</p>
              <p>Area is unusually high when Crop is Rice.</p>
              <p>Crop Wheat has the highest total Area due to Season Rabi.</p>
              <p>Crop Wheat has the highest values of both Area and Production.</p>
              <p>Production and Area diverged the most when Crop is Wheat, and when Production was over 1.7 million higher than the Area.</p>
              <p>Area shows a moderate seasonal trend every 5 years. The largest values typically occur at period 1, whereas the smalest values at period 3.</p>
              <p>Based on the current forecasting, Area may reach nearly 151 thousand by Crop_Year 2016.</p>
              <p></p>


            </div>
        </div>
        <div class="dropdown">
          <button class="button button1">Gross Value Added by year from Agriculture</button>
            <div class="dropdown-content">
              <p>2021-22* 2043689 has the highest values of both 2013-14 and 2011-12.</p>
              <p>2043689 2013-14 at nearly 1.5 million is 22% higher than the 2011-12 of nearly 1.2 million.</p>
            </div>
        </div>
        </div>
        <div className="container"> 
          <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Fhimachal%2Fhimachal-cpa&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model00000189edb944c6_00000000" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
          <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Fhimachal%2Fhimachal-gross-value&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model00000189ff8b370d_00000000" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
        </div>
        <div className="container">
        <div class="dropdown">
          <button class="button button1">Production by Crop in Rabi</button>
            <div class="dropdown-content">
              <p>Production is unusually high when Crop is Wheat.</p>
              
              <p>Production is unusually high when the combination of Crop and Season is Wheat and Rabi.</p>
              <p>It is projected that by 2013, Wheat will exceed Barley in Production by nearly 577 thousand.</p>
              
            </div>
        </div>
        <div class="dropdown">
          <button class="button button1">Production by Crop in Kharif</button>
            <div class="dropdown-content">
              <p>Production is unusually high when Crop is Maize.</p>
              <p>Production is unusually high when the combination of Crop and Season is Maize and Kharif.</p>
              <p>It is projected that by 2013, Maize will exceed Rice in Production by nearly 524 thousand.</p>
            </div>
        </div>
        </div>
        <div className="container"> 
            <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Fhimachal%2Fhimachal-rabi&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model00000189edbad811_00000003" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
            <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Fhimachal%2Fhimachal-kharif&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model00000189edb2b8a1_00000000" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
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
            <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Fhimachal%2Fhimachal-agri-labor&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model00000189ff847b9f_00000002" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
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
              <p>Area under drip irrigation is 7934 acres.</p>
              <p>Area under sprinkler irrigation is 6403 acres.
              </p>
            </div>
        </div>
        </div>
        <div className="container">
            <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2FAndhra-Pradesh%2FAP-land-in-use&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model00000189f42a8ffe_00000003" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
            <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Fhimachal%2Fhimachal-drip&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model00000189ff89c5da_00000002" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
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
              <p>Type 2018-2019 has the highest Total meat but is ranked #4 in Total egg.</p>
              <p>Type 2020-2021 has the highest Total egg but is ranked #3 in Total meat.</p>
              <p>Across all types, the sum of egg is over seven thousand.</p>
              
            </div>
        </div>
        </div>
        <div className="container">
            <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Fhimachal%2Fhimachal-horticulture&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model00000189ff8d9872_00000001" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
            <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Fhimachal%2Fhimachal-mm&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model00000189ff9aa464_00000001" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
        </div>
        <div className="container">
        <div class="dropdown">
          <button class="button button1">Insights on yield of major producing crops by year</button>
            <div class="dropdown-content">
              <p>
              <p>Over all crops, the average of bajra is 603.2.</p>
              <p>Over all crops, the average of grams is 898.9.</p>
              <p>Over all crops, the average of groundnuts is 681.5.</p>
              </p>
            </div>
        </div>
        <div class="dropdown">
          <button class="button button1">Storage capacity by year</button>
            <div class="dropdown-content">
              <p>
              The average storage capacity of himachal is 0.51 metric tonnes.
              </p>
            </div>
        </div>
        </div>
        <div className="container">
        <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Fhimachal%2Fhimachal-rjc&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model00000189ff9b796e_00000001" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
        <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Fhimachal%2Fhimachal-storage-capacity&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model00000189ff8e636b_00000000" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
        </div>
        
    </div>
    );
}

export default himachal;