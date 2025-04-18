import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js";
import { schedulesShow } from "../schedules/show.js";
import { hoursLoad } from "../form/hours-load.js";

const selectedDate = document.getElementById("date");

export async function schedulesDay(){
  const date = selectedDate.value;

  // Busca na api os agendamentos do dia
  const dailySchedules = await scheduleFetchByDay({ date });

  // Exibe os agendamentos na tela
  schedulesShow({ dailySchedules });

  // Renderiza as horas disponiveis
  hoursLoad({ date, dailySchedules });
};