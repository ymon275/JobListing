let buttonCounter = 0;
let inputSpace = 0;
let filters = [];
let applications;



// let applications = [
//   {
//     id: 1,
//     company: 'Photosnap',
//     logo: './images/photosnap.svg',
//     new: true,
//     featured: true,
//     position: 'Senior Frontend Developer',
//     role: 'Frontend',
//     level: 'Senior',
//     postedAt: '1d ago',
//     contract: 'Full Time',
//     location: 'USA Only',
//     languages: ['HTML', 'CSS', 'JavaScript'],
//     tools: [],
//   },
//   {
//     id: 2,
//     company: 'Manage',
//     logo: './images/manage.svg',
//     new: true,
//     featured: true,
//     position: 'Fullstack Developer',
//     role: 'Fullstack',
//     level: 'Midweight',
//     postedAt: '1d ago',
//     contract: 'Part Time',
//     location: 'Remote',
//     languages: ['Python'],
//     tools: ['React'],
//   }
// ];

// const searchEngineVars = {
//   roles: ["Frontend", "Backend", "Fullstack"],
//   levels: ["Junior", "Midweight", "Senior"],
//   languages: ["Python", "Ruby", "JavaScript", "HTML", "CSS"],
//   tools: ["React", "Sass", "Vue", "Django", "RoR"]
// }

function searchEngine() {
  for(i=0; i < applications.length; i++) {
    $(`#${applications[i].id}`).show();
  }
  for(i=0; i < filters.length; i++) {
    let filterType;
    switch(filters[i]) {
      case "Frontend":
        filterType = "role";
        break;
      case "Backend":
        filterType = "role";
        break;
      case "Fullstack":
        filterType = "role";
        break;
      case "Frontend":
        filterType = "role";
        break;
      case "Python":
        filterType = "language";
        break;
      case "Ruby":
        filterType = "language";
        break;
      case "JavaScript":
        filterType = "language";
        break;
      case "HTML":
        filterType = "language";
        break;
      case "CSS":
        filterType = "language";
        break;
      case "Junior":
        filterType = "level";
        break;
      case "Midweight":
        filterType = "level";
        break;
      case "Senior":
        filterType = "level";
        break;
      case "React":
        filterType = "tool";
        break;
      case "Sass":
        filterType = "tool";
        break;
      case "Vue":
        filterType = "tool";
        break;
      case "Django":
        filterType = "tool";
        break;
      case "RoR":
        filterType = "tool";
        break;
    }
    //shows all cards

    for(j=0; j < applications.length; j++) {
      if(filterType == "role") {
        if(filters[i] != applications[j].role) {
          //changes all the cards to match the filters
          $(`#${applications[j].id}`).hide();
        }
        
      } else if(filterType == "level") {
          if(filters[i] != applications[j].level) {
            $(`#${applications[j].id}`).hide();
          }
      } else if(filterType == "language") {
          if(!applications[j].languages.some((lang) => {
            return lang == filters[i];
          })) {
            $(`#${applications[j].id}`).hide();
          }

      } else if(filterType == "tool") {
          if(!applications[j].tools.some((tool) => {
            return tool == filters[i];
          })) {
            $(`#${applications[j].id}`).hide();
          }
      }
    }
  }
}

//reads the input field and adds the typed buttons
document.getElementById('searchBar').addEventListener('change', () => {
  console.log("event function ran");
  // console.log(searchEngineVars.length)
  for(i=0; i < 6; i++) {
    console.log("for loop 1 runs");
    console.log(document.getElementById("searchBar").value);
      // console.log("for loop 2 runs")
      if(document.getElementById("searchBar").value == searchEngineVars.roles[i]) {
        console.log("if statement runs");
        let roleButton = document.createElement('button');
        roleButton.classList.add('btn-secondary');
        roleButton.innerHTML = searchEngineVars.roles[i];
        roleButton.onclick = () => {clearButton(roleButton)};
        // console.log(langButton.innerHTML);
        addButton(roleButton);
      } else if(document.getElementById("searchBar").value == searchEngineVars.levels[i]) {
        console.log("if statement 2 runs");
          let levelButton = document.createElement('button');
          levelButton.classList.add('btn-secondary');
          levelButton.innerHTML = searchEngineVars.levels[i];
          levelButton.onclick = () => {clearButton(levelButton)};
          // console.log(langButton.innerHTML);
          addButton(levelButton);
      } else if(document.getElementById("searchBar").value == searchEngineVars.languages[i]) {
        console.log("if statement 3 runs");
          let langButton = document.createElement('button');
          langButton.classList.add('btn-secondary');
          langButton.innerHTML = searchEngineVars.languages[i];
          langButton.onclick = () => {clearButton(langButton)};
          // console.log(langButton.innerHTML);
          addButton(langButton);
      } else if(document.getElementById("searchBar").value == searchEngineVars.tools[i]) {
        console.log("if statement 4 runs");
          let toolsButton = document.createElement('button');
          toolsButton.classList.add('btn-secondary');
          toolsButton.innerHTML = searchEngineVars.tools[i];
          toolsButton.onclick = () => {clearButton(toolsButton)};
          // console.log(langButton.innerHTML);
          addButton(toolsButton);
      }
  }
});

function addButton(button) {
  document.getElementById('searchBar').value = '';
  document.getElementById('searchBar').placeholder = '';
  buttonCounter++;
  let copyButton = document.createElement('button');
      copyButton.classList.add('btn-secondary');
      copyButton.innerHTML = `${button.innerHTML}&times`;
      filters.push(button.innerHTML);
      console.log(filters);
      searchEngine();
      copyButton.onclick = () => {clearButton(copyButton)};
      // console.log(langButton.innerHTML);
      console.log(copyButton.style.width);
      inputSpace += parseInt(copyButton.style.width, 10);
      console.log(inputSpace);
      addSpace();
      document.getElementById("button-group").appendChild(copyButton);
}

