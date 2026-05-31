// Loading animation with progress counter
window.addEventListener("load", function () {
  const loader = document.getElementById("loader");
  const percentEl = loader?.querySelector(".loader-percent");
  if (!loader) return;

  // Animate percentage from 0 to 100
  let count = 0;
  const interval = setInterval(() => {
    count++;
    if (percentEl) percentEl.textContent = count + "%";
    if (count >= 100) {
      clearInterval(interval);
      // Fade out loader after progress completes
      setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
      }, 300);
    }
  }, 12); // ~1200ms to reach 100
});


// Theme Toggle Functionality
const themeToggle = document.getElementById("themeToggle");
const body = document.body;

// Check for saved theme or prefer-color-scheme
const savedTheme =
  localStorage.getItem("theme") ||
  (window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light");

if (savedTheme === "dark") {
  body.classList.add("dark-mode");
}

themeToggle?.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  const isDarkMode = body.classList.contains("dark-mode");
  localStorage.setItem("theme", isDarkMode ? "dark" : "light");

  // Add bounce effect to toggle
  themeToggle.style.transform = "scale(0.9)";
  setTimeout(() => {
    themeToggle.style.transform = "scale(1)";
  }, 150);
});

// NEW: Contact Me Modal Functionality
const contactMeBtn = document.getElementById("contactMeBtn");
const contactModal = document.getElementById("contactModal");
const closeContactModal = document.getElementById("closeContactModal");
const sendWhatsAppBtn = document.getElementById("sendWhatsAppBtn");
const contactNameInput = document.getElementById("contactName");
const contactMessageInput = document.getElementById("contactMessage");

// NEW: Education Modal Functionality
const viewEducationBtn = document.getElementById("viewEducationBtn");
const educationModal = document.getElementById("educationModal");
const closeEducationModal = document.getElementById("closeEducationModal");

// Open Contact Modal
contactMeBtn?.addEventListener("click", () => {
  contactModal?.classList.add("active");
  document.body.style.overflow = "hidden";

  // Add animation to form elements
  const formGroups = document.querySelectorAll(".form-group");
  formGroups.forEach((group, index) => {
    group.style.animationDelay = `${index * 0.1}s`;
  });
});

// Open Education Modal
viewEducationBtn?.addEventListener("click", () => {
  educationModal?.classList.add("active");
  document.body.style.overflow = "hidden";
});

// Close Contact Modal
closeContactModal?.addEventListener("click", () => {
  contactModal?.classList.remove("active");
  document.body.style.overflow = "auto";
});

// Close Education Modal
closeEducationModal?.addEventListener("click", () => {
  educationModal?.classList.remove("active");
  document.body.style.overflow = "auto";
});

// Close modals when clicking outside
contactModal?.addEventListener("click", (e) => {
  if (e.target === contactModal) {
    contactModal.classList.remove("active");
    document.body.style.overflow = "auto";
  }
});

educationModal?.addEventListener("click", (e) => {
  if (e.target === educationModal) {
    educationModal.classList.remove("active");
    document.body.style.overflow = "auto";
  }
});

// WhatsApp Send Functionality - Fixed to always send to your number
sendWhatsAppBtn?.addEventListener("click", () => {
  const name = contactNameInput?.value.trim() || "";
  const message = contactMessageInput?.value.trim() || "";

  if (!name || !message) {
    alert("Please enter both your name and message!");
    return;
  }

  const phoneNumber = "94770863647"; // Your WhatsApp number in international format
  const encodedMessage = encodeURIComponent(`Hi, I'm ${name}. ${message}`);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  // Open WhatsApp in new tab
  window.open(whatsappUrl, "_blank");

  // Close modal after sending
  contactModal?.classList.remove("active");
  document.body.style.overflow = "auto";

  // Clear form
  if (contactNameInput) contactNameInput.value = "";
  if (contactMessageInput) contactMessageInput.value = "";
});

