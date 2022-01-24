import React from "react";
import classNames from "classnames";
import "components/DayListItem.scss";


export default function DayListItem(props) {
  const handleClick = () => props.setDay(props.name);

  const dayClass = classNames('day-list__item', {
    'day-list__item--selected': props.selected,
    'day-list__item--full': props.spots === 0,
  });

  const formatSpots = () => {
    if (props.spots > 1) return `${props.spots} spots remaining`;
    if (props.spots === 1) return `1 spot remaining`;
    if (props.spots === 0) return 'no spots remaining';
  };
  
  return (
    // <li>
    //   <h2 className="text--regular">Day Name</h2> 
    //   <h3 className="text--light">X spots remaining</h3>
    // </li>
    <li className={dayClass} onClick={handleClick}>
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{formatSpots()}</h3>
    </li>
    );
}