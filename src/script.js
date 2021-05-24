let navBarContainer = document.getElementById('navBarContainer');
let workerTools = document.getElementById('workerTools');

function createNavBars(){

    //first nav bar
    let nav1 = document.createElement('nav');
    nav1.classList.add('nav1');

    let nav1Tools = document.createElement('img');
    nav1Tools.classList.add('nav1Tools');
    nav1Tools.src = './img/1stNavBarTools.svg';

    let nav1SearchBar = document.createElement('input');
    nav1SearchBar.classList.add('nav1SearchBar');
    nav1SearchBar.placeholder = 'Buscar Opcion';
    nav1SearchBar.type = 'search';

    let nav1SearchImg = document.createElement('img');
    nav1SearchImg.classList.add('nav1SearchImg');
    nav1SearchImg.src = './img/search.svg'

    navBarContainer.append(nav1)
    nav1.append(nav1Tools)
    nav1.append(nav1SearchBar)
    nav1.append(nav1SearchImg)

    //second nav bar
    let nav2 = document.createElement('nav');
    nav2.classList.add('nav2');

    let nav2Tools = document.createElement('img');
    nav2Tools.src = './img/2ndNavBarTools.svg';

    let nav2Div = document.createElement('Div');
    nav2Div.classList.add('nav2Div');
   
    let nav2Span1 = document.createElement('span');
    nav2Span1.innerText = 'SST / GESTION DEL TRABAJADOR '
    let nav2Span2 = document.createElement('span');
    nav2Span2.innerText = '/ FICHA DEL TRABAJDOR';

    navBarContainer.append(nav2)
    nav2.append(nav2Tools)
    nav2.append(nav2Div)
    nav2Div.append(nav2Span1,nav2Span2)
 
    //third nav bar
    let nav3 = document.createElement('nav');
    nav3.classList.add('nav3');
    
    let nav3Span = document.createElement('span');
    nav3Span.innerText = 'Elementos de trabajo';
    nav3Span.classList.add('nav3Span');
    
    let nav3Input = document.createElement('input');
    nav3Input.placeholder = 'Agregar Trabajador';
    nav3Input.classList.add('nav3Input');
    
    let nav3BtnImg = document.createElement('img');
    nav3BtnImg.src = './img/exitBtn.svg';
    nav3BtnImg.alt - 'WTF';
    
    let nav3Btn = document.createElement('button');
    nav3Btn.classList.add('nav3Btn');
    
    let nav3Tools = document.createElement('img');
    nav3Tools.src = './img/3rdNavBarTools.svg';

    navBarContainer.append(nav3)
    nav3.append(nav3Tools)
    nav3.append(nav3Span)
    nav3.append(nav3Input)
    nav3.append(nav3Btn)
    // nav3Btn.append(nav3BtnImg)
};
function createWorkerTools(name,id,title,team){

    //worker info heading
    let workerInfo = document.createElement('header');
    workerInfo.classList.add('workerInfo')

    let workerIcon = document.createElement('img')
    workerIcon.src = './img/personIcon.svg';

    let workerName = document.createElement('span');
    workerName.innerText = name;

    let workerId = document.createElement('span');
    workerId.innerText = 'C.C'+id;

    let workerTitle = document.createElement('span');
    workerTitle.innerText = title;

    let workerTeam = document.createElement('span');
    workerTeam.innerText = 'Directo '+team;

    let hr = document.createElement('hr');

    workerTools.append(workerInfo)
    workerInfo.append(workerIcon);
    workerInfo.append(workerName);
    workerInfo.append(workerId);
    workerInfo.append(workerTitle);
    workerInfo.append(workerTeam);
    workerInfo.append(hr);

    //worker Tools Section
    let toolContainer = document.createElement('div')
    toolContainer.classList.add('toolsContainer')

    let workerTools1 = document.createElement('aside');
    let workElements = document.createElement('img');
    let workData = document.createElement('img');
    workElements.src = './img/workElements.svg';
    workData.src = './img/workData.svg';

    let workerTools2 = document.createElement('aside');
    let examVaccines = document.createElement('img');
    let training = document.createElement('img');
    examVaccines.src = './img/examVaccines.svg';
    training.src = './img/training.svg';

    let workerTools3 = document.createElement('aside');
    let incapacitations = document.createElement('img');
    let laborIllness = document.createElement('img');
    incapacitations.src = './img/incapacitations.svg';
    laborIllness.src = './img/laborIllness.svg';

    let workerTools4 = document.createElement('aside');
    let laborAccidents = document.createElement('img');
    let healthState = document.createElement('img');
    laborAccidents.src = './img/laborAccidents.svg';
    healthState.src = './img/healthState.svg';
    
    workerTools.append(toolContainer)
    toolContainer.append(workerTools1)
    workerTools1.append(workData)
    workerTools1.append(workElements)

    toolContainer.append(workerTools2)
    workerTools2.append(training)
    workerTools2.append(examVaccines)

    toolContainer.append(workerTools3)
    workerTools3.append(incapacitations)
    workerTools3.append(laborIllness)

    toolContainer.append(workerTools4)
    workerTools4.append(healthState)
    workerTools4.append(laborAccidents)
    
};
createNavBars();
createWorkerTools('James A. Chaves F.','1125980603','Desarrollador JR 🤞','GTH');