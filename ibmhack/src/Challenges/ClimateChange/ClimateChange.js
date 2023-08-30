import React from 'react';
import image from './RiskDueToClimateChange.png';
import './ClimateChange.css'; // Import your CSS file

function ClimateChange() {
  return (
    <div>
      {/*<div className="header">
            <h1>Climate Change</h1>
            <button className="exit-button">x</button>
  </div>*/}
    <h1 className="climate-change-title">Climate Change</h1>
    <div className="climate-container">
      <h2 className="title">Effect of Climate Change on Indian Agriculture</h2>

      <p className="paragraph">
        Impact of climate change on Indian agriculture was studied under National Innovations in Climate Resilient Agriculture (NICRA). Rainfed rice yields in India are projected to reduce marginally (less than 2.5%) in 2050 and 2080 and irrigated rice yields by 7% in 2050 and 10% in 2080 scenarios.
        Further, wheat yield projected to reduce by 6-25% in 2100 and maize yields by 18-23%.
        Future climates are likely to benefit chickpea with an increase in productivity (23-54%).
      </p>

      <p className="paragraph">
        The impacts of climate change are global, but countries like India are more vulnerable in view of the high population depending on agriculture. In India, significant negative impacts have been implied with medium-term (2010-2039) climate change, predicted to reduce yields by 4.5 to 9 percent, depending on the magnitude and distribution of warming. Since agriculture makes up roughly 16 percent of India’s GDP, a 4.5 to 9% negative impact on production implies a cost of climate change to be roughly up to 1.5 percent of GDP per year. The Government of India
        has accorded high priority to research and development to cope with climate change in the agriculture sector.
      </p>

      <img src={image} alt="Climate change impact" className="image" />

      <h2 className="sub-title">Government Initiative</h2>
      <h3 className="nicra-title">About NICRA</h3>
      <p className="paragraph">
        National Innovations on Climate Resilient Agriculture (NICRA) is a network project of the Indian Council of Agricultural Research (ICAR) launched in February 2011.
        The project aims to enhance the resilience of Indian agriculture to climate change and climate vulnerability through strategic research and technology demonstration. The research on adaptation and mitigation covers crops, livestock, fisheries, and natural resource management. The project consists of four components viz. Strategic Research, Technology Demonstration, Capacity Building, and Sponsored/Competitive Grants.
        The project was formally launched by the Hon’ble Union Minister for Agriculture & Food Processing Industries Shri Sharad Pawarji on 2nd February 2011.
      </p>
      <a href='http://www.nicra-icar.in/nicrarevised/' target='_blank'><button className="read-more-button">Read more</button></a>
    </div>
    </div>
    
  );
}

export default ClimateChange;
