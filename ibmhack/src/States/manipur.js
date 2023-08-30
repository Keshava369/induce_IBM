import React from "react";
import './CardPage.css';
import SimpleImageSlider from "react-simple-image-slider";



function manipur () {
  const images = [
    { url: "images/manipur/chilli.jpeg" },
    { url: "images/manipur/cotton.jpeg" },
    { url: "images/manipur/oilseeds.jpg" },
    { url: "images/manipur/potato.jpg" },
    { url: "images/manipur/maize.jpg" },
    { url: "images/manipur/sugarcane.jpg" },
    
  ];

    return(
    <div>
        <div className="container">
        <div class="dropdown">
          <button class="button button1">Manipur</button>
            <div class="dropdown-content">
                 <p>Agriculture is the main occupation of the people of Manipur. Agriculture sector contributes a major share to the total state domestic product and provides employment to about 22.13 percent (according to 2011 census) of the total workers in Manipur.</p>
                 <p> Out of the total geographical area of the state, only 7.41 percent is used for cultivation. Of this total cultivated area, 52% is confined to the valley</p>
                 <p>There are 18 (eighteen) main crops which are cultivated during the two seasons in the state. Rice cultivation dominates all others crops. </p>
            </div>
        </div>
        <div class="dropdown">
          <button class="button button1">Major Producing Crops in Manipur</button>
        </div>
        </div>
        <div className="container">
             <img src="images/manipur/manipur.jpg"></img>
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
              <p>Production and Area diverged the most when Crop is Banana, and when Production was over 466 thousand higher than the Area.</p>
              <p>Area and Production diverged the most when Crop is Dry chillies, and when Area was almost 36 thousand higher than the Production.</p>
              <p>Area is unusually high when Crop is Dry chillies.</p>
              <p>Production and Area diverged the most when Crop is Pineapple, and when Production was over 134 thousand higher than the Area.</p>
              <p>Production and Area diverged the most when Crop is Rice, and when Production was over 2.2 million higher than the Area.</p>
              
            </div>
        </div>
        <div class="dropdown">
          <button class="button button1">Gross Value Added by year from Agriculture</button>
            <div class="dropdown-content">
              <p>2021-22* NA has the highest values of both 2012-13 and 2011-12.</p>
            </div>
        </div>
        </div>
        <div className="container"> 
        <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Fmanipur%2Fmanipur-cpa&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model00000189ee809160_00000000" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
        <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Fmanipur%2Fmanipur-gross-value&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model0000018a03c99f1d_00000002" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
        </div>
        <div className="container">
        <div class="dropdown">
          <button class="button button1">Production by Crop in Rabi</button>
            <div class="dropdown-content">
              <p>Production is unusually high when Crop is Banana.</p>
              <p>From 2002 to 2003, Rapeseed &Mustard's Production dropped by 99%.</p>
              <p>Over all crops and seasons, the sum of Production is nearly nineteen thousand..</p>
              <p>The average value of production is 2101</p>
            </div>
        </div>
        <div class="dropdown">
          <button class="button button1">Production by Crop in Kharif</button>
            <div class="dropdown-content">
              <p>Production is unusually high when Crop is Rice.</p>
              <p>It is projected that by 2010, Rice will exceed Maize in Production by almost 518 thousand.</p>
              <p>From 1997 to 1999, Rice's Production increased by 104,779%.</p>
              <p>The average value of production is 256,664.</p>
            </div>
        </div>
        </div>
        <div className="container"> 
                    <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Fmanipur%2Fmanipur-rabi&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model00000189ee7d4583_00000002" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
                    <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Fmanipur%2Fmanipur-kharif&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model00000189ee7d4c2d_00000002" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
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
              <p>Agricultural Labors are less than cultivators.</p>
              <p>Male cultivators are more than female cultivators.</p>
              <p>Female Agricultural Labour are more than male Agricultural Labour</p>
            </div>
        </div>
        </div>
        <div className="container">
            <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2FAndhra-Pradesh%2Fap-crop-cost&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
            <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Fmanipur%2Fmanipur-agri-labor&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model0000018a03bfee81_00000002" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
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
              <p>Area under drip irrigation is less than area under sprinklers</p>
              <p>Area under drip irrigation is 358 acres.</p>
              <p>Area under sprinkler irrigation is 9933 acres.
              </p>
            </div>
        </div>
        </div>
        <div className="container">
            <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2FAndhra-Pradesh%2FAP-land-in-use&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model00000189f42a8ffe_00000003" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
            <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Fmanipur%2Fmanipur-drip&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model0000018a03c4bd3b_00000000" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
        </div>
        <div className="container">
        <div class="dropdown">
          <button class="button button1">Insights of production of horticulture</button>
            <div class="dropdown-content">
              <p>The overall number of results in Fruits is higher than the Vegetables followed by others</p>
              <p>The overall number of results for Spices is 66.48 .</p>
            </div>
        </div>
        <div class="dropdown">
          <button class="button button1">Insights of production of milk, meat, wool, egg, fish by year</button>
            <div class="dropdown-content">
              <p>Type 2014-2015 has the highest values of both wool and meat. Over all types, the sum of wool is 0.</p>
              <p>Type 2019-2020 has the highest Total meat but is ranked #3 in Total fish.Over all types, the sum of meat is 194.</p>
              <p>Type 2019-2020 has the highest Total milk but is ranked #3 in Total fish.Over all types, the sum of milk is 569.</p>
              <p>Type 2020-2021 has the highest Total fish but is ranked #1 in Total meat.</p>
              <p>Over all types, the sum of fish is 0.98.</p>
              <p>Type 2019-2020 has the highest Total milk but is ranked #3 in Total egg.Over all types, the sum of egg is nearly 7500.</p>              
              
              
            </div>
        </div>
        </div>
        <div className="container">
        <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Fmanipur%2Fmanipur-horticulture&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model0000018a03df7f11_00000003" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
        <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Fmanipur%2Fmanipur-mm&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model0000018a03ed6857_00000000" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
        </div>
        <div className="container">
        <div class="dropdown">
          <button class="button button1">Insights on yield of major producing crops by year</button>
            <div class="dropdown-content">
              
              <p>The total number of results for maize, across all crops, is 16.</p>
              <p>The total number of results for oilseeds, across all crops, is 16.</p>
              <p>The total number of results for pulses, across all crops, is 16.</p>
              <p>The total number of results for rapseed & mustard, across all crops, is 16.</p>
              
              <p>The total number of results for rice, across all crops, is 16.</p>
              <p>The total number of results for soyabean, across all crops, is 16.</p>
            </div>
        </div>
        <div class="dropdown">
          <button class="button button1">Storage capacity by year</button>
            <div class="dropdown-content">
              <p>
              The average storage capacity of manipur is 0.374 metric tonnes.
              </p>
            </div>
        </div>
        </div>
        <div className="container">
        <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Fmanipur%2Fmanipur-rjc&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model0000018a2730cd61_00000008" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
        <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Fmanipur%2Fmanipur-storage-capacity&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model0000018a03e93f80_00000002" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
        </div>
        
    </div>
    );
}

export default manipur;
