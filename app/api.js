//Consumiendo api

const apiRyM = 'https://rickandmortyapi.com/api';
const apiCharacters = 'https://rickandmortyapi.com/api/character';

//Almacenamiento de la API en variable

const apiCall = fetch(apiCharacters);

//Respuesta de API y formateo a JSON

apiCall

    .then((data) => {
        return data.json();
    })

    //Llega el dato formateado y ya se puede utilizar

    .then((data) => {
        const $container = document.getElementById('container');
        const characters = data.results;

        for (let i = 0; i < characters.length; i++) {
            $container.innerHTML += `
            <div class='cardCharacters'>
                <img src=${characters[i].image}
                alt='character img'
                />
                <h2>${characters[i].name}</h2>
                <p>Gender: ${characters[i].gender}</p>
                <p>Species: ${characters[i].species}</p>
                <p>Status: ${characters[i].status}</p>
                <p>Origin: ${characters[i].origin.name}</p>
            </div>
            `;
        }
    })

    //Si hay un error nos muestra el catch

    .catch((err) => {
        console.log(err);
    });