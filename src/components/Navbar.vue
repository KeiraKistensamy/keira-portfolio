<template>
  <nav class="navbar navbar-expand-lg navbar-darkblue sticky-top">
    <div class="container-fluid">
      <!-- Navbar Toggler for mobile view -->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <div class="d-flex w-100 align-items-center">
          <!-- Left-aligned name "Keira Kistensamy" -->
          <a class="navbar-brand keira me-auto" href="#">Keira Kistensamy</a>

          <!-- Centered navigation links -->
          <ul class="navbar-nav mx-auto">
            <router-link to="/"><li class="nav-item"><a class="nav-link" aria-current="page" href="#">Home</a></li></router-link>
            <router-link to="/about"><li class="nav-item"><a class="nav-link" href="#">About</a></li></router-link>
            <router-link to="/resume"><li class="nav-item"><a class="nav-link" href="#">Education & Experience</a></li></router-link>
            <router-link to="/projects"><li class="nav-item"><a class="nav-link" href="#">Projects</a></li></router-link>
            <router-link to="/contact"><li class="nav-item"><a class="nav-link" href="#">Contact</a></li></router-link>
          </ul>
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
    }
  }
}
</script>

<style scoped>
/* Dark blue background and white text color for the navbar */
.navbar-darkblue {
  background-color: rgb(9, 9, 51); /* Dark blue background */
  transition: background-color 0.3s ease; /* Smooth transition for background color */
}

/* Styling the name "Keira Kistensamy" */
.keira {
  font-size: 1.5rem;
  font-family: "Irish Grover", system-ui;
  font-weight: 400;
  color: gold;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.6); /* Add shadow for better visibility */
  text-align: center;
}

/* Styles for the navbar when scrolling */
.navbar-darkblue.scrolled {
  background-color: rgba(255, 255, 255, 0.9); /* White background with slight opacity */
  color: #000; /* Black text color */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* Add shadow for better separation */
}

/* Black text color when scrolled */
.navbar-darkblue.scrolled .navbar-brand,
.navbar-darkblue.scrolled .nav-link {
  color: #000;
}

/* Remove underline from links */
.navbar-darkblue .nav-link,
.navbar-darkblue.scrolled .nav-link {
  text-decoration: none;
}

/* Add spacing between nav links */
.navbar-darkblue .nav-link {
  margin: 0 1rem; /* Horizontal spacing between links */
}

/* Style for active and hover states */
.navbar-darkblue .nav-link {
  color: #ffffff; /* White text for default state */
}

.navbar-darkblue .nav-link:hover {
  color: #f0f0f0; /* Light gray on hover */
  background-color: #002244; /* Slightly darker blue on hover */
}

/* Optional: Add transition effects for smoother hover */
.navbar-darkblue .nav-link,
.navbar-darkblue .navbar-brand {
  transition: color 0.3s ease, background-color 0.3s ease;
}

/* Collapsed navbar for mobile */
@media (max-width: 991.98px) {
  .navbar-darkblue .navbar-collapse {
    background-color: rgb(9, 9, 51); /* Dark blue background for mobile view */
  }
  
  .navbar-darkblue.scrolled {
    background-color: rgb(9, 9, 51);
    color: white;
  }
  
  .navbar-darkblue.scrolled .navbar-brand,
  .navbar-darkblue.scrolled .nav-link {
    color: white;
  }

  /* Ensure name and nav items are centered in mobile view */
  .keira {
    margin: 0 auto;
  }

  .navbar-nav {
    text-align: center;
  }
}

</style>