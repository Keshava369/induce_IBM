import React from "react";
import './CardPage.css';
import SimpleImageSlider from "react-simple-image-slider";



function maharastra () {
  const images = [
    { url: "images/maharashtra/pulses.jpg" },
    { url: "images/maharashtra/orange.jpeg" },
    { url: "images/maharashtra/Mango.jpeg" },
    
    { url: "images/maharashtra/grapes.jpeg" },
    { url: "images/maharashtra/bajra.jpeg" },
  ];

    return(
    <div>
        <div className="container">
        <div class="dropdown">
          <button class="button button1">  maharastra </button>
            <div class="dropdown-content">
              <p>Maharashtra's primary food crops are mangoes, grapes, bananas, oranges, wheat, rice, jawar, bajra, and pulses. Groundnut, Cotton, sugarcane, turmeric, and tobacco are cash crops. The state has tropical weather, with the Konkan and the mountainous Sahyadri region receiving most of the state's rainfall.</p>
              <p>In Maharashtra, the pattern of rainfall varies from region to region. Rainfall in Central Maharashtra is occasional. About one-third of the region receives little rain, which leaves it continuously dry and water-scarce.</p>
            </div>
        </div>
        <div class="dropdown">
          <button class="button button1">Major Producing Crops in  maharastra </button>
        </div>
        </div>
        <div className="container">
             <img src="images/maharashtra/maharasthra.jpg"></img>
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
              <p>Production and Area diverged the most when Crop is Cotton(lint), and when Production was nearly eighteen million higher than the Area.</p>
              <p>Area is unusually high when Crop is Jowar and Cotton(lint).</p>
              <p>It is projected that by 2018, Cotton(lint) will exceed Jowar in Area by over 1.5 million.</p>
              <p>Production and Area diverged the most when Crop is Maize, and when Production was nearly twelve million higher than the Area.</p>
              <p>Area is unusually high when Crop is Moong(Green Gram) and Maize.</p>
              <p>It is projected that by 2018, Maize will exceed Moong(Green Gram) in Area by over 672 thousand.</p>
              <p>Production and Area diverged the most when Crop is Rice, and when Production was over seventeen million higher than the Area.</p>
              <p>Area is unusually high when Crop is Soyabean.</p>
              <p>It is projected that by 2018, Rice will exceed Ragi in Area by over 1.4 million.</p>
              <p>Production and Area diverged the most when Crop is Sugarcane, and when Production was nearly 927 million higher than the Area.</p>
              <p>It is projected that by 2018, Sugarcane will exceed Wheat in Area by over 159 thousand.</p>
              <p>From 2007 to 2008, Sugarcane's Area increased by 13,963%.</p>
            </div>
        </div>
        <div class="dropdown">
          <button class="button button1">Gross Value Added by year from Agriculture</button>
            <div class="dropdown-content">
              <p>2021-22* NA has the highest values of both 2014-15 and 2011-12.</p>
              <p>NA 2014-15 at nearly eighteen million is 15% higher than the 2011-12 of over fifteen million.</p>
            </div>
        </div>
        </div>
        <div className="container"> 
          <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Fmaharashtra%2Fmaharashtra-cpa&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model00000189ed8b1193_00000000" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
          <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Fmaharashtra%2Fmaharashtra-gross-value&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model0000018a0383e6b3_00000001" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
        </div>
        <div className="container">
        <div class="dropdown">
          <button class="button button1">Production by Crop in Rabi</button>
            <div class="dropdown-content">
              <p>Production is unusually high when Crop is Wheat.</p>
              
              <p>Production is unusually high when the combination of Crop and Season is Wheat and Rabi.</p>
              <p>It is projected that by 2017, Wheat will exceed Rapeseed &Mustard in Production by almost fourteen million.</p>
                         </div>
        </div>
        <div class="dropdown">
          <button class="button button1">Production by Crop in Kharif</button>
            <div class="dropdown-content">
              <p>Production is unusually high when Crop is Soyabean.</p>
              <p>Production is unusually high when the combination of Crop and Season is Soyabean and Kharif.</p>
              <p>It is projected that by 2017, Soyabean will exceed Maize in Production by over 3.9 million.</p>
            </div>
        </div>
        </div>
        <div className="container"> 
            <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Fmadhyapradesh%2Fmadhyapradesh-rabi&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model00000189ee5fa43d_00000003" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
            <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Fmadhyapradesh%2Fmadhyapradesh-kharif&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model00000189ee5dad3f_00000003" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
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
              <p>Type 2021-2022 has the highest Total fish but is ranked #8 in Total egg.</p>
              <p>Type 2020-2021 has the highest Total egg but is ranked #2 in Total fish.</p>
              <p>Across all types, the sum of egg is over 134 thousand.</p>
              
            </div>
        </div>
        </div>
        <div className="container">
            <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Fkerala%2Fkerala-horticulture&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model0000018a03003630_00000002" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
            <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Fmadhyapradesh%2Fmp-mm&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model0000018a032aaa5c_00000000" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
        </div>
        <div className="container">
        <div class="dropdown">
          <button class="button button1">Insights on yield of major producing crops by year</button>
            <div class="dropdown-content">
              <p>
              <p>Over all crops, the average of Bhajra is nearly two thousand.</p>
              <p>Across all crops, the average of grams is over a thousand.</p>
              <p>Over all crops, the average of groundnut is almost 1500.</p>
              </p>
            </div>
        </div>
        <div class="dropdown">
          <button class="button button1">Storage capacity by year</button>
            <div class="dropdown-content">
               <p>The average storage capacity of maharastra is 129.66 metric tonnes.</p>
              
            </div>
        </div>
        </div>
        <div className="container">
        <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Fmadhyapradesh%2Fmp-rjc&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model0000018a03282378_00000002" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
        <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Fmadhyapradesh%2Fmp-storagr-capacity&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model0000018a03238d55_00000002" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
        </div>
       </div> 
    </div>
    );
}

export default maharastra;