import React from "react";
import './CardPage.css';
import SimpleImageSlider from "react-simple-image-slider";



function westbengal () {
  const images = [
    { url: "images/westbengal/wheat.jpg" },
    { url: "images/westbengal/coconut.jpeg" },
    { url: "images/westbengal/maize.jpg" },
    { url: "images/westbengal/rice.jpg" },
    { url: "images/westbengal/oilseeds.jpg" },
    { url: "images/westbengal/pulses.jpg" },
  ];

    return(
    <div>
        <div className="container">
        <div class="dropdown">
          <button class="button button1">West Bengal</button>
            <div class="dropdown-content">
              <p>West Bengal, a state in eastern India , is highly dependent on agriculture. Agriculture is the chief occupation of the people of the state. Majority of the state population are cultivators and agricultural labours.</p>
                 Rice is considered to be the principal food crop of West Bengal .
                <p> Other major food crops include maize, pulses, oil seeds, wheat, barley, potatoes and vegetables.
                 The state supplies nearly 66% of the jute requirements of India .</p>
            </div>
        </div>
        <div class="dropdown">
          <button class="button button1">Major Producing Crops in West Bengal</button>
        </div>
        </div>
        <div className="container">
             <img src="images/westbengal/westbengal.jpg"></img>
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
              <p>It is projected that by 2018, Dry chillies will exceed Arecanut in Area by almost 22 thousand.</p>
              <p>Production and Area diverged the most when Crop is Coconut, and when Production was nearly 718 million higher than the Area.</p>
              <p>Area is unusually high when Crop is Wheat.</p>
              <p>Sugarcane Production at nearly 28 million is 99% higher than the Area of nearly 331 thousand.</p>
              <p>Production and Area diverged the most when Crop is Jute, and when Production was over 137 million higher than the Area.</p>
            </div>
        </div>
        <div class="dropdown">
          <button class="button button1">Gross Value Added by year from Agriculture</button>
            <div class="dropdown-content">
              <p>2021-22* NA has the highest values of both 2013-14 and 2011-12.</p>
              <p>NA 2013-14 at nearly seventeen million is 29% higher than the 2011-12 of almost twelve million.</p>
            </div>
        </div>
        </div>
        <div className="container"> 
          <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&pathRef=.my_folders%2Fwestbengal%2Fwestbengal-cpa&action=view&mode=dashboard&subView=model00000189edca85c4_00000000" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>  
          <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&pathRef=.my_folders%2Fwestbengal%2Fwestbengal-gross-value&action=view&mode=dashboard&subView=model0000018a094cb871_00000000" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>      
        </div>
        <div className="container">
        <div class="dropdown">
          <button class="button button1">Production by Crop in Rabi</button>
            <div class="dropdown-content">
              <p>Production is unusually high when Crop is Potato, Oilseeds total and Wheat.</p>
              <p>It is projected that by 2018, Wheat will exceed Masoor in Production by over 870 thousand.</p>
              <p>From 2013 to 2014, Potato's Production increased by 54%.</p>
              
            </div>
        </div>
        <div class="dropdown">
          <button class="button button1">Production by Crop in Kharif</button>
            <div class="dropdown-content">
              <p>Production is unusually high when Crop is Jute.</p>
              <p>It is projected that by 2018, Jute will exceed Mesta in Production by over 8.9 million</p>
              <p>From 2008 to 2009, Jute's Production increased by 18%.</p>
              
            </div>
        </div>
        </div>
        <div className="container"> 
            <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&pathRef=.my_folders%2Fwestbengal%2Fwestbengal-rabi&action=view&mode=dashboard&subView=model00000189edd20072_00000000" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>            
            <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&pathRef=.my_folders%2Fwestbengal%2Fwestbengal-kharif&action=view&mode=dashboard&subView=model00000189edcda641_00000002" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>           
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
            <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&pathRef=.my_folders%2Fwestbengal%2Fwestbengal-agri-labor&action=view&mode=dashboard&subView=model0000018a094a4ac4_00000001" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
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
              <p>Area under drip irrigation is 10437 acres.</p>
              <p>Area under sprinkler irrigation is 107259 acres.
              </p>
            </div>
        </div>
        </div>
        <div className="container">
            <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2FAndhra-Pradesh%2FAP-land-in-use&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model00000189f42a8ffe_00000003" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
            <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&pathRef=.my_folders%2Fwestbengal%2Fwestbengal-drip&action=view&mode=dashboard&subView=model0000018a094a42ab_00000003" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
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
              <p>
              Type 2021-2022 has the highest Total fish but is ranked #8 in Total wool.</p>
              <p>Type 2020-2021 has the highest Total wool but is ranked #2 in Total fish.</p>
              <p>Over all types, the sum of wool is nearly 5500.</p>
              <p>Type 2020-2021 has the highest Total egg but is ranked #2 in Total fish.</p>
              <p>Over all types, the sum of egg is nearly 539 thousand.</p>
              <p>Across all types, the sum of meat is over 5500.</p>
              <p>Type 2020-2021 has the highest Total meat but is ranked #2 in Total fish.</p>
              <p>Type 2020-2021 has the highest Total milk but is ranked #2 in Total fish.</p>
              <p>Across all types, the sum of milk is over 38 thousand.</p>
              <p>Type 2021-2022 has the highest total fish at 18.43, followed by 2020-2021 at 18.24.</p>
              <p>Over all types, the sum of fish is 54.49.
              </p>
            </div>
        </div>
        </div>
        <div className="container">
            <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&pathRef=.my_folders%2Fwestbengal%2Fwestbengal-horticulture&action=view&mode=dashboard&subView=model0000018a094e18d6_00000000" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
            <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&pathRef=.my_folders%2Fwestbengal%2Fwestbengal-mm&action=view&mode=dashboard&subView=model0000018a09510d71_00000003" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
        </div>
        <div className="container">
        <div class="dropdown">
          <button class="button button1">Insights on yield of major producing crops by year</button>
            <div class="dropdown-content">
              <p>Over all crops, the average of bhajra is 279.9.</p>
              <p>Across all crops, the average of grams is over a thousand. </p>
              <p>Across all crops, the average of groundnut is over two thousand. </p>
            </div>
        </div>
        <div class="dropdown">
          <button class="button button1">Storage capacity by year</button>
            <div class="dropdown-content">
              <p>
              The average storage capacity of westbengal is 15.33 metric tonnes.
              </p>
            </div>
        </div>
        </div>
        <div className="container">
        <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&pathRef=.my_folders%2Fwestbengal%2Fwestbengal-rjc&action=view&mode=dashboard&subView=model0000018a09511488_00000002" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>            
        <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&pathRef=.my_folders%2Fwestbengal%2Fwestbengal-storage-capacity&action=view&mode=dashboard&subView=model0000018a094e5071_00000004" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
        </div>
        
    </div>
    );
}

export default westbengal;