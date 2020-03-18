import React from 'react';
import classNames from "classnames";
import "components/InterviewerListItem.scss";

export default function InterviewListItem(props) {

  const interviewerClass = classNames("interviewers__item", {
    "interviewers__item--selected": props.selected
  });

  return (
    <span className={interviewerClass}
      onClick={() => props.setInterviewer(props.name)
      }>
      < img
        className="interviewers__item-image"
        src={props.avatar}
        alt={props.name}
      />
      {props.selected && props.name}
    </span >
  );
}