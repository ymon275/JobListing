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
    // langDiv.classList.add("");
    switch (applications[i].company) {
      case "Photosnap":
        profPic.src = "images/photosnap.svg";
        break;
      case "Manage":
        profPic.src = "images/manage.svg";
    }
    insideDiv.appendChild(profPic);

    let titleColumn = document.createElement("div");
    titleColumn.classList.add("titleContainer");
    insideDiv.appendChild(titleColumn);

    let companyRow = document.createElement("div");
    companyRow.classList.add("row");

    let company = document.createElement("p");
    company.innerHTML = `${applications[i].company}`;
    companyRow.appendChild(company);

    let newTag = document.createElement("p");
    if (applications[i].new === true) {
      newTag.innerHTML = "New!";
    }
    companyRow.appendChild(newTag);

    titleColumn.appendChild(companyRow);

    let title = document.createElement("h5");
    title.classList.add("row");
    title.innerHTML = `${applications[i].position}`;
    titleColumn.appendChild(title);

    let timeRow = document.createElement("div");
    timeRow.classList.add("row");
    titleColumn.appendChild(timeRow);

    // let para = document.createElement("p");
    // para.classList.add("card-text");
    // insideDiv.appendChild(para);

    let langDiv = document.createElement("div");
    langDiv.classList.add("btn-container");
    insideDiv.appendChild(langDiv);

    for (j = 0; j < applications[i].languages.length; j++) {
      let langButton = document.createElement("button");
      langButton.classList.add("btn-secondary");
      langButton.innerHTML = `${applications[i].languages[j]}`;
      console.log(langButton.innerHTML);
      langDiv.appendChild(langButton);
    }

    document.body.appendChild(cardDiv);
  }
};
