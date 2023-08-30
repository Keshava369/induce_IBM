import React from "react";
import './CardPage.css';
import SimpleImageSlider from "react-simple-image-slider";



function telangana () {
  const images = [
    { url: "images/telangana/pulses.jpg" },
    { url: "images/telangana/sugarcane.jpg" },
    { url: "images/telangana/maize.jpg" },
    { url: "images/telangana/wheat.jpg" },
    { url: "images/telangana/groundnut.jpg" },
    { url: "images/telangana/chilli.jpeg" },
    { url: "images/telangana/cotton.jpeg" },
  ];

    return(
    <div>
        <div className="container">
        <div class="dropdown">
          <button class="button button1">Telangana</button>
            <div class="dropdown-content">
                 <p>Agriculture is the most dependent sector in Telangana state. Most people survive on this. That is why Telangana state government has given highest priority to agriculture. </p>
                 <p>No state in the country is implementing as many programs as Telangana state for the welfare of farmers</p>
                 <p> The government is taking all measures to make the agriculture sector profitable with the aim of agriculture sector development and farmer’s welfare through Rythubandhu, farmer insurance, crop loan waiver, input subsidy, provision of free electricity, construction of warehouses, construction of Kaleshwaram project to provide abundant irrigation to crop fields.</p>
            </div>
        </div>
        <div class="dropdown">
          <button class="button button1">Major Producing Crops in Telangana</button>
        </div>
        </div>
        <div className="container">
             <img src="images/telangana/telangana.jpg"></img>
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
              <p>Area and Production diverged the most when Crop is Arhar/Tur, and when Area was over 2.3 million higher than the Production.</p>
              <p>Production and Area diverged the most when Crop is Coconut, and when Production was nearly 106 million higher than the Area.</p>
              <p>Crop (no value) has the highest values of both Area and Production.</p>
              <p>It is projected that by 2018, Moong(Green Gram) will exceed Other Kharif pulses in Area by over 85 thousand.</p>
              <p>Production and Area diverged the most when Crop is Rice, and when Production was over 45 million higher than the Area.</p>
              <p>Crop Sugarcane has the highest Total Production but is ranked #4 in Total Area.</p>
              <p>From 2007 to 2008, Wheat's Area increased by 58%.</p>
            </div>
        </div>
        <div class="dropdown">
          <button class="button button1">Gross Value Added by year from Agriculture</button>
            <div class="dropdown-content">
              <p>2021-22* 19465577 has the highest values of both 2014-15 and 2011-12.</p>
              <p>19465577 2014-15 at over 7.6 million is 28% higher than the 2011-12 of nearly 5.5 million.</p>              
            </div>
        </div>
        </div>
        <div className="container"> 
          <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Ftelangana%2Ftelangana-cpa&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model00000189ea670810_00000001" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
          <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Ftelangana%2Ftelangana-gross-value&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model0000018a08e5bb8e_00000001" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>    
        </div>
        <div className="container">
        <div class="dropdown">
          <button class="button button1">Production by Crop in Rabi</button>
            <div class="dropdown-content">
              <p>Production is unusually high when Season - Crop is Rabi|Rice.</p>
              <p>It is projected that by 2018, Rice will exceed Maize in Production by over 1.3 million.</p>
              <p>From 2009 to 2010, Rice's Production increased by 84%.</p>
              <p>The average value of production is 1,466,174</p>
            </div>
        </div>
        <div class="dropdown">
          <button class="button button1">Production by Crop in Kharif</button>
            <div class="dropdown-content">
              <p>Production is unusually high when Crop is Rice.</p>
              <p>Production is unusually high when the combination of Crop and Season is Rice and Kharif.</p>
              <p>It is projected that by 2018, Cotton(lint) will exceed Rice in Production by over 621 thousand.</p>
              <p>The average value of production is 3,382,650</p>
            </div>
        </div>
        </div>
        <div className="container"> 
                  <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Ftelangana%2Ftelangana-rabi&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model00000189ea6eec3a_00000000" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
                  <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Ftelangana%2Ftelangana-kharif&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model00000189ea6e99ac_00000002" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>         
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
              <p>Area under drip irrigation is more than area under sprinklers</p>
              <p>Area under drip irrigation is 222603 acres.</p>
              <p>Area under sprinkler irrigation is 91085 acres.
              </p>
            </div>
        </div>
        </div>
        <div className="container">
            <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2FAndhra-Pradesh%2FAP-land-in-use&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model00000189f42a8ffe_00000003" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
            <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Ftelangana%2Ftelangana-drip&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model0000018a08e489e5_00000000" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
        </div>
        <div className="container">
        <div class="dropdown">
          <button class="button button1">Insights of production of horticulture</button>
            <div class="dropdown-content">
              <p>The overall number of results in Fruits is higher than the Vegetables followed by others</p>
              <p>The overall number of results for Spices is 780.95 .</p>
            </div>
        </div>
        <div class="dropdown">
          <button class="button button1">Insights of production of milk, meat, wool, egg, fish by year</button>
            <div class="dropdown-content">
              <p>Type 2021-2022 has the highest Total fish but is ranked #8 in Total wool.</p>
              <p>Over all types, the sum of meat is nearly five thousand.</p>
              <p>Type 2020-2021 has the highest Total milk but is ranked #2 in Total fish.</p>
              <p>Type 2014-2015 and 2015-2016 have the lowest total fish at 0.0.</p>
              <p>Type 2021-2022 has the highest total fish at 3.9, followed by 2020-2021 at 3.49.</p>
              <p>Type 2021-2022 has the highest Total fish but is ranked #8 in Total egg.</p>
              <p>Over all types, the sum of egg is nearly 907 thousand.</p>
              
              
            </div>
        </div>
        </div>
        <div className="container">
        <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Ftelangana%2Ftelangana-horticulture&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model0000018a08e700a1_00000002" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
        <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Ftelangana%2Ftelangana-mm&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model0000018a08e75719_00000000" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
        </div>
        <div className="container">
        <div class="dropdown">
          <button class="button button1">Insights on yield of major producing crops by year</button>
            <div class="dropdown-content">
              
              <p>Over all crops, the average of bhajra is 422.4.</p>
              <p>Over all crops, the average of grams is 645.1.</p>
              <p>Across all crops, the average of groundnut is over a thousand.</p>
             
            </div>
        </div>
        <div class="dropdown">
          <button class="button button1">Storage capacity by year</button>
            <div class="dropdown-content">
              <p>
              The average storage capacity of telangana is 20.23 metric tonnes.
              </p>
            </div>
        </div>
        </div>
        <div className="container">
        <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Ftelangana%2Ftelanagana-rjc&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model0000018a08eb55cf_00000002" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>           
        <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Ftelangana%2Ftelangana-storage-capacity&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model0000018a08ee85de_00000002" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
        </div>
        
    </div>
    );
}

export default telangana;