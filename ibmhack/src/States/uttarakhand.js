import React from "react";
import './CardPage.css';
import SimpleImageSlider from "react-simple-image-slider";



function uttarakhand () {
  const images = [
    { url: "images/uttarakhand/pulses.jpg" },
    { url: "images/uttarakhand/potato.jpg" },
    { url: "images/uttarakhand/maize.jpg" },
    { url: "images/uttarakhand/rice.jpg" },
    { url: "images/uttarakhand/soyabean.jpg" },
    { url: "images/uttarakhand/wheat.jpg" },
    { url: "images/uttarakhand/bajra.jpg" },
  ];

    return(
    <div>
        <div className="container">
        <div class="dropdown">
          <button class="button button1">Uttarakhand</button>
            <div class="dropdown-content">
              <p>Agriculture is a significant contributor to Uttarakhand’s Gross State Domestic Product (11% in 2011-12). It is the chief source of livelihood for over 70% of its population.</p>
                 <p>Commercial agriculture is practiced in the plains and the hill farmers are predominantly engaged in subsistence farming. Major crops grown in the state are rice, wheat, sugarcane, maize, soybean, pulses, oilseeds and a number of fruits and vegetables.</p>
                <p> Uttarakhand has four agro-climatic zones covering six altitudinal farming approaches, which means there is potential to grow a wide variety of crops within the State.  </p>
            </div>
        </div>
        <div class="dropdown">
          <button class="button button1">Major Producing Crops in UttarPradesh</button>
        </div>
        </div>
        <div className="container">
             <img src="images/uttarakhand/uttarakhand.jpg"></img>
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
              <p>Barley Production at over 391 thousand is 11% higher than the Area of over 346 thousand.</p>
              <p>Production and Area diverged the most when Crop is Dry ginger, and when Production was over 177 thousand higher than the Area.</p>
              <p>Maize Production at over 607 thousand is 31% higher than the Area of over 421 thousand.</p>
              <p>Rice Production at nearly 9.2 million is 52% higher than the Area of over 4.4 million.</p>
              <p>It is projected that by 2017, Wheat will exceed Sugarcane in Area by nearly 213 thousand.</p>
            </div>
        </div>
        <div class="dropdown">
          <button class="button button1">Gross Value Added by year from Agriculture</button>
            <div class="dropdown-content">
              <p>2021-22* 2596337 has the highest values of both 2013-14 and 2011-12.</p>
              <p>2596337 2013-14 at nearly 1.6 million is 16% higher than the 2011-12 of over 1.3 million.</p>
            </div>
        </div>
        </div>
        <div className="container"> 
          <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&pathRef=.my_folders%2Futtarakhand%2Futtarakhand-cpa&action=view&mode=dashboard&subView=model00000189ea84b44d_00000000" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>  
          <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&pathRef=.my_folders%2Futtarakhand%2Futtarakhand-gross-value&action=view&mode=dashboard&subView=model0000018a0918bf87_00000000" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>      
        </div>
        <div className="container">
        <div class="dropdown">
          <button class="button button1">Production by Crop in Rabi</button>
            <div class="dropdown-content">
              <p>Production is unusually high when Crop is Wheat.</p>
              <p>It is projected that by 2017, Wheat will exceed Barley in Production by nearly 397 thousand.</p>
              <p>From 2013 to 2014, Wheat's Production dropped by 22%.</p>
              <p>The average value of production is 715,417</p>
            </div>
        </div>
        <div class="dropdown">
          <button class="button button1">Production by Crop in Kharif</button>
            <div class="dropdown-content">
              <p>Production is unusually high when Season - Crop is Kharif|Rice and Kharif|Sugarcane.</p>
              <p>It is projected that by 2017, Rice will exceed Ragi in Production by over 374 thousand.</p>
              <p>From 2002 to 2003, Other Cereals & Millets's Production increased by 3399%.</p>
              <p>The average value of production is 878,104</p>
            </div>
        </div>
        </div>
        <div className="container"> 
            <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&pathRef=.my_folders%2Futtarakhand%2Futtarakhand-rabi&action=view&mode=dashboard&subView=model00000189ea8c677a_00000000" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>            
            <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&pathRef=.my_folders%2Futtarakhand%2Futtarakhand-kharif&action=view&mode=dashboard&subView=model00000189ea8c0d80_00000001" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>           
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
              <p>Total / Urban / Rural Total has the highest values of both Female Cultivators (Main and Marginal) and Agricultural Labour (Main and Marginal).</p>
              <p>Total / Urban / Rural Total has the highest values of both Male Cultivators (Main and Marginal) and Agricultural Labour (Main and Marginal).</p>
              
            </div>
        </div>
        </div>
        <div className="container">
            <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2FAndhra-Pradesh%2Fap-crop-cost&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
            <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&pathRef=.my_folders%2Futtarakhand%2Futtarakhand-agri-labor&action=view&mode=dashboard&subView=model0000018a09160c3b_00000000" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
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
              <p>Area under drip irrigation is 14941 acres.</p>
              <p>Area under sprinkler irrigation is 11796 acres.
              </p>
            </div>
        </div>
        </div>
        <div className="container">
            <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2FAndhra-Pradesh%2FAP-land-in-use&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model00000189f42a8ffe_00000003" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
            <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&pathRef=.my_folders%2Futtarakhand%2Futtarakhand-drip&action=view&mode=dashboard&subView=model0000018a0917df47_00000001" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
        </div>
        <div className="container">
        <div class="dropdown">
          <button class="button button1">Insights of production of horticulture</button>
            <div class="dropdown-content">
              <p>The overall number of results in Vegetables is hogher than the Fruits followed by others</p>
              <p>The overall number of results for Spices is 81.5.</p>
            </div>
        </div>
        <div class="dropdown">
          <button class="button button1">Insights of production of milk, meat, wool, egg, fish by year</button>
            <div class="dropdown-content">
              <p>Type 2017-2018 has the highest Total wool but is ranked #2 in Total meat.</p>
              <p>Across all types, the sum of wool is over 3500.</p>
              <p>Type 2015-2016 has the highest Total meat but is ranked #6 in Total egg.</p>
              <p>Across all types, the sum of egg is over 30 thousand.</p>
              <p>meat is unusually high when year is 2015-2016.</p>
              <p>Type 2015-2016 has the highest Total meat but is ranked #4 in Total fish.</p>
              <p>Type 2019-2020 has the highest Total milk but is ranked #6 in Total meat.</p>
              <p>Across all types, the sum of milk is over twelve thousand..</p>
              <p>Type 2015-2016 has the highest Total meat but is ranked #4 in Total fish.</p>
              <p>Over all types, the sum of fish is 0.17.</p>
              
            </div>
        </div>
        </div>
        <div className="container">
            <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&pathRef=.my_folders%2Futtarakhand%2Futtarakhand-horticulture&action=view&mode=dashboard&subView=model0000018a091a9c9f_00000003" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
            <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&pathRef=.my_folders%2Futtarakhand%2Futtarakhand-mm&action=view&mode=dashboard&subView=model0000018a091d6669_00000002" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
        </div>
        <div className="container">
        <div class="dropdown">
          <button class="button button1">Insights on yield of major producing crops by year</button>
            <div class="dropdown-content">
              
              <p>Over all crops, the average of grams is 803.4.</p>
              <p>Over all crops, the average of groundnut is almost 1500. </p>
              <p>Across all crops, the average of maize is over 1500. </p>
             
            </div>
        </div>
        <div class="dropdown">
          <button class="button button1">Storage capacity by year</button>
            <div class="dropdown-content">
              <p>
              The average storage capacity of uttarakhand is 2.3 metric tonnes.
              </p>
            </div>
        </div>
        </div>
        <div className="container">
        <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&pathRef=.my_folders%2Futtarakhand%2Futtarakhand-rjc&action=view&mode=dashboard&subView=model0000018a091d5e44_00000004" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>            
        <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&pathRef=.my_folders%2Futtarakhand%2Futtarakhand-storage-capacity&action=view&mode=dashboard&subView=model0000018a091acb7a_00000000" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
        </div>
        
    </div>
    );
}

export default uttarakhand;