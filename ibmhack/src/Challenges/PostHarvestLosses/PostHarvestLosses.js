import React from 'react';
import SecondCard from './ExistingSolutions/AgroProcessingCenters/Card';
import FirstCard from './ExistingSolutions/StorageAndColdStorageFacilities/Card';
import './PostHarvestLosses.css';
import '../AllCards.css';
const PostHarvestLosses = () => {
    const centeredStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh', // Ensures the element takes at least the full viewport height
        marginTop: '0px',
        display: 'flex', 
        flexWrap: 'wrap'
      };
    return(
        <div>
        
        <h1 id="post-harvest-losses-title">Post Harvest Losses</h1>
            
        <div style={centeredStyle}>
            <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&pathRef=.my_folders%2FChallenges%2FPost%2BHarvest%2BLosses%2FPost%2BHarvest%2BLosses%2BPie%2B%25282022%2529&closeWindowOnLastView=true&ui_appbar=false&ui_navbar=false&shareMode=embedded&action=view&mode=dashboard" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowFullScreen=""></iframe>
            <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&pathRef=.my_folders%2FChallenges%2FPost%2BHarvest%2BLosses%2FComparision%2Bof%2Blosses%2Bin%2B2015%2Band%2B2022&closeWindowOnLastView=true&ui_appbar=false&ui_navbar=false&shareMode=embedded&action=view&mode=dashboard" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowFullScreen=""></iframe>    
        </div>
        <ul>
        <li>** There has been no significant reduction in the percentages of post-harvest losses across various crops or commodities from the period of 2015 to 2022.</li>
        <li>** Fruits, fisheries, and vegetables alone account for 40% of the post-harvest losses.</li>
        </ul>
        
        <h2 className="beautiful-heading">Government Schemes</h2>
        <div style={{display: 'flex', flexWrap: 'wrap'}} className='card-container'>
            <FirstCard />
            <SecondCard />
        </div>
        
    </div>
    );
}
export default PostHarvestLosses;