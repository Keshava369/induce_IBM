import React from "react";
import './CardPage.css';
import SimpleImageSlider from "react-simple-image-slider";



function goa() {
  const images = [
    { url: "images/goa/banana.jpeg" },
    { url: "images/goa/cashew.jpeg" },
    { url: "images/goa/coconut.jpeg" },
    { url: "images/goa/rice.jpg" },
    { url: "images/goa/okra.jpeg" },
    
  ];

    return(
    <div>
        <div className="container">
        <div class="dropdown">
          <button class="button button1"> goa</button>
            <div class="dropdown-content">
              <p>The most important crops grown in Goa <strong>are Rice, Coconut, Salt, Cashew, Banana, Okra, and many more.</strong>The State of Goa is providing assistance to agriculture at all levels to provide substantial returns to rural people. The Department of Agriculture provides assistance for farmer from land preparation to the extent of marketing of the produce.</p>
            </div>
        </div>
        <div class="dropdown">
          <button class="button button1">Major Producing Crops in goa</button>
        </div>
        </div>
        <div className="container">
             <img src="images/goa/goa.jpg"></img>
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
              <p>Coconut Production at over 503 million is 100% higher than the Area of over 153 thousand.</p>
              <p>Production and Area diverged the most when Crop is Coconut, and when Production was almost 503 million higher than the Area.</p>
              <p>From 1997 to 2004, Groundnut's Area increased by 129%.</p>
              <p> Crop Rice has the highest values of both Area and Production.</p>
              <p>Rice Production at over 1.4 million is 61% higher than the Area of over 552 thousand.</p>
              <p>Production and Area diverged the most when Crop is Rice, and when Production was nearly 880 thousand higher than the Area.</p>
              
            </div>
        </div>
        <div class="dropdown">
          <button class="button button1">Gross Value Added by year from Agriculture</button>
            <div class="dropdown-content">
              <p>2021-22* 550600 has the highest values of both 2014-15 and 2011-12.</p>
              <p>550600 2014-15 at almost 311 thousand is 34% higher than the 2011-12 of over 204 thousand.</p>
            </div>
        </div>
        </div>
        <div className="container"> 
          <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Fgoa%2Fgoa-cpa&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model00000189eabfe67d_00000000" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
          <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Fgoa%2Fgoa-gross-value&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model00000189ff3c1220_00000002" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
        </div>
        <div className="container">
        <div class="dropdown">
          <button class="button button1">Production by Crop in Rabi</button>
            <div class="dropdown-content">
              <p>Production is unusually high when Crop is Rice.</p>
              
              <p>Production is unusually high when the combination of Crop and Season is Rice and Rabi.</p>
              <p>From 1997 to 2008, Rice's Production increased by 127%.</p>
              
            </div>
        </div>
        <div class="dropdown">
          <button class="button button1">Production by Crop in Kharif</button>
            <div class="dropdown-content">
              <p>Production is unusually high when Crop is Rice.</p>
              <p>Production is unusually high when the combination of Crop and Season is Rice and Kharif.</p>
              <p>From 1997 to 2004, Rice's Production increased by 255%.</p>
            </div>
        </div>
        </div>
        <div className="container"> 
            <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Fgoa%2Fgoa-rabi&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model00000189eabee205_00000000" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
            <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Fgoa%2Fgoa-kharif&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model00000189eabece28_00000000" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
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
            <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Fgoa%2Fgoa-agri-labor&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model00000189ff36acdb_00000002" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
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
              Area under drip irrigation is more than area under sprinklers </p>
              <p>Area under drip irrigation is 1386 acres.</p>
              <p>Area under sprinkler irrigation is 1346 acres.
              </p>
            </div>
        </div>
        </div>
        <div className="container">
            <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2FAndhra-Pradesh%2FAP-land-in-use&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model00000189f42a8ffe_00000003" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
            <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Fgoa%2Fgoa-drip&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model00000189ff3a29ef_00000003" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
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
              <p>Type 2014-2015 has the highest Total meat but is ranked #7 in Total egg.</p>
              <p>Type 2019-2020 has the highest Total egg but is ranked #5 in Total meat.</p>
              <p>Across all types, the sum of egg is over two thousand.</p>
              <p>Over all types, the sum of egg is nearly 1.3 million.</p>
            </div>
        </div>
        </div>
        <div className="container">
            <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Fbihar%2Fbihar-horticulture&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model00000189ff2c4308_00000003" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
            <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Fgoa%2Fgoa-mm&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model00000189ff424c9f_00000002" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
        </div>
        <div className="container">
        <div class="dropdown">
          <button class="button button1">Insights on yield of major producing crops by year</button>
            <div class="dropdown-content">
              <p>
              <p>Across all crops, the average of groundnuts is over two thousand.</p>
              <p>Across all crops, the average of maize is over 1500.</p>
              <p>Across all crops, the average of oilseeds is over two thousand.</p>
              </p>
            </div>
        </div>
        <div class="dropdown">
          <button class="button button1">Storage capacity by year</button>
            <div class="dropdown-content">
              <p>
              The average storage capacity of Ap is 0.20 metric tonnes.
              </p>
            </div>
        </div>
        </div>
        <div className="container">
        <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Fgoa%2Fgoa-rjc&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model00000189ff422164_00000002" width="700" height="300" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
        <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Fgoa%2Fgoa-storage-capacity&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model00000189ff3fefdf_00000002" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
        </div>
        
    </div>
    );
}

export default goa;