// Enhanced Skills Data with levels and icons
// Enhanced Skills Data with levels and icons
const skillsData = {
  frontend: [
    { name: "HTML", level: "advanced", icon: "fab fa-html5", color: "#e34f26" },
    { name: "CSS", level: "advanced", icon: "fab fa-css3-alt", color: "#1572b6" },
    { name: "JavaScript", level: "advanced", icon: "fab fa-js", color: "#f7df1e" },
    { name: "React", level: "intermediate", icon: "fab fa-react", color: "#61dafb" },
    { name: "Bootstrap", level: "advanced", icon: "fab fa-bootstrap", color: "#7952b3" },
    { name: "Flutter", level: "intermediate", icon: "fas fa-mobile-alt", color: "#02569B" },
    { name: "Dart", level: "intermediate", icon: "fas fa-code", color: "#0175C2" }
  ],
  backend: [
    { name: "Java", level: "advanced", icon: "fab fa-java", color: "#007396" },
    { name: "PHP", level: "advanced", icon: "fab fa-php", color: "#777bb4" },
    { name: "Node.js", level: "intermediate", icon: "fab fa-node-js", color: "#339933" },
    { name: "API Gateway", level: "intermediate", icon: "fas fa-network-wired", color: "#FF9900" }
  ],
  databases: [
    { name: "MongoDB", level: "intermediate", icon: "fas fa-leaf", color: "#47a248" },
    { name: "Firebase", level: "advanced", icon: "fas fa-fire", color: "#ffca28" },
    { name: "MySQL", level: "advanced", icon: "fas fa-database", color: "#4479a1" },
    { name: "NoSQL", level: "intermediate", icon: "fas fa-database", color: "#47a248" }
  ],
  tools: [
    { name: "Git", level: "advanced", icon: "fab fa-git-alt", color: "#f05032" },
    { name: "VS Code", level: "advanced", icon: "fas fa-code", color: "#007acc" },
    { name: "Android Studio", level: "advanced", icon: "fab fa-android", color: "#3DDC84" },
    { name: "IntelliJ IDEA", level: "advanced", icon: "fas fa-laptop-code", color: "#000000" },
    { name: "Unity", level: "intermediate", icon: "fab fa-unity", color: "#000000" }
  ],
  softSkills: [
    { name: "Team Leadership", level: "advanced", icon: "fas fa-users", color: "#1D4ED8" },
    { name: "Recruitment", level: "advanced", icon: "fas fa-user-plus", color: "#1D4ED8" },
    { name: "Event Coordination", level: "advanced", icon: "fas fa-calendar-alt", color: "#1D4ED8" }
  ]
};

// Enhanced Certificates Data
const certificates = [
  {
    id: 1,
    title: "GIT, GitLab, GitHub Fundamentals for Software Developers",
    issuer: "Udemy",
    image: "./res/certificates/udemy-git.jpg",
  },
  {
    id: 2,
    title: "Cloud Computing for Absolute Beginners",
    issuer: "CoDeKu DevOps Academy",
    image: "./res/certificates/Cloud Computing for Absolute Beginners.jpg",
  },
  {
    id: 3,
    title:
      "Absolute beginner (zero) to expert (hero) in using Git and version control systems (VCS)",
    issuer: "CoDeKu DevOps Academy",
    image: "./res/certificates/Git and VCS.jpg",
  },
  {
    id: 4,
    title: "Introduction to Containerization",
    issuer: "CoDeKu DevOps Academy",
    image: "./res/certificates/Containerization.jpg",
  },
  {
    id: 5,
    title: "Educate Introduction to Cloud 101",
    issuer: "AWS Educate",
    image: "./res/certificates/aws-educate-introduction-to-cloud-101-training-badg.png",
  },
  {
    id: 6,
    title: "AWS Educate Getting Started with Storage",
    issuer: "AWS Educate",
    image: "./res/certificates/aws-educate-getting-started-with-storage-training-b.png",
  },
  {
    id: 7,
    title: "The Complete Full-Stack Web Development Bootcamp (62 Hours)",
    issuer: "Udemy – Dr. Angela Yu",
    image: "./res/certificates/udemy-fullstack-bootcamp.jpg",
  },
  {
    id: 8,
    title: "Learning Docker",
    issuer: "LinkedIn Learning",
    image: "./res/certificates/CertificateOfCompletion_Learning Docker.png",
  },
  {
    id: 9,
    title: "Software Development Life Cycle (SDLC)",
    issuer: "LinkedIn Learning",
    image: "./res/certificates/CertificateOfCompletion_Software Development Life Cycle SDLC.png",
  },
  {
    id: 10,
    title: "Professional Achievement Certificate",
    issuer: "Credly / Vendor",
    image: "./res/certificates/8a544f23-ba61-4118-bc5a-21af5aec8c49.webp",
  }
];

