import React from "react";
import './Card.css';
import image1 from './image1.jpg'
class CardHeader extends React.Component {
    render() {
      //const { image } = this.props;
      var style = { 
        backgroundImage: `url(${image1})`,
      };
      return (
        <header style={style} className="card-header">
          
        </header>
      )
    }
  }

export default CardHeader;