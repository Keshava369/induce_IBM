import React from "react";
import './Card.css';

class Button extends React.Component {
    render() {
      return (
        <a href="https://www.indiascienceandtechnology.gov.in/st-visions/national-mission/national-mission-green-india-gim#:~:text=It%20was%20launched%20in%20February,water%2D%20and%20livelihood%2Dsecurity." target="_blank"><button className="button-primary">
          <i className="fa fa-chevron-right"></i> Find out more
        </button></a>
      )
    }
  }

export default Button;