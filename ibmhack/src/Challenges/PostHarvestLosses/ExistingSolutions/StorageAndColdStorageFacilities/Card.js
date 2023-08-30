import React from "react";
import CardBody from "./CardBody";
import CardHeader from "./CardHeader";

class Card extends React.Component {
    render() {
      return (
        <article className="card">
          <CardHeader image={'https://source.unsplash.com/user/erondu/600x400'}/>
          <CardBody title={'Storage and Cold storage facilities'} 
          text={'Storage and cold-storage facilities are crucial in preventing and reducing post-harvest losses in agriculture. These facilities provide a controlled environment that slows down the deterioration of perishable crops, fruits, and vegetables, extending their shelf life. By maintaining proper temperature, humidity, and ventilation conditions, they inhibit the growth of pathogens and reduce enzymatic activities that lead to spoilage. This preservation helps farmers store their produce until market conditions are favorable, reducing wastage and ensuring a consistent supply of fresh products.'+
          ' Click on the link below to access state-wise storage and cold-storage capacities in India.'}/>
        </article>
      )
    }
  }
export default Card;  