import React from "react";
import CardBody from "./CardBody";
import CardHeader from "./CardHeader";

class Card extends React.Component {
    render() {
      return (
        <article className="card">
          <CardHeader image={'https://source.unsplash.com/user/erondu/600x400'}/>
          <CardBody title={'Soil Health Cards'} 
          text={'Soil Health Card (SHC) is a Government of India'+'s scheme promoted by the Department of Agriculture & Co-operation under the Ministry of Agriculture and Farmers' +'Welfare. It is being implemented through the Department of Agriculture of all the State and Union Territory Governments.' + 
          'A Soil Health Card is used to assess the current status of soil health and, when used over time, to determine changes in soil health that are affected by land management. A Soil Health Card displays soil health indicators and associated descriptive terms.'
          }/>
        </article>
      )
    }
  }
export default Card;  