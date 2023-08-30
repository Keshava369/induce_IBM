import React from "react";
import CardBody from "./CardBody";
import CardHeader from "./CardHeader";

class Card extends React.Component {
    render() {
      return (
        <article className="card">
          <CardHeader image={'https://source.unsplash.com/user/erondu/600x400'}/>
          <CardBody title={'Mera Gaon Mera Gaurav'} 
          text={'"Mera Gaon Mera Gaurav" (My Village, My Pride) is an initiative launched by the Indian Council of Agricultural Research (ICAR) to foster a connection between agricultural researchers and rural communities. The program aims to promote agricultural advancements and technologies at the grassroots level by engaging scientists and experts in the development of rural areas. Through various outreach activities, knowledge dissemination, training, and capacity-building efforts, "Mera Gaon Mera Gaurav" strives to improve the livelihoods of farmers, enhance agricultural productivity, and create sustainable rural development.'}/>
        </article>
      )
    }
  }
export default Card;  