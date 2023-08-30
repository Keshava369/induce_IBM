import React from "react";
import './CardPage.css';
import SimpleImageSlider from "react-simple-image-slider";



function sikkim () {
  const images = [
    { url: "images/sikkim/barley.jpg" },
    { url: "images/sikkim/millets.jpg" },
    { url: "images/sikkim/maize.jpg" },
    { url: "images/sikkim/oilseeds.jpg" },
    { url: "images/sikkim/paddy.jpg" },
    { url: "images/sikkim/pulses.jpg" },
    { url: "images/sikkim/rice.jpg" },
    { url: "images/sikkim/wheat.jpg" },
  ];

    return(
    <div>
        <div className="container">
        <div class="dropdown">
          <button class="button button1">Sikkim</button>
            <div class="dropdown-content">
                 <p>Agriculture is still the main stay of rural population of Sikkim. Due to adverse geographical location and difficult terrain, the expansion of area under cultivation is limited. The challenge is two-fold, very low per-capita availability of land and decreasing trend of farmers working on farms.</p>
                 <p>For Sikkim, the best agriculture system is sustainable agriculture, which is economically viable for the individual farmer and also environmentally friendly. Being an organic State, the Department is propagating and advocating farmers to adopt new and modern technology of organic farming system to sustain production and certification process in identified areas. </p>
                 <p>The policies and programmes on organic farming in tune with our natural endowments envisage in making Sikkim a Model Organic State</p>
            </div>
        </div>
        <div class="dropdown">
          <button class="button button1">Major Producing Crops in Sikkim</button>
        </div>
        </div>
        <div className="container">
             <img src="images/sikkim/sikkim.jpg"></img>
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
              <p>Crop Maize has the highest values of both Area and Production.</p>
              <p>Maize Production at over 1.3 million is 48% higher than the Area of over 692 thousand.</p>
              <p>Production and Area diverged the most when Crop is Maize, and when Production was over 631 thousand higher than the Area.</p>
              <p>Crop Rice has the highest values of both Area and Production.</p>
              <p>Rice Production at over 383 thousand is 41% higher than the Area of almost 226 thousand.</p>
              <p>Production and Area diverged the most when Crop is Rice, and when Production was nearly 158 thousand higher than the Area.</p>
            </div>
        </div>
        <div class="dropdown">
          <button class="button button1">Gross Value Added by year from Agriculture</button>
            <div class="dropdown-content">
              <p>2021-22* 360156 has the highest values of both 2012-13 and 2011-12.</p>
            </div>
        </div>
        </div>
        <div className="container"> 
          <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Fsikkim%2Fsikkim-cpa&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model00000189ea25d068_00000000" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
          <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Fsikkim%2Fsikkim-gross-value&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model0000018a08620bd3_00000007" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>   
        </div>
        <div className="container">
        <div class="dropdown">
          <button class="button button1">Production by Crop in Rabi</button>
            <div class="dropdown-content">
              <p>Production is unusually high when Crop is Wheat</p>
              <p>Production is unusually high when the combination of Crop and Season is Wheat and Rabi.</p>
              <p>It is projected that by 2019, Rapeseed &Mustard will exceed Barley in Production by almost 3500.</p>
              <p>The average value of production is 43,389.</p>
            </div>
        </div>
        <div class="dropdown">
          <button class="button button1">Production by Crop in Kharif</button>
            <div class="dropdown-content">
              <p>Production is most unusual when Crop is Maize, Oilseeds total and other oilseeds.</p>
              <p>Production is most unusual when the combinations of Crop and Season are Maize and Kharif, Oilseeds total and Kharif and other oilseeds and Kharif.</p>
              <p>It is projected that by 2019, Maize will exceed Rice in Production by over 255 thousand.</p>
              <p>The average value of production is 241,452</p>
            </div>
        </div>
        </div>
        <div className="container"> 
        <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Fsikkim%2Fsikkim-rabi&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model00000189ea2df039_00000003" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
                  <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Fsikkim%2Fsikkim-kharif&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model00000189ea2c907b_00000003" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>       
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
              <p>Male cultivators are more than female cultivators.</p>
              <p>Female Agricultural Labour are more than male Agricultural Labour</p>
            </div>
        </div>
        </div>
        <div className="container">
            <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2FAndhra-Pradesh%2Fap-crop-cost&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
            <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Fsikkim%2Fsikkim-agri-labor&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model0000018a085b4c68_00000003" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
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
              <p>Area under drip irrigation is 7006 acres.</p>
              <p>Area under sprinkler irrigation is 10518 acres.
              </p>
            </div>
        </div>
        </div>
        <div className="container">
            <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2FAndhra-Pradesh%2FAP-land-in-use&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model00000189f42a8ffe_00000003" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
            <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Fsikkim%2Fsikkim-drip&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model0000018a0860a276_00000003" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
        </div>
        <div className="container">
        <div class="dropdown">
          <button class="button button1">Insights of production of horticulture</button>
            <div class="dropdown-content">
              <p>The overall number of results in Vegetables is higher than the Fruits followed by others</p>
              <p>The overall number of results for Spices is 120.94 .</p>
            </div>
        </div>
        <div class="dropdown">
          <button class="button button1">Insights of production of milk, meat, wool, egg, fish by year</button>
            <div class="dropdown-content">
              <p>Type 2014-2015 has the highest Total wool but is ranked #6 in Total meat.</p>
              <p>Type 2021-2022 has the lowest total meat at 0.0, followed by 2014-2015 at 3.0.</p>
              <p>Type 2019-2020 has the highest Total milk but is ranked #2 in Total meat.
Over all types, the sum of milk is 449.</p>
              <p>Type 2015-2016 has the highest values of both egg and meat.</p>
              <p>egg ranges from 0, when Type is 2021-2022, to 102, when Type is 2015-2016.</p>
              <p>Type 2014-2015 has the highest Total fish but is ranked #6 in Total meat.</p>
              <p>Type 2015-2016 has the highest Total meat but is ranked #1 in Total fish.</p>
              
              
              
            </div>
        </div>
        </div>
        <div className="container">
        <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Fsikkim%2Fsikkim-horticulture&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model0000018a0863f126_00000002" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
        <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Fsikkim%2Fsikkim-mm&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model0000018a0868e010_00000002" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
        </div>
        <div className="container">
        <div class="dropdown">
          <button class="button button1">Insights on yield of major producing crops by year</button>
            <div class="dropdown-content">
              
              <p>Across all crops, the average of maize is over 1500.</p>
              <p>Over all crops, the average of oilseeds is 817.</p>
              <p>Over all crops, the average of pulses is 879.9.</p>
             
            </div>
        </div>
        <div class="dropdown">
          <button class="button button1">Storage capacity by year</button>
            <div class="dropdown-content">
              <p>
              The average storage capacity of Sikkim is 2.43 metric tonnes.
              </p>
            </div>
        </div>
        </div>
        <div className="container">
        <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Fsikkim%2Fsikkim-rjc&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model0000018a0868e450_00000002" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>           
        <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Fsikkim%2Fsikkim-storage-capacity&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model0000018a08671b79_00000000" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
        </div>
        
    </div>
    );
}

export default sikkim;