const projects = {
    web: [
        {
            title: "Interactive Data Visualization",
            description: "Developed an interactive visualization for a large dataset using D3.js.",
            technologies: "D3.js, JavaScript",
            link: "#"
        }
    ],
    data: [
        {
            title: "Data Analysis with R",
            description: "Created predictive models and visualizations in R.",
            technologies: "R, Data Science",
            link: "#"
        }
    ],
    security: [
        {
            title: "Network Traffic Analysis",
            description: "Analyzed network traffic using Wireshark to improve security.",
            technologies: "Wireshark, Networking",
            link: "#"
        },
        {
            title: "Vulnerability Analysis",
            description: "Used nmap for vulnerability assessments.",
            technologies: "nmap, Security",
            link: "#"
        }
    ],
    iot: [
        {
            title: "IoT with Arduino & Raspberry Pi",
            description: "Created IoT automation solutions.",
            technologies: "Arduino, Raspberry Pi, IoT",
            link: "#"
        }
    ]
};

function loadProjects() {
    for (const category in projects) {
        const container = document.getElementById(`${category}-projects`);
        projects[category].forEach(project => {
            const projectCard = document.createElement("div");
            projectCard.classList.add("project-card");
            projectCard.innerHTML = `
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="technologies"><strong>Technologies:</strong> ${project.technologies}</div>
                <button onclick="viewProject('${project.link}')">View Project</button>
            `;
            container.appendChild(projectCard);
        });
    }
}

function viewProject(link) {
    if (link !== "#") {
        window.open(link, "_blank");
    } else {
        alert("Project details not available.");
    }
}

function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
}

document.addEventListener("DOMContentLoaded", loadProjects);

