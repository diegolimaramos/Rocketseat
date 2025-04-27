import dayjs from "dayjs";
import { schedulesDay } from "../schedules/load.js";

export const inputToday = document.getElementById("today");
inputToday.value = dayjs().format("YYYY-MM-DD");


inputToday.onchange = () => schedulesDay( inputToday.value);