import React from "react";
import CardBody from "./CardBody";
import CardHeader from "./CardHeader";

class Card extends React.Component {
    render() {
      return (
        <article className="card">
          <CardHeader image={'https://source.unsplash.com/user/erondu/600x400'}/>
          <CardBody title={'Accelerated Irrigation Benefits Programme'} 
          text={'The Accelerated Irrigation Benefits Programme (AIBP) was launched in 1996 as a central assistance programme and is currently implemented by the Ministry of Water Resources, River Development, and Ganga Rejuvenation.  AIBP was initiated with the aim of accelerating the implementation of irrigation projects that exceed the resource capabilities of states.'}/>
        </article>
      )
    }
  }
export default Card;  