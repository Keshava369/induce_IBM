import React from "react";
import './Card.css';

class Button extends React.Component {
    render() {
      return (
        <a href="https://pmksy-mowr.nic.in/rrr.html#:~:text=A%20pilot%20scheme%20for%20%E2%80%9CRepair,300%20crores." target="_blank"><button className="button-primary">
          <i className="fa fa-chevron-right"></i> Find out more
        </button></a>
      )
    }
  }

export default Button;