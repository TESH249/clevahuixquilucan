
const dateInput = document.getElementById('appointment-date');
const timeslotsDiv = document.getElementById('timeslots');

dateInput.addEventListener('change', () => {
  const selectedDate = new Date(dateInput.value);
  const day = selectedDate.getDay(); // 0 = Sunday

  timeslotsDiv.innerHTML = '';

  if (day === 0) {
    timeslotsDiv.innerHTML = '<p>Los domingos no hay citas disponibles.</p>';
    return;
  }

  const startHour = 9;
  const endHour = 20;
  const interval = 45;

  for (let hour = startHour; hour < endHour; hour++) {
    for (let min = 0; min < 60; min += interval) {
      let time = `${hour.toString().padStart(2, '0')}:${min.toString().padStart(2, '0')}`;
      let btn = document.createElement('button');
      btn.textContent = time;
      btn.onclick = () => alert(`Cita seleccionada: ${dateInput.value} a las ${time}`);
      timeslotsDiv.appendChild(btn);
    }
  }
});
