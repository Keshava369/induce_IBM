import React from "react";
import './CardPage.css';
import SimpleImageSlider from "react-simple-image-slider";



function kerala () {
  const images = [
    { url: "images/kerala/Ginger.jpeg" },
    { url: "images/kerala/paddy.jpg" },
    { url: "images/kerala/banana.jpeg" },
    
    { url: "images/kerala/tapioca.jpeg" },
    { url: "images/kerala/coconut.jpeg" },
  ];

    return(
    <div>
        <div className="container">
        <div class="dropdown">
          <button class="button button1"> kerala </button>
            <div class="dropdown-content">
              <p>Kerala shares diverse agro-climatic conditions making it fertile for the farming of various crops such as rice, coconut, cloves, coffee and tea.</p>
              <p>Kerala is known as the spice garden of India, Wayanad and Idukki are the significant spice producers. The major producer of coconut in Kerala accounts for 45 % of the total production of coconut in India. </p>
            </div>
        </div>
        <div class="dropdown">
          <button class="button button1">Major Producing Crops in kerala </button>
        </div>
        </div>
        <div className="container">
             <img src="images/kerala/kerala.jpg"></img>
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
              <p>Production and Area diverged the most when Crop is Banana, and when Production was over 6.7 million higher than the Area.</p>
              <p>Area is unusually high when Crop is Black pepper.</p>
              <p>It is projected that by 2018, Arecanut will exceed Cashewnut in Area by almost 107 thousand.</p>
              <p>Crop Coconut has the highest values of both Area and Production.</p>
              <p>Production and Area diverged the most when Crop is Coconut, and when Production was approximately 98 billion higher than the Area.</p>
              <p>It is projected that by 2018, Coconut will exceed Dry ginger in Area by nearly 680 thousand.</p>
              <p>Area is unusually high when Crop is Mango and Jack Fruit.</p>
              <p>Mango (21 %), Jowar (18.8 %), and Jack Fruit (15.5 %) are the most frequently occurring categories of Crop with a combined count of 150 items with Area values (55.4 % of the total).</p>
              <p>Mango (27 %) and Jowar (21.8 %) are the most frequently occurring categories of Crop with a combined count of 103 items with Production values (48.8 % of the total).</p>
              <p>Crop Rice has the highest values of both Area and Production.</p>
              <p>Production and Area diverged the most when Crop is Rice, and when Production was almost 6.1 million higher than the Area.</p>
              <p>Area is unusually high when Crop is Rice.</p>
              <p>Crop Tapioca has the highest values of both Area and Production.</p>
              <p>It is projected that by 2018, Tapioca will exceed Turmeric in Area by over 57 thousand.</p>
              <p>From 1997 to 1998, Tapioca's Area dropped by 15%.</p>
            </div>
        </div>
        <div class="dropdown">
          <button class="button button1">Gross Value Added by year from Agriculture</button>
            <div class="dropdown-content">
              <p>2021-22* 8534521 has the highest values of both 2013-14 and 2011-12.</p>
              <p>8534521 2013-14 at over 5.5 million is 12% higher than the 2011-12 of over 4.8 million.</p>
            </div>
        </div>
        </div>
        <div className="container"> 
          <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Fkerala%2Fkerala-cpa&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model00000189eda0cb67_00000000" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
          <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Fkerala%2Fkerala-gross-value&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model0000018a02fb5189_00000003" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
        </div>
        <div className="container">
        <div class="dropdown">
          <button class="button button1">Production by Crop in Rabi</button>
            <div class="dropdown-content">
              <p>Production is unusually high when Crop is Potato and Wheat.</p>
              
              <p>It is projected that by 2012, Potato will exceed Wheat in Production by nearly 44 thousand.</p>
              <p>From 2005 to 2006, Wheat's Production increased by 220%.</p>
              
            </div>
        </div>
        <div class="dropdown">
          <button class="button button1">Production by Crop in Kharif</button>
            <div class="dropdown-content">
              <p>Production is unusually high when Crop is Cotton(lint).</p>
              <p>It is projected that by 2014, Jowar will exceed Groundnut in Production by almost 1500.</p>
              <p>From 1998 to 1999, Cotton(lint)'s Production dropped by 57%.</p>
            </div>
        </div>
        </div>
        <div className="container"> 
            <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Fjharkhand%2Fjharkhand-rabi&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model00000189edb119af_00000000" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
            <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Fkerala%2Fkerala-kharif&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model00000189ed995aed_00000001" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
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
            <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Fkerala%2Fkerala-agri-labor&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model0000018a02f24db3_00000003" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
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
              <p>Area under drip irrigation is 24360 acres.</p>
              <p>Area under sprinkler irrigation is 9289 acres.
              </p>
            </div>
        </div>
        </div>
        <div className="container">
            <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2FAndhra-Pradesh%2FAP-land-in-use&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model00000189f42a8ffe_00000003" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
            <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Fkerala%2Fkerala-drip&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model0000018a02f99dce_00000002" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
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
              <p>Type 2014-2015 has the highest Total egg but is ranked #7 in Total meat.</p>
              <p>Type 2016-2017 has the highest Total meat but is ranked #4 in Total egg.</p>
              <p>Across all types, the sum of egg is over 163 thousand.</p>
              
            </div>
        </div>
        </div>
        <div className="container">
            <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Fkerala%2Fkerala-horticulture&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model0000018a03003630_00000002" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
            <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Fkerala%2Fkerala-mm&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model0000018a030bcbd4_00000002" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
        </div>
        <div className="container">
        <div class="dropdown">
          <button class="button button1">Insights on yield of major producing crops by year</button>
            <div class="dropdown-content">
              <p>
              <p>Across all crops, the average of Tur is over a thousand.</p>
              <p>Across all crops, the average of groundnut is over a thousand.</p>
              <p>Over all crops, the average of oilseeds is 782.2.</p>
              </p>
            </div>
        </div>
        <div class="dropdown">
          <button class="button button1">Storage capacity by year</button>
            <div class="dropdown-content">
               <p>The average storage capacity of kerala is 5.89 metric tonnes.</p>
              
            </div>
        </div>
        </div>
        <div className="container">
        <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Fkerala%2Fkerala-rjc&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model0000018a0309b7a3_00000002" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
        <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Fkerala%2Fkerala-storage-capacity&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model0000018a03027228_00000003" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
        </div>
       </div> 
    </div>
    );
}

export default kerala;