import React from "react";
import './CardPage.css';
import SimpleImageSlider from "react-simple-image-slider";



function bihar () {
  const images = [
    { url: "images/bihar/maize.jpg" },
    { url: "images/bihar/urad dal.jpeg" },
    { url: "images/bihar/arhar.jpeg" },
    { url: "images/bihar/rice.jpg" },
    { url: "images/bihar/wheat.jpg" },
    { url: "images/bihar/moong.jpeg" },
  ];

    return(
    <div>
        <div className="container">
        <div class="dropdown">
          <button class="button button1">Bihar</button>
            <div class="dropdown-content">
              <p>Known as the <strong>Rice Bowl of India</strong>, Andhra Pradesh is the largest producer of rice in the country. Andhra Pradesh has 13 districts, six agro-climatic zones, and five different soil types. The state has 10.1 million ha of cultivated area, c onstituting 37% of the total geographical area of the state. The irrigated area is 36% of the total cultivated area. Andhra Pradesh has mostly red lateritic and black soil, with low fertility and salinity problems.</p>
              <p>Production and Area diverged the most when Crop is Cotton(lint), and when Production was over ten million higher than the Area.The Government of Andhra Pradesh turned to farming approaches that are in harmony with nature, as they build on ecological science, rather than input economics. By improving the ecological conditions in each and every site, it is witnessed that Natural Farming reduces the need for synthetic inputs and deliver instead a form of farming that costs less, in financial terms, and is climate resilient.
              Natural Farming has a positive impact on farmers, livelihoods, young farmers, careers in agriculture, citizens food and nutrition security, restoration of the environment and mitigating climate change, among others.</p>
            </div>
        </div>
        <div class="dropdown">
          <button class="button button1">Major Producing Crops in Bihar</button>
        </div>
        </div>
        <div className="container">
             <img src="images/bihar/bihar.jpg"></img>
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
              <p>Production and Area diverged the most when Crop is Banana, and when Production was over 2.7 million higher than the Area.</p>
              <p>Area is unusually high when Crop is Arhar/Tur.</p>
              <p>It is projected that by 2018, Arhar/Tur will exceed Banana in Area by over 1500.</p>
              <p>Crop Maize has the highest values of both Area and Production.</p>
              <p>Production and Area diverged the most when Crop is Maize, and when Production was nearly 21 million higher than the Area.</p>
              <p>Area is unusually high when Crop is Maize.</p>
              <p>Production and Area diverged the most when Crop is Sugarcane, and when Production was almost 104 million higher than the Area.</p>
              <p>Area is unusually high when Crop is Wheat.</p>
              <p>Crop_Year 2012 has the highest Area at over 2.5 million, out of which Crop Wheat contributed the most at over 2.2 million.</p>
            </div>
        </div>
        <div class="dropdown">
          <button class="button button1">Gross Value Added by year from Agriculture</button>
            <div class="dropdown-content">
              <p>2021-22* 16639039 has the highest values of both 2014-15 and 2011-12.</p>
              <p>16639039 2014-15 at almost 7.9 million is 21% higher than the 2011-12 of over 6.2 million.</p>
            </div>
        </div>
        </div>
        <div className="container"> 
          <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Fbihar%2Fbihar-cpa&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model00000189ee73bf51_00000002" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
          <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Fbihar%2Fbihar-gv&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model00000189ff29de49_00000001" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
        </div>
        <div className="container">
        <div class="dropdown">
          <button class="button button1">Production by Crop in Rabi</button>
            <div class="dropdown-content">
              <p>Production is unusually high when Crop is Wheat.</p>
              
              <p>It is projected that by 2018, Wheat will exceed Maize in Production by nearly 2.1 million.</p>
              <p>From 2013 to 2014, Wheat's Production dropped by 42%.</p>
              
            </div>
        </div>
        <div class="dropdown">
          <button class="button button1">Production by Crop in Kharif</button>
            <div class="dropdown-content">
              <p>Production is unusually high when Crop is Jute.</p>
              <p>It is projected that by 2018, Jute will exceed Maize in Production by over 979 thousand.</p>
              <p>It is projected that by 2018, Rice will exceed Cotton(lint) in Production by nearly 2.8 million.</p>
               <p>From 2012 to 2013, Jute's Production increased by 458%.</p>
            </div>
        </div>
        </div>
        <div className="container"> 
            <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Fbihar%2Fbihar-rabi&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model00000189ee735416_00000002" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
            <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Fbihar%2Fbihar-kharif&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model00000189ee734c45_00000002" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
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
            <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Fbihar%2Fbihar-agri-labor&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model00000189ff14d132_00000002" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
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
              Area under sprinklers irrigation is more than area under drip </p>
              <p>Area under drip irrigation is 15834 acres.</p>
              <p>Area under sprinkler irrigation is 106995 acres.
              </p>
            </div>
        </div>
        </div>
        <div className="container">
            <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2FAndhra-Pradesh%2FAP-land-in-use&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model00000189f42a8ffe_00000003" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
            <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Fbihar%2Fbihar-drip&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model00000189ff1a5077_00000001" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
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
              Type 2019-2020 has the highest values of both wool and fish.</p>
              <p>Over all types, the sum of wool is nearly five thousand.</p>
              <p>wool ranges from 778, when Type is 2014-2015, to 801, when Type is 2019-2020.</p>
              <p>Over all types, the sum of egg is nearly 1.3 million.</p>
              <p>egg ranges from almost 131 thousand, when Type is 2014-2015, to nearly 250 thousand, when Type is 2020-2021.</p>
              <p>Across all types, the sum of meat is over five thousand.</p>
              <p>meat ranges from 528, when Type is 2014-2015, to 954, when Type is 2020-2021.</p>
              <p>Type 2019-2020 has the highest Total milk but is ranked #2 in Total fish.</p>
              <p>Across all types, the sum of milk is over 91 thousand.</p>
              <p>Type 2021-2022 has the highest Total fish but is ranked #2 in Total wool.</p>
              <p>Over all types, the sum of fish is 136.1.
              </p>
            </div>
        </div>
        </div>
        <div className="container">
            <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Fbihar%2Fbihar-horticulture&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model00000189ff2c4308_00000003" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
            <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2FAndhra-Pradesh%2Fap-mm&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
        </div>
        <div className="container">
        <div class="dropdown">
          <button class="button button1">Insights on yield of major producing crops by year</button>
            <div class="dropdown-content">
              <p>
              <p>Across all crops, the average of Tur is over 1500.</p>
              <p>Across all crops, the average of bajra is over a thousand.</p>
              <p>Across all crops, the average of grams is over a thousand.</p>
              </p>
            </div>
        </div>
        <div class="dropdown">
          <button class="button button1">Storage capacity by year</button>
            <div class="dropdown-content">
              <p>
              The average storage capacity of Ap is 15.51 metric tonnes.
              </p>
            </div>
        </div>
        </div>
        <div className="container">
        <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Fbihar%2Fbihar-mjr&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model00000189ff25ec3b_00000003" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
        <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Fbihar%2Fbihar-storage-capacity&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model00000189ff2cd50d_00000002" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
        </div>
        
    </div>
    );
}

export default bihar;