function clearButton(button) {
  for(i=0; i < filters.length; i++) {
    // console.log(`${filters[i]} ${button.innerHTML.slice(0, button.innerHTML.length-1)}`);
    if(button.innerHTML.slice(0, button.innerHTML.length-1) == filters[i]) {
      filters.splice(i, 1);
    }
  }
  $(button).hide();
  buttonCounter--;
  inputSpace -= parseInt(button.style.width, 10);
  
  console.log(filters);
  searchEngine();
  if(buttonCounter == 0) {
    document.getElementById('searchBar').placeholder = 'Filter...';
  }
}

function addSpace() {
  document.getElementById('searchBar').value = '';
  let value = document.getElementById('searchBar').value;
  console.log(inputSpace);
  for(i=0; i < inputSpace/10;i++) {
    value = `${value} `;
    document.getElementById('searchBar').value = value;
  }
}

fetch("data.json")
  .then(response => response.json())
  .then(data => {
    console.log(data);
    applications = data;
  })
  .catch((e) => {
    errorScreen = document.createElement("h1");
    errorScreen.innerHTML = "Sorry, there was a problem";
  })
  .finally(() => {
  //     <div class="card" style="width: 18rem;">
  //     <img src="..." class="card-img-top" alt="...">
  //     <div class="card-body">
  //       <h5 class="card-title">Card title</h5>
  //       <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  //       <a href="#" class="btn btn-primary">Go somewhere</a>
  //     </div>
  //   </div>
  for (let i = 0; i < applications.length; i++) {
    let cardDiv = document.createElement('div');
    cardDiv.classList.add('card');
    cardDiv.id = `${applications[i].id}`;

    let insideDiv = document.createElement('div');
    insideDiv.classList.add('card-body');
    cardDiv.appendChild(insideDiv);

    let inside2Div = document.createElement('div');
    inside2Div.classList.add('card-body2');
    insideDiv.appendChild(inside2Div);

    let profPic = document.createElement('img');
    profPic.src = applications[i].logo;
    inside2Div.appendChild(profPic);

    let titleColumn = document.createElement('div');
    titleColumn.classList.add('titleContainer');
    inside2Div.appendChild(titleColumn);

    let companyRow = document.createElement('div');
    companyRow.classList.add('row');

    let company = document.createElement('p');
    company.classList.add('paragraph');
    company.innerHTML = `${applications[i].company}`;
    companyRow.appendChild(company);
    
    if (applications[i].new === true) {
      let newTag = document.createElement('p');
      newTag.classList.add('newTag');
      newTag.innerHTML = 'NEW!';
      cardDiv.style.borderLeft = '5px hsl(180, 29%, 50%) solid';
      companyRow.appendChild(newTag);
    }
    
    if (applications[i].featured === true) {
      let featTag = document.createElement('p');
      featTag.classList.add('featTag');
      featTag.innerHTML = 'FEATURED';
      companyRow.appendChild(featTag);
    }
    
    titleColumn.appendChild(companyRow);

    let title = document.createElement('h5');
    title.classList.add('card-title');
    title.innerHTML = `${applications[i].position}`;
    titleColumn.appendChild(title);

    let timeRow = document.createElement('div');
    timeRow.classList.add('row');
    titleColumn.appendChild(timeRow);

    let post = document.createElement('p');
    post.classList.add('bottom-row');
    post.innerHTML = `${applications[i].postedAt}`;
    timeRow.appendChild(post);

    let contract = document.createElement('p');
    contract.classList.add('bottom-row');
    contract.innerHTML = `${applications[i].contract}`;
    timeRow.appendChild(contract);

    let location = document.createElement('p');
    location.classList.add('bottom-row');
    location.innerHTML = `${applications[i].location}`;
    timeRow.appendChild(location);

    // let para = document.createElement("p");
    // para.classList.add("card-text");
    // insideDiv.appendChild(para);

    let langDiv = document.createElement('div');
    langDiv.classList.add('btn-container');
    insideDiv.appendChild(langDiv);

    let roleButton = document.createElement('button');
    roleButton.classList.add('btn-secondary');
    roleButton.innerHTML = `${applications[i].role}`;
    roleButton.onclick = () => {addButton(roleButton)};
    langDiv.appendChild(roleButton);

    let levelButton = document.createElement('button');
    levelButton.classList.add('btn-secondary');
    levelButton.innerHTML = `${applications[i].level}`;
    levelButton.onclick = () => {addButton(levelButton)};
    langDiv.appendChild(levelButton);

    for (j = 0; j < applications[i].languages.length; j++) {
      let langButton = document.createElement('button');
      langButton.classList.add('btn-secondary');
      langButton.innerHTML = applications[i].languages[j];
      langButton.onclick = () => {addButton(langButton)};
      // console.log(langButton.innerHTML);
      langDiv.appendChild(langButton);
    }

    for (j = 0; j < applications[i].tools.length; j++) {
      let toolsButton = document.createElement('button');
      toolsButton.classList.add('btn-secondary');
      toolsButton.innerHTML = `${applications[i].tools[j]}`;
      toolsButton.onclick = () => {addButton(toolsButton)};
      // console.log(toolsButton.innerHTML);
      langDiv.appendChild(toolsButton);
    }

    document.body.appendChild(cardDiv);
  }
});