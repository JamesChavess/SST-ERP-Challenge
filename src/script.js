let body = document.getElementById("body");
let hr = document.createElement("hr"); // specify classes for these to standarize vertical hr
let br = document.createElement("br");
let completedBtn = document.querySelector(".completedBtn");

function createNavBars() {
  let navBarContainer = document.createElement("section");
  navBarContainer.id = "navBarContainer";

  //first nav bar
  let nav1 = document.createElement("nav");
  nav1.classList.add("nav1");

  let nav1Tools = document.createElement("img");
  nav1Tools.classList.add("nav1Tools");
  nav1Tools.src = "./img/1stNavBarTools.svg";

  let nav1SearchBar = document.createElement("input");
  nav1SearchBar.classList.add("nav1SearchBar");
  nav1SearchBar.placeholder = "Buscar Opcion";
  nav1SearchBar.type = "search";

  let nav1SearchImg = document.createElement("img");
  nav1SearchImg.classList.add("nav1SearchImg");
  nav1SearchImg.src = "./img/search.svg";

  navBarContainer.append(nav1);
  nav1.append(nav1Tools);
  nav1.append(nav1SearchBar);
  nav1.append(nav1SearchImg);

  //second nav bar
  let nav2 = document.createElement("nav");
  nav2.classList.add("nav2");

  let nav2Tools = document.createElement("img");
  nav2Tools.src = "./img/2ndNavBarTools.svg";

  let nav2Div = document.createElement("Div");
  nav2Div.classList.add("nav2Div");

  let nav2Span1 = document.createElement("span");
  nav2Span1.innerText = "SST / GESTION DEL TRABAJADOR ";
  let nav2Span2 = document.createElement("span");
  nav2Span2.innerText = "/ FICHA DEL TRABAJDOR";

  navBarContainer.append(nav2);
  nav2.append(nav2Tools);
  nav2.append(nav2Div);
  nav2Div.append(nav2Span1, nav2Span2);

  //third nav bar
  let nav3 = document.createElement("nav");
  nav3.classList.add("nav3");

  let nav3Span = document.createElement("span");
  nav3Span.innerText = "Elementos de trabajo";
  nav3Span.classList.add("nav3Span");

  let nav3Input = document.createElement("input");
  nav3Input.placeholder = "Agregar Trabajador";
  nav3Input.classList.add("nav3Input");

  let nav3BtnImg = document.createElement("img");
  nav3BtnImg.src = "./img/exitBtn.svg";
  nav3BtnImg.alt - "WTF";

  let nav3Btn = document.createElement("button");
  nav3Btn.classList.add("nav3Btn");

  let nav3Tools = document.createElement("img");
  nav3Tools.src = "./img/3rdNavBarTools.svg";

  navBarContainer.append(nav3);
  nav3.append(nav3Tools);
  nav3.append(nav3Span);
  nav3.append(nav3Input);
  nav3.append(nav3Btn);
  body.append(navBarContainer);
}