// Projects Data
const projects = [
  {
    id: 1,
    title: "ClayBricks App",
    description:
      " A comprehensive mobile application for buying and selling clay bricks, connecting builders with suppliers through an intuitive e-commerce platform.",
    thumbnail:
      "./res/projects/ClayBricks/ClayBrickLogo.png",
    screenshots: [
      "./res/projects/ClayBricks/1.png",
      "./res/projects/ClayBricks/2.png",
      "./res/projects/ClayBricks/3.png",
      "./res/projects/ClayBricks/4.png",
      "./res/projects/ClayBricks/5.png",
      "./res/projects/ClayBricks/6.png",
      "./res/projects/ClayBricks/7.png",
      "./res/projects/ClayBricks/8.png",
      "./res/projects/ClayBricks/9.png",
      "./res/projects/ClayBricks/10.png",
      "./res/projects/ClayBricks/12.png",
      "./res/projects/ClayBricks/13.png",
      "./res/projects/ClayBricks/14.png",
      "./res/projects/ClayBricks/15.png",
      "./res/projects/ClayBricks/16.png",
      "./res/projects/ClayBricks/18.png",
      "./res/projects/ClayBricks/19.png",
    ],
    technologies: ["Java", "Android studio", "Firebase", "SQLite"],
    link: "#",
    demoLink: "#",
    githubLink: "https://github.com/sandunmayadunne/ClayBricks.git",
  },
  {
    id: 2,
    title: "Institute Management System",
    description:
      "A comprehensive attendance marking system designed to manage and track student attendance effectively within an educational institute.",
    thumbnail:
      "./res/projects/Institute Management System/logo_page.png",
    screenshots: [
      "./res/projects/Institute Management System/1.png",
      "./res/projects/Institute Management System/2.png",
      "./res/projects/Institute Management System/3.png",
      "./res/projects/Institute Management System/4.png",
      "./res/projects/Institute Management System/5.png",
      "./res/projects/Institute Management System/6.png",
      "./res/projects/Institute Management System/7.png",
      "./res/projects/Institute Management System/8.png",
      "./res/projects/Institute Management System/9.png",
    ],
    technologies: ["Dart", "Flutter"],
    link: "https://institute-management-app-16131.web.app",
    demoLink: "https://institute-management-app-16131.web.app",
    githubLink: "https://github.com/sandunmayadunne/Institute_Management_System.git",
  },
  {
    id: 3,
    title: "EduSystem",
    description:
      "A modern educational platform built for interactive learning and content delivery.",
    thumbnail:
      "./res/projects/Lanka Edu System/logo.png",
    screenshots: [
      "./res/projects/Lanka Edu System/1.png",
      "./res/projects/Lanka Edu System/2.png",
      "./res/projects/Lanka Edu System/3.png",
      "./res/projects/Lanka Edu System/4.png",
      "./res/projects/Lanka Edu System/5.png",
      "./res/projects/Lanka Edu System/6.png",
      "./res/projects/Lanka Edu System/7.png",
      "./res/projects/Lanka Edu System/8.png",
      "./res/projects/Lanka Edu System/9.png",
      "./res/projects/Lanka Edu System/10.png",
      "./res/projects/Lanka Edu System/11.png",
      "./res/projects/Lanka Edu System/12.png",
      "./res/projects/Lanka Edu System/13.png",
      "./res/projects/Lanka Edu System/14.png",
      "./res/projects/Lanka Edu System/15.png",
    ],
    technologies: ["TypeScript", "Next.js", "React"],
    link: "https://lanka-edu-system.vercel.app",
    demoLink: "https://lanka-edu-system.vercel.app",
    githubLink: "https://github.com/sandunmayadunne/lanka-edu-system.git",
  },
];

