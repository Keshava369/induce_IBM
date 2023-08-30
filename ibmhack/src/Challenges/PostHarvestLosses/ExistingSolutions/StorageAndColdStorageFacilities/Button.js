import React from "react";
import './Card.css';
import { Link } from "react-router-dom";

class Button extends React.Component {
    render() {
      return (
        <Link className="button-primary" to='/challenges/post-harvest-losses/storage-and-cold-storage-capacities'>
          <i className="fa fa-chevron-right"></i> Find out more
        </Link>
      )
    }
  }

export default Button;