let applications = [
  {
    id: 1,
    company: "Photosnap",
    logo: "./images/photosnap.svg",
    new: true,
    featured: true,
    position: "Senior Frontend Developer",
    role: "Frontend",
    level: "Senior",
    postedAt: "1d ago",
    contract: "Full Time",
    location: "USA Only",
    languages: ["HTML", "CSS", "JavaScript"],
    tools: [],
  },
  {
    id: 2,
    company: "Manage",
    logo: "./images/manage.svg",
    new: true,
    featured: true,
    position: "Fullstack Developer",
    role: "Fullstack",
    level: "Midweight",
    postedAt: "1d ago",
    contract: "Part Time",
    location: "Remote",
    languages: ["Python"],
    tools: ["React"],
  },
];

function clearSearch() {
  document.getElementById("searchBar").value = "";
  return false;
}

window.onload = () => {
  //     <div class="card" style="width: 18rem;">
  //     <img src="..." class="card-img-top" alt="...">
  //     <div class="card-body">
  //       <h5 class="card-title">Card title</h5>
  //       <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  //       <a href="#" class="btn btn-primary">Go somewhere</a>
  //     </div>
  //   </div>
  for (let i = 0; i < applications.length; i++) {

    let cardDiv = document.createElement("div");
    cardDiv.classList.add("card");

    let insideDiv = document.createElement("div");
    insideDiv.classList.add("card-body");
    cardDiv.appendChild(insideDiv);

    let profPic = document.createElement("img");
    profPic.src = applications[i].logo;
    insideDiv.appendChild(profPic);

    let titleColumn = document.createElement("div");
    titleColumn.classList.add("titleContainer");
    insideDiv.appendChild(titleColumn);

    let companyRow = document.createElement("div");
    companyRow.classList.add("row");
    

    let company = document.createElement("p");
    company.style = "width: 110px"
    company.innerHTML = `${applications[i].company}`;
    companyRow.appendChild(company);

    let newTag = document.createElement("p");
    newTag.classList.add("newTag");
    if (applications[i].new === true) {
      newTag.innerHTML = "NEW!";
      cardDiv.style.borderLeft = "5px hsl(180, 29%, 50%) solid";
    }
    companyRow.appendChild(newTag);

    let featTag = document.createElement("p");
    featTag.classList.add("featTag");
    if (applications[i].featured === true) {
      featTag.innerHTML = "FEATURED";
    }
    companyRow.appendChild(featTag);

    titleColumn.appendChild(companyRow);

    let title = document.createElement("h5");
    title.classList.add("card-title");
    title.innerHTML = `${applications[i].position}`;
    titleColumn.appendChild(title);

    let timeRow = document.createElement("div");
    timeRow.classList.add("row");
    titleColumn.appendChild(timeRow);

    let post = document.createElement("p");
    post.classList.add("bottom-row");
    post.innerHTML = `${applications[i].postedAt}`;
    timeRow.appendChild(post);

    let contract = document.createElement("p");
    contract.classList.add("bottom-row");
    contract.innerHTML = `${applications[i].contract}`;
    timeRow.appendChild(contract);

    let location = document.createElement("p");
    location.classList.add("bottom-row");
    location.innerHTML = `${applications[i].location}`;
    timeRow.appendChild(location);

    // let para = document.createElement("p");
    // para.classList.add("card-text");
    // insideDiv.appendChild(para);

    let langDiv = document.createElement("div");
    langDiv.classList.add("btn-container");
    insideDiv.appendChild(langDiv);

    let roleButton = document.createElement("button");
    roleButton.classList.add("btn-secondary");
    roleButton.innerHTML = `${applications[i].role}`;
    langDiv.appendChild(roleButton);

    let levelButton = document.createElement("button");
    levelButton.classList.add("btn-secondary");
    levelButton.innerHTML = `${applications[i].level}`;
    langDiv.appendChild(levelButton);

    for (j = 0; j < applications[i].languages.length; j++) {
      let langButton = document.createElement("button");
      langButton.classList.add("btn-secondary");
      langButton.innerHTML = `${applications[i].languages[j]}`;
      console.log(langButton.innerHTML);
      langDiv.appendChild(langButton);
    }

    for (j = 0; j < applications[i].tools.length; j++) {
      let toolsButton = document.createElement("button");
      toolsButton.classList.add("btn-secondary");
      toolsButton.innerHTML = `${applications[i].tools[j]}`;
      console.log(toolsButton.innerHTML);
      langDiv.appendChild(toolsButton);
    }

    document.body.appendChild(cardDiv);
  }
};
