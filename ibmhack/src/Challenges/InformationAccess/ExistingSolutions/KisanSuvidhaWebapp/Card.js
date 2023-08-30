import React from "react";
import CardBody from "./CardBody";
import CardHeader from "./CardHeader";

class Card extends React.Component {
    render() {
      return (
        <article className="card">
          <CardHeader image={'https://source.unsplash.com/user/erondu/600x400'}/>
          <CardBody title={'Kisan Suvidha'} 
          text={'Kisan Suvidha is a Smart App for farmers. '+ 
          'It is an initiative by National Informatics Centre. '+
          'All services/information relevant to farmers are linked here as a common platform. '+
          'It will include various schemes and services of the Central and State Governments for Farmers. '+
          'This app helps farmers to know about Fertilizers Dealers, Stock position and prices, Buyer\’s purchase record. To know Manufacturers / Dealers of Agricultural Machinery, Calculate subsidy, know application status, Register themselves for subsidy, Know about Custom hiring Centres, check availability of agriculture machinery for sale and purchase. To know about Seed Varieties and Dealers etc'}/>
        </article>
      )
    }
  }
export default Card;  