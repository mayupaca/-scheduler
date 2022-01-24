import React from "react";
import "components/DayListItem.scss";
import DayListItem from "components/DayListItem";

export default function DayList(props) {
  const {days} = props;

  const dayList = days.map((item) =>
    <DayListItem 
      key={item.id}
      name={item.name}
      spots={item.spots}
      selected={item.name === props.value}
      setDay={props.onChange}
      />
  );

  return <ul>{dayList}</ul>;
}