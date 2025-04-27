import { schedulesDay } from "./load.js";
import { scheduleCancel } from "../../services/schedule-cancel.js";
import { inputToday } from "../form/date-change.js";

const periods = document.querySelectorAll(".period");

periods.forEach(period => {
  period.addEventListener("click", async (event) => {
    if(event.target.classList.contains("cancel")) {
      const item = event.target.closest("li");
      const { scheduleId } = item.dataset;

      if(scheduleId) {
        const cancel = confirm("Deseja realmente cancelar o agendamento?");
        
        if(cancel) {
          await scheduleCancel({ id: scheduleId });
          schedulesDay(inputToday.value);
        }
      }
    }
  });
});
