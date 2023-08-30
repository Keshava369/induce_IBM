import React from "react";
import './Card.css';

class Button extends React.Component {
    render() {
      return (
        <a href="https://ciphet.icar.gov.in/schemes-initiatives/schemes/apc/" target="_blank" ><button className="button-primary" >
          <i className="fa fa-chevron-right"></i> Find out more
        </button></a>
      )
    }
  }

export default Button;