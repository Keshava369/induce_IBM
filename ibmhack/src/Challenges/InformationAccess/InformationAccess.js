import React from 'react';
import FirstCard from './ExistingSolutions/KisanCallCenters/Card';
import SecondCard from './ExistingSolutions/KisanSuvidhaWebapp/Card';
import ThirdCard from './ExistingSolutions/MeraGaonMeraGaurav/Card'
import './InformationAccess.css';
import '../AllCards.css';
const InformationAccess = () => {
    return(
        <div>
        
            <h1 id="information-access-title">Timely Access to Information</h1>
            

        <div className="colorful-text-container">
            <h2 className="topic-heading">Importance of Timely Access to Information for Farmers</h2>
            <ul className="points-list">
                <li>Enhances crop yield and quality</li>
                <li>Enables informed decision-making</li>
                <li>Mitigates risks and losses</li>
                <li>Facilitates adoption of best practices</li>
                <li>Supports efficient resource utilization</li>
                <li>Encourages sustainable farming methods</li>
                <li>Improves pest and disease management</li>
                <li>Provides market insights for better pricing</li>
            </ul>
        </div>

        <h2 className='beautiful-heading'>Government Schemes</h2>
        <div style={{display: 'flex', flexWrap: 'wrap'}} className='card-container'>
            <FirstCard />
            <SecondCard />
            <ThirdCard />
        </div>
        
    </div>
    );
}
export default InformationAccess;