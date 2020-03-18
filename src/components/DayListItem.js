import React from "react";
import classNames from "classnames";
import "components/DayListItem.scss";

export default function DayListItem(props) {

  const dayClass = classNames("day-list__item", {
    "day-list__item--selected": props.selected,
    "day-list__item--full": props.spots === 0
  });

  function formatSpots() {
    let message = props.spots + ' spots remaining';

    if (props.spots === 0) {
      message = 'no spots remaining';
    } else if (props.spots === 1) {
      message = props.spots + ' spot remaining';
    }

    return message;

  }

  return (
    <li
      className={dayClass}
      onClick={() => props.setDay(props.name)}
    >
      <h2 className="text--regular">{props.name}</h2>

      <h3 className="text--light">{formatSpots()}</h3>

    </li>
  );
}
