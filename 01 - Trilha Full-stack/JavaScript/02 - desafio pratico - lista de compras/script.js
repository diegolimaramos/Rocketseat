const form = document.querySelector("form");
const input = document.getElementById("input");
const button = document.querySelector("button");
const ul = document.querySelector("ul");

input.addEventListener("input", () => {
  const hasNumbersRegex = /\d+/g;
  input.value = input.value.replace(hasNumbersRegex, "");
});

form.onsubmit = (event) => {
  event.preventDefault();

  if(input.value.length === 0) {
    return;
  }

  try {
    addItem(input.value);

  } catch (error) {
    console.log(error);
  }
};

function addItem(item) {
  ul.innerHTML += `
    <li id=${item}>
      <div>
        <input type="checkbox" id="${item}" />
        <span>${item}</span>
      </div>
      <img src="./assets/icons/delete.svg" title="Deletar item" onclick="deleteItem(${item})"/>
    </li>
  `;

  input.value = "";
}

function deleteItem(item) {
  const alertText = document.querySelector(".alert");

  ul.removeChild(item[0]);
  alertText.classList.remove("display-none");
  input.focus();

  setTimeout(() => {
    alertText.classList.add("display-none");
    console.log('oi');
  }, 2000);
}
