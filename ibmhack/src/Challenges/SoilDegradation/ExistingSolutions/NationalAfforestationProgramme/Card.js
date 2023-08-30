import React from "react";
import CardBody from "./CardBody";
import CardHeader from "./CardHeader";

class Card extends React.Component {
    render() {
      return (
        <article className="card">
          <CardHeader image={'https://source.unsplash.com/user/erondu/600x400'}/>
          <CardBody title={'National Afforestation Programme'} 
          text={'The overall objective of the National Afforestation Programme (NAP) scheme is ecological restoration of degraded forests and to develop the forest resources with peoples participation. The major components of the scheme includes afforestation under Seven plantation models, maintenance of previous years plantations and Ancillary Activities like soil and moisture conservation activities (SMC), fencing, overheads, monitoring and evaluation (M&E), micro-planning, awareness raising, Entry Point Activities (EPA) etc.'}/>
        </article>
      )
    }
  }
export default Card;  