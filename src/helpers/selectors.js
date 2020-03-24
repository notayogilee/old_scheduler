
function getAppointmentsForDay(state, chosenDay) {

  let appointmentsArray = [];

  const filteredDays = state.days.filter(day => day.name === chosenDay);

  if (filteredDays.length === 0) {
    return appointmentsArray;
  } else {

    const chosenAppointments = filteredDays[0].appointments;

    for (let chosenAppointment of chosenAppointments) {
      for (let i = 0; i < Object.values(state.appointments).length; i++) {

        if (chosenAppointment === Object.values(state.appointments)[i].id) {

          appointmentsArray.push(Object.values(state.appointments)[i]);

        }
      }
    }
    return appointmentsArray;
  }
}

function getInterviewersForDay(state, chosenDay) {

  let interviewersArray = [];

  const filteredDays = state.days.filter(day => day.name === chosenDay);

  if (filteredDays.length === 0) {
    return interviewersArray;
  } else {

    const chosenAppointments = filteredDays[0].appointments;

    for (let chosenAppointment of chosenAppointments) {
      for (let i = 0; i < Object.values(state.appointments).length; i++) {

        if (chosenAppointment === Object.values(state.appointments)[i].id) {

          interviewersArray.push(Object.values(state.appointments)[i]);

        }
      }
    }
    return interviewersArray;
  }
}

function getInterview(state, interview) {

  let id;
  let originalAppointment = interview;

  if (!originalAppointment) {

    return null;

  } else {

    for (let interviewer in state.interviewers) {
      if (parseInt(interviewer) === interview.interviewer) {
        id = interview.interviewer;
      }
    }
    originalAppointment.interviewer = state.interviewers[id];

    return originalAppointment;
  }
}

module.exports = { getAppointmentsForDay, getInterviewersForDay, getInterview }
