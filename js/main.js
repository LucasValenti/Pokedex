document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que se recargue la página
    const nombrePokemon = document.getElementById('btn-buscar-poke').value;
    fetchName(nombrePokemon);
});


function fetchName(name) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`)
        .then((res) => {
            if (!res.ok) {
                throw new Error("Pokemon not found");
            }
            return res.json();
        })
        .then((data) => {
            buscarPokemon(data);
        })
        .catch((error) => {
            alert(error.message);
        });
}



function buscarPokemon(pokemon) {

    /*Trae las Sprite de los pokemon que el usuario ingresa*/
    const spriteContainer = document.getElementById('pokemon-sprites-container');
    const sprite = document.createElement('img');
    sprite.src = pokemon.sprites.front_default;
    spriteContainer.innerHTML = '';
    spriteContainer.appendChild(sprite);

    console.log(sprite);

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
    
    /*primero recorro el arr */
    const pokeStathp = pokemon.stats.map((stat) => stat.base_stat);
    /*const en el id de su respectivo elemento ej progress-barhp*/
    const progressBarhp = document.getElementById('progress-barhp');
    /*le ponemos un limite*/
    const maxValuehp = 255;
    /*asignamos que elemento del arr queremos*/ 
    const hp = pokeStathp[0];
    /*hacemos un formula matematica para que el valor sea respecto a su valor maximo en porcentaje*/    
    const porcentagehp = (hp / maxValuehp) * 100;
    /*le decimos el ancho que va a tener respecto al calcula que nos dio el paso anterior*/ 
    progressBarhp.style.width = `${porcentagehp}%`;
    /*se lo asignamos al atribulo en html aria-valuenow y le decimos que elemento es*/ 
    progressBarhp.setAttribute('aria-valuenow', hp);
    /*lo injectamos en el html*/ 
    progressBarhp.innerHTML = hp;
    
    const pokeStatatq = pokemon.stats.map((stat) => stat.base_stat);
    const progressBaratq = document.getElementById('progress-baratq');
    const maxValueatq = 255;
    const atq = pokeStatatq[1];
    const porcentageatq = (atq / maxValueatq) * 100;
    progressBaratq.style.width = `${porcentageatq}%`;
    progressBaratq.setAttribute('aria-valuenow', atq);
    progressBaratq.innerHTML = atq;

    const pokeStatdef = pokemon.stats.map((stat) => stat.base_stat);
    const progressBardef = document.getElementById('progress-bardef');
    const maxValuedef = 255;
    const def = pokeStatdef[2];
    const porcentagedef = (def / maxValuedef) * 100;
    progressBardef.style.width = `${porcentagedef}%`;
    progressBardef.setAttribute('aria-valuenow', def);
    progressBardef.innerHTML = def;

    const pokeStatssatq = pokemon.stats.map((stat) => stat.base_stat);
    const progressBarsatq = document.getElementById('progress-barsatq');
    const maxValuesatq = 255;
    const satq = pokeStatssatq[3];
    const porcentagesatq = (satq / maxValuesatq) * 100;
    progressBarsatq.style.width = `${porcentagesatq}%`;
    progressBarsatq.setAttribute('aria-valuenow', satq);
    progressBarsatq.innerHTML = satq;

    const pokeStatssdef = pokemon.stats.map((stat) => stat.base_stat);
    const progressBarsdef = document.getElementById('progress-barsdef');
    const maxValuesdef = 255;
    const sdef = pokeStatssdef[4];
    const porcentagesdef = (sdef / maxValuesdef) * 100;
    progressBarsdef.style.width = `${porcentagesdef}%`;
    progressBarsdef.setAttribute('aria-valuenow', sdef);
    progressBarsdef.innerHTML = sdef;

    const pokeStatsvel = pokemon.stats.map((stat) => stat.base_stat);
    const progressBarvel = document.getElementById('progress-barvel');
    const maxValuevel = 255;
    const vel = pokeStatsvel[5];
    const porcentagevel = (vel / maxValuevel) * 100;
    progressBarvel.style.width = `${porcentagevel}%`;
    progressBarvel.setAttribute('aria-valuenow', vel);
    progressBarvel.innerHTML = vel;
    


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
