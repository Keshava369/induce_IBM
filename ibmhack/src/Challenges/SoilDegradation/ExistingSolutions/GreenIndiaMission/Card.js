import React from "react";
import CardBody from "./CardBody";
import CardHeader from "./CardHeader";

class Card extends React.Component {
    render() {
      return (
        <article className="card">
          <CardHeader image={'https://source.unsplash.com/user/erondu/600x400'}/>
          <CardBody title={'National Mission for Green India'} 
          text={'The National Mission for a Green India or the commonly called Green India Mission (GIM), is one of the eight Missions under the National Action Plan on Climate Change (NAPCC). It aims to restore and enhance forest cover, improve biodiversity, and address land degradation. Through afforestation, reforestation, and sustainable land management practices, the Green India Mission combats land degradation by promoting soil conservation, watershed management, and ecosystem restoration.'}/>
        </article>
      )
    }
  }
export default Card;  