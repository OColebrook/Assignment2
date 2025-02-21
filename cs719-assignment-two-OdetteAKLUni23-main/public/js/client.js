window.addEventListener("load", function () {
  // TODO Add JavaScript code so that when the user clicks one of the Pokemon buttons,
  // detailed data about that Pokemon will be loaded from your own API, and displayed
  // in the appropriate place on the HTML page (overwriting any data which was already
  // there).
 addeventlisteners()
 let selectedbutton = document.getElementById("116");
 selectedbutton.classList.add("selected")
  function addeventlisteners(){
    document.querySelectorAll('.selectorButtons').forEach(item => {
        item.addEventListener('click', event => {
            fetchAndDisplaySelectedPokemon(item.id)
            selectedbutton.classList.remove("selected")
            selectedbutton = item;
            selectedbutton.classList.add("selected");
        })
      })
}

async function fetchAndDisplaySelectedPokemon(dexNumber,res) {
  const response = await fetch(`/api/pokemon/${dexNumber}`);
  const pokemonSelected = await response.json();
  displaySelectedPokemon(pokemonSelected);
}

function displaySelectedPokemon(pokemonSelected,res){
  
  const image = document.getElementById("image");
  const dexandname = document.getElementById("dexandname");
  const types = document.getElementById("types")
  const about = document.getElementById("about")
  image.src = pokemonSelected.imageUrl
  dexandname.innerHTML = "#"+pokemonSelected.dexNumber+ " " + pokemonSelected.name;
  types.innerHTML = "<strong>Type/s: </strong>"+ pokemonSelected.types;
  about.innerHTML = "<strong>About </strong>"+"<strong>"+pokemonSelected.name+"</strong>"+": "+pokemonSelected.dexEntry;

}

});
