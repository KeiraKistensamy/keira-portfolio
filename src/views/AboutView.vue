<template>
  <div class="about" data-aos="fade-up">
    <p>About Me</p>
  </div>
  <div class="border"></div>
  <div class="quote text-center">
    <h5 class="quotep lead">"Designing with passion, creating with precision."</h5>
  </div>
  <div class="row align-items-center justify-content-center">
    <div class="col-md-6 text-center text-md-left" data-aos="fade-right">
      <h6>
        I, Keira Kistensamy, weave my story with creativity, passion, and purpose. After matriculating in 2022, I took a gap year to explore my passions. In 2023, I completed a fashion design course. With curiosity and a mind full of ideas, I took time to discover my true path.
      </h6>
      <h6>
        I am a dedicated individual committed to making a positive impact in both my personal and professional life. My unwavering determination propels me forward in my journey of growth and self-discovery. My energy and kindness leave a mark on those who cross paths with me, making me a cherished member of any community.
      </h6>

      <h6>
        Currently, I am a student at Life Choices Academy, studying Software Development. With a thirst for knowledge and a passion for excellence, I strive to unlock my full potential and make the most of every opportunity.
      </h6>
    </div>

    <div class="col-md-6 text-center" data-aos="fade-left">
      <img src="https://keirakistensamy.github.io/images/images/IMG_4215.jpg" width="350px" height="400px" class="pic">
    </div>
  </div>

    <div class="skills" data-aos="fade-up">
    <p>My Skills </p>
    </div>


  <div class="routes d-flex justify-content-center mb-0 pb-2" data-aos="fade-up">
    <router-link to="/about" class="link px-2">Technical Skills</router-link>
    <span>|</span>
    <router-link to="/softskills" class="link px-2">Soft Skills</router-link>
  </div>

<div class="row justify-content-center text-center" data-aos="fade-up">
  <div class="col-md-3">
    <img src="https://keirakistensamy.github.io/capstoneImg/images/icons8-bootstrap-64.png" width="100px" height="100px">
    <p>Bootstrap</p>
  </div>
  <div class="col-md-3">
    <img src="https://keirakistensamy.github.io/capstoneImg/images/icons8-html-64.png" width="100px" height="100px">
    <p>Html</p>
  </div>
  <div class="col-md-3">
    <img src="https://keirakistensamy.github.io/capstoneImg/images/icons8-css-64.png" width="100px" height="100px">
    <p>CSS</p>
  </div>
  <div class="col-md-3">
    <img src="https://keirakistensamy.github.io/capstoneImg/images/icons8-figma-64.png" width="100px" height="100px">
    <p>Figma</p>
  </div>
</div>

<div class="row justify-content-center text-center" data-aos="fade-up">
  <div class="col-md-3">
    <img src="https://keirakistensamy.github.io/capstoneImg/images/icons8-javascript-64.png" width="100px" height="100px">
    <p>Javascript</p>
  </div>
  <div class="col-md-3">
    <img src="https://keirakistensamy.github.io/capstoneImg/images/icons8-nodejs-64.png" width="100px" height="100px">
    <p>NodeJS</p>
  </div>
  <div class="col-md-3">
    <img src="https://keirakistensamy.github.io/capstoneImg/images/icons8-vuejs-64.png" width="100px" height="100px">
    <p>VueJS</p>
  </div>
  <div class="col-md-3">
    <img src="https://keirakistensamy.github.io/capstoneImg/images/icons8-mysql-64.png" width="100px" height="100px">
    <p>MySQL</p>
  </div>
</div>

</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
  mounted() {
    AOS.init(); // Initialize AOS when component is mounted
  }
}
</script>

<style scoped>
/* Overall container styling */
.about p {
  color: white;
  font-size: 64px;
  font-weight: 700;
  margin-left: 2rem;
  border-left: 0.5rem solid gold;
  padding-left: 1rem;
}

/* Horizontal divider */
.border {
  margin: 30px auto;
  border-bottom: 0.5rem solid gold;
  width: 80%;
}

/* Quote section styling */
.quotep {
  margin-top: 20px;
  font-size: 32px;
  font-style: italic;
  color: gold;
  font-family: "Irish Grover", system-ui;
  font-weight: 400;
  text-shadow: 0px 0px 3px white;
}

