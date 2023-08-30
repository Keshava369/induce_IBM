import React from "react";
import './CardPage.css';
import SimpleImageSlider from "react-simple-image-slider";



function meghalaya () {
  const images = [
    
    
    { url: "images/meghalaya/rice.jpg" },
    { url: "images/meghalaya/maize.jpg" },
    { url: "images/meghalaya/pulses.jpg" },
    
  ];

    return(
    <div>
        <div className="container">
        <div class="dropdown">
          <button class="button button1">Meghalaya</button>
            <div class="dropdown-content">
                 <p>Meghalaya is basically an Agriculture State with about 81% of its total population depending entirely on Agriculture for their livelihood. The hilly terrain and land conditions of the State do not offer much scope in bringing additional area under wet condition, but the state has a vast potential for developing Horticulture. The agroclimatic variations within the State offers much scope for cultivation of Temperature as well as tropical fruits and vegetables.</p>
                 <p>Besides the major food crops of Rice and Maize, the State is also renowned for its Horticulture crops like Orange, Lemon, Pineapple, Guava, litchi, Banana, Jack Fruits and Temperate fruits such as Plum, Pear, Peach etc. Potato, Ginger, Turmeric, Black Pepper, Arecanut, Tezpata, Betelvine, short -staple cotton, Jute, Mesta, Mustard and Rapeseed etc. are some of the important cash crops in the State.</p>
                 <p>In order to provide assured irrigation to farmers and thereby ensuring increase food production, a number of Minor irrigation facilities has been envisaged, out of 2.18 lakh hectares estimated irrigation potential both from surface and ground water</p>
            </div>
        </div>
        <div class="dropdown">
          <button class="button button1">Major Producing Crops in Meghalaya</button>
        </div>
        </div>
        <div className="container">
             <img src="images/meghalaya/meghalaya.jpg"></img>
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
              <p>Banana Production at almost 1.2 million is 92% higher than the Area of over 99 thousand.Production and Area diverged the most when Crop is Banana, and when Production was almost 1.1 million higher than the Area.</p>
              <p>Dry ginger Production at over 877 thousand is 83% higher than the Area of over 152 thousand.Production and Area diverged the most when Crop is Dry ginger, and when Production was nearly 725 thousand higher than the Area.</p>
              <p>Crop Rice has the highest values of both Area and Production.Rice Production at over 3.5 million is 47% higher than the Area of almost 1.9 million.
</p>
              <p>Tapioca Production at over 391 thousand is 82% higher than the Area of over 72 thousand.</p>
              <p>Production and Area diverged the most when Crop is Tapioca, and when Production was nearly 319 thousand higher than the Area.</p>
              
            </div>
        </div>
        <div class="dropdown">
          <button class="button button1">Gross Value Added by year from Agriculture</button>
            <div class="dropdown-content">
              <p>2021-22* 704895 has the highest values of both 2014-15 and 2011-12.</p>
              <p>704895 2014-15 at almost 410 thousand is 31% higher than the 2011-12 of nearly 283 thousand.</p>
            </div>
        </div>
        </div>
        <div className="container"> 
        <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Fmeghalaya%2Fmeghalaya-cpa&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model00000189ee6b944b_00000000" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
        <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Fmeghalaya%2Fmeghalaya-gross-value&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model0000018a07ffb449_00000002" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
        </div>
        <div className="container">
        <div class="dropdown">
          <button class="button button1">Production by Crop in Rabi</button>
            <div class="dropdown-content">
              <p>Production is unusually high when Crop is Rice and Potato.</p>
              <p>It is projected that by 2018, Rapeseed &Mustard will exceed Gram in Production by nearly 7500.</p>
              <p>From 2010 to 2011, Rice's Production increased by 14%.</p>
              <p>The average value of production is 32,973</p>
            </div>
        </div>
        <div class="dropdown">
          <button class="button button1">Production by Crop in Kharif</button>
            <div class="dropdown-content">
              <p>Production is unusually high when Crop is Rice.</p>
              <p>It is projected that by 2018, Rice will exceed Jute in Production by almost 278 thousand.</p>
              <p>From 2011 to 2012, Jute's Production increased by 85%.</p>
              <p>The average value of production is 277,864.</p>
            </div>
        </div>
        </div>
        <div className="container"> 
                    <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Fmeghalaya%2Fmeghalaya-rabi&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model00000189ee68b7f0_00000002" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
                    <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Fmeghalaya%2Fmeghalaya-kharif&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model00000189ee6a8904_00000002" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
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
              <p>Agricultural Labors are less than cultivators.</p>
              <p>Male cultivators are more than female cultivators.</p>
              <p>Female Agricultural Labour are less than male Agricultural Labour</p>
            </div>
        </div>
        </div>
        <div className="container">
            <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2FAndhra-Pradesh%2Fap-crop-cost&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
            <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Fmeghalaya%2Fmeghalaya-agri-labor&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model0000018a07fb8469_00000002" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
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
              <p>Area under drip irrigation is 307 acres.</p>
              <p>Area under sprinkler irrigation is 308 acres.
              </p>
            </div>
        </div>
        </div>
        <div className="container">
            <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2FAndhra-Pradesh%2FAP-land-in-use&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model00000189f42a8ffe_00000003" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
            <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Fmeghalaya%2Fmeghalaya-drip&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model0000018a07fed0bd_00000000" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
        </div>
        <div className="container">
        <div class="dropdown">
          <button class="button button1">Insights of production of horticulture</button>
            <div class="dropdown-content">
              <p>The overall number of results in Vegetables is higher than the Fruits followed by others</p>
              <p>The overall number of results for Spices is 72 .</p>
            </div>
        </div>
        <div class="dropdown">
          <button class="button button1">Insights of production of milk, meat, wool, egg, fish by year</button>
            <div class="dropdown-content">
              <p>Type 2014-2015 has the highest values of both wool and meat. Over all types, the sum of wool is 0.</p>
              <p>Type 2021-2022 has the highest Total fish but is ranked #8 in Total egg.Across all types, the sum of egg is over 7500.</p>
              <p>2020-2021 egg at 1108 is 96% higher than the meat of 39.</p>
              <p>Type 2019-2020 has the highest Total meat but is ranked #2 in Total egg.</p>
              <p>2020-2021 egg at 1108 is 92% higher than the milk of 89.</p>
              <p>Over all types, the sum of milk is 600.</p>
              <p>Type 2020-2021 has the highest Total egg but is ranked #2 in Total fish.Over all types, the sum of fish is 0.48.</p>              
              
              
            </div>
        </div>
        </div>
        <div className="container">
           <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Fmeghalaya%2Fmeghalaya-horticulture&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model0000018a0801493b_00000003" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
           <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Fmeghalaya%2Fmeghalaya-mm&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model0000018a0803e0ea_00000002" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
        </div>
        <div className="container">
        <div class="dropdown">
          <button class="button button1">Insights on yield of major producing crops by year</button>
            <div class="dropdown-content">
              
              <p>Over all crops, the average of grams is 725.5.</p>
              <p>Over all crops, the average of maize is nearly two thousand.</p>
              <p>Over all crops, the average of oilseeds is 826.5.</p>
             
            </div>
        </div>
        <div class="dropdown">
          <button class="button button1">Storage capacity by year</button>
            <div class="dropdown-content">
              <p>
              The average storage capacity of Meghalaya is 0.235 metric tonnes.
              </p>
            </div>
        </div>
        </div>
        <div className="container">
        <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Fmeghalaya%2Fmeghalaya-rjc&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model0000018a0803c460_00000000" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
        <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Fmeghalaya%2Fmeghalaya-storage-capacity&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model0000018a08027d53_00000002" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
        </div>
        
    </div>
    );
}

export default meghalaya;
