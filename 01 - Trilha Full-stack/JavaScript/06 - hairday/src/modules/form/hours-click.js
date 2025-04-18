export function hoursClick() {
  const hours = document.querySelectorAll(".hour-available");


  hours.forEach( available => {
    available.addEventListener("click", selected => {

      // Remove a classe das li's não selecionadas.
      hours.forEach(hour => {
        hour.classList.remove("hour-selected");
      });

      // Adiciona a classe na li selecionada
      selected.target.classList.add("hour-selected");
    });
  });
};