import React from 'react';
import DayListItem from "components/DayListItem";

export default function DayList(props) {
  console.log(props.days)
  const dayArray = props.days.map((day, index) =>
    <DayListItem
      key={index}
      name={day.name}
      spots={day.spots}
      selected={day.name === props.selectedDay}
      setSelectedDay={props.setSelectedDay}
    // setDay={props.setDay}
    />)

  return (
    <ul>
      {dayArray}
    </ul>
  )
};
