module.exports = (body) => {
  console.log(body);
  let username = body.username;
  let personName = body.personName;
  let selectedProjects = body["selectedProject"];
  let email = body.email;
  let bio = body.bio;
  let experience = body["experience"];
  let repoData = body["repoData"];

  let degree = body.degree;
  let college = body.college;
  let collegeTime = body.collegeTime;

  console.log(selectedProjects);
  let languageList = "";
  repoData.forEach((repo) => {
    languageList += `
    <li>${repo.language}</li>`;
  });
  let projectsList = "";
  selectedProjects.forEach((project) => {
    projectsList += `
    <a href="https://github.com/${username}/${project["name"]}"><h3>${project}</h3></a>
    `;
  });

  return `

  <h1 id="name">${personName}</h1>
  <p>${bio}</p>
  <p>
    <a href="mailto:${email}">Email</a>
    <a href="https://github.com/${username}">GitHub</a>
  </p>
  <h2 id="experience">Experience</h2>
  <h3 id="campus-ambassador">${experience.role}</h3>
  <p><strong>${experience.companyName}</strong> (${experience.date})</p>
  <ul>
    <li>
      ${experience.description}
    </li>
  </ul>
  <h2 id="projects">Projects</h2>
  ${projectsList}

  <h2 id="education">Education</h2>
  <h3 id="bachelor-of-technology-in-computer-science">
    ${degree}
  </h3>
  <p><strong>${college}</strong> (${collegeTime})</p>
  <h2 id="languages">Languages</h2>
  <ul>
    ${languageList}
  </ul>
  `;
};
