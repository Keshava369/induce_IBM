import React from "react";
import { Link } from "react-router-dom";
import './StorageAndColdStorageCapacityIframes.css'

const StorageAndColdStorageFacilities = () => {
   
        
        return(
            <div>
            <div className="header">
            <Link to='/challenges/post-harvest-losses' className="exit-button">x</Link>
                <h1>State-wise Storage and Cold Storage Capacities</h1>
                
            </div>
            <div id="storage-capacity-iframes">
                <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Fstate%2Bvs%2Bstorage%2Bcapacity%2B%2528In%2Blakh%2Bmetric%2Btonnes%2529&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
                <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2Fstate%2Bvs%2Bcold%2Bstorage%2Bcapacity%2B%2528In%2Bmetric%2Btonnes%2529&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
        </div>
            </div>
        );
    
}

export default StorageAndColdStorageFacilities;