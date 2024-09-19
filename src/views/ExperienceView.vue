<template>
<div class="resume">
  <p>My Resume</p>
</div>
<div class="border"></div>
  
  <div class="container my-0 py-0">
    <div class="routes d-flex justify-content-center mb-0 pb-2">
      <router-link to="/resume" class="link px-2">Education</router-link> 
      <span>|</span>
      <router-link to="/experience" class="link px-2">Work Experience</router-link>
    </div>

    <div class="row">
      <div class="col-md-3 text-center">
        <h1 class="head">Work Experience</h1>
      </div>

      <div class="col-md-9">
        <div class="experience-card">
          <h3>Life Choices Academy</h3>
          <p class="lead">Duration: April 2024 - current</p>
          <p class="duty">I am currently pursuing a study in web development. This field encompasses a range of skills and technologies crucial for creating and maintaining websites and web applications.</p>
        </div>
        
        <div class="experience-card">
          <h3>Volunteered at a Primary School</h3>
          <p class="lead">Duration: February 2024 - April 2024</p>
          <p class="duty">Handled planning, finance, registers, etc.</p>
        </div>

        <div class="experience-card">
          <h3>Pedal Power Association (PPA)</h3>
          <p class="lead">Duration: Part-time during 2023</p>
          <p class="duty">Ensured all cyclists were registered and handed out medals after the race.</p>
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
  padding: 10px 20px;
  border-radius: 8px;
}

.routes {
  padding-bottom: 5px;
  margin-bottom: 0 !important;
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

.experience-card {
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 10px;
}

.experience-card h3 {
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 8px;
}

.experience-card p.lead {
  margin-bottom: 4px;
}

.experience-card p.duty {
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
    font-size: 32px;
    margin-left: 1rem;
  }

  .border {
    width: 100%;
    margin: 15px auto;
  }

  .head {
    font-size: 24px;
  }

  .experience-card h3 {
    font-size: 18px;
  }

  .experience-card p.duty {
    font-size: 13px;
  }
}

</style>
