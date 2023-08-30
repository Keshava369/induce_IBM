import React from "react";
import Button from "./Button";
import './Card.css';

class CardBody extends React.Component {
    render() {
      return (
        <div className="card-body">
          <h3 className="scrollable-h3">
            {this.props.title}
          </h3>
          <p className="body-content">{this.props.text}</p>
          <Button />
        </div>
      )
    }
  }

export default CardBody;