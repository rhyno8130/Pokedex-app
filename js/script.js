let pokemonList = [
    //lists pokemon and their height (in meters) and type
    {
        name : "Bulbasaur", 
        height : 0.7, 
        type : ["grass", "poison"]
    },
    {
        name : "Ivysaur", 
        height : 1, 
        type : ["grass", "poison"]
    },
    {
        name : "Venusaur", 
        height : 2, 
        type : ["grass", "poison"]
    },
    {
        name : "Charmander", 
        height : 0.6, 
        type : "fire"
    },
    {
        name : "Charmeleon", 
        height : 1.1, 
        type : "fire"
    },
    {
        name : "Charizard", 
        height : 1.7, 
        type : ["fire", "flying"]
    },
    {
        name : "Squirtle", 
        height : 0.5, 
        type : "water"
    },
    {
        name : "Wartortle", 
        height : 0.1, 
        type : "water"
    },
    {
        name : "Blastoise", 
        height : 1.6, 
        type : "water"
    },
    {
        name : "Caterpie", 
        height : 0.3, 
        type : "bug"
    },
    {
        name : "Metapod", 
        height : 0.7, 
        type : "bug"
    },
    {
        name : "Butterfree", 
        height : 1.1, 
        type : ["bug", "flying"]
    },
    {
        name : "Weedle", 
        height : 0.3, 
        type : ["bug", "poison"]
    },
    {
        name : "Kakuna", 
        height : 0.6, 
        type : ["bug", "poison"]
    },
    {
        name : "Beedrill", 
        height : 1, 
        type : ["bug", "poison"]
    },
    {
        name : "Pidgey", 
        height : 0.3, 
        type : ["flying", "normal"]
    },
    {
        name : "Pidgeotto", 
        height : 1.1, 
        type : ["flying", "normal"]
    },
    {
        name : "Pidgeot", 
        height : 1.5, 
        type : ["flying", "normal"]
    },
    {
        name : "Rattata", 
        height : 0.3, 
        type : "normal"
    },
    {
        name : "Raticate", 
        height : 0.7, 
        type : "normal"
    },
    {
        name : "Spearow", 
        height : 0.3, 
        type : "normal"
    },
    {
        name : "Fearow", 
        height : 1.2, 
        type : ["flying", "normal"]
    },
    {
        name : "Ekans", 
        height : 2, 
        type : "poison"
    },
    {
        name : "Arbok", 
        height : 3.5, 
        type : "poison"
    },
    {
        name : "Pikachu", 
        height : 0.4, 
        type : "electric"
    },
    {
        name : "Raichu", 
        height : 0.8, 
        type : "electric"
    },
    {
        name : "Sandshrew",
        height : 0.6, 
        type : "ground"
    },
    {
        name : "Sandslash", 
        height : 1, 
        type : "ground"
    },
    {
        name : "Nidoran", 
        height : 0.4, 
        type : "poison"
    },
    {
        name : "Nidorina", 
        height : 0.8, 
        type : "poison"
    },
];

for (let i = 0; i < pokemonList.length; i++) {
    document.write(
        "Name:" + " " + pokemonList[i].name + '<br>' + "Height (m):" + " " + pokemonList[i].height + '<br>' + "Type:" + " " + pokemonList[i].type + '<br>'
        //prints pokemon's name, height, and type(s)
    )


    if (pokemonList[i].height < 1.5 && pokemonList[i].height >= 0.5){
        document.write (
            pokemonList[i].name + " is an average sized pokemon" + '<br><br>'); 
            //if pokemon is equal to or larger than .5m and smaller than 1.5m, it will return as "is an average sized pokemon"
    
        }else if (pokemonList[i].height >= 1.5){
            document.write (pokemonList[i].name + " is a large sized pokemon" + '<br><br>');
            //if pokemon is larger or equal to 1.5m, it will return as "is a large sized pokemon"

        }else {
            document.write (pokemonList[i].name + " is a small sized pokemon" + '<br><br>');
            //if pokemon is smaller than 0.5m, it will return as "is a small sized pokemon"
    }
}