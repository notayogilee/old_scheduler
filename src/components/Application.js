import React, { useState, useEffect } from "react";
import axios from "axios";

import "components/Application.scss";
import DayList from "./DayList";
import Appointment from "components/Appointment";
import { getAppointmentsForDay, getInterview, getInterviewersForDay } from "helpers/selectors";


export default function Application(props) {

  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
  });

  const setDay = day => setState({ ...state, day });

  useEffect(() => {
    const first = axios.get("/api/days");
    const second = axios.get("/api/appointments");
    const third = axios.get("/api/interviewers");
    Promise.all([
      first,
      second,
      third

    ]).then((all) => {

      setState(prev => ({ ...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data }));

    });
  }, [])

  // console.log("LIST of appointments", state.appointments)

  function bookInterview(id, interviewObj) {

    console.log("INTerview", interviewObj)
    console.log("ID:", id)

    const appointment = { ...state.appointments[id] };
    console.log('WAAAZZZZAAA', appointment)
    appointment.interview = interviewObj
    console.log('WAAAZZZZAAA2THERETURN', appointment)

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    console.log('WAAAZZZZAAA', appointments)
    setState({
      ...state,
      appointments
    })
  }

  // function bookInterview(id, interviewId, name) {
  //   const interviewObj = state.interviewers[interviewId];
  //   const appointment = { ...state.appointments[id] };
  //   appointment.interview = {
  //     student: name,
  //     interviewer: interviewObj,
  //   }

  //   const appointments = {
  //     ...state.appointments,
  //     [id]: appointment
  //   };

  //   console.log('WAAAZZZZAAA', appointments)
  //   setState({
  //     ...state,
  //     appointments
  //   })
  // }

  // console.log("state", state)

  const appointments = getAppointmentsForDay(state, state.day);
  // console.log('apts:', appointments);

  const interviewers = getInterviewersForDay(state, state.day);
  // console.log("int", interviewers)

  const schedule = appointments.map(appointment => {
    const interview = getInterview(state, appointment.interview);
    // console.log("interview", interview)

    return (
      <Appointment
        key={appointment.id}
        id={appointment.id}
        time={appointment.time}
        bookInterview={bookInterview}
        interview={interview}
        interviewers={interviewers}
      />
    );
  });


  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
          <DayList

            days={state.days}
            setDay={setDay}
            day={state.day}
          />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">
        {schedule}
        <Appointment key="last" time="5pm" />
      </section>
    </main>
  );
}
