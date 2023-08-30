import React from "react";
import CardBody from "./CardBody";
import CardHeader from "./CardHeader";

class Card extends React.Component {
    render() {
      return (
        <article className="card">
          <CardHeader image={'https://source.unsplash.com/user/erondu/600x400'}/>
          <CardBody title={'Surface Minor Irrigation'} 
          text={
          'The SMI scheme was originally incorporated under the Accelerated Irrigation Benefit Programme (AIBP) for special category states in 1999-2000. '+ 
          'With the launch of the Pradhan Mantri Krishi Sinchayee Yojana (PMKSY) in 2015-16, it was incorporated as a component of the Har Khet Ko Pani (HKKP) initiative within PMKSY.' + 
          'The SMI scheme seeks to enhance agricultural productivity by providing financial assistance to minor irrigation projects with irrigation potential under 2,000 hectares that rely on surface water sources. '}/>
        </article>
      )
    }
  }
export default Card;  