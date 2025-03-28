<template>
  <nav class="navbar navbar-expand-lg navbar-darkblue sticky-top">
    <div class="container-fluid">
      <!-- Navbar Toggler for Mobile -->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <img src="https://keirakistensamy.github.io/newimg/image/icons8-menu-64.png" alt="Menu" class="menu-icon">
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <div class="d-flex w-100 align-items-center flex-column">
          <!-- Centered Name for Mobile -->
          <a class="navbar-brand keira" href="#">Keira Kistensamy</a>

          <!-- Navigation Links -->
          <ul class="navbar-nav mx-auto">
            <router-link to="/" @click="collapseNavbar"><li class="nav-item"><a class="nav-link" href="#">Home</a></li></router-link>
            <router-link to="/about" @click="collapseNavbar"><li class="nav-item"><a class="nav-link" href="#">About</a></li></router-link>
            <router-link to="/resume" @click="collapseNavbar"><li class="nav-item"><a class="nav-link" href="#">Education & Experience</a></li></router-link>
            <router-link to="/projects" @click="collapseNavbar"><li class="nav-item"><a class="nav-link" href="#">Projects</a></li></router-link>
            <router-link to="/contact" @click="collapseNavbar"><li class="nav-item"><a class="nav-link" href="#">Contact</a></li></router-link>
          </ul>

          <!-- Download CV Button -->
          <div class="button-group">
            <a href="https://keirakistensamy.github.io/capstoneImg/images/Keira Kistensamy CV.pdf" download="KeirasResume.png" class="btn" target="_blank">
              <img src="https://keirakistensamy.github.io/capstoneImg/images/icons8-download-100.png" class="download-icon"> My CV
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavbarComp',
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const navbar = document.querySelector('.navbar-darkblue');
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    },
    collapseNavbar() {
      const navbarCollapse = document.getElementById('navbarNav');
      const navbarToggler = document.querySelector('.navbar-toggler');
      if (navbarCollapse.classList.contains('show')) {
        navbarToggler.click();
      }
    }
  }
}
</script>

<style scoped>

/* Navbar Base Styles */
.navbar-darkblue {
  background-color: rgb(9, 9, 51);
  transition: background-color 0.3s ease;
}

/* Name Styling */
.keira {
  font-size: 1.5rem;
  font-family: "Irish Grover", system-ui;
  font-weight: 400;
  color: gold;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.6);
  text-align: center;
}

/* Navbar Links */
.navbar-nav .nav-link {
  color: white;
  font-size: 1rem;
  font-family: 'Irish Grover', cursive;
  text-decoration: none;
  padding: 10px 15px;
  display: block;
}

.navbar-nav .nav-link:hover {
  color: #f0f0f0;
  background-color: #002244;
}

/* CV Button */
.button-group {
  margin-top: 10px;
}

.btn {
  background-color: gold;
  color: black;
  padding: 10px 15px;
  border-radius: 5px;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  width: 120px;
}

.btn:hover {
  background-color: white;
}

/* CV Download Icon */
.download-icon {
  width: 20px;
  height: 20px;
  margin-right: 5px;
}

/* Menu Icon */
.menu-icon {
  width: 40px;
  height: 40px;
}

/* Responsive Adjustments */
@media (max-width: 991px) {
  .navbar-collapse {
    background-color: rgb(9, 9, 51);
    text-align: center;
    width: 100%;
  }

  .navbar-nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .nav-item {
    width: 100%;
  }

  .keira {
    margin: 10px 0;
  }
}

/* **Mobile Optimization for 320px** */
@media (max-width: 320px) {
  .keira {
    font-size: 1.2rem;
  }

  .navbar-toggler {
    padding: 5px;
  }

  .navbar-nav .nav-link {
    font-size: 14px;
    padding: 8px 10px;
  }

  .btn {
    width: 100px;
    font-size: 14px;
    padding: 8px 10px;
  }

  .download-icon {
    width: 18px;
    height: 18px;
  }
}
</style>
