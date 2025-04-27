import { apiConfig } from "./api-config.js";

export async function scheduleNew({ id, guardianName, petName, telephone, serviceDescription, serviceDate, serviceHour }) {
  
  try {
    const response = await fetch(`${apiConfig.baseUrl}/schedules`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, guardianName, petName, telephone, serviceDescription, serviceDate, serviceHour }),
    });

    alert("Agendamento realizado com sucesso!");

  } catch (error) {
    console.log(error);
    alert("Não foi possível realizar o agendamento, tente novamente.");
  }
};