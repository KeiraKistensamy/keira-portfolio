<template>
  <div class="resume" data-aos="fade-up">
    <p>My Resume</p>
  </div>
  <div class="border"></div>
  <div class="container my-0 py-0">
    <div class="routes d-flex justify-content-center mb-0 pb-2" data-aos="fade-in">
      <router-link to="/resume" class="link px-2">Education</router-link> 
      <span>|</span>
      <router-link to="/experience" class="link px-2">Work Experience</router-link>
    </div>

    <div class="row">
      <div class="col-md-3 text-center" data-aos="fade-right">
        <h1 class="head">Education</h1>
      </div>

      <div class="col-md-9">
        <div class="education-card" data-aos="fade-left">
          <h3>Spine Road High School</h3>
          <p class="lead">2018 - 2022</p>
        </div>

        <div class="education-card" data-aos="fade-left">
          <h3>School of Fashion</h3>
          <p class="lead">2023</p>
          <p class="details">In 2023, I completed four fashion courses in pattern making and sewing, gaining expertise in creating custom patterns and bringing designs to life through skilled sewing techniques.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.resume p {
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

.container {
  color: white;
  border-radius: 8px;
  overflow-y: auto; /* Adds a vertical scrollbar */
  max-height: 500px; /* Adjust this to your preferred height */
}

.router-link {
  color: #f39c12;
  text-decoration: none;
  font-weight: 500;
}

.router-link:hover {
  color: #e67e22;
}

.head {
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 10px;
}

.education-card {
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 10px;
}

.education-card h3 {
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 8px;
}

.education-card p.lead {
  margin-bottom: 4px;
}

.education-card p.details {
  font-size: 15px;
}

@media (max-width: 768px) {
  .col-md-3, .col-md-9 {
    width: 100%;
    text-align: center;
    margin-bottom: 15px;
  }
}

@media (max-width: 320px) {
  .resume p {
    font-size: 32px; /* Adjust font size for smaller screens */
    margin-left: 1rem; /* Adjust margin */
  }

  .border {
    width: 100%; /* Full width for the divider */
    margin: 15px auto; /* Adjust margin */
  }

  .head {
    font-size: 24px; /* Adjust font size for smaller screens */
  }

  .education-card h3 {
    font-size: 18px; /* Adjust font size for smaller screens */
  }

  .education-card p.details {
    font-size: 13px; /* Adjust font size for smaller screens */
  }
}

</style>
