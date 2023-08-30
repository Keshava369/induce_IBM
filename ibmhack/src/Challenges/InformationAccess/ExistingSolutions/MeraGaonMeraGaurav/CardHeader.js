import React from "react";
import './Card.css';
import image from './image3.jpg'
class CardHeader extends React.Component {
    render() {
      //const { image } = this.props;
      var style = { 
        backgroundImage: `url(${image})`,
      };
      return (
        <header style={style} className="card-header">
          
        </header>
      )
    }
  }

export default CardHeader;