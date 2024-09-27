<template>
  <div class="contact" data-aos="fade-up">
    <p>Contact Me</p>
  </div>
  <div class="border"></div>
  <div class="container mt-5">
    <div class="row">
      <!-- Left Column (Form) -->
      <div class="col-md-6" data-aos="fade-right">
        <div class="contact-form">
          <form id="contactForm" action="https://formspree.io/f/movaqpjb" method="POST">
            <div class="form-group">
              <input type="text" class="form-control" name="Firstname" placeholder="Enter your first name" autocomplete="off" required>
            </div>
            <div class="form-group">
              <input type="text" class="form-control" name="Lastname" placeholder="Enter your last name" autocomplete="off" required>
            </div>
            <div class="form-group">
              <input type="email" class="form-control" name="Email" placeholder="Enter your Email Address" autocomplete="off" required>
            </div>
            <div class="form-group">
              <textarea class="form-control" rows="5" name="Message" placeholder="Enter your message" autocomplete="off" required></textarea>
            </div>
            <div class="form-group d-flex justify-content-between">
              <button class="btn btn-secondary" type="reset">Clear</button>
              <button class="btn btn-primary" type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
      
      <!-- Right Column (Contact Info) -->
      <div class="col-md-6" data-aos="fade-left" data-aos-offset="200">
        <div class="contact-info">
          <h4>Phone me:</h4>
          <div class="d-flex align-items-center mb-3">
            <img src="https://keirakistensamy.github.io/capstoneImg/images/phoneicon.png" width="50" height="50" alt="Phone Icon"/>
            <span class="info ms-2">063 941 4716</span>
          </div>
          <h4>Email Me:</h4>
          <div class="d-flex align-items-center mb-3">
            <img src="https://keirakistensamy.github.io/capstoneImg/images/emailicon.png" width="50" height="50" alt="Email Icon"/>
            <span class="info ms-2">Keirakist0987@gmail.com</span>
          </div>
          <h4>Location:</h4>
          <div class="d-flex align-items-center mb-3">
            <img src="https://keirakistensamy.github.io/capstoneImg/images/homeicon.png" width="50" height="50" alt="Home Icon"/>
            <span class="info ms-2">Mitchells Plain, Cape Town, 7785</span>
          </div>
          <h4>My GitHub:</h4>
          <div class="d-flex align-items-center mb-3">
            <img src="https://keirakistensamy.github.io/capstoneImg/images/githubIcon8.png" width="50" height="50" alt="GitHub Icon"/>
            <span class="info ms-2">KeiraKistensamy</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
  mounted() {
    AOS.init({
      duration: 1000, // Animation duration
      once: true,     // Animation happens only once
      offset: 120,    // Trigger animation when 120px away from the viewport
    });
  }
}
</script>

<style scoped>
.contact p {
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
/* Form and contact info styling */
.container {
  padding: 2rem;
}

.contact-form .form-group {
    font-family: "Irish Grover", system-ui;
  font-weight: 400;
  margin-bottom: 1rem;
}

.form-control {
  border-radius: 8px;
  border: 1px solid #ddd;
  padding: 1rem;
  font-size: 16px;
}

.btn {
  border-radius: 8px;
  padding: 10px 20px;
}

.btn-secondary {
  background-color: #6c757d;
  border: none;
}

.btn-primary {
  background-color: #007bff;
  border: none;
}

.contact-info h4 {
  color: white;
  font-size: 18px;
  margin-bottom: 0.5rem;
  font-family: "Irish Grover", system-ui;
  font-weight: 400;
}

.contact-info .info {
  color: white;
  font-size: 16px;
  font-weight: 500;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

/* Hover effect for icons */
.contact-info img {
  transition: transform 0.3s ease-in-out, filter 0.3s ease-in-out;
}

.contact-info img:hover {
  transform: scale(1.1); /* Slightly enlarge the icon */
  filter: brightness(1.2); /* Brighten the icon */
}

/* Ensure social icons display correctly */
.social a img {
  width: 40px; /* Adjusted for visibility */
  height: 40px;
}

.social a {
  display: inline-block;
  margin: 0 0.5rem;
}

@media (max-width: 768px) {
  .contact-form, .contact-info {
    text-align: center;
  }

  .social {
    flex-direction: column;
    align-items: center;
  }

  .social a {
    margin: 0.5rem;
  }
}

@media (max-width: 320px) {
  .contact-form, .contact-info {
    text-align: center;
    font-size: 10px;
  }

  .contact-info .d-flex {
    flex-direction: column; /* Stack items vertically */
    align-items: center;
  }

  .contact-info img {
    margin: 0.5rem 0; /* Adjust margin for stacked items */
  }

  .form-group {
    margin-bottom: 0.5rem; /* Reduce margin for smaller screens */
  }

  .btn {
    width: 100%; /* Full width buttons */
    font-size: 16px; /* Adjust font size for buttons */
    padding: 12px; /* Adjust padding for better clickability */
  }
.contact p{
  font-size: 30px;
  font-weight: 700;
  margin-left: 1rem;
  border-left: 0.5rem solid gold;
  padding-left: 1rem;
}

}

</style>
