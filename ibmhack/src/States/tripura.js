import React from "react";
import './CardPage.css';
import SimpleImageSlider from "react-simple-image-slider";



function tripura () {
  const images = [
    { url: "images/tripura/pulses.jpg" },
    { url: "images/tripura/sugarcane.jpg" },
    { url: "images/tripura/maize.jpg" },
    { url: "images/tripura/rice.jpg" },
    { url: "images/tripura/soyabean.jpg" },
    { url: "images/tripura/wheat.jpg" },
    { url: "images/tripura/oilseeds.jpg" },
  ];

    return(
    <div>
        <div className="container">
        <div class="dropdown">
          <button class="button button1">Tripura</button>
            <div class="dropdown-content">
              <p>Tripura, one of the north-eastern states, is bounded on the north, west, south and southeast by Bangladesh, whereas in the east, it shares a common boundary with Assam and Mizoram. The state has favourable climatic conditions for cultivation of various fruit and horticultural crops.</p>
                 <p>It is rich in natural resources such as natural gas, rubber, tea and medicinal plants.Tripura is endowed with rich and diverse bamboo resources..</p>
                <p> .Tripura holds a strong tea plantation base, with around 58 tea gardens. Tea produced in Tripura is famous for its blending qualities.</p>
            </div>
        </div>
        <div class="dropdown">
          <button class="button button1">Major Producing Crops in Tripura</button>
        </div>
        </div>
        <div className="container">
             <img src="images/tripura/tripura.jpg"></img>
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
              <p>Jute & mesta Production at over 112 thousand is 88% higher than the Area of nearly 14 thousand.</p>
              <p>Production and Area diverged the most when Crop is Jute & mesta, and when Production was over 98 thousand higher than the Area.</p>
              <p>Area is unusually high when Crop is Maize.</p>
              <p>Rice Production at nearly 11 million is 60% higher than the Area of almost 4.3 million.</p>
              <p>Production and Area diverged the most when Crop is Rice, and when Production was almost 6.4 million higher than the Area.</p>
            </div>
        </div>
        <div class="dropdown">
          <button class="button button1">Gross Value Added by year from Agriculture</button>
            <div class="dropdown-content">
              <p>2021-22* 2330174 has the highest values of both 2012-13 and 2011-12.</p>
              
            </div>
        </div>
        </div>
        <div className="container"> 
        <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Ftripura%2Ftripura-cpa&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model00000189ea74d7f4_00000000" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
          <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Ftripura%2Ftripura-gross-value&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model0000018a08f4aadf_00000002" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>     
        </div>
        <div className="container">
        <div class="dropdown">
          <button class="button button1">Production by Crop in Rabi</button>
            <div class="dropdown-content">
              <p>Production is unusually high when Crop is Wheat and Rapeseed &Mustard.</p>
              <p>It is projected that by 2018, Other Rabi pulses will exceed Peas & beans (Pulses) in Production by 20.</p>
              <p>Production is unusually high when the combinations of Crop and Season are Wheat and Rabi and Rapeseed &Mustard and Rabi.</p>
              <p>The average value of production is 9340</p>
            </div>
        </div>
        <div class="dropdown">
          <button class="button button1">Production by Crop in Kharif</button>
            <div class="dropdown-content">
              <p>Production is unusually high when Crop is Rice.</p>
              <p>Production is unusually high when the combination of Crop and Season is Rice and Kharif.</p>
              <p>It is projected that by 2018, Rice will exceed Maize in Production is 919,740 thousand.</p>
              <p>The average value of production is 878,104</p>
            </div>
        </div>
        </div>
        <div className="container"> 
          <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Futtarakhand%2Futtarakhand-rabi&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model00000189ea8c677a_00000000" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>            
          <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Ftripura%2Ftripura-kharif&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model00000189ea79285a_00000002" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>           
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
        
        </div>
        <div className="container">
            <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2FAndhra-Pradesh%2Fap-crop-cost&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
            
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
              <p>Area under drip irrigation is 2304 acres.</p>
              <p>Area under sprinkler irrigation is 3204 acres.
              </p>
            </div>
        </div>
        </div>
        <div className="container">
            <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2FAndhra-Pradesh%2FAP-land-in-use&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model00000189f42a8ffe_00000003" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
            <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Ftripura%2Ftripura-drip&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model0000018a08f2f4cb_00000001" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
        </div>
        <div className="container">
        <div class="dropdown">
          <button class="button button1">Insights of production of horticulture</button>
            <div class="dropdown-content">
              <p>The overall number of results in Vegetables is hogher than the Fruits followed by others</p>
              <p>The overall number of results for Spices is 26.7.</p>
            </div>
        </div>
        <div class="dropdown">
          <button class="button button1">Insights of production of milk, meat, wool, egg, fish by year</button>
            <div class="dropdown-content">
              <p>Type 2014-2015 has the highest Total wool but is ranked #4 in Total fish.</p>
              <p>Over all types, the sum of wool is </p>
              <p>Over all types, the sum of egg is nearly eighteen thousand</p>
              <p>egg ranges from 0, when Type is 2021-2022, to over three thousand, when Type is 2020-2021.</p>
              <p>Over all types, the sum of meat is 307</p>
              <p>meat ranges from 0, when Type is 2021-2022, to 52, when Type is 2020-2021.</p>
              <p>Type 2020-2021 has the highest values of both milk and fish.</p>
              <p>milk ranges from 0, when Type is 2021-2022, to 206, when Type is 2020-2021.</p>
              <p>Type 2020-2021 and 2021-2022 have the highest total fish at 0.82.</p>
              <p>Over all types, the sum of fish is 2.42.</p>
              
            </div>
        </div>
        </div>
        <div className="container">
        <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Ftripura%2Ftripura-horticulture&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model0000018a08f76845_00000002" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
        <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Ftripura%2Ftripura-mm&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model0000018a08fa3af9_00000000" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
        </div>
        <div className="container">
        <div class="dropdown">
          <button class="button button1">Insights on yield of major producing crops by year</button>
            <div class="dropdown-content">
              
              <p>Over all crops, the average of grams is 674.9.</p>
              <p>Across all crops, the average of groundnutt is over a thousand.</p>
              <p>Across all crops, the average of maize is over a thousand.</p>
             
            </div>
        </div>
        <div class="dropdown">
          <button class="button button1">Storage capacity by year</button>
            <div class="dropdown-content">
              <p>
              The average storage capacity of tripura is 0.45 metric tonnes.
              </p>
            </div>
        </div>
        </div>
        <div className="container">
        <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Ftripura%2Ftripura-rjc&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model0000018a08fa05f6_00000002" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>            
        <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Ftripura%2Ftripura-storage-capacity&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model0000018a08f721fc_00000002" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
        </div>
        
    </div>
    );
}

export default tripura;