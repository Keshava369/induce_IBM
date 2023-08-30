import React from "react";
import CardBody from "./CardBody";
import CardHeader from "./CardHeader";

class Card extends React.Component {
    render() {
      return (
        <article className="card">
          <CardHeader image={'https://source.unsplash.com/user/erondu/600x400'}/>
          <CardBody title={'Har Khet Ko Pani'} 
          text={'"Har Khet Ko Pani" (Water to Every Field) is a key component of the Pradhan Mantri Krishi Sinchayee Yojana (PMKSY) in India, which is a flagship program aimed at promoting efficient water use in agriculture. The scheme was launched with the goal of providing irrigation water to every agricultural field in the country. It focuses on enhancing water use efficiency, agricultural productivity, and rural livelihoods through sustainable water management practices.'}/>
        </article>
      )
    }
  }
export default Card;  