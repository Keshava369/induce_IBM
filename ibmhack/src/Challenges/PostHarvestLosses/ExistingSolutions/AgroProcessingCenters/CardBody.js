import React from "react";
import Button from "./Button";
import './Card.css';
import '../../../../Challenges/AllCards.css';
class CardBody extends React.Component {
    render() {
      return (
        <div className="card-body">
          <div className="scrollable-h3">
          <h3>{this.props.title}</h3>
          </div>
          <p className="body-content">{this.props.text}</p>
          
          <Button />
        </div>
      )
    }
  }

export default CardBody;