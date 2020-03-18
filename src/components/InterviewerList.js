import React from 'react';
import InterviewerListItem from "components/InterviewerListItem";
import "components/InterviewerList.scss";

export default function InterviewerList(props) {

  const interviewersArray = props.interviewers.map((interviewer, index) => <InterviewerListItem key={index} name={interviewer.name} avatar={interviewer.avatar} selected={interviewer.selected === props.interviewer} setInterviewer={props.setInterviewer} />)

  return (
    <ul>
      {interviewersArray}
    </ul>

    // <section className="interviewers">
    //   <h4 className="interviewers__header text--light">Interviewer</h4>
    //   <ul className="interviewers__list"></ul>
    // </section>

  );

}