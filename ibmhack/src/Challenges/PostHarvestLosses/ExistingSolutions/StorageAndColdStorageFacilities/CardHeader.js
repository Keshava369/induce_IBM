import React from "react";
import './Card.css';
import image2 from './image2.jpg';

class CardHeader extends React.Component {
    render() {
      const { image } = this.props;
      var style = { 
        backgroundImage: `url(${image2})`,
      };
      return (
        <header style={style} id={image} className="card-header">
          
        </header>
      )
    }
  }

export default CardHeader;