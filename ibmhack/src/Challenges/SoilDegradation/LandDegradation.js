import React from "react";
import FirstCard from './ExistingSolutions/GreenIndiaMission/Card';
import SecondCard from './ExistingSolutions/NationalAfforestationProgramme/Card';
import ThirdCard from './ExistingSolutions/SoilHealthCards/Card';
import FourthCard from './ExistingSolutions/WatershedDevelopment/Card';
import './LandDegradation.css'
const SoilDegradation = () => {
    return (
    <div>
    <h1 id="land-degradation-title">Land Degradation</h1>
    <div className="land-degradation-container">
      <h3>Impact of Land Degradation on Indian Agriculture</h3>
      <p>
        Land degradation poses a significant threat to Indian agriculture, affecting both productivity and sustainability. The following are some key impacts:
      </p>
      <ul>
        <li>**Soil Erosion:** Land degradation often leads to soil erosion, reducing the fertile topsoil layer that is essential for crop growth.</li>
        <li>**Reduced Crop Yield:** Degraded land yields lower crop production, contributing to food insecurity and economic challenges.</li>
        <li>**Water Scarcity:** Degraded land has reduced water retention capacity, exacerbating water scarcity issues for irrigation.</li>
        <li>**Biodiversity Loss:** Land degradation destroys habitats, leading to a loss of plant and animal diversity that can aid agriculture.</li>
        <li>**Desertification:** Some regions face desertification due to land degradation, rendering land unsuitable for cultivation.</li>
      </ul>
      <p>
        Addressing land degradation requires sustainable land management practices, reforestation, erosion control, and community engagement.
      </p>
    </div>
    <h2 className="beautiful-heading">Government Initiatives</h2>
        <div style={{display: 'flex', flexWrap: 'wrap'}} className='card-container'>
            <FirstCard />
            <SecondCard />
            <ThirdCard />
            <FourthCard />
        </div>
    </div>
    );
}

export default SoilDegradation;