// Function to render skills with horizontal scroll
function renderSkills() {
  const skillsContainer = document.getElementById("skillsContainer");
  skillsContainer.innerHTML = "";

  const categoryTitles = {
    frontend: { title: "Frontend Development", icon: "fas fa-code" },
    backend: { title: "Backend Development", icon: "fas fa-server" },
    databases: { title: "Databases & Cloud", icon: "fas fa-database" },
    tools: { title: "Tools & Platforms", icon: "fas fa-tools" },
    softSkills: { title: "Soft Skills & Management", icon: "fas fa-users" }
  };

  Object.keys(skillsData).forEach((categoryKey, catIndex) => {
    const categoryInfo = categoryTitles[categoryKey];
    const categoryDiv = document.createElement("div");
    categoryDiv.className = "skill-category";
    categoryDiv.innerHTML = `
          <h3><i class="${categoryInfo.icon}"></i> ${categoryInfo.title}</h3>
          <div class="horizontal-skills">
            ${skillsData[categoryKey]
        .map(
          (skill, index) => `
                <div class="horizontal-skill-item" style="animation-delay: ${(catIndex + 1) * 0.1 + index * 0.1
            }s">
                  <div class="horizontal-skill-icon" style="color: ${skill.color
            }">
                    <i class="${skill.icon}"></i>
                  </div>
                  <div class="skill-details">
                    <span class="horizontal-skill-name">${skill.name}</span>
                    <span class="horizontal-skill-level ${skill.level}">${skill.level
            }</span>
                  </div>
                </div>
              `
        )
        .join("")}
          </div>
        `;
    skillsContainer.appendChild(categoryDiv);
  });
}

// Function to render certificates in modal (similar to projects)
function renderCertificatesModal(certificatesArray) {
  const certificatesGrid = document.getElementById("modalCertificatesGrid");
  if (!certificatesGrid) return;
  certificatesGrid.innerHTML = "";

  certificatesArray.forEach((certificate) => {
    const certificateCard = document.createElement("div");
    certificateCard.className = "modal-certificate-card";

    certificateCard.innerHTML = `
            <div class="certificate-img-container">
              <img src="${certificate.image}" alt="${certificate.title}" class="certificate-img">
              <div class="certificate-overlay">
                <i class="fas fa-expand-alt"></i>
              </div>
            </div>
            <div class="certificate-info">
              <h3 class="certificate-title">${certificate.title}</h3>
              <div class="certificate-issuer">
                <i class="fas fa-university"></i>
                <span>${certificate.issuer}</span>
              </div>
              <button class="view-certificate-btn" data-certificate-id="${certificate.id}">
                <i class="fas fa-eye"></i> View Certificate
              </button>
            </div>
          `;

    certificatesGrid.appendChild(certificateCard);
  });
}

