const API_URL = 'https://jsonplaceholder.typicode.com';

const HTMLResponse = document.querySelector("#app");

// Con creaacion de nodos en HTML
const ul = document.createDocumentFragment();
 
fetch(`${API_URL}/users`)
.then((response) => response.json())
.then((users) => {

    users.forEach((user) => {

        let element = document.createElement('li');
        element.appendChild(
            document.createTextNode(`${user.name} 📧 ${user.email}`)
            );
        ul.appendChild(element);
    });

    HTMLResponse.appendChild(ul);

})





/* Sistema con FETCH


fetch(`${API_URL}/users`)
    .then((response) => response.json())
    .then((users) =>{

    const template = users.map((user) => `<li> ${user.name} 📧 ${user.email}</li>` );
    HTMLResponse.innerHTML = `<ul>${template}</ul>`;
}) 
*/



/* Sistema con javascript


const xhr = new XMLHttpRequest();

function onRequestHandler(){

    if (this.readyState === 4 &&  this.status === 200  ) {
        // 0 = UNSET : no se ha llamado al metodo open
        // 1 = OPENED : no se ha llamado al metodo opened
        // 2 = HEADER_RECEIVED : se esta llamando el metodo send()
        // 3 = LOADING : esta cargando, esta recibiendo la respuesta el
        // 4 = DONE : se ha completado la operacion
        const data = JSON.parse(this.response);
        const HTMLResponse = document.querySelector('#app');
        const template = data.map( user => `<li> ${user.name} 📧 ${user.email}</li>`);
        HTMLResponse.innerHTML = `<ul>${template}</ul>`;
    
    }
}


xhr.addEventListener('load',onRequestHandler);
xhr.open('GET',`${API_URL}/users`);
xhr.send(); */