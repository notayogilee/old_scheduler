import React from "react";
import classNames from "classnames";
import "components/DayListItem.scss";

export default function DayListItem(props) {

  const dayClass = {
    classNames("day-list_item--selected", {

    })

  }
}

return (
  <li onClick={() => props.setDay(props.name)}>
    <h2 className="text--regular">{props.name}</h2>
    <h3 className="text--light">{props.spots}</h3>
  </li>
);
}