/* Profile image styling */
.pic {
  border-radius: 50%;
  box-shadow: 0px 0px 15px rgba(255, 255, 255, 0.7);
  border: 4px solid rgb(144, 144, 173);
}

/* Text block styling */
h6 {
  color: white;
  font-size: 18px;
  line-height: 1.6;
  margin-top: 20px;
  max-width: 100%;
  text-align: justify;
  padding-left: 50px; /* Move the text to the right */
}

/* Align and center content */
.row {
  margin-top: 30px;
}

/* Skills section title */
.skills p {
  color: white;
  font-size: 64px;
  font-weight: 700;
  margin-left: 2rem;
  border-left: 0.5rem solid gold;
  padding-left: 1rem;
  margin-bottom: 10px;
}

.skills {
  padding-top: 5rem;
}

/* Horizontal divider */
.border {
  margin: 20px auto;
  border-bottom: 4px solid gold;
  width: 60%;
}

/* Route links */
.routes .link {
  color: gold;
  font-family: "Irish Grover", cursive;
  font-weight: 500;
  font-size: 18px;
  text-shadow: 0px 0px 6px white;
  transition: color 0.3s ease;
  text-decoration: none;
}

.routes .link:hover {
  color: #e6ac00;
}

span {
  color: white;
  font-weight: bold;
  margin: 0 10px;
}

/* Skills grid and card styling */
.skills-grid {
  margin: 20px auto;
  justify-content: center;
}

.custom-card {
  background-color: rgba(255, 255, 255, 0.08);
  text-align: center;
  border-radius: 10px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  margin-bottom: 20px;
}

.custom-card:hover {
  transform: translateY(-10px);
  box-shadow: 0px 10px 20px rgba(255, 255, 255, 0.2);
}

.icon {
  height: 150px;
  width: 150px; /* Keep the images from stretching */
  object-fit: contain; /* Maintain the image's aspect ratio */
  filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.5));
}

/* Styling for the icons and the text under them */
.row .col-md-3 p {
  font-size: 18px;
  font-weight: 600;
  color: gold;
  margin-top: 10px;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-family: "Irish Grover", system-ui;
}

/* Styling the images (icons) */
.row .col-md-3 img {
  width: 100px;
  height: 100px;
  /* filter: drop-shadow(0px 0px 8px rgba(255, 255, 255, 0.5)); */
  transition: transform 0.3s ease, filter 0.3s ease;
}

/* Add a hover effect to icons */
.row .col-md-3:hover img {
  transform: scale(1.1); /* Slight zoom effect */
  filter: drop-shadow(0px 0px 12px rgba(255, 255, 255, 0.8));
}

.row .col-md-3 {
  margin-bottom: 20px; /* Add spacing between rows of icons */
}


/* Card title and text */
.card-title {
  color: gold;
  font-size: 20px;
  font-weight: 600;
  margin-top: 10px;
  text-shadow: 0px 0px 6px white;
}

.card-text {
  color: #f0f0f0;
  font-size: 14px;
  text-transform: capitalize;
  letter-spacing: 1px;
  margin-top: 5px;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .skills-grid {
    flex-direction: column;
    align-items: center;
  }

  .custom-card {
    width: 80%;
  }

  .skills p {
    font-size: 36px;
  }

  .border {
    width: 80%;
  }
}

@media (max-width: 768px) {
  /* Adjust heading size for smaller screens */
  .about p {
    font-size: 48px;
    margin-left: 1rem;
  }

  /* Center text for smaller devices */
  .text-center {
    text-align: center;
  }

  h6 {
    font-size: 16px;
    text-align: center;
    padding-left: 0; /* Reset the padding for smaller screens */
  }

  /* Adjust image size on smaller devices */
  .pic {
    width: 250px;
    height: 300px;
  }
}
@media (max-width: 320px) {
  .content {
    flex-direction: column-reverse;
  }

  .about p, .skills p {
    font-size: 32px;
    border-left: 0.5rem solid gold;

  }

  .quotep {
    font-size: 18px;
  }

  h6 {
    font-size: 12px;
    padding-left: 0;
  }

  .pic {
    width: 150px;
    height: 200px;
  }

  .border {
    width: 100%;
    margin: 15px auto;
  }

  .routes .link {
    font-size: 14px;
  }

  .row .col-md-3 p {
    font-size: 14px;
  }

  .row .col-md-3 img {
    width: 60px;
    height: 60px;
  }
}

</style>

