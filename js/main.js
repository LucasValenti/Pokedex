document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que se recargue la página
    const nombrePokemon = document.getElementById('btn-buscar-poke').value;
    fetchName(nombrePokemon);
});


function fetchName(name){
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`)
    .then((res) => res.json())
    .then((data) => {
        buscarPokemon(data);
    })
}


function buscarPokemon(pokemon) {
    const nombrePokemon = document.getElementById('btn-buscar-poke').getAttribute('value');

    /*Trae las Sprite de los pokemon que el usuario ingresa*/
    const spriteContainer = document.getElementById('pokemon-sprites-container');
    const sprite = document.createElement('img');
    sprite.src = pokemon.sprites.front_default;
    sprite.alt = nombrePokemon;
    spriteContainer.innerHTML = '';
    spriteContainer.appendChild(sprite);

    /*Nombre*/
    const nameContainer = document.getElementById('pokemon-name-container');
    const pokeName = document.createElement('p');
    pokeName.textContent = pokemon.name;
    nameContainer.innerHTML = '';
    nameContainer.appendChild(pokeName);

    /*ID*/
    const idContainer = document.getElementById('pokemon-id-container');
    const pokeId = document.createElement('p');
    pokeId.textContent = `#${pokemon.id.toString().padStart(3, 0)}`;
    idContainer.innerHTML = '';
    idContainer.appendChild(pokeId)

    /*Tipos ESTO NO FUNCIONA ARREGLALO WEY*/
    const containerType1 = document.getElementById('pokemon-type-container-1');
    const containerType2 = document.getElementById('pokemon-type-container-2');

    const pokeType = document.createElement('p');
    pokeType.textContent = pokemon.types.type
    containerType1.innerHTML = '';
    containerType2.innerHTML = '';
    containerType1.appendChild(pokeType);
    containerType2.appendChild(pokeType)
}  