function createWorkerTools(name, id, title, team) {
  let workerTools = document.createElement("section");
  workerTools.id = "workerTools";

  //worker info heading
  let workerInfo = document.createElement("header");
  workerInfo.classList.add("workerInfo");

  let workerIcon = document.createElement("img");
  workerIcon.src = "./img/personIcon.svg";
  workerIcon.id = 'workerIcon';

  let workerName = document.createElement("span");
  workerName.innerText = name;

  let workerId = document.createElement("span");
  workerId.innerText = "C.C" + id;

  let workerTitle = document.createElement("span");
  workerTitle.innerText = title;

  let workerTeam = document.createElement("span");
  workerTeam.innerText = "Directo " + team;

  workerTools.append(workerInfo);
  workerInfo.append(workerIcon);
  workerInfo.append(workerName);
  workerInfo.append(workerId);
  workerInfo.append(workerTitle);
  workerInfo.append(workerTeam);
  workerInfo.append(hr);

  //worker Tools Body
  let toolContainer = document.createElement("div");
  toolContainer.classList.add("toolsContainer");

  let workerTools1 = document.createElement("aside");
  let workElements = document.createElement("img");
  let workData = document.createElement("img");
  workElements.src = "./img/workElements.svg";
  workData.src = "./img/workData.svg";
  workElements.addEventListener('click',()=>{
  workElements.style.border = '2px solid red';
  })

  let workerTools2 = document.createElement("aside");
  let examVaccines = document.createElement("img");
  let training = document.createElement("img");
  examVaccines.src = "./img/examVaccines.svg";
  training.src = "./img/training.svg";

  let workerTools3 = document.createElement("aside");
  let incapacitations = document.createElement("img");
  let laborIllness = document.createElement("img");
  incapacitations.src = "./img/incapacitations.svg";
  laborIllness.src = "./img/laborIllness.svg";

  let workerTools4 = document.createElement("aside");
  let laborAccidents = document.createElement("img");
  let healthState = document.createElement("img");
  laborAccidents.src = "./img/laborAccidents.svg";
  healthState.src = "./img/healthState.svg";
  laborAccidents.addEventListener('click',()=>{
    laborAccidents.style.border = '2px solid red';
    })
  

  workerTools.append(toolContainer);
  toolContainer.append(workerTools1);
  workerTools1.append(workData);
  workerTools1.append(workElements);

  toolContainer.append(workerTools2);
  workerTools2.append(training);
  workerTools2.append(examVaccines);

  toolContainer.append(workerTools3);
  workerTools3.append(incapacitations);
  workerTools3.append(laborIllness);

  toolContainer.append(workerTools4);
  workerTools4.append(healthState);
  workerTools4.append(laborAccidents);

  body.append(workerTools);
}

function createAssignmentsContainer() {
  let assigmentContainer = document.createElement("section");
  assigmentContainer.id = "assigmentContainer";

  //assigments heading
  let assigmentHeader = document.createElement("header");
  assigmentHeader.classList.add("assigmentHeader");

  let elementsAssigned = document.createElement("img");
  elementsAssigned.src = "./img/elementsAssigned.svg";

  let pendingElements = document.createElement("img");
  pendingElements.src = "./img/pendingElements.svg";

  assigmentContainer.append(assigmentHeader);
  assigmentHeader.append(pendingElements);
  assigmentHeader.append(hr);
  assigmentHeader.append(elementsAssigned);

  //assigments body
  let assignmentsSection = document.createElement("section");
  assignmentsSection.classList.add("assignmentsSection");

  let assigmentSpan = document.createElement("span");
  assigmentSpan.classList.add("assignmentSpan");
  assigmentSpan.innerText = "Elementos de trabajo pendientes por asignar";

  let newElementImg = document.createElement("img");
  newElementImg.src = "./img/newElement.svg";
  newElementImg.id = "newElement";

  let newElementMsg = document.createElement("img");
  newElementMsg.src = "./img/newElementMsg.svg";
  newElementMsg.style.display = "none";
  newElementMsg.id = "newElementMsg";

  assigmentContainer.append(assignmentsSection);
  assignmentsSection.append(assigmentSpan);
  assignmentsSection.append(newElementImg);
  assignmentsSection.append(newElementMsg);

  body.append(assigmentContainer);
}

