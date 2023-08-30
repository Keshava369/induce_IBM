import React from "react";
import './CardPage.css';
import SimpleImageSlider from "react-simple-image-slider";



function uttarpradesh () {
  const images = [
    { url: "images/uttarpradesh/paddy.jpg" },
    { url: "images/uttarpradesh/Millets.jpg" },
    { url: "images/uttarpradesh/maize.jpg" },
    { url: "images/uttarpradesh/rice.jpg" },
    { url: "images/uttarpradesh/potato.jpg" },
    
    { url: "images/uttarpradesh/bajra.jpg" },
  ];

    return(
    <div>
        <div className="container">
        <div class="dropdown">
          <button class="button button1">Uttarpradesh</button>
            <div class="dropdown-content">
              <p>Uttar Pradesh agriculture data shows that UP itself shares 16.83% of the share of total milk production in the country.</p>
                 <p>During the 2017-18 Uttar Pradesh became the largest producer of vegetables in the country with a number of 28,226 thousand tonnes.</p>
                <p> Total Foodgrain production according to agriculture data is 49,144 thousand tonnes. It is also equal to the country’s total grain percentage of 17.83. </p>
            </div>
        </div>
        <div class="dropdown">
          <button class="button button1">Major Producing Crops in UttarPradesh</button>
        </div>
        </div>
        <div className="container">
             <img src="images/uttarpradesh/uttarpradesh.jpg"></img>
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
              <p>Crop Bajra has the highest values of both Area and Production.</p>
              <p>Production and Area diverged the most when Crop is Maize, and when Production was almost 7.4 million higher than the Area.</p>
              <p>Area is unusually high when Crop is Maize and Gram.</p>
              <p>Production and Area diverged the most when Crop is Potato, and when Production was over 183 million higher than the Area.</p>
              <p>Crop Rice has the highest values of both Area and Production.</p>
            </div>
        </div>
        <div class="dropdown">
          <button class="button button1">Gross Value Added by year from Agriculture</button>
            <div class="dropdown-content">
              <p>2021-22* 43803431 has the highest values of both 2012-13 and 2011-12.</p>
              <p></p>
            </div>
        </div>
        </div>
        <div className="container"> 
          <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&pathRef=.my_folders%2Futtarpradesh%2Futtarpradesh-cpa&action=view&mode=dashboard&subView=model00000189ea947e79_00000000" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>  
          <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&pathRef=.my_folders%2Futtarpradesh%2Fup-gross-value&action=view&mode=dashboard&subView=model0000018a0908bde1_00000001" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>      
        </div>
        <div className="container">
        <div class="dropdown">
          <button class="button button1">Production by Crop in Rabi</button>
            <div class="dropdown-content">
              <p>Production is unusually high when Crop is Wheat.</p>
              <p>It is projected that by 2018, Wheat will exceed Rapeseed &Mustard in Production by over 27 million.</p>
              <p>From 2013 to 2014, Wheat's Production dropped by 36%.</p>
              <p>The average value of production is 32,397,179</p>
            </div>
        </div>
        <div class="dropdown">
          <button class="button button1">Production by Crop in Kharif</button>
            <div class="dropdown-content">
              <p>Production is unusually high when Crop is Sugarcane.</p>
              <p>It is projected that by 2018, Rice will exceed Bajra in Production by over eleven million.</p>
              <p>From 2007 to 2008, Sugarcane's Production dropped by 13%.</p>
              
            </div>
        </div>
        </div>
        <div className="container"> 
            <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&pathRef=.my_folders%2Futtarpradesh%2Futtarpradesh-rabi&action=view&mode=dashboard&subView=model00000189ea936bd7_00000002" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>            
            <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&pathRef=.my_folders%2Futtarpradesh%2Futtarpradesh-kharif&action=view&mode=dashboard&subView=model00000189ea99a1b5_00000002" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>           
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
              <p>
              Total / Urban / Rural Total has the highest values of both Agricultural Labour (Main and Marginal) and Cultivators (Main and Marginal).</p>
              <p>Total / Urban / Rural Total has the highest values of both Female Cultivators (Main and Marginal) and Agricultural Labour (Main and Marginal).</p>
              <p>Total / Urban / Rural Total has the highest values of both Male Cultivators (Main and Marginal) and Agricultural Labour (Main and Marginal).</p>
              
            </div>
        </div>
        </div>
        <div className="container">
            <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2FAndhra-Pradesh%2Fap-crop-cost&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
            <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&pathRef=.my_folders%2Futtarpradesh%2Fup-agri-labor&action=view&mode=dashboard&subView=model0000018a08f200c7_00000002" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
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
              Area under drip irrigation is less than area under sprinklers</p>
              <p>Area under drip irrigation is 57963 acres.</p>
              <p>Area under sprinkler irrigation is 245138 acres.
              </p>
            </div>
        </div>
        </div>
        <div className="container">
            <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2FAndhra-Pradesh%2FAP-land-in-use&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model00000189f42a8ffe_00000003" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
            <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&pathRef=.my_folders%2Futtarpradesh%2Fup-drip&action=view&mode=dashboard&subView=model0000018a0908b9df_00000001" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
        </div>
        <div className="container">
        <div class="dropdown">
          <button class="button button1">Insights of production of horticulture</button>
            <div class="dropdown-content">
              <p>The overall number of results for Aromatics & Medicinal is 30.</p>
              <p>The overall number of results for Fruits and Honey is 30.</p>
            </div>
        </div>
        <div class="dropdown">
          <button class="button button1">Insights of production of milk, meat, wool, egg, fish by year</button>
            <div class="dropdown-content">
              <p>Type 2021-2022 has the highest Total fish but is ranked #8 in Total wool.</p>
              <p>Over all types, the sum of wool is nearly nine thousand.</p>
              <p>Type 2021-2022 has the highest Total fish but is ranked #8 in Total meat.</p>
              <p>Across all types, the sum of meat is over 8500.</p>
              <p>Type 2019-2020 has the highest Total milk but is ranked #3 in Total fish.</p>
              <p>Across all types, the sum of milk is over 202 thousand.</p>
              <p>Type 2014-2015 and 2015-2016 have the lowest total fish at 0.0.</p>
              <p>Over all types, the sum of fish is 22.54.</p>
              <p>Type 2021-2022 has the highest total fish at 8.09, followed by 2020-2021 at 7.46.</p>
              <p>The average value of milk is 25,269</p>
              <p>The average value of fish is 2.81
              </p>
            </div>
        </div>
        </div>
        <div className="container">
            <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&pathRef=.my_folders%2Futtarpradesh%2Fup-horticulture&action=view&mode=dashboard&subView=model0000018a090cb03d_00000000" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
            <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&pathRef=.my_folders%2Futtarpradesh%2Fup-mm&action=view&mode=dashboard&subView=model0000018a090fdc61_00000002" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
        </div>
        <div className="container">
        <div class="dropdown">
          <button class="button button1">Insights on yield of major producing crops by year</button>
            <div class="dropdown-content">
              
              <p>Over all crops, the average of bhajra is nearly two thousand.</p>
              <p>Across all crops, the average of grams is over a thousand. </p>
              <p>Over all crops, the average of groundnut is 892.1. </p>
              <p>Over all crops, the average of lineseed is 490.1.</p>
              <p>Over all crops, the average of maize is nearly two thousand.</p>
              <p>Over all crops, the average of oilseeds is 885.2.</p>
              <p>Over all crops, the average of pulses is 865.4.</p>
              <p>Across all crops, the average of rapseed & mustard is over a thousand.</p>
              <p>Over all crops, the average of rice is almost 2500.</p>
              <p>Across all crops, the average of sunflower is over 1500.</p>
              <p>Over all crops, the average of soyabean is 822.7.</p>
              <p>Over all crops, the average of tur is 922.2.</p>
              <p>Across all crops, the average of wheat is over three thousand.</p>
              <p>The total number of results for bhajra, across all crops, is 17.</p>
              <p>bhajra ranges from almost 1500, when Crop is 2005-2006, to over two thousand, when Crop is 2020-2021.</p>
              <p>groundnut ranges from 598, when Crop is 2007-2008, to over a thousand, when Crop is 2020-2021.</p>  
              <p>tur ranges from 606, when Crop is 2014-2015, to over a thousand, when Crop is 2021-2022.</p>
              <p>wheat ranges from almost 2500, when Crop is 2014-2015, to over 3500, when Crop is 2020-2021.</p>
              <p>soyabean ranges from 513, when Crop is 2019-2020, to almost 1500, when Crop is 2012-2013.</p>
              <p>rapseed & mustard ranges from 930, when Crop is 2014-2015, to almost 1500, when Crop is 2018-2019.</p>
              <p>maize ranges from almost 1500, when Crop is 2005-2006, to almost 2500, when Crop is 2020-2021.</p>
            </div>
        </div>
        <div class="dropdown">
          <button class="button button1">Storage capacity by year</button>
            <div class="dropdown-content">
              <p>
              The average storage capacity of uttarpradesh is 58.8 metric tonnes.
              </p>
            </div>
        </div>
        </div>
        <div className="container">
        <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&pathRef=.my_folders%2Futtarpradesh%2Fup-rjc&action=view&mode=dashboard&subView=model0000018a09115bfa_00000000" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>            
        <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&pathRef=.my_folders%2Futtarpradesh%2Fup-storage-capacity&action=view&mode=dashboard&subView=model0000018a090d308f_00000003" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
        </div>
        
    </div>
    );
}

export default uttarpradesh;