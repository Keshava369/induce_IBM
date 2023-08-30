import React from "react";
import CardBody from "./CardBody";
import CardHeader from "./CardHeader";

class Card extends React.Component {
    render() {
      return (
        <article className="card">
          <CardHeader image={'https://source.unsplash.com/user/erondu/600x400'}/>
          <CardBody title={'Kisan Call Centers'} 
          text={'In order to harness the potential of ICT in Agriculture, Ministry of Agriculture launched the scheme "Kisan Call Centres (KCCs)" on January 21, 2004. Main aim of the project is to answer farmer\'s queries on a telephone call in their own dialect. These call Centres are working in 14 different locations covering all the States and UTs. A countrywide common eleven digit Toll Free number 1800-180-1551 has been allotted for Kisan Call Centre. This number is accessible through mobile phones and landlines of all telecom networks including private service providers. Replies to the farmer\'s queries are given in 22 local languages.'}/>
        </article>
      )
    }
  }
export default Card;  