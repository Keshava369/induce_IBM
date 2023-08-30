import React from "react";
import './CardPage.css';
import SimpleImageSlider from "react-simple-image-slider";



function punjab () {
  const images = [
    { url: "images/punjab/rice.jpg" },
    { url: "images/punjab/bajra.jpg" },
    { url: "images/punjab/cotton.jpeg" },
    { url: "images/punjab/oilseeds.jpg" },
    { url: "images/punjab/maize.jpg" },
    { url: "images/punjab/sugarcane.jpg" },
    { url: "images/punjab/wheat.jpg" },
  ];

    return(
    <div>
        <div className="container">
        <div class="dropdown">
          <button class="button button1">Punjab</button>
            <div class="dropdown-content">
                 <p>The Punjab state has total geographical area of 5.03 million hectares out of which 4.20 million hectare is under cultivation(about 83%). The cropping intensity of Punjab is 189%. Agriculture is a way of life.</p>
                 <p>More than 65% of its population depends directly on agriculture. It has shaped the thought, outlook, culture and economic life of our people and will continue to control all strategies for planning socio-economic development of the state in future also.</p>
                 <p> The state has achieved the prestigious Krishi Karman Award for year 2010-11 by record production of 278.67 lac tons of food grain crops. Inspite of minimal rains during Kharif 2011, the state has produced 157.34 lakh tons of paddy out of which 120 lakh tons of paddy was bought in markets of the state.</p>
            </div>
        </div>
        <div class="dropdown">
          <button class="button button1">Major Producing Crops in Punjab</button>
        </div>
        </div>
        <div className="container">
             <img src="images/punjab/punjab.png"></img>
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
              <p>Crop Cotton(lint) has the highest values of both Area and Production.</p>
              <p>Production and Area diverged the most when Crop is Cotton(lint), and when Production was nearly twenty million higher than the Area.</p>
              <p>Area is unusually high when Crop is Cotton(lint).</p>
              <p>Production and Area diverged the most when Crop is Wheat, and when Production was nearly 215 million higher than the Area</p>
              <p>Area is unusually high when Crop is Wheat and Rice.</p>
              
            </div>
        </div>
        <div class="dropdown">
          <button class="button button1">Gross Value Added by year from Agriculture</button>
            <div class="dropdown-content">
              <p>2021-22* 15625705 has the highest values of both 2012-13 and 2011-12.</p>
            </div>
        </div>
        </div>
        <div className="container"> 
          <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Fpunjab%2Fpunjab-cpa&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model00000189ed647a52_00000003" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
          <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Fpunjab%2Fpunjab-gross-value&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model0000018a0837de1b_00000001" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe> 
        </div>
        <div className="container">
        <div class="dropdown">
          <button class="button button1">Production by Crop in Rabi</button>
            <div class="dropdown-content">
              <p>Production is unusually high when Crop is Wheat.</p>
              <p>Production is unusually high when the combination of Crop and Season is Wheat and Rabi.</p>
              <p>It is projected that by 2018, Wheat will exceed Gram in Production by over seventeen million.</p>
            </div>
        </div>
        <div class="dropdown">
          <button class="button button1">Production by Crop in Kharif</button>
            <div class="dropdown-content">
              <p>Production is unusually high when Crop is Rice.</p>
              <p>Production is unusually high when the combination of Crop and Season is Rice and Kharif..</p>
              <p>It is projected that by 2018, Rice will exceed Maize in Production by almost twelve million.</p>
              <p>The average value of production is 16,695,136</p>
            </div>
        </div>
        </div>
        <div className="container"> 
        <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Fpunjab%2Fpunjab-rabi&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model00000189ed68cf02_00000001" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
                  <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Fpunjab%2Fpunjab-kharif&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model00000189ed68f4f5_00000004" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>    
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
              <p>Total / Urban / Rural Total has the highest values of both Agricultural Labour (Main and Marginal) and Cultivators (Main and Marginal).</p>
              <p>Total / Urban / Rural has the highest values of both Male Cultivators (Main and Marginal) and Agricultural Labour (Main and Marginal).</p>
              <p>Total / Urban / Rural has the highest values of both Female Cultivators (Main and Marginal) and Cultivators (Main and Marginal).</p>
              <p>Agricultural Labors are more than cultivators.</p>
              <p>Male cultivators are more than female cultivators.</p>
              <p>Female Agricultural Labour are less than male Agricultural Labour</p>
            </div>
        </div>
        </div>
        <div className="container">
            <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2FAndhra-Pradesh%2Fap-crop-cost&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
            <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Fpunjab%2Fpunjab-agri-labor&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model0000018a08359248_00000001" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
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
              <p>Area under drip irrigation is more than area under sprinklers</p>
              <p>Area under drip irrigation is 37682 acres.</p>
              <p>Area under sprinkler irrigation is 16508 acres.
              </p>
            </div>
        </div>
        </div>
        <div className="container">
            <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2FAndhra-Pradesh%2FAP-land-in-use&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model00000189f42a8ffe_00000003" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
            <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Fpunjab%2Fpunjab-drip&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model0000018a082b8a8f_00000003" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
        </div>
        <div className="container">
        <div class="dropdown">
          <button class="button button1">Insights of production of horticulture</button>
            <div class="dropdown-content">
              <p>The overall number of results in Vegetables is higher than the Fruits followed by others</p>
              <p>The overall number of results for Spices is 112.47 .</p>
            </div>
        </div>
        <div class="dropdown">
          <button class="button button1">Insights of production of milk, meat, wool, egg, fish by year</button>
            <div class="dropdown-content">
              <p>Type 2018-2019 has the highest Total wool but is ranked #4 in Total fish. Over all types, the sum of wool is almost 3500</p>
              <p>Type 2018-2019 has the highest Total wool but is ranked #6 in Total meat.Type 2017-2018 has the highest Total meat but is ranked #3 in Total wool.</p>
              <p>Type 2020-2021 has the highest Total milk but is ranked #2 in Total fish. Over all types, the sum of milk is nearly 84 thousand.</p>
              <p>Type 2018-2019 has the highest Total wool but is ranked #4 in Total fish.</p>
              <p>Over all types, the sum of fish is 5.06.</p>
              <p>Type 2021-2022 has the highest Total fish but is ranked #8 in Total egg.</p>
              <p>Type 2020-2021 has the highest Total egg but is ranked #2 in Total fish. Over all types, the sum of egg is nearly 356 thousand.</p>              
              
              
            </div>
        </div>
        </div>
        <div className="container">
            <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Fpunjab%2Fpunjab-horticulture&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model0000018a082e1b3b_00000002" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
            <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Fpunjab%2Fpunjab-mm&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model0000018a083bbcf5_00000000" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
        </div>
        <div className="container">
        <div class="dropdown">
          <button class="button button1">Insights on yield of major producing crops by year</button>
            <div class="dropdown-content">
              
              <p>Over all crops, the average of bhajra is 770.</p>
              <p>Across all crops, the average of groundnut is over 1500.</p>
              <p>Across all crops, the average of maize is over 3500.</p>
             
            </div>
        </div>
        <div class="dropdown">
          <button class="button button1">Storage capacity by year</button>
            <div class="dropdown-content">
              <p>
              The average storage capacity of Punjab is 213.51 metric tonnes.
              </p>
            </div>
        </div>
        </div>
        <div className="container">
          <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Fpunjab%2Fpunjab-rjc&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model0000018a083bc3db_00000003" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe> 
          <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Fpunjab%2Fpunjab-storage-capacity&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model0000018a0839de1c_00000002" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
        </div>
        
    </div>
    );
}

export default punjab;