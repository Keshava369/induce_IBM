import React from "react";
import './CardPage.css';
import SimpleImageSlider from "react-simple-image-slider";



function mizoram () {
  const images = [
    { url: "images/mizoram/cotton.jpeg" },
    
    
    { url: "images/mizoram/rice.jpg" },
    { url: "images/mizoram/maize.jpg" },
    { url: "images/mizoram/sugarcane.jpg" },
    
  ];

    return(
    <div>
        <div className="container">
        <div class="dropdown">
          <button class="button button1">Mizoram</button>
            <div class="dropdown-content">
                 <p>Agriculture is the main source of occupation of the state. About 60 percent of the people of the Mizoram engaged in agricultural activities. The Jhum is the main pattern of cultivation. Maize, rice are the main food crops.</p>
                 <p> Cash crops are sugarcane, tapioca, ginger and cotton. Pigs and fowls are reared by many farmers. Exotic varieties and breeds of pigs and fowls have been introduced and have become popular among the villagers</p>
                 <p>The state has a considerable cultivation of fruit. Orange, Lemon, Kagzi Lime, Passion fruits, Hatkora, Jamir, Pineapple and Papaya are the main horticulture crops. </p>
            </div>
        </div>
        <div class="dropdown">
          <button class="button button1">Major Producing Crops in Mizoram</button>
        </div>
        </div>
        <div className="container">
             <img src="images/mizoram/mizoram.jpg"></img>
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
              <p>Crop Maize has the highest values of both Area and Production.Maize Production at over 196 thousand is 43% higher than the Area of nearly 113 thousand.</p>
              <p>Crop Rice has the highest values of both Area and Production.Rice Production at over 1.1 million is 36% higher than the Area of over 730 thousand.Production and Area diverged the most when Crop is Rice, and when Production was over 408 thousand higher than the Area.
</p>
              <p>Sugarcane Production at over 161 thousand is 91% higher than the Area of almost 15 thousand.</p>
              <p>It is projected that by 2012, Soyabean will exceed Sugarcane in Area by 959.
</p>
              <p>Production and Area diverged the most when Crop is Sugarcane, and when Production was nearly 147 thousand higher than the Area.
</p>
              
            </div>
        </div>
        <div class="dropdown">
          <button class="button button1">Gross Value Added by year from Agriculture</button>
            <div class="dropdown-content">
              <p>2021-22* NA has the highest values of both 2014-15 and 2011-12.</p>
              <p>NA 2014-15 at over 420 thousand is 64% higher than the 2011-12 of over 149 thousand.</p>
            </div>
        </div>
        </div>
        <div className="container"> 
            <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Fmizoram%2Fmizoram-cpa&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model00000189eaa29e4c_00000000" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
            <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Fmizoram%2Fmizoram-gross-value&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model0000018a0810d099_00000000" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
        </div>
        <div className="container">
        <div class="dropdown">
          <button class="button button1">Production by Crop in Rabi</button>
            <div class="dropdown-content">
              <p>Production is unusually high when Crop is Rice and Other Rabi pulses.</p>
              <p>Production is unusually high when the combinations of Crop and Season are Rice and Rabi and Other Rabi pulses and Rabi.</p>
              <p>It is projected that by 2012, Maize will exceed Rapeseed &Mustard in Production by 584.</p>
              <p>The average value of production is 4815</p>
            </div>
        </div>
        <div class="dropdown">
          <button class="button button1">Production by Crop in Kharif</button>
            <div class="dropdown-content">
              <p>Production is unusually high when Crop is Rice and Maize.</p>
              <p>Production is unusually high when the combinations of Crop and Season are Rice and Kharif and Maize and Kharif.</p>
              <p>It is projected that by 2012, Maize will exceed Soyabean in Production by over 16 thousand.</p>
              <p>The average value of production is 59,361</p>
            </div>
        </div>
        </div>
        <div className="container"> 
                    <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Fmizoram%2Fmizoram-rabi&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model00000189eaa94e6b_00000002" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
                    <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Fmizoram%2Fmizoram-kharif&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model00000189eaa91007_00000000" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
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
              <p>Female Agricultural Labour are more than male Agricultural Labour</p>
            </div>
        </div>
        </div>
        <div className="container">
            <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2FAndhra-Pradesh%2Fap-crop-cost&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
            <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Fmizoram%2Fmizoram-agri-labor&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model0000018a08074320_00000002" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
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
              <p>Area under drip irrigation is 5914 acres.</p>
              <p>Area under sprinkler irrigation is 1808 acres.
              </p>
            </div>
        </div>
        </div>
        <div className="container">
            <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2FAndhra-Pradesh%2FAP-land-in-use&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model00000189f42a8ffe_00000003" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
            <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Fmizoram%2Fmizoram-drip&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model0000018a080fb69e_00000002" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
        </div>
        <div className="container">
        <div class="dropdown">
          <button class="button button1">Insights of production of horticulture</button>
            <div class="dropdown-content">
              <p>The overall number of results in Fruits is higher than the Vegetables followed by others</p>
              <p>The overall number of results for Spices is 100 .</p>
            </div>
        </div>
        <div class="dropdown">
          <button class="button button1">Insights of production of milk, meat, wool, egg, fish by year</button>
            <div class="dropdown-content">
              <p>Type 2014-2015 has the highest values of both wool and meat. Over all types, the sum of wool is 0.</p>
              <p>Type 2018-2019 has the highest Total milk but is ranked #1 in Total meat.</p>
              <p>2018-2019 milk at 26 is 38% higher than the meat of 16.</p>
              <p>Type 2018-2019 has the highest Total milk but is ranked #1 in Total meat.</p>
              <p>Over all types, the sum of fish is 0.17.</p>
              <p>Type 2020-2021 has the highest Total egg but is ranked #4 in Total meat.</p>
              <p>Over all types, the sum of egg is nearly three thousand.</p>              
              
              
            </div>
        </div>
        </div>
        <div className="container">
            <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Fmizoram%2Fmizoram-horticulture&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model0000018a0812c708_00000002" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
            <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Fmizoram%2Fmizoram-mm&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model0000018a08167c36_00000001" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
        </div>
        <div className="container">
        <div class="dropdown">
          <button class="button button1">Insights on yield of major producing crops by year</button>
            <div class="dropdown-content">
              
              <p>Over all crops, the average of maize is almost 1500.</p>
              <p>Over all crops, the average of oilseeds is 972.3.</p>
              <p>Across all crops, the average of pulses is over a thousand.
</p>
             
            </div>
        </div>
        <div class="dropdown">
          <button class="button button1">Storage capacity by year</button>
            <div class="dropdown-content">
              <p>
              The average storage capacity of Mizoram is 0.49 metric tonnes.
              </p>
            </div>
        </div>
        </div>
        <div className="container">
            <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Fmizoram%2Fmizoram-rjc&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model0000018a081412cf_00000002" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
            <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Fmizoram%2Fmizoram-storage-capacity&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model0000018a0814328c_00000002" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
        </div>
        
    </div>
    );
}

export default mizoram;