function createNewAssignments() {
  //individual Assigments -- refactor into function
  //1st part : list
  assignmentsSection = document.querySelector(".assignmentsSection");
  let assignmentsDiv = document.createElement("div");
  assignmentsDiv.classList.add("assignmentsDiv");

  let assignmentsUl = document.createElement("ul");
  assignmentsUl.classList.add("assignmentsUl");

  let assignmentsLi1 = document.createElement("li");
  assignmentsLi1.innerText = "Parche ocular (PROGRAMA SST)";
  let assignmentsLi2 = document.createElement("li");
  assignmentsLi2.innerText = "ASEO Y CAFETERÍA";
  let assignmentsLi3 = document.createElement("li");
  assignmentsLi3.innerText = "Retiro";

  let verticalHr = document.createElement("hr");
  verticalHr.classList.add("verticalHr");

  assignmentsSection.append(assignmentsDiv);
  assignmentsDiv.append(assignmentsUl);
  assignmentsUl.append(assignmentsLi1);
  assignmentsUl.append(assignmentsLi2);
  assignmentsUl.append(assignmentsLi3);
  assignmentsDiv.append(verticalHr);

  //2nd part : state
  let stateLabel = document.createElement("label");
  stateLabel.classList.add("stateLabel");
  stateLabel.innerText = "Estado";
  stateLabel.for = "state";

  let stateSelect = document.createElement("select");
  stateSelect.classList.add("stateSelect");
  stateSelect.name = "state";

  let pendingOption = document.createElement("option");
  pendingOption.innerText = "Pendiente";
  let completedOption = document.createElement("option");
  completedOption.innerText = "Completado";

  let verticalHr2 = document.createElement("hr");
  verticalHr2.classList.add("verticalHr2");

  assignmentsDiv.append(stateLabel);
  assignmentsDiv.append(br);
  assignmentsDiv.append(stateSelect);
  stateSelect.append(pendingOption);
  stateSelect.append(completedOption);
  assignmentsDiv.append(verticalHr2);

  //3rd part : due date
  let dueDateLabel = document.createElement("label");
  dueDateLabel.classList.add("dueDateLabel");
  dueDateLabel.innerText = "Fecha de entrega";
  dueDateLabel.for = "dueDate";

  let dueDateInput = document.createElement("input");
  dueDateInput.classList.add("dueDateInput");
  dueDateInput.name = "dueDate";
  dueDateInput.type = "date";

  let verticalHr3 = document.createElement("hr");
  verticalHr3.classList.add("verticalHr3");

  assignmentsDiv.append(dueDateLabel);
  assignmentsDiv.append(br);
  assignmentsDiv.append(dueDateInput);
  assignmentsDiv.append(verticalHr3);

  //4th part : repo date
  let repoDateLabel = document.createElement("label");
  repoDateLabel.classList.add("repoDateLabel");
  repoDateLabel.innerText = "Fecha de repocision";
  repoDateLabel.for = "repoDate";

  let repoDateInput = document.createElement("input");
  repoDateInput.classList.add("repoDateInput");
  repoDateInput.name = "repoDate";
  repoDateInput.type = "date";

  let verticalHr4 = document.createElement("hr");
  verticalHr4.classList.add("verticalHr4");

  assignmentsDiv.append(repoDateLabel);
  assignmentsDiv.append(br);
  assignmentsDiv.append(repoDateInput);
  assignmentsDiv.append(verticalHr4);

  //5th part : observations
  let observations = document.createElement("textarea");
  observations.classList.add("observations");
  observations.placeholder = "Observaciones...";

  let paperClipImg = document.createElement("img");
  paperClipImg.id = "paperClipImg";
  paperClipImg.src = "./img/paperClip.svg";

  let clipInput = document.createElement("input");
  clipInput.style.display = "none";
  clipInput.type = "file";
  clipInput.accept = "*";

  let completedBtn = document.createElement("button");
  completedBtn.classList.add("completedBtn");
  completedBtn.innerText = "Completar";

  assignmentsDiv.append(observations);
  assignmentsDiv.append(clipInput);
  assignmentsDiv.append(paperClipImg);
  assignmentsDiv.append(completedBtn);

  clipInput.addEventListener('change',()=>{
      console.log(clipInput.files[0].name)
  })
  paperClipImg.addEventListener("click", () => {
      clipInput.click()
  });
}
createNavBars();
createWorkerTools("James A. Chaves F.", "1125980603", "JR Developer 🤞", "GTH");
createAssignmentsContainer();

document.getElementById("newElement").addEventListener("click", () => {
  console.log("btn click works fine");
  createNewAssignments();
});
document.getElementById("newElement").addEventListener("mouseenter", () => {
  newElementMsg.style.display = "flex";
});
document.getElementById("newElement").addEventListener("mouseleave", () => {
  newElementMsg.style.display = "none";
});
