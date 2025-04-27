import dayjs from "dayjs";
import { openingHours} from "../../utils/opening-hours.js";
import { scheduleNew} from "../../services/schedule-new.js";
import { toggleModal } from "./modal.js";
import { schedulesDay } from "../schedules/load.js";

const form = document.querySelector("form");
const guardianName = document.getElementById("guardianName");
const petName = document.getElementById("petName");
const telephone = document.getElementById("telephone");
const serviceDescription = document.getElementById("serviceDescription");
const serviceDate = document.getElementById("serviceDate");
const serviceHour = document.getElementById("serviceHour");
const careHours = document.getElementById("careHours");

openingHours.forEach((hour) => {
  careHours.innerHTML += `<option value="${hour}" readonly=true >${hour}</option>`;
});

serviceDate.min = dayjs(new Date()).format("YYYY-MM-DD");

form.onsubmit = async (event) => {
  event.preventDefault();

  try {
    if(!guardianName.value || !petName.value || !telephone.value || !serviceDescription.value || !serviceDate.value || !serviceHour.value) {
      return alert("Preencha todos os campos");
    }
    
    const id = new Date().getTime();

    await scheduleNew({
      id: id.toString(),
      guardianName: guardianName.value.trim(),
      petName: petName.value.trim(),
      telephone: telephone.value.trim(),
      serviceDescription: serviceDescription.value.trim(),
      serviceDate: serviceDate.value,
      serviceHour: serviceHour.value
    });
    
    form.reset();
    schedulesDay();
    toggleModal();

  } catch (error) {
    console.log(error);
    alert("Não foi possível realizar o agendamento, tente novamente.");
  }
};