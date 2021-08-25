let buttonCounter = 0;
let inputSpace = 0;
let filters = [];
let applications;

const searchEngineVars = {
  roles: ["Frontend", "Backend", "Fullstack"],
  levels: ["Junior", "Midweight", "Senior"],
  languages: ["Python", "Ruby", "JavaScript", "HTML", "CSS"],
  tools: ["React", "Sass", "Vue", "Django", "RoR"]
}

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

// //reads the input field and adds the typed buttons
// $("#searchBar").keypress( () => {
//   for(i=0; i < 6; i++) {
//     console.log(document.getElementById("searchBar").value);
//       if(document.getElementById("searchBar").value == searchEngineVars.roles[i]) {
//         let roleButton = document.createElement('button');
//         roleButton.classList.add('btn-secondary');
//         roleButton.innerHTML = searchEngineVars.roles[i];
//         roleButton.onclick = () => {clearButton(roleButton)};
//         addButton(roleButton);
//       } else if(document.getElementById("searchBar").value == searchEngineVars.levels[i]) {
//           let levelButton = document.createElement('button');
//           levelButton.classList.add('btn-secondary');
//           levelButton.innerHTML = searchEngineVars.levels[i];
//           levelButton.onclick = () => {clearButton(levelButton)};
//           addButton(levelButton);
//       } else if(document.getElementById("searchBar").value == searchEngineVars.languages[i]) {
//           let langButton = document.createElement('button');
//           langButton.classList.add('btn-secondary');
//           langButton.innerHTML = searchEngineVars.languages[i];
//           langButton.onclick = () => {clearButton(langButton)};
//           addButton(langButton);
//       } else if(document.getElementById("searchBar").value == searchEngineVars.tools[i]) {
//           let toolsButton = document.createElement('button');
//           toolsButton.classList.add('btn-secondary');
//           toolsButton.innerHTML = searchEngineVars.tools[i];
//           toolsButton.onclick = () => {clearButton(toolsButton)};
//           addButton(toolsButton);
//       }
//   }
// });

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
      document.getElementById("button-group").appendChild(copyButton);
}

function clearButton(button) {
  for(i=0; i < filters.length; i++) {
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
  for (let i = 0; i < applications.length; i++) {
    let cardDiv = document.createElement('div');
    cardDiv.classList.add('card');
    cardDiv.classList.add('row');
    cardDiv.id = `${applications[i].id}`;

    let insideDiv = document.createElement('div');
    insideDiv.classList.add('card-body');
    insideDiv.classList.add('col-4');
    cardDiv.appendChild(insideDiv);

    let inside2Div = document.createElement('div');
    inside2Div.classList.add('card-body');
    inside2Div.classList.add('card-body2');
    insideDiv.classList.add('col-4');
    // inside2Div.classList.add('col-12');
    cardDiv.appendChild(inside2Div);

    let profPic = document.createElement('img');
    profPic.src = applications[i].logo;
    insideDiv.appendChild(profPic);

    let titleColumn = document.createElement('div');
    titleColumn.classList.add('titleContainer');
    insideDiv.appendChild(titleColumn);

    let companyRow = document.createElement('div');
    companyRow.classList.add('row');
    companyRow.classList.add('companyRow');


    let company = document.createElement('p');
    company.classList.add('paragraph');
    company.classList.add("col-3");
    company.innerHTML = `${applications[i].company}`;
    companyRow.appendChild(company);
    
    if (applications[i].new === true) {
      let newTag = document.createElement('p');
      newTag.classList.add('newTag');
      newTag.classList.add("col-2");
      newTag.innerHTML = 'NEW!';
      cardDiv.style.borderLeft = '5px hsl(180, 29%, 50%) solid';
      companyRow.appendChild(newTag);
    }
    
    if (applications[i].featured === true) {
      let featTag = document.createElement('p');
      featTag.classList.add('featTag');
      featTag.classList.add("col-2");
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
    post.classList.add("col");
    post.innerHTML = `${applications[i].postedAt}`;
    timeRow.appendChild(post);

    let contract = document.createElement('p');
    contract.classList.add('bottom-row');
    contract.classList.add("col");
    contract.innerHTML = `${applications[i].contract}`;
    timeRow.appendChild(contract);

    let location = document.createElement('p');
    location.classList.add('bottom-row');
    location.classList.add('col');
    location.innerHTML = `${applications[i].location}`;
    timeRow.appendChild(location);

    let langDiv = document.createElement('div');
    langDiv.classList.add('btn-container');
    inside2Div.appendChild(langDiv);

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
      langDiv.appendChild(langButton);
    }

    for (j = 0; j < applications[i].tools.length; j++) {
      let toolsButton = document.createElement('button');
      toolsButton.classList.add('btn-secondary');
      toolsButton.innerHTML = `${applications[i].tools[j]}`;
      toolsButton.onclick = () => {addButton(toolsButton)};
      langDiv.appendChild(toolsButton);
    }

    document.body.appendChild(cardDiv);
  }
});