<template>
  <div class="row align-items-center justify-content-center">
    <div class="col-md-6 img-container">
      <img src="https://keirakistensamy.github.io/images/images/IMG_4215.jpg" class="image" loading="lazy" />
    </div>
    <div class="col-md-6 text-container">
      <p class="h1">I am <span>Keira Kistensamy</span></p>
      <p class="text0">and I am an aspiring frontend developer</p>
      <p class="text1">
        With a passion for creating clean, responsive, and user-friendly web experiences.
        This space showcases my journey, projects, and skills as I continue to grow and explore
        the world of web development.
      </p>
      <!-- Download CV Button -->
      <div class="button-group">
        <a href="https://keirakistensamy.github.io/newimg/KeirasResume.png" download="KeirasResume.png" class="btn btn-primary">View CV</a>
      </div>
    </div>
  </div>
</template>


<style scoped>
/* Full height and center alignment for the row */
.row {
  height: 100vh; /* Full viewport height */
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 15px;
  animation: gradient_301 8s ease infinite;
}

/* Image container to push image to the right */
.img-container {
  display: flex;
  justify-content: flex-end;
  padding-right: 30px; /* Slight margin to push image to the right */
}

/* Text container adjustments */
.text-container {
  text-align: left;
  max-width: 80%;
}

/* Image styling */
.image {
  width: 400px;
  height: 450px;
  border-radius: 10%;
  box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.7);
  border: 5px solid rgb(144, 144, 173);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.image:hover {
  transform: scale(1.05); /* Slight scaling on hover */
  box-shadow: 0px 0px 30px rgba(255, 255, 255, 1);
}

/* Text styling */
.h1 {
  font-size: 58px;
  color: white;
  font-family: 'Irish Grover', cursive;
  margin-top: 20px;
}

.text0 {
  color: white;
  font-size: 30px;
  margin-top: 10px;
  font-weight: 500;
}

.text1 {
  color: white;
  font-size: 18px;
  margin-top: 10px;
  font-weight: 500;
}

/* Span (Name) special styling */
span {
  color: gold;
  font-family: "Irish Grover", system-ui;
  font-weight: 400;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.7);
  animation: pulse_3011 2s infinite; /* Pulse animation on name */
}

/* Custom styling for the download button */
.button-group {
  margin-top: 20px;
}

.btn-primary {
  background-color: #007bff;
  color: white;
  font-size: 18px;
  padding: 12px 24px;
  text-decoration: none;
  border-radius: 5px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

.btn-primary:hover {
  background-color: #0056b3;
  box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.15);
}

/* Keyframe Animations */
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
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

/* Responsive design for smaller screens */
@media (max-width: 768px) {
  .h1 {
    font-size: 38px;
  }

  .text0 {
    font-size: 24px;
  }

  .text1 {
    font-size: 16px;
  }

  .image {
    width: 250px;
    height: 300px;
  }
}

@media (max-width: 320px) {
  .h1 {
    font-size: 32px;
  }

  .text0 {
    font-size: 20px;
  }

  .text1 {
    font-size: 14px;
    margin-bottom: 50px;
  }

  .image {
    width: 180px;
    height: 220px;
  }
}
</style>