import React, { Fragment } from "react";
import "components/Appointment/styles.scss";
import Header from "components/Appointment/Header";
import Show from "components/Appointment/Show";
import Empty from "components/Appointment/Empty";
import Form from "components/Appointment/Form";
import useVisualMode from "hooks/useVisualMode";


export default function Appointment(props) {

  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const { mode, transition, back } = useVisualMode(props.interview ? SHOW : EMPTY);

  function onAdd() {
    transition(CREATE);
  }

  function onCancel() {
    back()
  }

  function save(name, interviewer) {

    const interviewObj = props.interviewers.find(current => current.id === interviewer);
    // console.log('WHATS UP INTERVIEWOBJ', interviewObj)
    const newInterview = {
      student: name,
      interviewer: interviewObj,
    };
    //All good up until here
    // console.log('Form Saved WAZA', props.id, newInterview)
    props.bookInterview(props.id, newInterview);
    // console.log("SHOW", interview.interviewer)
    transition(SHOW);
  }
  return (
    <article className="appointment">
      <Header time={props.time} >
      </Header>

      {mode === EMPTY &&
        <Empty onAdd={onAdd} />}

      {mode === CREATE &&
        <Form
          onCancel={onCancel}
          onSave={save}
          interviewers={props.interviewers}
        />}

      {mode === SHOW && props.interview.interviewer && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
        />
      )}

    </article>
  );
}

