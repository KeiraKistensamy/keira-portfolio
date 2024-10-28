<template>
      <router-link to="/projects" class="go-back-btn">Go Back</router-link>
    <div class="case-study">
      <h1>Case Study: Modernizing a Fast-Food Chain’s Ordering Process</h1>
  
      <section>
        <h2>Project Overview</h2>
        <p>
          A fast-food chain seeking to modernize its ordering experience aimed to enhance customer satisfaction, streamline operations, and strengthen its brand identity.
          Our team created a mobile application to improve the ordering experience and boost engagement, using the Waterfall methodology to follow a sequential and structured approach.
        </p>
      </section>
  
      <section>
        <h2>Project Goals</h2>
        <ul>
          <li>Develop a cohesive brand identity that resonates with the target audience.</li>
          <li>Design a user-friendly mobile app for convenient ordering.</li>
          <li>Reduce customer wait times and optimize the ordering process.</li>
          <li>Enhance customer satisfaction and loyalty through personalization.</li>
          <li>Boost sales by promoting easy menu access and special promotions.</li>
          <li>Gather customer insights to support future strategies.</li>
        </ul>
      </section>
  
      <section>
        <h2>Methodology</h2>
        <p>The Waterfall methodology was chosen due to the project’s well-defined requirements:</p>
        <ul>
          <li><strong>Requirements Gathering:</strong> Created a project plan from detailed stakeholder requirements.</li>
          <li><strong>System Design:</strong> Outlined the app’s interface, features, and brand identity.</li>
          <li><strong>Implementation:</strong> Built and integrated features sequentially.</li>
          <li><strong>Testing:</strong> Ensured functionality, usability, and security.</li>
          <li><strong>Deployment:</strong> Launched the app after meeting all goals.</li>
          <li><strong>Maintenance:</strong> Monitored and updated post-launch.</li>
        </ul>
      </section>
  
      <section>
        <h2>Brand Identity Development</h2>
        <p>Building a distinct brand identity was essential to stand out in a competitive market:</p>
        <ul>
          <li><strong>Brand Name and Logo:</strong> We developed a memorable brand name and logo with a modern color scheme.</li>
          <li><strong>Brand Voice and Personality:</strong> The brand’s tone was crafted to match a fast, friendly, casual dining experience.</li>
        </ul>
      </section>
  
      <section>
        <h2>App Features and Development</h2>
        <p>Each feature was developed sequentially, meeting requirements before moving to the next phase:</p>
        <ul>
          <li><strong>User Registration and Login:</strong> Secure user registration, login, and guest checkout options.</li>
          <li><strong>Menu Browsing:</strong> Clear menu categories, item descriptions, dietary information, and images.</li>
          <li><strong>Order Customization:</strong> Options for customization (extra toppings, meal upgrades) for flexible orders.</li>
          <li><strong>Basket and Checkout:</strong> Basket system with quantity adjustments and multiple payment options.</li>
          <li><strong>Order Tracking and Notifications:</strong> Real-time tracking to reduce perceived wait times.</li>
          <li><strong>Location Services:</strong> GPS-based services to locate the nearest restaurant.</li>
          <li><strong>Push Notifications:</strong> Alerts for order updates, promotions, and new items.</li>
          <li><strong>Loyalty Program:</strong> A points-based system rewarding frequent customers.</li>
          <li><strong>Feedback System:</strong> A feedback feature to collect ratings and comments for continuous improvement.</li>
        </ul>
      </section>
  
      <section>
        <h2>Challenges and Solutions</h2>
        <ul>
          <li><strong>Requirement Changes:</strong> We implemented a change control process to balance flexibility with the project scope.</li>
          <li><strong>Sequential Dependency:</strong> Optimized scheduling and allocated resources to manage dependencies.</li>
          <li><strong>User Experience Enhancements:</strong> Adjusted design based on testing feedback to improve user navigation and functionality.</li>
        </ul>
      </section>
  
      <section>
        <h2>Results and Evaluation</h2>
        <ul>
          <li><strong>User Engagement:</strong> Early data showed high download rates and positive feedback.</li>
          <li><strong>Customer Satisfaction:</strong> Reduced wait times and satisfaction with the ordering experience.</li>
          <li><strong>Sales Impact:</strong> Increased average order values and repeat usage.</li>
        </ul>
      </section>
  
      <section>
        <h2>Future Recommendations</h2>
        <ul>
          <li><strong>Regular App Updates:</strong> Continuously improve based on feedback.</li>
          <li><strong>Expanded Loyalty Program:</strong> Develop tiered rewards for increased retention.</li>
          <li><strong>Enhanced Data Analytics:</strong> Use data insights for targeted marketing and menu adjustments.</li>
        </ul>
      </section>
  
      <section>
        <h2>Conclusion</h2>
        <p>
          This project demonstrates the effective use of the Waterfall model for structured, well-defined requirements. With a successful deployment, the app meets goals for enhancing customer experience, reinforcing brand identity, and improving operational efficiency. This structured approach shows how high-quality results can be achieved in customer-focused applications within the fast-food industry.
        </p>
      </section>
  
      <div class="buttons">
        <a href="https://www.figma.com/design/LY00QHMR81s4Vw8NqBzdHD/Untitled?node-id=0-1&node-type=canvas&t=HQDt63bJ3lVC0dVi-0" target="_blank">
          <button>Figma</button>
        </a>
        <a href="https://slack-files.com/files-pri-safe/T02LW4RMXJQ-F07TC8MEM1R/snap_n__grill__3_.pdf?c=1730096933-16aa8a746e6e242b" target="_blank">
          <button>Presentation</button>
        </a>
        <a href="https://slack-files.com/files-pri-safe/T02LW4RMXJQ-F07T1NC2W4X/scrum_team__1_.pdf?c=1730096898-8ac0518c16111ea0" target="_blank">
          <button>Word Document</button>
        </a>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "CaseStudy",
  };
  </script>
  
  <style scoped>
  /* Container */
  .case-study {
    font-family: 'Helvetica Neue', sans-serif;
    max-width: 900px;
    margin: 0 auto;
    padding: 20px;
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
  
  strong {
    color: #ffffff; /* White for strong text */
    font-weight: 600;
  }
  
  /* Section spacing */
  .case-study section {
    padding-bottom: 1.5rem;
    border-bottom: 1px solid #eaeaea;
  }
  
  .case-study section:last-of-type {
    border-bottom: none;
  }
  
  /* Button styling */
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
  
  /* Background color for overall section */
  body {
    background-color: #000; /* Optional: Set the background color for the whole page */
  }
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

.go-back-btn:hover {
  background-color: #0056b3; /* Darker shade on hover */
}

  </style>
  