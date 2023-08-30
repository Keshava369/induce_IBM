import React from "react";
import CardBody from "./CardBody";
import CardHeader from "./CardHeader";

class Card extends React.Component {
    render() {
      return (
        <article className="card">
          <CardHeader image={'https://source.unsplash.com/user/erondu/600x400'}/>
          <CardBody title={'Repair Renovation & Restoration'} 
          text={'A pilot scheme for “Repair, Renovation and Restoration (RRR) of Water Bodies directly linked to Agriculture” was launched in January, 2005.' + 
          'Further during 2015-2016, Pradhan Mantri Krishi Sinchayee Yojana (PMKSY) was launched with the aim to enhance '+
          'physical access of water on farm. '+
          'The scheme of RRR of Water Bodies has become a part of PMKSY-HKKP. During 2021-26, RRR of Water Bodies component of PMKSY-HKKP targets to create irrigation potential of 0.9 lakh hectare'}/>
        </article>
      )
    }
  }
export default Card;  