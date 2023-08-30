import React from "react";
import CardBody from "./CardBody";
import CardHeader from "./CardHeader";

class Card extends React.Component {
    render() {
      return (
        <article className="card">
          <CardHeader image={'https://source.unsplash.com/user/erondu/600x400'}/>
          <CardBody title={'What happened in Thialand?'} text={'Kayaks crowd Three Sister Springs, where people and manatees maintain controversial coexistence'}/>
        </article>
      )
    }
  }
export default Card;  