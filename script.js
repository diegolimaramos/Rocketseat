const cards = document.querySelector(".cards");

const projects = [
  {
    "id": 1,
    "name": "Página de receita",
    "preview": "./01 - Trilha Full-stack/html/01 - pagina-de-receita/index.html",
    "img": "./01 - Trilha Full-stack/html/01 - pagina-de-receita/assets/preview.png",
    "stacks": ["html"],
    "projectStatus": "complete",
  },
  {
    "id": 2,
    "name": "Desafio - Local Turístico",
    "preview": "./01 - Trilha Full-stack/html/02 - desafio-pratico-local-turistico/index.html",
    "img": "./01 - Trilha Full-stack/html/02 - desafio-pratico-local-turistico/assets/preview.png",
    "stacks": ["html", "css"],
    "projectStatus": "complete",
  },
  {
    "id": 3,
    "name": "Perfil de viagens",
    "preview": "./01 - Trilha Full-stack/html/03 - travel-gram/index.html",
    "img": "./01 - Trilha Full-stack/html/03 - travel-gram/assets/preview.png",
    "stacks": ["html", "css"],
    "projectStatus": "complete",
  },
  {
    "id": 4,
    "name": "Portal de notícias",
    "preview": "./01 - Trilha Full-stack/html/04 - portal-de-noticias/index.html",
    "img": "./01 - Trilha Full-stack/html/04 - portal-de-noticias/assets/preview.png",
    "stacks": ["html", "css"],
    "projectStatus": "complete",
  },
  {
    "id": 5,
    "name": "Desafio - Portfolio Dev",
    "preview": "./01 - Trilha Full-stack/html/05 - desafio-pratico-portfolio-dev/index.html",
    "img": "./01 - Trilha Full-stack/html/05 - desafio-pratico-portfolio-dev/assets/preview.png",
    "stacks": ["html", "css"],
    "projectStatus": "complete",
  },
  {
    "id": 6,
    "name": "Formulário de matrícula",
    "preview": "./01 - Trilha Full-stack/html/06 - formulario-de-matricula/index.html",
    "img": "./01 - Trilha Full-stack/html/06 - formulario-de-matricula/assets/preview.png",
    "stacks": ["html", "css"],
    "projectStatus": "complete",
  },
  {
    "id": 7,
    "name": "Desafio - Formulário de Convite",
    "preview": "./01 - Trilha Full-stack/html/07 - desafio-pratico-formulario-de-convite/index.html",
    "img": "./01 - Trilha Full-stack/html/07 - desafio-pratico-formulario-de-convite/assets/preview.png",
    "stacks": ["html", "css"],
    "projectStatus": "complete",
  },
  {
    "id": 8,
    "name": "Landing Page Zingen",
    "preview": "./01 - Trilha Full-stack/html/08 - zingen/index.html",
    "img": "./01 - Trilha Full-stack/html/08 - zingen/assets/preview.png",
    "stacks": ["html", "css"],
    "projectStatus": "complete",
  },
  {
    "id": 9,
    "name": "Conversor de moedas",
    "preview": "./01 - Trilha Full-stack/JavaScript/01 - convert-template/index.html",
    "img": "./01 - Trilha Full-stack/JavaScript/01 - convert-template/assets/preview.png",
    "stacks": ["html", "css", "javascript"],
    "projectStatus": "complete",
  },
  {
    "id": 10,
    "name": "Desafio - Lista de compras",
    "preview": "./01 - Trilha Full-stack/JavaScript/02 - desafio pratico - lista de compras/index.html",
    "img": "./01 - Trilha Full-stack/JavaScript/02 - desafio pratico - lista de compras/assets/preview.png",
    "stacks": ["html", "css", "javascript"],
    "projectStatus": "complete",
  },
  {
    "id": 11,
    "name": "Reembolso",
    "preview": "./01 - Trilha Full-stack/JavaScript/03 - reembolso/index.html",
    "img": "./01 - Trilha Full-stack/JavaScript/03 - reembolso/assets/preview.png",
    "stacks": ["html", "css", "javascript"],
    "projectStatus": "complete",
  },
  {
    "id": 12,
    "name": "Sorteador de números",
    "preview": "./01 - Trilha Full-stack/JavaScript/04 - desafio pratico - sorteador de numeros/index.html",
    "img": "./01 - Trilha Full-stack/JavaScript/04 - desafio pratico - sorteador de numeros/assets/preview.png",
    "stacks": ["html", "css", "javascript"],
    "projectStatus": "stoped",
  },
  {
    "id": 13,
    "name": "Agendamento de atendimento",
    "preview": "./01 - Trilha Full-stack/JavaScript/06 - hairday/index.html",
    "img": "./01 - Trilha Full-stack/JavaScript/06 - hairday/src/assets/preview.png",
    "stacks": ["html", "css", "javascript"],
    "projectStatus": "complete",
  },
  {
    "id": 14,
    "name": "Agendamento petshop",
    "preview": "./01 - Trilha Full-stack/JavaScript/07 - petshop/index.html",
    "img": "./01 - Trilha Full-stack/JavaScript/07 - petshop/src/assets/preview.png",
    "stacks": ["html", "css", "javascript"],
    "projectStatus": "inProgress",
  },
]


function createCard(projects) {
  try {
    const projectsStatus = {
      "inProgress": "Em andamento",
      "complete": "Completo",
    "stoped": "Parado",
  };
  
  projects.forEach(project => {
    cards.innerHTML += `
    <a class="card ${project.status}" href="${project.preview}" target="_blank">
    <img src="${project.img}" alt="${project.name}" />
    <span class="icons">
    ${project.stacks.map(stack => `<img src="./assets/icons/${stack}.svg" alt="${stack}" />`).join("")}
    </span>
      <span class="status ${project.projectStatus}">${projectsStatus[project.projectStatus]}</span>
      <span>${project.name}</span>
      </a>
      `;
    });
    
  } catch (error) {
    console.log(error);
    alert("Não foi possível carregar os projetos.");
  }
}
  createCard(projects);
