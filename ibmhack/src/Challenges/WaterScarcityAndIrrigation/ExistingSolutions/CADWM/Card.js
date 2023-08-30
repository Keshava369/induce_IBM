import React from "react";
import CardBody from "./CardBody";
import CardHeader from "./CardHeader";

class Card extends React.Component {
    render() {
      return (
        <article className="card">
          <CardHeader image={'https://source.unsplash.com/user/erondu/600x400'}/>
          <CardBody title={'Command Area Development & Water Management'} 
          text={'The main objective of CADWM Programme is to enhance utilisation of irrigation potential created and improve agriculture productivity and production on a sustainble basis through integrated and coordinated approach involving multidisciplinary team. The Programme was launched in 1974-75 and was restructured and renamed as Command Area Development and Water Management (CADWM) programme in 2004.'}/>
        </article>
      )
    }
  }
export default Card;  
