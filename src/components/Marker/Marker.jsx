import React from 'react';
import '../../assets/Timeline.css';

const Marker = (props) => {
  return(
    <span className="custom-marker p-shadow-2" style={{ backgroundColor: props.color }}>
      <i className={props.icon}></i>
    </span>
  );
}

export default Marker;