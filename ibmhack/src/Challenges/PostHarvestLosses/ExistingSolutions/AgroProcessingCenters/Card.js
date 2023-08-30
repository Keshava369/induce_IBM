import React from "react";
import CardBody from "./CardBody";
import CardHeader from "./CardHeader";
import {image1} from './image1.jpg'
class Card extends React.Component {
    render() {
      return (
        <article className="card">
          <CardHeader image={'https://source.unsplash.com/user/erondu/600x400'}/>
          <CardBody title={'Agro-Processing Centers'} 
          text={'A set of techno-economic activities carried out for conservation and handling of agricultural produce and to make it usable as food, feed, fibre, fuel or industrial raw material is defined as agro-processing. '+ 
          'Agro-processing centre is comprised of different sectors in food processin such as fruits & vegetables, cereals or other consumer food products, rice'+
          ' milling, flour milling, pulse processing, spices grinding, oilseeds processing and other agro-horticultural sectors. An APC creates additional value to a product so as to increase marketability of surplus produce available in the village, cluster of villages or surrounding locality.'
          }/>
        </article>
      )
    }
  }
export default Card;  