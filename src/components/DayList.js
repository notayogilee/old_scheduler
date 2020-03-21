import React from 'react';
import DayListItem from "components/DayListItem";

export default function DayList(props) {
  console.log(props)
  const dayArray = props.days.map((day, index) => <DayListItem
    key={index}
    name={day.name}
    spots={day.spots}
    selected={day.name === props.day}
    setDay={props.setDay} />)

  return (
    <ul>
      {dayArray}
    </ul>
  )
};
