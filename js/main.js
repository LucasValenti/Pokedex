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

    /*Trae las Sprite de los pokemon que el usuario ingresa*/
    const spriteContainer = document.getElementById('pokemon-sprites-container');
    const sprite = document.createElement('img');
    sprite.src = pokemon.sprites.front_default;
    /*sprite.alt = nombrePokemon;*/
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
    pokeId.textContent = `#${pokemon.id.toString().padStart(4, 0)}`;
    idContainer.innerHTML = '';
    idContainer.appendChild(pokeId)

    /*Tipos*/
    const containerTypes = document.getElementById('pokemon-type-container');
    const types = pokemon.types.map((type) => `<p>${type.type.name}</p>`);
    containerTypes.innerHTML = types.join('/');

    /*Stats*/

    const statsContainer = document.getElementById('statsContainer');
    const pokeStats = pokemon.stats.map((stat) =>`<p>${stat.base_stat}</p>`);
    statsContainer.innerHTML = pokeStats.join('');

    /*Stats Name*/
    const statsName = document.getElementById('statsName');
    const pokeStatsName = pokemon.stats.map((stat) =>`<p>${stat.stat.name}:</p>`);
    statsName.innerHTML = pokeStatsName.join('');



}  

/*Funcion para que lo que agrege el usuario se ponga en minuscula con el lowercase y se quiten los espaciados con el trim*/
    function convertirAMinusculas(event) {
    var input = event.target;
    input.value = input.value.toLowerCase().trim();
}
