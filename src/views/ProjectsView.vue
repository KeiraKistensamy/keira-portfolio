<template>
  <div class="projects">
    <p>My Projects</p>
  </div>
  <div class="border"></div>

  <!-- Top row -->
  <div class="row">
    <div class="col-md-4">
      <div class="card project-card">
        <img
          src="https://keirakistensamy.github.io/capstoneImg/images/KeiraPetStation.png"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">PetStation</h5>
          <p class="card-text">
            Created a calculator to showcase my HTML, Javascript and CSS skills.
          </p>
          <p class="tech-stack">HTML, CSS, VueJS, NodeJs</p>
          <div class="button-group">
            <a href="https://keira-eomp.web.app/" target="_blank" class="btn btn-primary">View Project</a>
            <a href="https://github.com/KeiraKistensamy/PetStation.git" target="_blank" class="btn btn-primary">GitHub Link</a>
          </div>
        </div>
      </div>
    </div>

    <div class="col-md-4">
      <div class="card project-card">
        <img
          src="https://keirakistensamy.github.io/images/images/KeiraSwegga.png"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">Swegga</h5>
          <p class="card-text">
            A project where users can choose a color of an item, quantity, and it calculates the total automatically.
          </p>
          <p class="tech-stack">HTML, CSS, JavaScript</p>
          <div class="button-group">
            <a href="https://swegga-keira.vercel.app/" target="_blank" class="btn btn-primary">View Project</a>
            <a href="https://github.com/KeiraKistensamy/Swegga.Keira.git" target="_blank" class="btn btn-primary">GitHub Link</a>
          </div>
        </div>
      </div>
    </div>

    <div class="col-md-4">
      <div class="card project-card">
        <img
          src="https://keirakistensamy.github.io/images/images/KeiraKeyboard.png"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">Keyboard</h5>
          <p class="card-text">
            A virtual keyboard to showcase my HTML and CSS skills.
          </p>
          <p class="tech-stack">HTML, CSS</p>
          <div class="button-group">
            <a href="https://keyboard-five-ecru.vercel.app/" target="_blank" class="btn btn-primary">View Project</a>
            <a href="https://github.com/KeiraKistensamy/Keyboard.git" target="_blank" class="btn btn-primary">GitHub Link</a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Bottom row centered in middle with 3 cards -->
  <div class="row justify-content-center">
    <div class="col-md-4">
      <div class="card project-card">
        <img
          src="https://keirakistensamy.github.io/images/images/KeiraToDoList.png"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">To Do List</h5>
          <p class="card-text">
            A functional to-do list that allows sorting, adding, and removing tasks.
          </p>
          <p class="tech-stack">HTML, CSS, Javascript</p>
          <div class="button-group">
            <a href="https://todo-list-liart-alpha.vercel.app/" target="_blank" class="btn btn-primary">View Project</a>
            <a href="https://github.com/KeiraKistensamy/todoList.git" target="_blank" class="btn btn-primary">GitHub Link</a>
          </div>
        </div>
      </div>
    </div>

    <div class="col-md-4">
      <div class="card project-card">
        <img
          src="https://keirakistensamy.github.io/images/images/KeiraECom.png"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">iCentre Website</h5>
          <p class="card-text">
            Developed a functional e-commerce website with a shopping cart.
          </p>
          <p class="tech-stack">HTML, CSS, Javascript</p>
          <div class="button-group">
            <a href="https://icenterecom.vercel.app/" target="_blank" class="btn btn-primary">View Project</a>
            <a href="https://github.com/KeiraKistensamy/iCenterE-com.git" target="_blank" class="btn btn-primary">GitHub Link</a>
          </div>
        </div>
      </div>
    </div>

    <div class="col-md-4">
      <div class="card project-card">
        <img
          src="https://keirakistensamy.github.io/images/images/KeiraTemperature.png"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">Temperature Convertor</h5>
          <p class="card-text">
            A converter that switches temperature between Celsius and Fahrenheit.
          </p>
          <p class="tech-stack">HTML, CSS, Javascript</p>
          <div class="button-group">
            <a href="https://temperature-converter-lemon.vercel.app/" target="_blank" class="btn btn-primary">View Project</a>
            <a href="https://github.com/KeiraKistensamy/TemperatureCal.git" target="_blank" class="btn btn-primary">GitHub Link</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.projects p {
  color: white;
  font-size: 64px;
  font-weight: 700;
  margin-left: 2rem;
  border-left: 0.4rem solid gold;
  padding-left: 1rem;
}

.border {
  margin: 20px auto;
  border-bottom: 0.4rem solid gold;
  width: 80%;
}

.row {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0 auto;
}

.project-card {
  background-color: #e2e6ec;
  border-radius: 8px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  margin-bottom: 15px;
  width: 90%;
  min-height: 350px;
  border: 1px solid rgb(41, 41, 54);
}

.project-card:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.card-img-top {
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  height: 150px;
  object-fit: cover;
}

.card-body {
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.card-title {
  font-weight: bold;
  color: #343a40;
  font-size: 1rem;
}

.card-text {
  color: #6c757d;
  font-size: 0.9rem;
}

.tech-stack {
  font-style: italic;
  color: #007bff;
  font-size: 0.85rem;
}

/* Add space between the buttons */
.button-group a {
  margin-right: 0.5rem;
  margin-bottom: 0.75rem;
}

.btn-primary {
  background-color: #007bff;
  border-color: #007bff;
  font-size: 0.85rem;
  padding: 0.375rem 0.75rem;
  transition: background-color 0.3s ease;
}

.btn-primary:hover {
  background-color: #0056b3;
  border-color: #004085;
}

@media (max-width: 320px) {
  .projects p {
    font-size: 32px;
    margin-left: 1rem;
    padding-left: 0.5rem;
  }

  .border {
    width: 100%;
    margin: 10px auto;
  }

  .card-img-top {
    height: 100px;
  }

  .card-title {
    font-size: 0.8rem;
  }

  .card-text {
    font-size: 0.7rem;
  }

  .tech-stack {
    font-size: 0.65rem;
  }

  .btn-primary {
    font-size: 0.7rem;
    padding: 0.25rem 0.5rem;
  }
}

</style>
