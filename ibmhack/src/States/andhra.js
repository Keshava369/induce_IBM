import React from "react";
import './CardPage.css';
import SimpleImageSlider from "react-simple-image-slider";



function andhra () {
  const images = [
    { url: "images/andhra_pradesh/Black_gram.jpg" },
    { url: "images/andhra_pradesh/cotton.jpg" },
    { url: "images/andhra_pradesh/groundnut.jpeg" },
    { url: "images/andhra_pradesh/rice.jpg" },
    { url: "images/andhra_pradesh/sorghum.jpg" },
    { url: "images/andhra_pradesh/sunflower.jpeg" },
  ];

    return(
    <div>
        <div className="container">
        <div class="dropdown">
          <button class="button button1">Andhra Pradesh</button>
            <div class="dropdown-content">
              <p>Known as the <strong>Rice Bowl of India</strong>, Andhra Pradesh is the largest producer of rice in the country. Andhra Pradesh has 13 districts, six agro-climatic zones, and five different soil types. The state has 10.1 million ha of cultivated area, c onstituting 37% of the total geographical area of the state. The irrigated area is 36% of the total cultivated area. Andhra Pradesh has mostly red lateritic and black soil, with low fertility and salinity problems.</p>
              <p>Production and Area diverged the most when Crop is Cotton(lint), and when Production was over ten million higher than the Area.The Government of Andhra Pradesh turned to farming approaches that are in harmony with nature, as they build on ecological science, rather than input economics. By improving the ecological conditions in each and every site, it is witnessed that Natural Farming reduces the need for synthetic inputs and deliver instead a form of farming that costs less, in financial terms, and is climate resilient.
              Natural Farming has a positive impact on farmers, livelihoods, young farmers, careers in agriculture, citizens food and nutrition security, restoration of the environment and mitigating climate change, among others.</p>
            </div>
        </div>
        <div class="dropdown">
          <button class="button button1">Major Producing Crops in Andhra Pradesh</button>
        </div>
        </div>
        <div className="container">
             <img src="images/andhra_pradesh/ap.jpg"></img>
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
              <p>Crop Rice has the highest values of both Area and Production.</p>
              <p>Production and Area diverged the most when Crop is Cotton(lint), and when Production was over ten million higher than the Area.</p>
              <p>It is projected that by 2018, Groundnut will exceed Maize in Area by over 716 thousand.</p>
              <p>It is projected that by 2018, Moong(Green Gram) will exceed Other Kharif pulses in Area by over 112 thousand.</p>
              <p>It is projected that by 2018, Sunflower will exceed Sugarcane in Area by over 383 thousand.</p>
            </div>
        </div>
        <div class="dropdown">
          <button class="button button1">Gross Value Added by year from Agriculture</button>
            <div class="dropdown-content">
              <p>2021-22* 39301411 has the highest values of both 2013-14 and 2011-12.</p>
              <p>39301411 2013-14 at almost 13 million is 27% higher than the 2011-12 of over 9.4 million.</p>
              <p>There is constant growth in the Gross Value Added by the Andhra Pradesh from Agriculture Sector</p>
            </div>
        </div>
        </div>
        <div className="container"> 
          <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2FAndhra-Pradesh%2FAndhrapradesh-cpa&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model00000189ea0dc618_00000002" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>  
          <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2FAndhra-Pradesh%2FAP-GVA&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>      
        </div>
        <div className="container">
        <div class="dropdown">
          <button class="button button1">Production by Crop in Rabi</button>
            <div class="dropdown-content">
              <p>Production is unusually high when Crop is Rice, Maize and Gram.</p>
              
              <p>Production is unusually high when the combinations of Crop and Season are Rice and Rabi, Maize and Rabi and Gram and Rabi.</p>
              <p>It is projected that by 2018, Rice will exceed Maize in Production by over 776 thousand.</p>
              <p>Rice, Maize, Gram, Urad are the major producing crops in the rabi.</p>
              
            </div>
        </div>
        <div class="dropdown">
          <button class="button button1">Production by Crop in Kharif</button>
            <div class="dropdown-content">
              <p>
              Production is unusually high when Crop is Rice, Sugarcane, Cotton(lint) and Groundnut.</p>
              <p>Production is unusually high when the combinations of Crop and Season are Rice and Kharif, Sugarcane and Kharif, Cotton(lint) and Kharif and Groundnut and Kharif.</p>
              <p>It is projected that by 2018, Rice will exceed Cotton(lint) in Production by nearly 2.8 million.</p>
              <p>Rice, Sugarcane, Cotton(lint) and Groundnut are the major producing crops in the rabi.
              </p>
            </div>
        </div>
        </div>
        <div className="container"> 
            <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2FAndhra-Pradesh%2FAndhrapradesh-rabi&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model00000189ea21290e_00000002" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>            
            <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2FAndhra-Pradesh%2FAndhrapradesh-kharif&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>           
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
              Total / Urban / Rural has the highest values of both Female Cultivators (Main and Marginal) and Agricultural Labour (Main and Marginal).</p>
              <p>Total / Urban / Rural has the highest values of both Male Cultivators (Main and Marginal) and Agricultural Labour (Main and Marginal).</p>
              <p>Total / Urban / Rural has the highest values of both Female Agricultural Labour (Main and Marginal) and Cultivators (Main and Marginal).</p>
              <p>Agricultural Labors are more than cultivators.</p>
              <p>Male cultivators are more than female cultivators.</p>
              <p>Female Agricultural Labour are more than male Agricultural Labour.
              </p>
            </div>
        </div>
        </div>
        <div className="container">
            <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2FAndhra-Pradesh%2Fap-crop-cost&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
            <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2FAndhra-Pradesh%2FAp-agriculture-labor&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
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
              Area under drip irrigation is more than area under sprinklers</p>
              <p>Area under drip irrigation is 1400780 acres.</p>
              <p>Area under sprinkler irrigation is 521165 acres.
              </p>
            </div>
        </div>
        </div>
        <div className="container">
            <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2FAndhra-Pradesh%2FAP-land-in-use&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model00000189f42a8ffe_00000003" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
            <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2FAndhra-Pradesh%2Fdrip&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
        </div>
        <div className="container">
        <div class="dropdown">
          <button class="button button1">Insights of production of horticulture</button>
            <div class="dropdown-content">
              <p>
              Fruits are more produced followed by Vegetables and plantation
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
            <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2FAndhra-Pradesh%2Fhorticulture-AP&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
            <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2FAndhra-Pradesh%2Fap-mm&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
        </div>
        <div className="container">
        <div class="dropdown">
          <button class="button button1">Insights on yield of major producing crops by year</button>
            <div class="dropdown-content">
              <p>
              <p>Over all crops, the average of Rice is almost 3500.</p>
              <p>Across all crops, the average of bajra is over 1500. </p>
              <p>Over all crops, the average of groundnuts is 864.5. </p>
              <p>Across all crops, the average of horticulture is over 3500.</p>
              <p>Over all crops, the average of lineseed is 62.53. </p>
              <p>Over all crops, the average of maize is nearly 5500.</p>
              <p>Over all crops, the average of oilseeds is 829.8.</p>
              <p>Over all crops, the average of pulses is 789.7.</p>
              <p>Over all crops, the average of tur is 581.8.</p>
              <p>Over all crops, the average of wheat is 581.8.</p>
              <p>The total number of results for Rice, across all crops, is 17.</p>
              <p>The total number of results for bajra, across all crops, is 17.</p>
              <p>The total number of results for groundnuts, across all crops, is 17.</p> 
              <p>The total number of results for horticulture, across all crops, is 16.</p>
              <p>The total number of results for lineseed, across all crops, is 17.</p>
              <p>The total number of results for maize, across all crops, is 17.</p>
              <p>The total number of results for oilseeds, across all crops, is 17.</p>
              <p>The total number of results for pulses, across all crops, is 17.</p>
              <p>The total number of results for tur, across all crops, is 17.</p>
              <p>The total number of results for wheat, across all crops, is 17.</p>
              <p>Rice ranges from nearly three thousand, when Crop is 2013-2014, to nearly four thousand, when Crop is 2017-2018.</p>
              <p>bajra ranges from 770, when Crop is 2006-2007, to almost 2500, when Crop is 2019-2020.</p>
              <p>groundnuts ranges from 557, when Crop is 2006-2007, to almost 1500, when Crop is 2007-2008.</p>
              <p>horticulture ranges from 1.92, when Crop is 2018-2019, to over 27 thousand, when Crop is 2020-2021.</p>
              <p>lineseed ranges from 0, when Crop is 2007-2008, to 480, when Crop is 2013-2014. </p>
              <p>maize ranges from almost 3500, when Crop is 2006-2007, to nearly seven thousand, when Crop is 2017-2018.</p> 
              <p>oilseeds ranges from 557, when Crop is 2014-2015, to almost 1500, when Crop is 2017-2018.</p>
              <p>pulses ranges from 558, when Crop is 2018-2019, to 932, when Crop is 2019-2020.</p>
              <p>tur ranges from 0, when Crop is 2014-2015, to almost 1500, when Crop is 2011-2012.</p>
              <p>wheat ranges from 0, when Crop is 2014-2015, to almost 1500, when Crop is 2011-2012.</p>
              </p>
            </div>
        </div>
        <div class="dropdown">
          <button class="button button1">Storage capacity by year</button>
            <div class="dropdown-content">
              <p>
              The average storage capacity of Ap is 25 metric tonnes.
              </p>
            </div>
        </div>
        </div>
        <div className="container">
        <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2FAndhra-Pradesh%2Fap-mjr&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model00000189f419bb2d_00000000" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>            
        <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2FAndhra-Pradesh%2Fstorage%2Bcapacity&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
        </div>
        
    </div>
    );
}

export default andhra;