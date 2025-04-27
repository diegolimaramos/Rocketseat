import dayjs from "dayjs";
import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js";
import { schedulesShow } from "../schedules/show.js";

export async function schedulesDay(date) {
  const dailySchedules = await scheduleFetchByDay({ date });

  schedulesShow({ dailySchedules });
};

