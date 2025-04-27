import IMask from "imask";

const periodMorning = document.getElementById("period-morning");
const periodAfternoon = document.getElementById("period-afternoon");
const periodNight = document.getElementById("period-night");
const inputTelephone = document.getElementById('telephone');

const maskOptions = {
  mask: '(00) 0 0000-0000'
};
const mask = IMask(inputTelephone, maskOptions);

export function schedulesShow({ dailySchedules }) {
  try {
    periodMorning.innerHTML = "";
    periodAfternoon.innerHTML = "";
    periodNight.innerHTML = "";

    dailySchedules.forEach(schedule => {
      const agendamento = `
        <li data-schedule-id="${schedule.id}">
          <div>
            <strong>${schedule.serviceHour}</strong>
            <span><strong>${schedule.petName}</strong> / ${schedule.guardianName}</span>
          </div>
          <div>
            <span>${schedule.serviceDescription}</span>
            <span class="cancel">Remover agendamento</span>
          </div>
        </li>
      `;

      if(schedule.serviceHour <= "12:00") {
        periodMorning.innerHTML += agendamento;

      } else if(schedule.serviceHour > "12:00" && schedule.serviceHour <= "18:00") {
        periodAfternoon.innerHTML += agendamento;
      
      } else {
        periodNight.innerHTML += agendamento;
      }
    });
    
  } catch (error) {
    console.log(error);
    alert("Nao foi possivel exibir os agendamentos, tente novamente.");
  }
};