// Function to render projects
function renderProjects(projectsToRender, containerId, isModal = false) {
  const projectsGrid = document.getElementById(containerId);
  if (!projectsGrid) return;
  projectsGrid.innerHTML = "";

  projectsToRender.forEach((project, index) => {
    const projectCard = document.createElement("div");
    projectCard.className = isModal ? "modal-project-card" : "project-card";

    projectCard.innerHTML = `
            <div class="project-img-container">
              <img src="${project.thumbnail}" alt="${project.title}" class="${isModal ? "modal-project-img" : "project-img"
      }" data-project-id="${project.id}">
              <div class="${isModal ? "modal-project-overlay" : "project-overlay"
      }">
                <i class="fas fa-expand-alt"></i>
                ${isModal
        ? `<div class="project-badge">Project ${index + 1}</div>`
        : ""
      }
              </div>
            </div>
            <div class="${isModal ? "modal-project-info" : "project-info"}">
              <h3 class="${isModal ? "modal-project-title" : "project-title"}">
                <span>${project.title}</span>
                <i class="fas fa-arrow-up-right-from-square"></i>
              </h3>
              <p class="${isModal ? "modal-project-description" : "project-description"
      }">${project.description}</p>
              <div class="${isModal ? "project-skills" : "project-tech"}">
                ${project.technologies
        .map(
          (tech) =>
            `<span class="${isModal ? "project-skill-tag" : "tech-tag"
            }">${tech}</span>`
        )
        .join("")}
              </div>
              <div class="project-buttons">
                <button class="view-project-btn" data-project-id="${project.id
      }">
                  <i class="fas fa-images"></i> ${isModal ? "Gallery" : "Screenshots"
      }
                </button>
                <a href="${project.githubLink
      }" class="view-project-btn" target="_blank">
                  <i class="fab fa-github"></i> Code
                </a>
                ${project.link !== "#" ? `
                <a href="${project.link}" class="view-project-btn" target="_blank">
                  <i class="fas fa-external-link-alt"></i> Demo
                </a>
                ` : ""}
              </div>
            </div>
          `;

    projectsGrid.appendChild(projectCard);

    // FIX: Add visible class to each card with a staggered delay
    // Project cards have opacity:0 in CSS and need .visible class to show
    if (!isModal) {
      setTimeout(() => {
        projectCard.classList.add("visible");
      }, 100 + index * 150);
    } else {
      projectCard.classList.add("visible");
    }
  });
}

// Project Carousel Variables
// Carousel Variables
const projectCarouselModal = document.getElementById("projectCarouselModal");
const closeProjectModal = document.getElementById("closeProjectModal");
const carouselSlides = document.getElementById("carouselSlides");
const carouselDots = document.getElementById("carouselDots");
const carouselPrev = document.getElementById("carouselPrev");
const carouselNext = document.getElementById("carouselNext");
const carouselProjectTitle = document.getElementById("carouselProjectTitle");

let currentProjectId = null;
let currentSlideIndex = 0;
let autoSlideInterval = null;

// Function to open project carousel
function openProjectCarousel(projectId) {
  const project = projects.find((p) => p.id === projectId);
  if (!project) return;

  currentProjectId = projectId;
  currentSlideIndex = 0;
  if (carouselProjectTitle) {
    carouselProjectTitle.textContent = project.title;
  }

  // Clear existing slides and dots
  if (!carouselSlides || !carouselDots) return;
  carouselSlides.innerHTML = "";
  carouselDots.innerHTML = "";

  // Add slides
  project.screenshots.forEach((screenshot, index) => {
    const slide = document.createElement("div");
    slide.className = "carousel-slide";
    slide.innerHTML = `
            <img src="${screenshot}" alt="${project.title} - Screenshot ${index + 1}" loading="lazy">
            <div class="carousel-caption">Screenshot ${index + 1} of ${project.screenshots.length}</div>
        `;
    carouselSlides.appendChild(slide);

    // Add dot
    const dot = document.createElement("button");
    dot.className = `carousel-dot ${index === 0 ? "active" : ""}`;
    dot.setAttribute("data-slide", index);
    dot.addEventListener("click", () => goToSlide(index));
    carouselDots.appendChild(dot);
  });

  // Update carousel position
  updateCarousel();

  // Open modal
  projectCarouselModal?.classList.add("active");
  document.body.style.overflow = "hidden";

  // Start auto slide
  startAutoSlide();
}

// Function to update carousel position
function updateCarousel() {
  if (carouselSlides) {
    carouselSlides.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
  }

  // Update active dot
  document.querySelectorAll(".carousel-dot").forEach((dot, index) => {
    dot.classList.toggle("active", index === currentSlideIndex);
  });
}

// Function to go to specific slide
function goToSlide(index) {
  const project = projects.find((p) => p.id === currentProjectId);
  if (!project) return;

  currentSlideIndex = index;
  if (currentSlideIndex < 0) {
    currentSlideIndex = project.screenshots.length - 1;
  } else if (currentSlideIndex >= project.screenshots.length) {
    currentSlideIndex = 0;
  }

  updateCarousel();
  resetAutoSlide();
}

// Function to go to next slide
function nextSlide() {
  const project = projects.find((p) => p.id === currentProjectId);
  if (!project) return;

  currentSlideIndex = (currentSlideIndex + 1) % project.screenshots.length;
  updateCarousel();
}

// Function to go to previous slide
function prevSlide() {
  const project = projects.find((p) => p.id === currentProjectId);
  if (!project) return;

  currentSlideIndex = (currentSlideIndex - 1 + project.screenshots.length) % project.screenshots.length;
  updateCarousel();
}

// Function to start auto slide
function startAutoSlide() {
  if (autoSlideInterval) clearInterval(autoSlideInterval);
  autoSlideInterval = setInterval(nextSlide, 4000);
}

// Function to reset auto slide timer
function resetAutoSlide() {
  if (autoSlideInterval) clearInterval(autoSlideInterval);
  startAutoSlide();
}

// Event listeners for carousel navigation
carouselPrev?.addEventListener("click", () => {
  prevSlide();
  resetAutoSlide();
});

carouselNext?.addEventListener("click", () => {
  nextSlide();
  resetAutoSlide();
});

// Close project carousel modal
closeProjectModal?.addEventListener("click", () => {
  projectCarouselModal?.classList.remove("active");
  document.body.style.overflow = "auto";

  // Clear auto slide interval
  if (autoSlideInterval) {
    clearInterval(autoSlideInterval);
    autoSlideInterval = null;
  }
});

// Close carousel when clicking outside
projectCarouselModal?.addEventListener("click", (e) => {
  if (e.target === projectCarouselModal) {
    projectCarouselModal.classList.remove("active");
    document.body.style.overflow = "auto";

    // Clear auto slide interval
    if (autoSlideInterval) {
      clearInterval(autoSlideInterval);
      autoSlideInterval = null;
    }
  }
});

// Keyboard navigation for carousel
document.addEventListener("keydown", (e) => {
  if (!projectCarouselModal?.classList.contains("active")) return;

  if (e.key === "ArrowLeft") {
    prevSlide();
    resetAutoSlide();
  } else if (e.key === "ArrowRight") {
    nextSlide();
    resetAutoSlide();
  } else if (e.key === "Escape") {
    projectCarouselModal.classList.remove("active");
    document.body.style.overflow = "auto";

    // Clear auto slide interval
    if (autoSlideInterval) {
      clearInterval(autoSlideInterval);
      autoSlideInterval = null;
    }
  }
});

// Certificate Detail Modal Variables
const certificateDetailModal = document.getElementById(
  "certificateDetailModal"
);
const closeCertificateDetail = document.getElementById(
  "closeCertificateDetail"
);
const certificateDetailTitle = document.getElementById(
  "certificateDetailTitle"
);
const certificateDetailImage = document.getElementById(
  "certificateDetailImage"
);
const certificateDetailIssuer = document.getElementById(
  "certificateDetailIssuer"
);
const certificateDetailDate = document.getElementById("certificateDetailDate");
const certificateDetailId = document.getElementById("certificateDetailId");
const certificateDetailLink = document.getElementById("certificateDetailLink");
const certificateDetailLevel = document.getElementById(
  "certificateDetailLevel"
);
const certificateDetailDuration = document.getElementById(
  "certificateDetailDuration"
);
const certificateDetailSkills = document.getElementById(
  "certificateDetailSkills"
);

// Function to open certificate detail modal
function openCertificateDetailModal(certificateId) {
  const certificate = certificates.find((c) => c.id === certificateId);
  if (!certificate) return;

  if (certificateDetailTitle) certificateDetailTitle.textContent = certificate.title;
  if (certificateDetailImage) {
    certificateDetailImage.src = certificate.image;
    certificateDetailImage.alt = certificate.title;
  }
  if (certificateDetailIssuer) certificateDetailIssuer.textContent = certificate.issuer || "Not specified";

  certificateDetailModal?.classList.add("active");
  document.body.style.overflow = "hidden";
}

// Close certificate detail modal
closeCertificateDetail?.addEventListener("click", () => {
  certificateDetailModal?.classList.remove("active");
  document.body.style.overflow = "auto";
});

// Close certificate detail modal when clicking outside
certificateDetailModal?.addEventListener("click", (e) => {
  if (e.target === certificateDetailModal) {
    certificateDetailModal.classList.remove("active");
    document.body.style.overflow = "auto";
  }
});

// Add event listeners to view project buttons and project images
document.addEventListener("click", (e) => {
  // Check if a view project button was clicked
  if (
    e.target.classList.contains("view-project-btn") ||
    e.target.closest(".view-project-btn")
  ) {
    const button = e.target.classList.contains("view-project-btn")
      ? e.target
      : e.target.closest(".view-project-btn");

    // Check if it's the "View Screenshots" button (not GitHub link)
    if (!button.hasAttribute("href") || button.getAttribute("href") === "#") {
      const projectId = parseInt(button.getAttribute("data-project-id"));
      if (projectId) {
        openProjectCarousel(projectId);
      }
    }
  }

  // Check if a project image was clicked
  if (
    e.target.classList.contains("project-img") ||
    e.target.classList.contains("project-overlay") ||
    e.target.closest(".project-overlay") ||
    e.target.classList.contains("modal-project-img") ||
    e.target.classList.contains("modal-project-overlay") ||
    e.target.closest(".modal-project-overlay")
  ) {
    let projectId;
    if (
      e.target.classList.contains("project-img") ||
      e.target.classList.contains("modal-project-img")
    ) {
      projectId = parseInt(e.target.getAttribute("data-project-id"));
    } else {
      const projectImg = e.target
        .closest(".project-img-container, .certificate-img-container")
        ?.querySelector(".project-img, .modal-project-img");
      if (projectImg) {
        projectId = parseInt(projectImg.getAttribute("data-project-id"));
      }
    }

    if (projectId) {
      openProjectCarousel(projectId);
    }
  }

  // Check if a view certificate button was clicked
  if (
    e.target.classList.contains("view-certificate-btn") ||
    e.target.closest(".view-certificate-btn")
  ) {
    const button = e.target.classList.contains("view-certificate-btn")
      ? e.target
      : e.target.closest(".view-certificate-btn");
    const certificateId = parseInt(button.getAttribute("data-certificate-id"));
    openCertificateDetailModal(certificateId);
  }
});

// Modal Functionality
const viewAllBtn = document.getElementById("viewAllBtn");
const projectsModal = document.getElementById("projectsModal");
const closeModal = document.getElementById("closeModal");

// All Certificates Modal
const viewAllCertificatesBtn = document.getElementById(
  "viewAllCertificatesBtn"
);
const allCertificatesModal = document.getElementById("allCertificatesModal");
const closeAllCertificatesModal = document.getElementById(
  "closeAllCertificatesModal"
);

// Open all certificates modal
viewAllCertificatesBtn?.addEventListener("click", () => {
  renderCertificatesModal(certificates);
  allCertificatesModal?.classList.add("active");
  document.body.style.overflow = "hidden";
});

// Close all certificates modal
closeAllCertificatesModal?.addEventListener("click", () => {
  allCertificatesModal?.classList.remove("active");
  document.body.style.overflow = "auto";
});

// Close all certificates modal when clicking outside
allCertificatesModal?.addEventListener("click", (e) => {
  if (e.target === allCertificatesModal) {
    allCertificatesModal.classList.remove("active");
    document.body.style.overflow = "auto";
  }
});

// Open projects modal
viewAllBtn?.addEventListener("click", () => {
  renderProjects(projects, "modalProjectsGrid", true);
  projectsModal?.classList.add("active");
  document.body.style.overflow = "hidden";
});

// Close projects modal
closeModal?.addEventListener("click", () => {
  projectsModal?.classList.remove("active");
  document.body.style.overflow = "auto";
});

// Close projects modal when clicking outside
projectsModal?.addEventListener("click", (e) => {
  if (e.target === projectsModal) {
    projectsModal.classList.remove("active");
    document.body.style.overflow = "auto";
  }
});

// Close modals with Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    if (projectsModal?.classList.contains("active")) {
      projectsModal.classList.remove("active");
      document.body.style.overflow = "auto";
    }
    if (allCertificatesModal?.classList.contains("active")) {
      allCertificatesModal.classList.remove("active");
      document.body.style.overflow = "auto";
    }
    if (certificateDetailModal?.classList.contains("active")) {
      certificateDetailModal.classList.remove("active");
      document.body.style.overflow = "auto";
    }
    if (projectCarouselModal?.classList.contains("active")) {
      projectCarouselModal.classList.remove("active");
      document.body.style.overflow = "auto";
      if (autoSlideInterval) {
        clearInterval(autoSlideInterval);
        autoSlideInterval = null;
      }
    }
    if (contactModal?.classList.contains("active")) {
      contactModal.classList.remove("active");
      document.body.style.overflow = "auto";
    }
    if (educationModal?.classList.contains("active")) {
      educationModal.classList.remove("active");
      document.body.style.overflow = "auto";
    }
  }
});

// Scroll Animation using IntersectionObserver (Up & Down Repeatable)
const observerOptions = {
  threshold: 0.15,
  rootMargin: "0px 0px -50px 0px"
};

const scrollObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");

      // If it's the skills container, animate the children with a stagger
      if (entry.target.id === "skillsContainer") {
        const skillItems = entry.target.querySelectorAll(".horizontal-skill-item");
        skillItems.forEach((item, index) => {
          setTimeout(() => {
            item.classList.add("visible");
          }, index * 50);
        });
      }
    } else {
      entry.target.classList.remove("visible");

      // Reset children
      if (entry.target.id === "skillsContainer") {
        const skillItems = entry.target.querySelectorAll(".horizontal-skill-item");
        skillItems.forEach((item) => item.classList.remove("visible"));
      }
    }
  });
}, observerOptions);

// ScrollSpy Navigation & Scroll to Top
window.addEventListener("scroll", () => {
  // Show/hide scroll to top button
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");
  if (scrollToTopBtn) {
    if (window.scrollY > 300) {
      scrollToTopBtn.classList.add("visible");
    } else {
      scrollToTopBtn.classList.remove("visible");
    }
  }

  // Header shrink/move effect
  const header = document.querySelector("header");
  if (header) {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }

  // ScrollSpy Logic
  const sections = document.querySelectorAll("h2[id]");
  const navLinks = document.querySelectorAll(".header-nav a");
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop <= 250) { // Offset for header
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// Smooth scroll to top function
const scrollToTopBtn = document.getElementById("scrollToTopBtn");
scrollToTopBtn?.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Initial render
document.addEventListener("DOMContentLoaded", () => {
  renderSkills();
  renderProjects(projects.slice(0, 3), "projectsGrid");
  // Modal projects are rendered on demand when modal opens (no need to pre-render)

  // Add typing effect to profile title
  const profileTitle = document.querySelector(".profile-title");
  if (profileTitle) {
    const originalText = profileTitle.textContent;
    profileTitle.textContent = "";

    let i = 0;
    function typeWriter() {
      if (i < originalText.length) {
        profileTitle.textContent += originalText.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
      }
    }

    setTimeout(typeWriter, 1500);
  }

  // Add smooth scroll to anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // Profile section is handled by CSS fadeIn animation (no JS transform needed)

  // Start observing scroll animations
  const animatedElements = document.querySelectorAll('.scroll-animate, .skill-category, .experience-item, #skillsContainer');
  animatedElements.forEach(el => {
    if (scrollObserver) scrollObserver.observe(el);
  });


});

// Custom Mouse Cursor Animation
const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");

window.addEventListener("mousemove", function (e) {
  const posX = e.clientX;
  const posY = e.clientY;

  if (cursorDot) {
    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;
  }

  if (cursorOutline && cursorOutline.animate) {
    cursorOutline.animate({
      left: `${posX}px`,
      top: `${posY}px`
    }, { duration: 500, fill: "forwards" });
  }
});
