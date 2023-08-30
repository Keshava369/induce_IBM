import React from "react";
import CardBody from "./CardBody";
import CardHeader from "./CardHeader";

class Card extends React.Component {
    render() {
      return (
        <article className="card">
          <CardHeader image={'https://source.unsplash.com/user/erondu/600x400'}/>
          <CardBody title={'Watershed Development under PMKSY'} 
          text={'The Watershed Development Component (WDC) of Pradhan Mantri Krishi Sinchayee Yojana was launched in 2015. It contributes towards restoration of land through its various interventions which include inter-alia building of water harvesting structures, area brought under protection irrigation, area brought under plantation (afforestation/ horticulture etc.). Objectives of watershed development projects are to improve productive potential of rainfed / degraded land through integrated watershed management.'}/>
        </article>
      )
    }
  }
export default Card;  