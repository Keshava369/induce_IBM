import React from "react";
import './CardPage.css';
import SimpleImageSlider from "react-simple-image-slider";



function tamilnadu () {
  const images = [
    { url: "images/tamilnadu/jowar.jpg" },
    { url: "images/tamilnadu/bajra.jpg" },
    { url: "images/tamilnadu/ragi.jpg" },
    { url: "images/tamilnadu/maize.jpg" },
    { url: "images/tamilnadu/rice.jpg" },
    
  ];

    return(
    <div>
        <div className="container">
        <div class="dropdown">
          <button class="button button1">TamilNadu</button>
            <div class="dropdown-content">
                 <p>Agriculture is the prime and traditional occupation for the people of Tamil Nadu. About 56% of the people of Tamil Nadu are farmers. Agriculture sector supplies food and fodder to the people and cattle, respectively. It is the source of raw material for many of the industries. </p>
                 <p>Farmers selected particular crops to be cultivated in a season, to suit soil and availability of water in that season. </p>
                 <p>Farming that is carried on small land holders that produce food crops for local consumption and not for external trade is known as subsistence intensive farming. .</p>
            </div>
        </div>
        <div class="dropdown">
          <button class="button button1">Major Producing Crops in TamilNadu</button>
        </div>
        </div>
        <div className="container">
             <img src="images/tamilnadu/tamilnadu.jpg"></img>
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
              <p>Area and Production diverged the most when Crop is Cashewnut, and when Area was almost 826 thousand higher than the Production.</p>
              <p>It is projected that by 2017, Cotton(lint) will exceed Dry chillies in Area by over 86 thousand.</p>
              <p>Crop Groundnut has the highest values of both Area and Production.</p>
              <p>Area is unusually high when Crop is Moong(Green Gram).</p>
              <p>Production and Area diverged the most when Crop is Potato, and when Production was over 1.0 million higher than the Area.</p>
              <p>Area and Production diverged the most when Crop is Urad, and when Area was nearly 2.7 million higher than the Production.</p>
              <p>It is projected that by 2017, Sugarcane will exceed Tapioca in Area by over 236 thousand.</p>
            </div>
        </div>
        <div class="dropdown">
          <button class="button button1">Gross Value Added by year from Agriculture</button>
            <div class="dropdown-content">
              <p>2021-22* 24479497 has the highest values of both 2012-13 and 2011-12.</p>
            </div>
        </div>
        </div>
        <div className="container"> 
        <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Ftamilnadu%2Ftamilnadu-cpa&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model00000189ea31a8a3_00000002" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
          <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Ftamilnadu%2Ftamilnadu-gross-value&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model0000018a08a171db_00000000" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>    
        </div>
        <div className="container">
        <div class="dropdown">
          <button class="button button1">Production by Crop in Rabi</button>
            <div class="dropdown-content">
              <p>Production is unusually high when Crop is Maize and Groundnut.</p>
              <p>Production is unusually high when the combinations of Crop and Season are Maize and Rabi and Groundnut and Rabi.</p>
              <p>From 1999 to 2000, Gram's Production dropped by 35%.</p>
              <p>The average value of production is 246,351.</p>
            </div>
        </div>
        <div class="dropdown">
          <button class="button button1">Production by Crop in Kharif</button>
            <div class="dropdown-content">
              <p>Production is unusually high when Crop is Rice.</p>
              <p>Production is unusually high when the combination of Crop and Season is Rice and Kharif.</p>
              <p>It is projected that by 2017, Small millets will exceed Sesamum in Production by over 155 thousand.</p>
              <p>The average value of production is 4,671,949</p>
            </div>
        </div>
        </div>
        <div className="container"> 
                  <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Ftamilnadu%2Ftamilnadu-rabi&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model00000189ea41bcfb_00000000" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
                  <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Ftamilnadu%2Ftamilnadu-kharif&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model00000189ea402388_00000000" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>         
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
              <p>Total / Urban / Rural has the highest values of both Female Cultivators (Main and Marginal) and Agricultural Labour (Main and Marginal).</p>
              <p>Total / Urban / Rural has the highest values of both Male Cultivators (Main and Marginal) and Agricultural Labour (Main and Marginal).</p>
              <p>Total / Urban / Rural has the highest values of both Female Cultivators (Main and Marginal) and Cultivators (Main and Marginal).</p>
              <p>Agricultural Labors are more than cultivators.</p>
              <p>Male cultivators are less than female cultivators.</p>
              <p>Female Agricultural Labour are less than male Agricultural Labour</p>
            </div>
        </div>
        </div>
        <div className="container">
            <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2FAndhra-Pradesh%2Fap-crop-cost&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
            <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Ftamilnadu%2Ftamilnadu-agri-labor&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model0000018a089c8e39_00000000" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
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
              <p>Area under drip irrigation is 867898 acres.</p>
              <p>Area under sprinkler irrigation is 387723 acres.
              </p>
            </div>
        </div>
        </div>
        <div className="container">
            <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2FAndhra-Pradesh%2FAP-land-in-use&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model00000189f42a8ffe_00000003" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
            <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Ftamilnadu%2Ftamilnadu-drip&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model0000018a089eaf7b_00000000" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
        </div>
        <div className="container">
        <div class="dropdown">
          <button class="button button1">Insights of production of horticulture</button>
            <div class="dropdown-content">
              <p>The overall number of results in Vegetables is higher than the Fruits followed by others</p>
              <p>The overall number of results for Spices is 195 .</p>
            </div>
        </div>
        <div class="dropdown">
          <button class="button button1">Insights of production of milk, meat, wool, egg, fish by year</button>
            <div class="dropdown-content">
              <p>Type 2021-2022 has the highest Total fish but is ranked #8 in Total wool.</p>
              <p>Across all types, the sum of meat is over four thousand.</p>
              <p>Type 2021-2022 has the highest Total fish but is ranked #8 in Total milk.</p>
              <p>Over all types, the sum of milk is almost 57 thousand.</p>
              <p>2021-2022 fish at 8.07 is 100% higher than the wool of 0.</p>
              <p>Type 2016-2017 has the highest Total wool but is ranked #4 in Total fish.</p>
              <p>Type 2021-2022 has the highest Total fish but is ranked #8 in Total egg.</p>
              <p>Over all types, the sum of egg is almost 1.3 million.</p>
              
              
            </div>
        </div>
        </div>
        <div className="container">
        <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Ftamilnadu%2Ftamilnadu-horticulture&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model0000018a08a43dc3_00000002" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
        <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Ftamilnadu%2Ftamilnadu-mm&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model0000018a08a4ac8e_00000003" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
        </div>
        <div className="container">
        <div class="dropdown">
          <button class="button button1">Insights on yield of major producing crops by year</button>
            <div class="dropdown-content">
              
              <p>Across all crops, the average of bhajra is over two thousand.</p>
              <p>Over all crops, the average of grams is 716.1.</p>
              <p>Over all crops, the average of groundnut is almost 2500.</p>
             
            </div>
        </div>
        <div class="dropdown">
          <button class="button button1">Storage capacity by year</button>
            <div class="dropdown-content">
              <p>
              The average storage capacity of TamilNadu is 28.3 metric tonnes.
              </p>
            </div>
        </div>
        </div>
        <div className="container">
        <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Ftamilnadu%2Ftamilnadu-rjc&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model0000018a08a1b2f0_00000000" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>           
        <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Ftamilnadu%2Ftamilnadu-storage-capacity&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model0000018a08a894a0_00000001" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
        </div>
        
    </div>
    );
}

export default tamilnadu;