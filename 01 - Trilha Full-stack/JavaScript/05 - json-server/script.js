
const productName = document.getElementById("name")
const productPrice = document.getElementById("price")
const form = document.querySelector("form")

addEventListener("submit", async (event) => {
  event.preventDefault()  

  await fetch("http://localhost:3333/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      id: new Date().getTime().toString(),
      name: productName.value,
      price: productPrice.value,
    })
  })
})