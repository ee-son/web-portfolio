const itemsPerPage = 8;
let currentPage = 1;

const projects = [
  {
    title: "Book Store",
    image: "assets/image/project/book-store.png",
    description:
      "Personal website project that can do CRUD operations. It contains some features such as book’s rating, favorites, and popular books.",
    tech: ["Laravel"],
  },
  {
    title: "CV Stone Detector",
    image: "assets/image/project/auto-cutting.png",
    description:
      "A website for drill cuttings analysis using computer vision technology to determine stones types and characteristics.",
    tech: ["Flask", "Nextjs", "YOLOv8"],
  },
  {
    title: "Gamesite",
    image: "assets/image/project/gamesite.png",
    description: "Website project with wishlist feature to learn dynamic website concept and is already responsive.",
    tech: ["PHP", "CSS", "Javascript", "Bootstrap"],
  },
  {
    title: "Inpatient Room Reservation",
    image: "assets/image/project/inpatient-room-reservation.png",
    description: "A website project used to make room reservations in hospitals with REST API technology",
    tech: ["Laravel", "FastAPI"],
  },
  {
    title: "Differentiated Thyroid Cancer Recurrence Prediction",
    image: "assets/image/project/diff-thyroid-cancer.png",
    description: "Website project to predict recurrence of differentiated thyroid cancer using random forest classification model.",
    tech: ["HTML", "Bootstrap", "Flask"],
  },
  {
    title: "Poisonous Mushroom Prediction",
    image: "assets/image/project/poisonous-mushroom.png",
    description: "Website project to predict which mushrooms are poisonous and which are not using logistic regression classification model.",
    tech: ["Python", "Streamlit"],
  },
  {
    title: "Prototype Design for Sibukin",
    image: "assets/image/project/sibukin.png",
    description: "A prototype design for the Sibukin website starting from the landing page design, login, signup, and user dashboard.",
    tech: ["Figma"],
  },
  {
    title: "Prototype Design for Madana Teknologi",
    image: "assets/image/project/madana.png",
    description: "A prototype design for the Madana Teknologi website starting from the landing page design, login, and admin dashboard.",
    tech: ["Figma"],
  },
  {
    title: "Automated UI Testing for Madana Teknologi",
    image: "assets/image/project/madana-ui-test.png",
    description: "This project develops automated UI testing for Madana Teknologi's website to ensure the interface functionality works as expected.",
    tech: ["Java", "Selenium", "Cucumber"],
  },
  {
    title: "Othello Game",
    image: "assets/image/project/othello.png",
    description: "This project develops the classic Othello (Reversi) game using Java Swing. It includes full game logic, move validation, turn handling, and automatic score calculation.",
    tech: ["Java"],
  },
  {
    title: "NYC Property Sales Prediction Model Evaluation",
    image: "assets/image/project/linear-regression.png",
    description: "This project applies linear regression model to predict New York City property prices and evaluates the model using metrics such as RMSE and R².",
    tech: ["Python"],
  },
];

const techColors = {
  HTML: "bg-orange",
  CSS: "bg-blue",
  Javascript: "bg-yellow text-black",
  Bootstrap: "bg-indigo",
  PHP: "bg-purple-300 text-black",
  Python: "bg-cyan-blue",
  Java: "bg-red-600",
  Laravel: "bg-red",
  Flask: "bg-gray",
  Streamlit: "bg-red-400",
  Nextjs: "bg-black",
  YOLOv8: "bg-blue-700",
  FastAPI: "bg-teal-600",
  Cucumber: "bg-tealish-green",
  Selenium: "bg-red-700",
  Figma: "bg-blue",
};

const totalPages = Math.ceil(projects.length / itemsPerPage);

function renderCards() {
  const container = document.getElementById("cardContainer");
  container.innerHTML = "";

  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const currentItems = projects.slice(start, end);

  currentItems.forEach((project) => {
    const techBadges = project.tech
      .map((t) => {
        const color = techColors[t] || "bg-secondary text-white";
        return `<li class="list-inline-item badge ${color}">${t}</li>`;
      })
      .join(" ");

    container.innerHTML += `
      <div class="card">
        <img src="${project.image}" class="card-img-top" alt="Project Image">
        <div class="card-body">
          <h5 class="card-title">${project.title}</h5>
          <p class="card-text">${project.description}</p>
          <h6 class="mt-3">Tech:</h6>
          <ul class="list-inline">${techBadges}</ul>
        </div>
      </div>
    `;
  });

  document.getElementById("pageInfo").textContent = `Page ${currentPage} of ${totalPages}`;
}

function prevPage() {
  if (currentPage > 1) {
    currentPage--;
    renderCards();
  }
}

function nextPage() {
  if (currentPage < totalPages) {
    currentPage++;
    renderCards();
  }
}

renderCards();
