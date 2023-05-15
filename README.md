# Personal-Projects
 
1. # my-react-app (Todo List Tracker)
- CRUD functionality
- Ability to add a task, edit a task, complete a task, and delete a task
- Vite + React
- Check it out here https://zippy-gnome-d646d1.netlify.app

<br>

2. # Poke API

This is a personal project to create a custom Pokemon API with data from the Ruby, Sapphire, and Emerald games.

## Features

This API provides data on 202 unique Pokemon from the Ruby, Sapphire, and Emerald games, including their name, picture, Pokedex number, types, weakness, species, and evolutions with the level they evolve.

## Running the Server Locally

To run the Poke API server on your local machine, you will need to have Node.js and npm installed. Follow these steps:

1. Clone the repository to your local machine
2. Navigate to the `poke-api` directory in your terminal
3. Run `npm install` to install the necessary dependencies
4. Run `node server.js` to start the server

The server will be running on `http://localhost:8000/`. You can now make requests to the API using your preferred method (e.g. `fetch()` in JavaScript).

## Usage
You can then access the data for any Pokemon by referencing its name as a property of the object.

```javascript
const bulbasaurData = pokemonData['bulbasaur'];
console.log(bulbasaurData);
```

This will log the following object to the console:

```javascript
{
  picture: 'https://img.pokemondb.net/artwork/bulbasaur.jpg',
  pokedexNo: 1,
  types: [ 'Grass', 'Poison' ],
  weakness: [ 'Fire', 'Psychic', 'Flying', 'Ice' ],
  species: 'Seed Pokémon',
  evolutions: [
    { name: 'Bulbasaur', level: 1 },
    { name: 'Ivysaur', level: 16 },
    { name: 'Venusaur', level: 32 }
  ]
}
```

Or use this url `http://localhost:8000/api/pokemon-name` to return information about that pokemon. For example typing in `http://localhost:8000/api/bulbasaur` will return:

```javascript
{
  picture: 'https://img.pokemondb.net/artwork/bulbasaur.jpg',
  pokedexNo: 1,
  types: [ 'Grass', 'Poison' ],
  weakness: [ 'Fire', 'Psychic', 'Flying', 'Ice' ],
  species: 'Seed Pokémon',
  evolutions: [
    { name: 'Bulbasaur', level: 1 },
    { name: 'Ivysaur', level: 16 },
    { name: 'Venusaur', level: 32 }
  ]
}
```

## Known Limitations

Please note that this API is currently a work in progress, and while efforts have been made to ensure that all information is accurate and up-to-date, some discrepancies may still exist. It is also important to note that the 'evolutions' property may appear as 'null' for Pokemon that evolve using specific methods, such as evolution stones, rather than reaching a specified level.

## Feedback and Contributions

If you have any questions, feedback, or suggestions for this API, please feel free to create an issue or reach out to me on GitHub. Contributions are also welcome and appreciated.
