<template>
  <router-link to="/projects" class="go-back-btn">Go Back</router-link>
  <div class="case-study-container" data-aos="fade-up">
    <h1>UI/UX Hackathon: Personal Portfolio Website</h1>
    
    <!-- Project Overview Section -->
    <section>
      <h2>Project Overview</h2>
      <p>
        This 5-day UI/UX hackathon involved designing and developing a personal portfolio website, allowing participants to showcase their skills, implement UI/UX best practices, and create a professional online presence.
      </p>
    </section>

    <!-- Project Goals Section -->
    <section>
      <h2>Project Goals</h2>
      <ul>
        <li>Design a user-centered portfolio website.</li>
        <li>Apply UI/UX best practices learned during the hackathon.</li>
        <li>Develop a responsive design for various devices.</li>
        <li>Implement a cohesive brand identity.</li>
        <li>Produce a high-fidelity mockup of the portfolio website.</li>
      </ul>
    </section>

    <!-- Target Audience Section -->
    <section>
      <h2>Target Audience</h2>
      <p>
        The target audience included potential employers, clients, and other professionals in related fields. Designs were created to meet the needs and expectations of these users, ensuring an engaging and professional user experience.
      </p>
    </section>

    <!-- Key Features Section -->
    <section>
      <h2>Key Features</h2>
      <ul>
        <li>Home/Landing Page: An introduction to the individual and their work.</li>
        <li>About Me: Background information, showcasing personality and experience.</li>
        <li>Projects/Work Samples: Visual samples and case studies of completed projects.</li>
        <li>Skills: A dedicated section for highlighting technical and creative abilities.</li>
        <li>Contact Information: Clear contact options for easy communication.</li>
        <li>Optional: Blog or Testimonials to add credibility and personal insights.</li>
      </ul>
    </section>

    <!-- Design Requirements Section -->
    <section>
      <h2>Design Requirements</h2>
      <ul>
        <li>Responsive Design: Ensuring the website functions seamlessly across devices.</li>
        <li>Consistent Color Scheme and Typography: Developing a visually cohesive brand.</li>
        <li>Clear Navigation and Hierarchy: Designing intuitive navigation and easy-to-follow structure.</li>
      </ul>
    </section>

    <!-- Deliverables Section -->
    <section>
      <h2>Deliverables</h2>
      <ul>
        <li>Brand Identity Guide: Logo, color palette, and typography guidelines.</li>
        <li>Wireframes: Blueprint designs for key pages.</li>
        <li>High-Fidelity Mockups: Visual representation of each page.</li>
        <li>Interactive Prototype: A clickable version of the website to simulate user interaction.</li>
        <li>Final Presentation: Summary of the design process, choices, and outcomes.</li>
      </ul>
    </section>
    <div class="buttons">
        <a href="https://www.figma.com/design/DZFSQGqGTybLYed90pPePh/Untitled?node-id=26-75&node-type=frame&t=nBWrgijN4kmNIhFn-0" target="_blank">
          <button>Figma</button>
        </a>
        <a href="https://slack-files.com/files-pri-safe/T02LW4RMXJQ-F07SFNYGF4K/group_project_presentation__2_.pdf?c=1730102990-67eab3c97f703541" target="_blank">
          <button>Presentation</button>
        </a>
      </div>
  </div>
</template>

<style scoped>
/* Container */
.case-study-container {
  font-family: 'Helvetica Neue', sans-serif;
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
  background-color: transparent; /* Set background to transparent */
  border-radius: 8px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

/* Main title */
h1 {
  font-size: 2rem;
  color: #fff;
  text-align: center;
  font-weight: 600;
  margin-top: 0;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 1rem;
}

/* Section title with blue color and left border */
h2 {
  font-size: 1.4rem;
  color: #0056b3; /* Blue color for the heading */
  margin-top: 2rem;
  margin-bottom: 1rem;
  font-weight: 500;
  padding-left: 10px; /* Space for the left border */
  border-left: 4px solid #0056b3; /* Blue left border */
}

/* Paragraph and list styling */
p, ul {
  font-size: 1rem;
  color: white; /* Change text color to white */
  line-height: 1.6;
  margin-bottom: 1.2rem;
}

/* List styling */
ul {
  padding-left: 1.2rem;
  list-style-type: disc;
}

li {
  margin-bottom: 0.6rem;
}

/* Section spacing */
.case-study-container section {
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #eaeaea;
}

.case-study-container section:last-of-type {
  border-bottom: none;
}

/* Button styling for the go-back button */
.go-back-btn {
  display: inline-block;
  margin: 20px 0; /* Space above and below */
  padding: 10px 20px; /* Button padding */
  background-color: #007bff; /* Button background color */
  color: white; /* Text color */
  border-radius: 5px; /* Rounded corners */
  text-decoration: none; /* Remove underline */
  font-size: 1rem; /* Font size */
  transition: background-color 0.3s; /* Transition effect */
}
.buttons {
    display: flex;
    justify-content: center;
    margin-top: 2rem;
  }
  
  .buttons a {
    text-decoration: none; /* Remove underline from links */
  }
  
  .buttons button {
    background-color: #0056b3; /* Button background color */
    color: white; /* Button text color */
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 1rem;
    margin: 0 10px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .buttons button:hover {
    background-color: #004494; /* Darker shade on hover */
  }

.go-back-btn:hover {
  background-color: #0056b3; /* Darker shade on hover */
}

/* Background color for overall section */
body {
  background-color: #000; /* Optional: Set the background color for the whole page */
}
</style>
