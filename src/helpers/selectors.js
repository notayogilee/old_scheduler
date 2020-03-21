
export function getAppointmentsForDay(state, chosenDay) {

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