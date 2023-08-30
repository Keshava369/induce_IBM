import React from "react";
import './CardPage.css';
import SimpleImageSlider from "react-simple-image-slider";



function nagaland () {
  const images = [
    { url: "images/nagaland/potato.jpg" },
    { url: "images/nagaland/pulses.jpg" },
    
    { url: "images/nagaland/rice.jpg" },
    { url: "images/nagaland/maize.jpg" },
    { url: "images/nagaland/sugarcane.jpg" },
    { url: "images/nagaland/millets.jpg" },
  ];

    return(
    <div>
        <div className="container">
        <div class="dropdown">
          <button class="button button1">Nagaland</button>
            <div class="dropdown-content">
                 <p>Nagaland is a hilly State with mountainous terrain richly endowed with natural resources. Predominantly an agrarian State with 70 % of its population engaged and dependent on Agriculture. Traditional Jhum/shifting cultivation is popular in the State due to topographical terrain. Mixed cropping pattern is practiced incorporating cereals, pulses, oilseeds, tuber crops, condiments and spices using local cultivars which are organic in nature.</p>
                 <p>Principal crops are Arums, yams, millet, maize, potatoes and sugarcane. Vegetable crops are melon, cucumbers, spinach leaf, mustard, onion, chillies, carrots, tomatoes, brinjal etc.</p>
                 <p>The main crops are rice, millet, maize and pulses. Cash crops like sugarcane and potato are also becoming popular. Coffee, cardamom and tea are grown as plantation crops in Nagaland. </p>
            </div>
        </div>
        <div class="dropdown">
          <button class="button button1">Major Producing Crops in Nagaland</button>
        </div>
        </div>
        <div className="container">
             <img src="images/nagaland/nagaland.jpg"></img>
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
              <p>Crop Arhar/Tur has the highest values of both Area and Production. Production and Area diverged the most when Crop is Colocosia, and when Production was nearly 45 thousand higher than the Area. Area is unusually high when Crop is Arhar/Tur.</p>
              <p>Crop Jute has the highest values of both Area and Production.Production and Area diverged the most when Crop is Ginger, and when Production was nearly 111 thousand higher than the Area. Area is unusually high when Crop is Jute.</p>
              <p>Crop Maize has the highest values of both Area and Production. Production and Area diverged the most when Crop is Maize, and when Production was over 714 thousand higher than the Area.Area is unusually high when Crop is Maize.</p>
              <p>Crop (no value) has the highest values of both Area and Production.</p>
              <p>The total number of results for Production, across all crops, is 44.</p>
              
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
        <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Fnagaland%2Fnagaland-cpa&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model00000189ed7950cc_00000000" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
            <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Fnagaland%2Fnaga-gross-value&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model0000018a08204129_00000003" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe> 
        </div>
        <div className="container">
        <div class="dropdown">
          <button class="button button1">Production by Crop in Rabi</button>
            <div class="dropdown-content">
              <p>Production is unusually high when Crop is Potato and Rapeseed &Mustard.</p>
              <p>Production is unusually high when the combinations of Crop and Season are Potato and Rabi and Rapeseed &Mustard and Rabi.</p>
              <p>It is projected that by 2018, Rice will exceed Wheat in Production by 240.</p>
              <p>The average value of production is 68,938</p>
            </div>
        </div>
        <div class="dropdown">
          <button class="button button1">Production by Crop in Kharif</button>
            <div class="dropdown-content">
              <p>Production is unusually high when Crop is Rice.</p>
              <p>Production is unusually high when the combination of Crop and Season is Rice and Kharif..</p>
              <p>It is projected that by 2018, Rice will exceed Maize in Production by over 366 thousand.</p>
              <p>The average value of production is 247,413</p>
            </div>
        </div>
        </div>
        <div className="container"> 
                    <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Fnagaland%2Fnagaland-rabi&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model00000189ed7fe3e2_00000000" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
                    <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Fnagaland%2Fnagaland-kharif&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model00000189ed77cbd2_00000002" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
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
              <p>Agricultural Labors are less than cultivators.</p>
              <p>Male cultivators are less than female cultivators.</p>
              <p>Female Agricultural Labour are less than male Agricultural Labour</p>
            </div>
        </div>
        </div>
        <div className="container">
            <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2FAndhra-Pradesh%2Fap-crop-cost&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
            <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Fnagaland%2Fnaga-agri-labor&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model0000018a081dab8f_00000000" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
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
              <p>Area under drip irrigation is 8040 acres.</p>
              <p>Area under sprinkler irrigation is 7277 acres.
              </p>
            </div>
        </div>
        </div>
        <div className="container">
            <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2FAndhra-Pradesh%2FAP-land-in-use&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model00000189f42a8ffe_00000003" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
            <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Fnagaland%2Fnaga-drip&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model0000018a081f2655_00000002" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
        </div>
        <div className="container">
        <div class="dropdown">
          <button class="button button1">Insights of production of horticulture</button>
            <div class="dropdown-content">
              <p>The overall number of results in Vegetables is higher than the Fruits followed by others</p>
              <p>The overall number of results for Spices is 43 .</p>
            </div>
        </div>
        <div class="dropdown">
          <button class="button button1">Insights of production of milk, meat, wool, egg, fish by year</button>
            <div class="dropdown-content">
              <p>Type 2014-2015 has the highest values of both wool and meat. Over all types, the sum of wool is 0.</p>
              <p>Type 2014-2015 has the highest Total meat but is ranked #4 in Total fish. Type 2019-2020 has the highest Total fish but is ranked #3 in Total meat.</p>
              <p>Type 2014-2015 has the highest Total meat but is ranked #3 in Total milk. Over all types, the sum of milk is 497.</p>
              <p>Over all types, the sum of milk is 497.</p>
              <p>Over all types, the sum of fish is 0.27.</p>
              <p>Type 2014-2015 has the highest Total meat but is ranked #7 in Total egg. Type 2015-2016 has the highest Total egg but is ranked #2 in Total meat.</p>
              <p>Over all types, the sum of egg is nearly three thousand.</p>              
              
              
            </div>
        </div>
        </div>
        <div className="container">
            <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Fnagaland%2Fnaga-horticulture&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model0000018a08219fd1_00000001" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
            <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Fnagaland%2Fnaga-mm&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model0000018a0824d21c_00000000" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
        </div>
        <div className="container">
        <div class="dropdown">
          <button class="button button1">Insights on yield of major producing crops by year</button>
            <div class="dropdown-content">
              
              <p>Over all crops, the average of bhajra is 696.8.</p>
              <p>Over all crops, the average of grams is 775.5.</p>
              <p>Over all crops, the average of groundnut is 954.</p>
             
            </div>
        </div>
        <div class="dropdown">
          <button class="button button1">Storage capacity by year</button>
            <div class="dropdown-content">
              <p>
              The average storage capacity of Nagaland is 0.472 metric tonnes.
              </p>
            </div>
        </div>
        </div>
        <div className="container">
            <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Fnagaland%2Fnaga-rjc&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model0000018a0824b662_00000002" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
            <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Fnagaland%2Fnaga-storage-capacity&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model0000018a08239119_00000002" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
        </div>
        
    </div>
    );
}

export default nagaland;
