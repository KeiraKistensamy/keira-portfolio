<template>
  <div class="row align-items-center justify-content-center">
    <div class="col-md-6 text-center">
      <img src="https://keirakistensamy.github.io/images/images/IMG_4215.jpg" width="400px" height="450px" class="image" loading="lazy">
    </div>
    <div class="col-md-6 text-center">
      <p class="h1">I am <span>Keira Kistensamy</span></p>
      <p class="text0">and I am an aspiring frontend developer</p>
      <p class="text1 lead">
        With a passion for creating clean, responsive, and user-friendly web experiences.
        This space showcases my journey, projects, and skills as I continue to grow and explore
        the world of web development.
      </p>
    </div>
  </div>
</template>

<style scoped>
/* Full height and center alignment for the row */
.row {
  height: 100vh; /* Full viewport height */
  display: flex;
  align-items: center; /* Vertically center content */
  justify-content: center; /* Horizontally center content */
}

/* Center text and image in each column */
.col-md-6 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

/* Specific styles for the image */
.image {
  border-radius: 50%;
  box-shadow: 0px 0px 10px rgb(255, 255, 255);
  border: 5px solid rgb(144, 144, 173);
}

/* Text styling */
.h1 {
  font-size: 58px;
  color: white;
  width: 100%;
}

.text0 {
  font-size: 30px;
  color: white;
  font-family: "Italiana", sans-serif;
  font-weight: 400;
  font-style: normal;
}

.text1 {
  font-size: 18px;
  color: white;
  max-width: 80%;
  margin-bottom: 20px;

}

/* Fixed border-top styling */
.border-top {
  border-top: 5px solid #ccc;
  width: 70%; /* Adjust the width to fit the container */
  margin: 20px auto; /* Center the border with margin */
}

/* Routes navigation link styling */
.routes {
  padding-top: 10px;
}

.router-link {
  color: #f39c12;
  text-decoration: none;
  font-weight: 500;
}

.router-link:hover {
  color: #e67e22;
}

span{
  color: gold;
  font-family: "Irish Grover", system-ui;
  font-weight: 400;
  font-style: normal;
  text-shadow: 0 0 3px white;
}

@keyframes animStar {
  from {
    transform: translateY(0);
  }

  to {
    transform: translateY(-135rem);
  }
}

@keyframes animStarRotate {
  from {
    transform: rotate(360deg);
  }

  to {
    transform: rotate(0);
  }
}

@keyframes gradient_301 {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}

@keyframes pulse_3011 {
  0% {
    transform: scale(0.75);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
  }

  70% {
    transform: scale(1);
    box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
  }

  100% {
    transform: scale(0.75);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
}


/* Ensure responsive design for smaller screens */
@media (max-width: 768px) {
  .col-md-6 {
    margin-bottom: 20px;
  }

  h1 {
    font-size: 28px;
  }

  .text {
    font-size: 24px;
  }

  .text1 {
    font-size: 16px;
    max-width: 100%;
  }

  .image {
    width: 250px;
    height: 300px;
  }

  /* Adjust border-top for smaller screens */
  .border-top {
    width: 80%; /* Increase the width for mobile view */
  }
}
@media (max-width: 320px) {
  .col-md-6 {
    margin-bottom: 10px; /* Adjust margin for tight spaces */
  }
  .text0 {
    font-size: 18px; /* Reduce subtitle size */
  }

  .text1 {
    font-size: 12px; /* Adjust body text size */
    max-width: 100%;
  }

  .image {
    width: 180px; /* Smaller image for tight screens */
    height: 220px; /* Adjust height */
  }

  .border-top {
    width: 90%; /* Make the border span wider */
  }

  .btn {
    width: 9rem; /* Smaller button */
    height: 2rem; /* Adjust height */
    font-size: 8px; /* Adjust font size */
  }
  span {
    font-size: 40px;
  }
  .h1 {
    font-size: 40px;
  }
}
</style>
