import React from 'react';
import AIBP from './ExistingSolutions/AIBP/Card';
import CADWM from './ExistingSolutions/CADWM/Card';
import HKKP from './ExistingSolutions/HKKP/Card';
import RRR from './ExistingSolutions/RRR/Card';
import SMI from './ExistingSolutions/SMI/Card';
import './WaterScarcityAndIrrigation.css'

function Water_Scarcity_and_Irrigation(){
    const centeredStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh', // Ensures the element takes at least the full viewport height
        margin: '0px',
        
        flexWrap: 'wrap'
      };
    return(
        <div>
            <h1 id="water-scarcity-title">Water Scarcity and irrigation</h1>

            <div style={centeredStyle}>
            <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2FChallenges%2FWater%2BScarcity%2B%2526%2BIrrigation%2Fstate%2Bvs%2Bpercentage%2Bof%2Birrigated%2Barea&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard&amp;subView=model0000018a306daabf_00000000" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>
            <iframe src="https://us1.ca.analytics.ibm.com/bi/?perspective=dashboard&amp;pathRef=.my_folders%2FChallenges%2FWater%2BScarcity%2B%2526%2BIrrigation%2FCrop%2Bvs%2Bpercentage%2Bof%2Birrigated%2Barea&amp;closeWindowOnLastView=true&amp;ui_appbar=false&amp;ui_navbar=false&amp;shareMode=embedded&amp;action=view&amp;mode=dashboard" width="700" height="500" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen=""></iframe>           
            </div>

            <h2 className='beautiful-heading'>Government Initiatives</h2>

            <div style={{display: 'flex', flexWrap: 'wrap'}} className='card-container'>
            <AIBP />
            <CADWM />
            <HKKP />
            <RRR />
            <SMI />
        </div>

        </div>
        
    );
}
export default Water_Scarcity_and_Irrigation;