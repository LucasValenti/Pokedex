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


    const spriteContainer = document.getElementById('pokemon-sprites-container');
    const sprite = document.createElement('img');
    sprite.src = pokemon.sprites.front_default;
    sprite.alt = nombrePokemon;

    spriteContainer.innerHTML = '';
    spriteContainer.appendChild(sprite);
}  

