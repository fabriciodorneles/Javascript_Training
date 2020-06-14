var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');


function renderRepos(repos) {
    listElement.innerHTML = ''; //apaga tudo que estiver na list element
    for(repo of repos){
        var taskElement = document.createElement('li');
        var taskText = document.createTextNode(repo.name);
        taskElement.appendChild(taskText);
        listElement.appendChild(taskElement);
    }    
}

function carregandoTimer(){
    listElement.innerHTML = ''; //apaga tudo que estiver na list element
    var taskElement = document.createElement('li');
    var taskText = document.createTextNode('carregando...');
    taskElement.appendChild(taskText);
    listElement.appendChild(taskElement);
}

function notFound(){
    listElement.innerHTML = ''; //apaga tudo que estiver na list element
    var taskElement = document.createElement('li');
    var taskText = document.createTextNode('User Not Found');
    taskElement.appendChild(taskText);
    listElement.appendChild(taskElement);
}

function addTask() {
    var userAddress = 'https://api.github.com/users/' + inputElement.value+'/repos'

    carregandoTimer();
    axios.get(userAddress)
    .then(function(response) {
        renderRepos(response.data);
    })
    .catch(function(error) {
        //console.warn(error);
        notFound()
    });
    inputElement.value = ''; //reset o valor do input
}

buttonElement.onclick = addTask;



