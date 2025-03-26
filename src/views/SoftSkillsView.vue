<template>
  <div class="about">
    <p>About Me</p>
  </div>
  <div class="border"></div>
  <div class="quote text-center">
    <h5 class="quotep lead">"Designing with passion, creating with precision."</h5>
  </div>
  <div class="row align-items-center justify-content-center">
    <div class="col-md-6 text-center text-md-left">
      <h6>
        I, Keira Kistensamy, am passionate and creative driven with a deep curiosity for innovation and problem-solving. After matriculating in 2022, I took a transformative gap year to explore my interests, completing a fashion design course before realizing that my true passion lay in the ever-evolving world of technology.
      </h6>
      <h6>
        Eager to grow and make a meaningful impact, I completed my Software Development training at Life Choices Academy and am now further refining my skills at Life Choices Studio. This journey has strengthened my ability to think critically, adapt to challenges, and collaborate effectively.
      </h6>
      <h6>
        With an insatiable thirst for knowledge and a commitment to excellence, I continuously seek opportunities to expand my expertise, push boundaries, and contribute meaningfully to the tech industry.      
      </h6>
    </div>
    <div class="col-md-6 text-center">
      <img src="https://keirakistensamy.github.io/capstoneImg/images/IMG_4686.jpg" width="350px" height="400px" class="pic">
    </div>
  </div>

  <div class="skills" data-aos="fade-up">
    <p>My Skills</p>
  </div>

  <div class="routes d-flex justify-content-center mb-0 pb-2" data-aos="fade-up">
    <router-link to="/about" class="link px-2">Technical Skills</router-link>
    <span>|</span>
    <router-link to="/softskills" class="link px-2">Soft Skills</router-link>
  </div>

  <div class="row justify-content-center text-center" data-aos="fade-up">
    <div class="col-md-4">
      <img src="https://keirakistensamy.github.io/capstoneImg/images/icons8-clock-64.png" width="100px" height="100px">
      <p>Time Management</p>
    </div>
    <div class="col-md-4">
      <img src="https://keirakistensamy.github.io/capstoneImg/images/icons8-communication-64.png" width="100px" height="100px">
      <p>Communication</p>
    </div>
    <div class="col-md-4">
      <img src="https://keirakistensamy.github.io/capstoneImg/images/icons8-problem-solving-64.png" width="100px" height="100px">
      <p>Problem Solving</p>
    </div>
  </div>

  <div class="row justify-content-center text-center" data-aos="fade-up">
    <div class="col-md-4">
      <img src="https://keirakistensamy.github.io/capstoneImg/images/icons8-teamwork-64.png" width="100px" height="100px">
      <p>Teamwork</p>
    </div>
    <div class="col-md-4">
      <img src="https://keirakistensamy.github.io/capstoneImg/images/icons8-system-optimization-78.png" width="100px" height="100px">
      <p>Adaptability</p>
    </div>
    <div class="col-md-4">
      <img src="https://keirakistensamy.github.io/capstoneImg/images/icons8-creativity-50.png" width="100px" height="100px">
      <p>Creativity</p>
    </div>
  </div>
</template>

<style scoped>
/* Overall container styling */
.about p {
  color: white;
  font-size: 64px;
  font-weight: 700;
  margin-left: 2rem;
  border-left: 0.5rem solid gold;
  padding-left: 1rem;
  margin-bottom: 10px;
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

/* Text block styling with spacing */
h6 {
  color: white;
  font-size: 18px;
  line-height: 1.6;
  margin-top: 20px;
  max-width: 100%;
  text-align: justify;
  padding-left: 50px;
  margin-bottom: 20px; /* Adds space between text and image */
}

/* Align and center content with extra top spacing */
.row.align-items-center {
  margin-top: 40px;
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

/* Updated styling for the icons */
.row .col-md-4 img {
  width: 100px;
  height: 100px;
  transition: transform 0.3s ease, filter 0.3s ease;
}

.row .col-md-4 p {
  font-size: 18px;
  font-weight: 600;
  color: gold;
  margin-top: 10px;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-family: "Irish Grover", system-ui;
}

.row .col-md-4:hover img {
  transform: scale(1.1);
  filter: drop-shadow(0px 0px 12px rgba(255, 255, 255, 0.8));
}

/* Spacing between icon sections */
.row .col-md-4 {
  margin-bottom: 20px;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .skills-grid {
    flex-direction: column;
    align-items: center;
  }

  .skills p {
    font-size: 36px;
  }

  .border {
    width: 80%;
  }

  .row .col-md-4 p {
    font-size: 14px;
  }

  .row .col-md-4 img {
    width: 60px;
    height: 60px;
  }

  .row.align-items-center {
    margin-top: 30px;
  }

  h6 {
    margin-bottom: 15px;
  }
}

@media (max-width: 320px) {
  .content {
    flex-direction: column-reverse;
  }

  .about p, .skills p {
    font-size: 32px;
    border-left: 0.3rem solid gold;
  }

  .quotep {
    font-size: 18px;
  }

  h6 {
    font-size: 12px;
    padding-left: 0;
    margin-left: 0;
    text-align: center;
    border-left: none;
    margin-bottom: 10px;
  }

  .pic {
    width: 150px;
    height: 200px;
  }

  .border {
    width: 90%;
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
