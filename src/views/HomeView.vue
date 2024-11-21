<template>
  <div class="row align-items-center justify-content-center">
    <div class="img col-md-6 text-center">
      <img src="https://keirakistensamy.github.io/images/images/IMG_4215.jpg" class="image" loading="lazy" />
    </div>
    <div class="col-md-6 text-center">
      <p class="h1">I am <span>Keira Kistensamy</span></p>
      <p class="text0">and I am an aspiring frontend developer</p>
      <p class="text1">
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
  align-items: center;
  justify-content: center;
  /* background: linear-gradient(135deg, #1d2671, #c33764); */
  animation: gradient_301 8s ease infinite;
}

/* Center text and image in each column */
.col-md-6 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  animation: fadeIn 1s ease-in-out;
}

/* Image styling */
.image {
  width: 400px;
  height: 450px;
  border-radius: 30%;
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
  width: 100%;
  font-family: 'Irish Grover', cursive;
  margin-top: 20px;
}

.text0 {
  color: white;
  font-size: 30px;
  margin-top: 10px;
  text-align: justify;
  font-weight: 500;

}

.text1 {
  color: white;
  font-size: 18px;
  margin-top: 10px;
  width: 80%;
  text-align: justify;
  font-weight: 500;
}

/* Span (Name) special styling */
span {
  color: gold;
  font-family: "Irish Grover", system-ui;
  font-weight: 400;
  font-style: normal;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.7);
  animation: pulse_3011 2s infinite; /* Pulse animation on name */
}

/* Keyframe Animations */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
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
  .img {
  margin-top: 30px;
}

  .text0 {
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
}

@media (max-width: 320px) {
  .h1 {
    font-size: 32px;
  }
  .img {
  margin-top: 30px;
}
  .text0 {
    font-size: 20px;
    width: 70%;
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
