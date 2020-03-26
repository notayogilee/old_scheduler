import React, { useState } from "react";
import Button from "components/Button";
import InterviewerList from "components/InterviewerList";


export default function Form(props) {

  const [name, setName] = useState(props.name || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);

  function reset() {

    setName("");
    setInterviewer(null);

  }

  function cancel() {

    reset();
    props.onCancel();

  }

  function save() {
    console.log("Form Namd and int", name, interviewer)
    props.onSave(name, interviewer);

  }

  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off"
          onSubmit={event => event.preventDefault()}>
          <input
            className="appointment__create-input text--semi-bold"
            value={name}
            name="name"
            type="text"
            onChange={(event) => setName(event.target.value)}
            placeholder="Enter Student Name"

          /*
            This must be a controlled component
          */

          />

        </form>
        <InterviewerList

          // set the interviewers to an empty array temporarily
          interviewers={props.interviewers}
          value={interviewer}
          onChange={setInterviewer}
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button onClick={cancel} danger>Cancel</Button>
          <Button onClick={save} confirm>Save</Button>
        </section>
      </section>
    </main>
  )
}

