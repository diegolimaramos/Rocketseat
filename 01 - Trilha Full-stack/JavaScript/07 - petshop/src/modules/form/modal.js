export const container = document.querySelector(".container");
export const containerModal = document.querySelector(".container-modal");

const buttonOpenModal = document.querySelector(".container button");
const buttonCloseModal = document.querySelector(".close-modal");

buttonOpenModal.addEventListener("click", () => {
  toggleModal();
});

buttonCloseModal.addEventListener("click", () => {
  toggleModal();
});


export function toggleModal() {
  containerModal.classList.toggle("inline-flex");
  container.classList.toggle("filter-blur");
}
