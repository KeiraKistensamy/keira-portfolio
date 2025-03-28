<template>
  <div class="container">
    <div class="row align-items-center">
      <div class="col-md-6 text-container">
        <p class="h1">I am <span>Keira Kistensamy</span></p>
        <p class="text0">Junior Frontend Developer</p>
        <p class="text1">
          With a passion for creating clean, responsive, and user-friendly web experiences.
          This space showcases my journey, projects, and skills as I continue to grow and explore
          the world of web development.
        </p>
      </div>
      <div class="col-md-6 img-container">
        <img src="https://keirakistensamy.github.io/images/images/IMG_4215.jpg" class="image" loading="lazy" />
      </div>
    </div>
  </div>
</template>

<style scoped>
body {
  margin-top: 20px;
  background: #121212;
  color: white;
}

/* Container adjustments */
.container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

/* Row setup */
.row {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;
}

/* Image container */
.img-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

/* Text container adjustments */
.text-container {
  text-align: left;
  max-width: 500px;
  padding: 20px;
}

/* Image styling */
.image {
  width: 100%;
  max-width: 400px;
  height: auto;
  border: 2px solid rgb(144, 144, 173);
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.7);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.image:hover {
  transform: scale(1.05);
  box-shadow: 0px 0px 30px rgba(255, 255, 255, 1);
}

/* Text styles */
.h1 {
  font-size: 48px;
  font-family: 'Irish Grover', cursive;
  margin-bottom: 10px;
  color: white;
}

.text0 {
  font-size: 26px;
  font-weight: 500;
  color: white;
}

.text1 {
  font-size: 18px;
  font-weight: 500;
  color: white;
}

/* Highlighted name */
span {
  color: gold;
  font-weight: 400;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.7);
  animation: pulse 2s infinite;
}

/* Keyframe animation */
@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .text-container {
    text-align: center;
    max-width: 100%;
  }

  .h1 {
    font-size: 36px;
  }

  .text0 {
    font-size: 22px;
  }

  .text1 {
    font-size: 16px;
  }

  .image {
    max-width: 280px;
  }
}

@media (max-width: 480px) {
  .h1 {
    font-size: 30px;
  }

  .text0 {
    font-size: 18px;
  }

  .text1 {
    font-size: 14px;
  }

  .image {
    max-width: 220px;
  }
}

/* Specific styles for 320px screens */
@media (max-width: 320px) {
  .h1 {
    font-size: 28px;
  }

  .text0 {
    font-size: 16px;
  }

  .text1 {
    font-size: 14px;
    margin-bottom: 20px;
  }

  .image {
    max-width: 180px;
  }

  .text-container {
    padding: 10px;
  }

  .img-container {
    padding: 10px;
  }
}
</style>
