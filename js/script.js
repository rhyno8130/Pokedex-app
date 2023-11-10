let pokemonRepository = (function () {
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
    
    function add(pokemon) {
        if (
            typeof pokemon === "object" &&
            "name" in pokemon &&
            "detailsUrl" in pokemon
          ) {
            pokemonList.push(pokemon);
          } else {
            console.log("Not enough pokemon information");
          }
        }
  
    function getAll() {
      return pokemonList;
    }
    
    function addListItem(pokemon){
        let pokemonList = document.querySelector(".pokemon_list");
        let listPokemon = document.createElement("li");
        let button = document.createElement("button");
        button.innerText = pokemon.name;
        button.classList.add("button_class");
        button.addEventListener("click", function (event) {
            showDetails(pokemon);
        })
        listPokemon.appendChild(button);
        pokemonList.appendChild(listPokemon);
    }


    function loadList() {
        return fetch(apiUrl).then(function (response) {
          return response.json();
        }).then(function (json) {
          json.results.forEach(function (item) {
            let pokemon = {
              name: item.name,
              detailsUrl: item.url
            };
            add(pokemon);
          });
        }).catch(function (e) {
          console.error(e);
        });
    }
    
    function loadDetails(item) {
        let url = item.detailsUrl;
        return fetch(url).then(function (response) {
          return response.json();
        }).then(function (details) {
          // Now we add the details to the item
          item.imageUrl = details.sprites.front_default;
          item.height = details.height;
          item.types = details.types;
        }).catch(function (e) {
          console.error(e);
        });
    }

    function showModal(pokemon) {
        let modalContainer = document.querySelector('#modal-container');
      
        modalContainer.innerHTML = '';
      
        let modal = document.createElement('div');
        modal.classList.add('modal');
      
        let closeButtonElement = document.createElement('button');
        closeButtonElement.classList.add('modal-close');
        closeButtonElement.innerText = 'Close';
        closeButtonElement.addEventListener('click', hideModal);
      
        let nameElement = document.createElement('h1');
        nameElement.innerText = pokemon.name;

        let imageElement = document.createElement('img');
        imageElement.classList.add('modal-image');
        imageElement.src = pokemon.imageUrl;

        let typesElement = document.createElement('p');
        typesElement.innerText = 'Type(s): ' + pokemon.types;
      
        let heightElement = document.createElement('p');
        heightElement.innerText = 'Height: ' + pokemon.height + ' ' + 'decimeters';


      
        modalContainer.addEventListener('click', (e) => {
          let target = e.target;
          if (target === modalContainer) {
            hideModal();
          }
        });
      
        modal.appendChild(closeButtonElement);
        modal.appendChild(nameElement);
        modal.appendChild(imageElement)
        modal.appendChild(typesElement)
        modal.appendChild(heightElement);
        modalContainer.appendChild(modal);
        modalContainer.classList.add('is-visible');
      };
      
      function hideModal() {
        let modalContainer = document.querySelector('#modal-container');
        modalContainer.classList.remove('is-visible');
      
        if (dialogPromiseReject) {
          dialogPromiseReject();
          dialogPromiseReject = null;
        }
      }
        window.addEventListener('keydown', (e) => {
          let modalContainer = document.querySelector('#modal-container');
          if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
            hideModal();  
          }
        });

    function showDetails(pokemon) {
        pokemonRepository.loadDetails(pokemon).then(function () {
          showModal(pokemon);
        });
    }
    
    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        showDetails: showDetails,
        loadList: loadList,
        loadDetails: loadDetails,
        showModal: showModal
    };
  })();
  
// console.log(pokemonRepository.getAll());
// *No longer need to log to console*
  
pokemonRepository.loadList().then(function() {
    pokemonRepository.getAll().forEach(function (pokemon){
        pokemonRepository.addListItem(pokemon);
    });
});