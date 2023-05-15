const express = require("express");
const cors = require("cors");
const PORT = 8000;
const app = express();

app.use(cors());

const pokemonData = {
  treecko: {
    picture: "https://img.pokemondb.net/artwork/treecko.jpg",
    pokedexNo: 252,
    types: ["Grass"],
    weakness: ["Fire", "Ice", "Poison", "Flying", "Bug"],
    species: "Wood Gecko Pokémon",
    evolutions: [
      { name: "Grovyle", level: 16 },
      { name: "Sceptile", level: 36 },
    ],
  },
  grovyle: {
    picture: "https://img.pokemondb.net/artwork/grovyle.jpg",
    pokedexNo: 253,
    types: ["Grass"],
    weakness: ["Fire", "Ice", "Poison", "Flying", "Bug"],
    species: "Wood Gecko Pokémon",
    evolutions: [{ name: "Sceptile", level: 36 }],
  },
  sceptile: {
    picture: "https://img.pokemondb.net/artwork/sceptile.jpg",
    pokedexNo: 254,
    types: ["Grass"],
    weakness: ["Fire", "Ice", "Poison", "Flying", "Bug"],
    species: "Forest Pokémon",
    evolutions: [],
  },
  torchic: {
    picture: "https://img.pokemondb.net/artwork/torchic.jpg",
    pokedexNo: 255,
    types: ["Fire"],
    weakness: ["Water", "Ground", "Rock"],
    species: "Chick Pokémon",
    evolutions: [
      { name: "Combusken", level: 16 },
      { name: "Blaziken", level: 36 },
    ],
  },
  combusken: {
    picture: "https://img.pokemondb.net/artwork/combusken.jpg",
    pokedexNo: 256,
    types: ["Fire", "Fighting"],
    weakness: ["Water", "Flying", "Psychic", "Ground"],
    species: "Young Fowl Pokémon",
    evolutions: [{ name: "Blaziken", level: 36 }],
  },
  blaziken: {
    picture: "https://img.pokemondb.net/artwork/blaziken.jpg",
    pokedexNo: 257,
    types: ["Fire", "Fighting"],
    weakness: ["Water", "Flying", "Psychic", "Ground"],
    species: "Blaze Pokémon",
    evolutions: [],
  },
  mudkip: {
    picture: "https://img.pokemondb.net/artwork/mudkip.jpg",
    pokedexNo: 258,
    types: ["Water"],
    weakness: ["Grass", "Electric"],
    species: "Mud Fish Pokémon",
    evolutions: [
      { name: "Marshtomp", level: 16 },
      { name: "Swampert", level: 36 },
    ],
  },
  marshtomp: {
    picture: "https://img.pokemondb.net/artwork/marshtomp.jpg",
    pokedexNo: 259,
    types: ["Water", "Ground"],
    weakness: ["Grass", "Electric", "Ice"],
    species: "Mud Fish Pokémon",
    evolutions: [{ name: "Swampert", level: 36 }],
  },
  swampert: {
    picture: "https://img.pokemondb.net/artwork/swampert.jpg",
    pokedexNo: 260,
    types: ["Water", "Ground"],
    weakness: ["Grass", "Electric", "Ice"],
    species: "Mud Fish Pokémon",
    evolutions: [],
  },
  poochyena: {
    picture: "https://img.pokemondb.net/artwork/poochyena.jpg",
    pokedexNo: 261,
    types: ["Dark"],
    weakness: ["Fighting", "Bug", "Fairy"],
    species: "Bite Pokémon",
    evolutions: [{ name: "Mightyena", level: 18 }],
  },
  mightyena: {
    picture: "https://img.pokemondb.net/artwork/mightyena.jpg",
    pokedexNo: 262,
    types: ["Dark"],
    weakness: ["Fighting", "Bug", "Fairy"],
    species: "Bite Pokémon",
    evolutions: [],
  },
  zigzagoon: {
    picture: "https://img.pokemondb.net/artwork/zigzagoon.jpg",
    pokedexNo: 263,
    types: ["Normal"],
    weakness: ["Fighting"],
    species: "Tiny Raccoon Pokémon",
    evolutions: [{ name: "Linoone", level: 20 }],
  },
  linoone: {
    picture: "https://img.pokemondb.net/artwork/linoone.jpg",
    pokedexNo: 264,
    types: ["Normal"],
    weakness: ["Fighting"],
    species: "Rushing Pokémon",
    evolutions: [],
  },
  wurmple: {
    picture: "https://img.pokemondb.net/artwork/wurmple.jpg",
    pokedexNo: 265,
    types: ["Bug"],
    weakness: ["Fire", "Flying", "Rock"],
    species: "Worm Pokémon",
    evolutions: [
      { name: "Silcoon", level: 7 },
      { name: "Cascoon", level: 7 },
    ],
  },
  silcoon: {
    picture: "https://img.pokemondb.net/artwork/silcoon.jpg",
    pokedexNo: 266,
    types: ["Bug"],
    weakness: ["Fire", "Flying", "Rock"],
    species: "Cocoon Pokémon",
    evolutions: [{ name: "Beautifly", level: 10 }],
  },
  cascoon: {
    picture: "https://img.pokemondb.net/artwork/cascoon.jpg",
    pokedexNo: 267,
    types: ["Bug"],
    weakness: ["Fire", "Flying", "Rock"],
    species: "Cocoon Pokémon",
    evolutions: [{ name: "Dustox", level: 10 }],
  },
  beautifly: {
    picture: "https://img.pokemondb.net/artwork/beautifly.jpg",
    pokedexNo: 268,
    types: ["Bug", "Flying"],
    weakness: ["Fire", "Flying", "Electric", "Ice", "Rock"],
    species: "Butterfly Pokémon",
    evolutions: [],
  },
  dustox: {
    picture: "https://img.pokemondb.net/artwork/dustox.jpg",
    pokedexNo: 269,
    types: ["Bug", "Poison"],
    weakness: ["Fire", "Flying", "Psychic", "Rock"],
    species: "Poison Moth Pokémon",
    evolutions: [{ name: "Lotad", level: 14 }],
  },
  lombre: {
    picture: "https://img.pokemondb.net/artwork/lombre.jpg",
    pokedexNo: 271,
    types: ["Water", "Grass"],
    weakness: ["Flying", "Poison", "Bug"],
    species: "Jolly Pokémon",
    evolutions: [{ name: "Ludicolo", level: null }],
  },
  ludicolo: {
    picture: "https://img.pokemondb.net/artwork/ludicolo.jpg",
    pokedexNo: 272,
    types: ["Water", "Grass"],
    weakness: ["Flying", "Poison", "Bug"],
    species: "Carefree Pokémon",
    evolutions: [],
  },
  seedot: {
    picture: "https://img.pokemondb.net/artwork/seedot.jpg",
    pokedexNo: 273,
    types: ["Grass"],
    weakness: ["Fire", "Flying", "Ice", "Poison", "Bug"],
    species: "Acorn Pokémon",
    evolutions: [{ name: "Nuzleaf", level: 14 }],
  },
  nuzleaf: {
    picture: "https://img.pokemondb.net/artwork/nuzleaf.jpg",
    pokedexNo: 274,
    types: ["Grass", "Dark"],
    weakness: ["Fire", "Ice", "Flying", "Fighting", "Fairy"],
    species: "Wily Pokémon",
    evolutions: [{ name: "Shiftry", level: null }],
  },
  shiftry: {
    picture: "https://img.pokemondb.net/artwork/shiftry.jpg",
    pokedexNo: 275,
    types: ["Grass", "Dark"],
    weakness: ["Fire", "Ice", "Flying", "Fighting", "Fairy"],
    species: "Wicked Pokémon",
    evolutions: [],
  },
  taillow: {
    picture: "https://img.pokemondb.net/artwork/taillow.jpg",
    pokedexNo: 276,
    types: ["Normal", "Flying"],
    weakness: ["Electric", "Ice", "Rock"],
    species: "TinySwallow Pokémon",
    evolutions: [{ name: "Swellow", level: 22 }],
  },
  swellow: {
    picture: "https://img.pokemondb.net/artwork/swellow.jpg",
    pokedexNo: 277,
    types: ["Normal", "Flying"],
    weakness: ["Electric", "Ice", "Rock"],
    species: "Swallow Pokémon",
    evolutions: [],
  },
  wingull: {
    picture: "https://img.pokemondb.net/artwork/wingull.jpg",
    pokedexNo: 278,
    types: ["Water", "Flying"],
    weakness: ["Electric", "Rock"],
    species: "Seagull Pokémon",
    evolutions: [{ name: "Pelipper", level: 25 }],
  },
  pelipper: {
    picture: "https://img.pokemondb.net/artwork/pelipper.jpg",
    pokedexNo: 279,
    types: ["Water", "Flying"],
    weakness: ["Electric", "Rock"],
    species: "Water Bird Pokémon",
    evolutions: [],
  },
  ralts: {
    picture: "https://img.pokemondb.net/artwork/ralts.jpg",
    pokedexNo: 280,
    types: ["Psychic", "Fairy"],
    weakness: ["Ghost", "Steel", "Poison"],
    species: "Feeling Pokémon",
    evolutions: [{ name: "Kirlia", level: 20 }],
  },
  kirlia: {
    picture: "https://img.pokemondb.net/artwork/kirlia.jpg",
    pokedexNo: 281,
    types: ["Psychic", "Fairy"],
    weakness: ["Ghost", "Steel", "Poison"],
    species: "Emotion Pokémon",
    evolutions: [
      { name: "Gardevoir", level: 30 },
      { name: "Gallade", level: "use Dawn Stone" },
    ],
  },
  gardevoir: {
    picture: "https://img.pokemondb.net/artwork/gardevoir.jpg",
    pokedexNo: 282,
    types: ["Psychic", "Fairy"],
    weakness: ["Ghost", "Steel", "Poison"],
    species: "Embrace Pokémon",
    evolutions: [],
  },
  surskit: {
    picture: "https://img.pokemondb.net/artwork/surskit.jpg",
    pokedexNo: 283,
    types: ["Bug", "Water"],
    weakness: ["Electric", "Flying", "Rock"],
    species: "Pond Skater Pokémon",
    evolutions: [{ name: "Masquerain", level: 22 }],
  },
  masquerain: {
    picture: "https://img.pokemondb.net/artwork/masquerain.jpg",
    pokedexNo: 284,
    types: ["Bug", "Flying"],
    weakness: ["Electric", "Rock", "Ice"],
    species: "Eyeball Pokémon",
    evolutions: [],
  },
  shroomish: {
    picture: "https://img.pokemondb.net/artwork/shroomish.jpg",
    pokedexNo: 285,
    types: ["Grass"],
    weakness: ["Fire", "Ice", "Flying", "Poison", "Bug"],
    species: "Mushroom Pokémon",
    evolutions: [{ name: "Breloom", level: 23 }],
  },
  breloom: {
    picture: "https://img.pokemondb.net/artwork/breloom.jpg",
    pokedexNo: 286,
    types: ["Grass", "Fighting"],
    weakness: ["Fire", "Flying", "Ice", "Poison", "Fairy"],
    species: "Mushroom Pokémon",
    evolutions: [],
  },
  slakoth: {
    picture: "https://img.pokemondb.net/artwork/slakoth.jpg",
    pokedexNo: 287,
    types: ["Normal"],
    weakness: ["Fighting"],
    species: "Slacker Pokémon",
    evolutions: [{ name: "Vigoroth", level: 18 }],
  },
  vigoroth: {
    picture: "https://img.pokemondb.net/artwork/vigoroth.jpg",
    pokedexNo: 288,
    types: ["Normal"],
    weakness: ["Fighting"],
    species: "Wild Monkey Pokémon",
    evolutions: [{ name: "Slaking", level: 36 }],
  },
  slaking: {
    picture: "https://img.pokemondb.net/artwork/slaking.jpg",
    pokedexNo: 289,
    types: ["Normal"],
    weakness: ["Fighting"],
    species: "Lazy Pokémon",
    evolutions: [],
  },
  nincada: {
    picture: "https://img.pokemondb.net/artwork/nincada.jpg",
    pokedexNo: 290,
    types: ["Bug", "Ground"],
    weakness: ["Water", "Ice", "Grass"],
    species: "Trainee Pokémon",
    evolutions: [
      {
        name: "Ninjask",
        level: "Level 20 with a free slot in party and a Poké Ball",
      },
      {
        name: "Shedinja",
        level:
          "Level 20 with a free slot in party and a spare Poké Ball, while having an extra space in the party",
      },
    ],
  },
  ninjask: {
    picture: "https://img.pokemondb.net/artwork/ninjask.jpg",
    pokedexNo: 291,
    types: ["Bug", "Flying"],
    weakness: ["Rock", "Electric", "Ice"],
    species: "Ninja Pokémon",
    evolutions: [],
  },
  shedinja: {
    picture: "https://img.pokemondb.net/artwork/shedinja.jpg",
    pokedexNo: 292,
    types: ["Bug", "Ghost"],
    weakness: ["Fire", "Flying", "Rock", "Ghost", "Dark"],
    species: "Shed Pokémon",
    evolutions: [],
  },
  whismur: {
    picture: "https://img.pokemondb.net/artwork/whismur.jpg",
    pokedexNo: 293,
    types: ["Normal"],
    weakness: ["Fighting"],
    species: "Whisper Pokémon",
    evolutions: [{ name: "Loudred", level: 20 }],
  },
  loudred: {
    picture: "https://img.pokemondb.net/artwork/loudred.jpg",
    pokedexNo: 294,
    types: ["Normal"],
    weakness: ["Fighting"],
    species: "Big Voice Pokémon",
    evolutions: [{ name: "Exploud", level: 40 }],
  },
  exploud: {
    picture: "https://img.pokemondb.net/artwork/exploud.jpg",
    pokedexNo: 295,
    types: ["Normal"],
    weakness: ["Fighting"],
    species: "Loud Noise Pokémon",
    evolutions: [],
  },
  makuhita: {
    picture: "https://img.pokemondb.net/artwork/makuhita.jpg",
    pokedexNo: 296,
    types: ["Fighting"],
    weakness: ["Flying", "Psychic", "Fairy"],
    species: "Guts Pokémon",
    evolutions: [{ name: "Hariyama", level: 24 }],
  },
  hariyama: {
    picture: "https://img.pokemondb.net/artwork/hariyama.jpg",
    pokedexNo: 297,
    types: ["Fighting"],
    weakness: ["Flying", "Psychic", "Fairy"],
    species: "Arm Thrust Pokémon",
    evolutions: [],
  },
  azurill: {
    picture: "https://img.pokemondb.net/artwork/azurill.jpg",
    pokedexNo: 298,
    types: ["Normal", "Fairy"],
    weakness: ["Steel", "Poison"],
    species: "Polka Dot Pokémon",
    evolutions: [{ name: "Marill", level: 1 }],
  },
  nosepass: {
    picture: "https://img.pokemondb.net/artwork/nosepass.jpg",
    pokedexNo: 299,
    types: ["Rock"],
    weakness: ["Water", "Grass", "Fighting", "Ground", "Steel"],
    species: "Compass Pokémon",
    evolutions: [
      {
        name: "Probopass",
        level: "Level up in a special magnetic field in Mt. Coronet",
      },
    ],
  },
  skitty: {
    picture: "https://img.pokemondb.net/artwork/skitty.jpg",
    pokedexNo: 300,
    types: ["Normal"],
    weakness: ["Fighting"],
    species: "Kitten Pokémon",
    evolutions: [{ name: "Delcatty", level: "Use Moon Stone" }],
  },
  delcatty: {
    picture: "https://img.pokemondb.net/artwork/delcatty.jpg",
    pokedexNo: 301,
    types: ["Normal"],
    weakness: ["Fighting"],
    species: "Prim Pokémon",
    evolutions: [],
  },
  sableye: {
    picture: "https://img.pokemondb.net/artwork/sableye.jpg",
    pokedexNo: 302,
    types: ["Dark", "Ghost"],
    weakness: ["Fairy", "Bug"],
    species: "Darkness Pokémon",
    evolutions: [],
  },
  mawile: {
    picture: "https://img.pokemondb.net/artwork/mawile.jpg",
    pokedexNo: 303,
    types: ["Steel", "Fairy"],
    weakness: ["Fire", "Fighting", "Ground"],
    species: "Deceiver Pokémon",
    evolutions: [],
  },
  aron: {
    picture: "https://img.pokemondb.net/artwork/aron.jpg",
    pokedexNo: 304,
    types: ["Steel", "Rock"],
    weakness: ["Water", "Fighting", "Ground"],
    species: "Iron Armor Pokémon",
    evolutions: [{ name: "Lairon", level: 32 }],
  },
  lairon: {
    picture: "https://img.pokemondb.net/artwork/lairon.jpg",
    pokedexNo: 305,
    types: ["Steel", "Rock"],
    weakness: ["Water", "Fighting", "Ground"],
    species: "Iron Armor Pokémon",
    evolutions: [{ name: "Aggron", level: 42 }],
  },
  aggron: {
    picture: "https://img.pokemondb.net/artwork/aggron.jpg",
    pokedexNo: 306,
    types: ["Steel", "Rock"],
    weakness: ["Water", "Fighting", "Ground"],
    species: "Iron Armor Pokémon",
    evolutions: [],
  },
  meditite: {
    picture: "https://img.pokemondb.net/artwork/meditite.jpg",
    pokedexNo: 307,
    types: ["Fighting", "Psychic"],
    weakness: ["Flying", "Ghost", "Fairy"],
    species: "Meditate Pokémon",
    evolutions: [{ name: "Medicham", level: 37 }],
  },
  medicham: {
    picture: "https://img.pokemondb.net/artwork/medicham.jpg",
    pokedexNo: 308,
    types: ["Fighting", "Psychic"],
    weakness: ["Flying", "Ghost", "Fairy"],
    species: "Meditate Pokémon",
    evolutions: [],
  },
  electrike: {
    picture: "https://img.pokemondb.net/artwork/electrike.jpg",
    pokedexNo: 309,
    types: ["Electric"],
    weakness: ["Ground"],
    species: "Lightning Pokémon",
    evolutions: [{ name: "Manectric", level: 26 }],
  },
  manectric: {
    picture: "https://img.pokemondb.net/artwork/manectric.jpg",
    pokedexNo: 310,
    types: ["Electric"],
    weakness: ["Ground"],
    species: "Discharge Pokémon",
    evolutions: [],
  },
  plusle: {
    picture: "https://img.pokemondb.net/artwork/plusle.jpg",
    pokedexNo: 311,
    types: ["Electric"],
    weakness: ["Ground"],
    species: "Cheering Pokémon",
    evolutions: [],
  },
  minun: {
    picture: "https://img.pokemondb.net/artwork/minun.jpg",
    pokedexNo: 312,
    types: ["Electric"],
    weakness: ["Ground"],
    species: "Cheering Pokémon",
    evolutions: [],
  },
  volbeat: {
    picture: "https://img.pokemondb.net/artwork/volbeat.jpg",
    pokedexNo: 313,
    types: ["Bug"],
    weakness: ["Flying", "Rock", "Fire"],
    species: "Firefly Pokémon",
    evolutions: [],
  },
  illumise: {
    picture: "https://img.pokemondb.net/artwork/illumise.jpg",
    pokedexNo: 314,
    types: ["Bug"],
    weakness: ["Flying", "Rock", "Fire"],
    species: "Firefly Pokémon",
    evolutions: [],
  },
  roselia: {
    picture: "https://img.pokemondb.net/artwork/roselia.jpg",
    pokedexNo: 315,
    types: ["Grass", "Poison"],
    weakness: ["Fire", "Ice", "Flying", "Psychic"],
    species: "Thorn Pokémon",
    evolutions: [{ name: "Roserade", level: "Use Shiny Stone" }],
  },
  gulpin: {
    picture: "https://img.pokemondb.net/artwork/gulpin.jpg",
    pokedexNo: 316,
    types: ["Poison"],
    weakness: ["Ground", "Psychic"],
    species: "Stomach Pokémon",
    evolutions: [{ name: "Swalot", level: 26 }],
  },
  swalot: {
    picture: "https://img.pokemondb.net/artwork/swalot.jpg",
    pokedexNo: 317,
    types: ["Poison"],
    weakness: ["Ground", "Psychic"],
    species: "Poison Bag Pokémon",
    evolutions: [],
  },
  carvanha: {
    picture: "https://img.pokemondb.net/artwork/carvanha.jpg",
    pokedexNo: 318,
    types: ["Water", "Dark"],
    weakness: ["Fighting", "Bug", "Electric", "Grass", "Fairy"],
    species: "Savage Pokémon",
    evolutions: [{ name: "Sharpedo", level: 30 }],
  },
  sharpedo: {
    picture: "https://img.pokemondb.net/artwork/sharpedo.jpg",
    pokedexNo: 319,
    types: ["Water", "Dark"],
    weakness: ["Fighting", "Bug", "Electric", "Grass", "Fairy"],
    species: "Brutal Pokémon",
    evolutions: [],
  },
  wailmer: {
    picture: "https://img.pokemondb.net/artwork/wailmer.jpg",
    pokedexNo: 320,
    types: ["Water"],
    weakness: ["Grass", "Electric"],
    species: "Ball Whale Pokémon",
    evolutions: [{ name: "Wailord", level: 40 }],
  },
  wailord: {
    picture: "https://img.pokemondb.net/artwork/wailord.jpg",
    pokedexNo: 321,
    types: ["Water"],
    weakness: ["Grass", "Electric"],
    species: "Float Whale Pokémon",
    evolutions: [],
  },
  numel: {
    picture: "https://img.pokemondb.net/artwork/numel.jpg",
    pokedexNo: 322,
    types: ["Fire", "Ground"],
    weakness: ["Water", "Ground", "Rock"],
    species: "Numb Pokémon",
    evolutions: [{ name: "Camerupt", level: 33 }],
  },
  camerupt: {
    picture: "https://img.pokemondb.net/artwork/camerupt.jpg",
    pokedexNo: 323,
    types: ["Fire", "Ground"],
    weakness: ["Water", "Ground", "Rock"],
    species: "Eruption Pokémon",
    evolutions: [],
  },
  torkoal: {
    picture: "https://img.pokemondb.net/artwork/torkoal.jpg",
    pokedexNo: 324,
    types: ["Fire"],
    weakness: ["Water", "Ground", "Rock"],
    species: "Coal Pokémon",
    evolutions: [],
  },
  spoink: {
    picture: "https://img.pokemondb.net/artwork/spoink.jpg",
    pokedexNo: 325,
    types: ["Psychic"],
    weakness: ["Bug", "Ghost", "Dark"],
    species: "Bounce Pokémon",
    evolutions: [{ name: "Grumpig", level: 32 }],
  },
  grumpig: {
    picture: "https://img.pokemondb.net/artwork/grumpig.jpg",
    pokedexNo: 326,
    types: ["Psychic"],
    weakness: ["Bug", "Ghost", "Dark"],
    species: "Manipulate Pokémon",
    evolutions: [],
  },
  spinda: {
    picture: "https://img.pokemondb.net/artwork/spinda.jpg",
    pokedexNo: 327,
    types: ["Normal"],
    weakness: ["Fighting"],
    species: "Spot Panda Pokémon",
    evolutions: [],
  },
  trapinch: {
    picture: "https://img.pokemondb.net/artwork/trapinch.jpg",
    pokedexNo: 328,
    types: ["Ground"],
    weakness: ["Water", "Grass", "Ice"],
    species: "Ant Pit Pokémon",
    evolutions: [{ name: "Vibrava", level: 35 }],
  },
  vibrava: {
    picture: "https://img.pokemondb.net/artwork/vibrava.jpg",
    pokedexNo: 329,
    types: ["Ground", "Dragon"],
    weakness: ["Ice", "Dragon", "Fairy"],
    species: "Vibration Pokémon",
    evolutions: [{ name: "Flygon", level: 45 }],
  },
  flygon: {
    picture: "https://img.pokemondb.net/artwork/flygon.jpg",
    pokedexNo: 330,
    types: ["Ground", "Dragon"],
    weakness: ["Ice", "Dragon", "Fairy"],
    species: "Mystic Pokémon",
    evolutions: [],
  },
  cacnea: {
    picture: "https://img.pokemondb.net/artwork/cacnea.jpg",
    pokedexNo: 331,
    types: ["Grass"],
    weakness: ["Fire", "Ice", "Poison", "Flying", "Bug"],
    species: "Cactus Pokémon",
    evolutions: [{ name: "Cacturne", level: 32 }],
  },
  cacturne: {
    picture: "https://img.pokemondb.net/artwork/cacturne.jpg",
    pokedexNo: 332,
    types: ["Grass", "Dark"],
    weakness: ["Fire", "Ice", "Fighting", "Bug", "Fairy"],
    species: "Scarecrow Pokémon",
    evolutions: [],
  },
  swablu: {
    picture: "https://img.pokemondb.net/artwork/swablu.jpg",
    pokedexNo: 333,
    types: ["Normal", "Flying"],
    weakness: ["Electric", "Ice", "Rock"],
    species: "Cotton Bird Pokémon",
    evolutions: [{ name: "Altaria", level: 35 }],
  },
  altaria: {
    picture: "https://img.pokemondb.net/artwork/altaria.jpg",
    pokedexNo: 334,
    types: ["Dragon", "Flying"],
    weakness: ["Ice", "Rock", "Dragon", "Fairy"],
    species: "Humming Pokémon",
    evolutions: [],
  },
  zangoose: {
    picture: "https://img.pokemondb.net/artwork/zangoose.jpg",
    pokedexNo: 335,
    types: ["Normal"],
    weakness: ["Fighting"],
    species: "Cat Ferret Pokémon",
    evolutions: [],
  },
  seviper: {
    picture: "https://img.pokemondb.net/artwork/seviper.jpg",
    pokedexNo: 336,
    types: ["Poison"],
    weakness: ["Ground", "Psychic"],
    species: "Fang Snake Pokémon",
    evolutions: [],
  },
  lunatone: {
    picture: "https://img.pokemondb.net/artwork/lunatone.jpg",
    pokedexNo: 337,
    types: ["Rock", "Psychic"],
    weakness: ["Water", "Grass", "Ground", "Steel", "Bug", "Ghost", "Dark"],
    species: "Meteorite Pokémon",
    evolutions: [],
  },
  solrock: {
    picture: "https://img.pokemondb.net/artwork/solrock.jpg",
    pokedexNo: 338,
    types: ["Rock", "Psychic"],
    weakness: ["Water", "Grass", "Ground", "Steel", "Bug", "Ghost", "Dark"],
    species: "Meteorite Pokémon",
    evolutions: [],
  },
  barboach: {
    picture: "https://img.pokemondb.net/artwork/barboach.jpg",
    pokedexNo: 339,
    types: ["Water", "Ground"],
    weakness: ["Grass"],
    species: "Whiskers Pokémon",
    evolutions: [{ name: "Whiscash", level: 30 }],
  },
  whiscash: {
    picture: "https://img.pokemondb.net/artwork/whiscash.jpg",
    pokedexNo: 340,
    types: ["Water", "Ground"],
    weakness: ["Grass"],
    species: "Whiskers Pokémon",
    evolutions: [],
  },
  corphish: {
    picture: "https://img.pokemondb.net/artwork/corphish.jpg",
    pokedexNo: 341,
    types: ["Water"],
    weakness: ["Grass", "Electric"],
    species: "Ruffian Pokémon",
    evolutions: [{ name: "Crawdaunt", level: 30 }],
  },
  crawdaunt: {
    picture: "https://img.pokemondb.net/artwork/crawdaunt.jpg",
    pokedexNo: 342,
    types: ["Water", "Dark"],
    weakness: ["Grass", "Electric", "Fighting", "Bug", "Fairy"],
    species: "Rogue Pokémon",
    evolutions: [],
  },
  baltoy: {
    picture: "https://img.pokemondb.net/artwork/baltoy.jpg",
    pokedexNo: 343,
    types: ["Ground", "Psychic"],
    weakness: ["Water", "Grass", "Ice", "Bug", "Ghost", "Dark"],
    species: "Clay Doll Pokémon",
    evolutions: [{ name: "Claydol", level: 36 }],
  },
  claydol: {
    picture: "https://img.pokemondb.net/artwork/claydol.jpg",
    pokedexNo: 344,
    types: ["Ground", "Psychic"],
    weakness: ["Water", "Grass", "Ice", "Bug", "Ghost", "Dark"],
    species: "Clay Doll Pokémon",
    evolutions: [],
  },
  lileep: {
    picture: "https://img.pokemondb.net/artwork/lileep.jpg",
    pokedexNo: 345,
    types: ["Rock", "Grass"],
    weakness: ["Water", "Ice", "Fighting", "Steel"],
    species: "Sea Lily Pokémon",
    evolutions: [{ name: "Cradily", level: 40 }],
  },
  cradily: {
    picture: "https://img.pokemondb.net/artwork/cradily.jpg",
    pokedexNo: 346,
    types: ["Rock", "Grass"],
    weakness: ["Water", "Ice", "Fighting", "Steel"],
    species: "Barnacle Pokémon",
    evolutions: [],
  },
  anorith: {
    picture: "https://img.pokemondb.net/artwork/anorith.jpg",
    pokedexNo: 347,
    types: ["Rock", "Bug"],
    weakness: ["Water", "Rock", "Steel"],
    species: "Old Shrimp Pokémon",
    evolutions: [{ name: "Armaldo", level: 40 }],
  },
  armaldo: {
    picture: "https://img.pokemondb.net/artwork/armaldo.jpg",
    pokedexNo: 348,
    types: ["Rock", "Bug"],
    weakness: ["Water", "Rock", "Steel"],
    species: "Plate Pokémon",
    evolutions: [],
  },
  feebas: {
    picture: "https://img.pokemondb.net/artwork/feebas.jpg",
    pokedexNo: 349,
    types: ["Water"],
    weakness: ["Grass", "Electric"],
    species: "Fish Pokémon",
    evolutions: [{ name: "Milotic", level: null }],
  },
  milotic: {
    picture: "https://img.pokemondb.net/artwork/milotic.jpg",
    pokedexNo: 350,
    types: ["Water"],
    weakness: ["Grass", "Electric"],
    species: "Tender Pokémon",
    evolutions: [],
  },
  castform: {
    picture: "https://img.pokemondb.net/artwork/castform.jpg",
    pokedexNo: 351,
    types: ["Normal"],
    weakness: ["Fighting"],
    species: "Weather Pokémon",
    evolutions: [],
  },
  kecleon: {
    picture: "https://img.pokemondb.net/artwork/kecleon.jpg",
    pokedexNo: 352,
    types: ["Normal"],
    weakness: ["Fighting"],
    species: "Color Swap Pokémon",
    evolutions: [],
  },
  shuppet: {
    picture: "https://img.pokemondb.net/artwork/shuppet.jpg",
    pokedexNo: 353,
    types: ["Ghost"],
    weakness: ["Ghost", "Dark"],
    species: "Puppet Pokémon",
    evolutions: [{ name: "Banette", level: 37 }],
  },
  banette: {
    picture: "https://img.pokemondb.net/artwork/banette.jpg",
    pokedexNo: 354,
    types: ["Ghost"],
    weakness: ["Ghost", "Dark"],
    species: "Marionette Pokémon",
    evolutions: [],
  },
  duskull: {
    picture: "https://img.pokemondb.net/artwork/duskull.jpg",
    pokedexNo: 355,
    types: ["Ghost"],
    weakness: ["Ghost", "Dark"],
    species: "Requiem Pokémon",
    evolutions: [{ name: "Dusclops", level: 37 }],
  },
  dusclops: {
    picture: "https://img.pokemondb.net/artwork/dusclops.jpg",
    pokedexNo: 356,
    types: ["Ghost"],
    weakness: ["Ghost", "Dark"],
    species: "Beckon Pokémon",
    evolutions: [{ name: "Dusknoir", level: null }],
  },
  tropius: {
    picture: "https://img.pokemondb.net/artwork/tropius.jpg",
    pokedexNo: 357,
    types: ["Grass", "Flying"],
    weakness: ["Ice", "Rock", "Electric"],
    species: "Fruit Pokémon",
    evolutions: [],
  },
  chimecho: {
    picture: "https://img.pokemondb.net/artwork/chimecho.jpg",
    pokedexNo: 358,
    types: ["Psychic"],
    weakness: ["Bug", "Ghost", "Dark"],
    species: "Wind Chime Pokémon",
    evolutions: [],
  },
  absol: {
    picture: "https://img.pokemondb.net/artwork/absol.jpg",
    pokedexNo: 359,
    types: ["Dark"],
    weakness: ["Fighting", "Bug", "Fairy"],
    species: "Disaster Pokémon",
    evolutions: [],
  },
  wynaut: {
    picture: "https://img.pokemondb.net/artwork/wynaut.jpg",
    pokedexNo: 360,
    types: ["Psychic"],
    weakness: ["Bug", "Ghost", "Dark"],
    species: "Bright Pokémon",
    evolutions: [{ name: "Wobbuffet", level: 15 }],
  },
  snorunt: {
    picture: "https://img.pokemondb.net/artwork/snorunt.jpg",
    pokedexNo: 361,
    types: ["Ice"],
    weakness: ["Fighting", "Rock", "Steel", "Fire"],
    species: "Snow Hat Pokémon",
    evolutions: [
      { name: "Glalie", level: null },
      { name: "Froslass", level: null, condition: "female" },
    ],
  },
  glalie: {
    picture: "https://img.pokemondb.net/artwork/glalie.jpg",
    pokedexNo: 362,
    types: ["Ice"],
    weakness: ["Fighting", "Rock", "Steel", "Fire"],
    species: "Face Pokémon",
    evolutions: [],
  },
  spheal: {
    picture: "https://img.pokemondb.net/artwork/spheal.jpg",
    pokedexNo: 363,
    types: ["Ice", "Water"],
    weakness: ["Grass", "Electric", "Fighting", "Rock"],
    species: "Clap Pokémon",
    evolutions: [{ name: "Sealeo", level: 32 }],
  },
  sealeo: {
    picture: "https://img.pokemondb.net/artwork/sealeo.jpg",
    pokedexNo: 364,
    types: ["Ice", "Water"],
    weakness: ["Grass", "Electric", "Fighting", "Rock"],
    species: "Ball Roll Pokémon",
    evolutions: [{ name: "Walrein", level: 44 }],
  },
  walrein: {
    picture: "https://img.pokemondb.net/artwork/walrein.jpg",
    pokedexNo: 365,
    types: ["Ice", "Water"],
    weakness: ["Grass", "Electric", "Fighting", "Rock"],
    species: "Ice Break Pokémon",
    evolutions: [],
  },
  clamperl: {
    picture: "https://img.pokemondb.net/artwork/clamperl.jpg",
    pokedexNo: 366,
    types: ["Water"],
    weakness: ["Grass", "Electric"],
    species: "Bivalve Pokémon",
    evolutions: [
      { name: "Huntail", level: null },
      { name: "Gorebyss", level: null },
    ],
  },
  huntail: {
    picture: "https://img.pokemondb.net/artwork/huntail.jpg",
    pokedexNo: 367,
    types: ["Water"],
    weakness: ["Grass", "Electric"],
    species: "Deep Sea Pokémon",
    evolutions: [],
  },
  gorebyss: {
    picture: "https://img.pokemondb.net/artwork/gorebyss.jpg",
    pokedexNo: 368,
    types: ["Water"],
    weakness: ["Grass", "Electric"],
    species: "South Sea Pokémon",
    evolutions: [],
  },
  relicanth: {
    picture: "https://img.pokemondb.net/artwork/relicanth.jpg",
    pokedexNo: 369,
    types: ["Water", "Rock"],
    weakness: ["Grass", "Electric", "Fighting", "Ground"],
    species: "Longevity Pokémon",
    evolutions: [],
  },
  luvdisc: {
    picture: "https://img.pokemondb.net/artwork/luvdisc.jpg",
    pokedexNo: 370,
    types: ["Water"],
    weakness: ["Grass", "Electric"],
    species: "Rendezvous Pokémon",
    evolutions: [],
  },
  bagon: {
    picture: "https://img.pokemondb.net/artwork/bagon.jpg",
    pokedexNo: 371,
    types: ["Dragon"],
    weakness: ["Ice", "Dragon", "Fairy"],
    species: "Rock Head Pokémon",
    evolutions: [{ name: "Shelgon", level: 30 }],
  },
  shelgon: {
    picture: "https://img.pokemondb.net/artwork/shelgon.jpg",
    pokedexNo: 372,
    types: ["Dragon"],
    weakness: ["Ice", "Dragon", "Fairy"],
    species: "Endurance Pokémon",
    evolutions: [{ name: "Salamence", level: 50 }],
  },
  salamence: {
    picture: "https://img.pokemondb.net/artwork/salamence.jpg",
    pokedexNo: 373,
    types: ["Dragon", "Flying"],
    weakness: ["Ice", "Rock", "Dragon", "Fairy"],
    species: "Dragon Pokémon",
    evolutions: [],
  },
  beldum: {
    picture: "https://img.pokemondb.net/artwork/beldum.jpg",
    pokedexNo: 374,
    types: ["Steel", "Psychic"],
    weakness: ["Fire", "Ground", "Dark", "Ghost"],
    species: "Iron Ball Pokémon",
    evolutions: [{ name: "Metang", level: 20 }],
  },
  metang: {
    picture: "https://img.pokemondb.net/artwork/metang.jpg",
    pokedexNo: 375,
    types: ["Steel", "Psychic"],
    weakness: ["Fire", "Ground", "Dark", "Ghost"],
    species: "Iron Claw Pokémon",
    evolutions: [{ name: "Metagross", level: 45 }],
  },
  metagross: {
    picture: "https://img.pokemondb.net/artwork/metagross.jpg",
    pokedexNo: 376,
    types: ["Steel", "Psychic"],
    weakness: ["Fire", "Ground", "Dark", "Ghost"],
    species: "Iron Leg Pokémon",
    evolutions: [],
  },
  regirock: {
    picture: "https://img.pokemondb.net/artwork/regirock.jpg",
    pokedexNo: 377,
    types: ["Rock"],
    weakness: ["Water", "Grass", "Fighting", "Ground", "Steel"],
    species: "Rock Peak Pokémon",
    evolutions: [],
  },
  regice: {
    picture: "https://img.pokemondb.net/artwork/regice.jpg",
    pokedexNo: 378,
    types: ["Ice"],
    weakness: ["Fire", "Fighting", "Rock", "Steel"],
    species: "Iceberg Pokémon",
    evolutions: [],
  },
  registeel: {
    picture: "https://img.pokemondb.net/artwork/registeel.jpg",
    pokedexNo: 379,
    types: ["Steel"],
    weakness: ["Fire", "Fighting", "Ground"],
    species: "Iron Pokémon",
    evolutions: [],
  },
  latias: {
    picture: "https://img.pokemondb.net/artwork/latias.jpg",
    pokedexNo: 380,
    types: ["Dragon", "Psychic"],
    weakness: ["Ice", "Dragon", "Bug", "Ghost", "Dark"],
    species: "Eon Pokemon",
    evolutions: [],
  },
  latios: {
    picture: "https://img.pokemondb.net/artwork/latios.jpg",
    pokedexNo: 381,
    types: ["Dragon", "Psychic"],
    weakness: ["Ice", "Dragon", "Bug", "Ghost", "Dark"],
    species: "Eon Pokémon",
    evolutions: [],
  },
  kyogre: {
    picture: "https://img.pokemondb.net/artwork/kyogre.jpg",
    pokedexNo: 382,
    types: ["Water"],
    weakness: ["Grass", "Electric"],
    species: "Sea Basin Pokémon",
    evolutions: [],
  },
  groudon: {
    picture: "https://img.pokemondb.net/artwork/groudon.jpg",
    pokedexNo: 383,
    types: ["Ground"],
    weakness: ["Water", "Grass", "Ice"],
    species: "Continent Pokémon",
    evolutions: [],
  },
  rayquaza: {
    picture: "https://img.pokemondb.net/artwork/rayquaza.jpg",
    pokedexNo: 384,
    types: ["Dragon", "Flying"],
    weakness: ["Ice", "Rock", "Dragon", "Fairy"],
    species: "Sky High Pokémon",
    evolutions: [],
  },
  jirachi: {
    picture: "https://img.pokemondb.net/artwork/jirachi.jpg",
    pokedexNo: 385,
    types: ["Steel", "Psychic"],
    weakness: ["Fire", "Ground", "Dark", "Ghost"],
    species: "Wish Pokémon",
    evolutions: [],
  },
  deoxys: {
    picture: "https://img.pokemondb.net/artwork/deoxys-normal.jpg",
    pokedexNo: 386,
    types: ["Psychic"],
    weakness: ["Bug", "Ghost", "Dark"],
    species: "DNA Pokémon",
    evolutions: [],
  },
};

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/index.html");
});

app.get("/api/:pokemonName", (request, response) => {
  const pokeName = request.params.pokemonName.toLowerCase();
  if (pokemonData[pokeName]) {
    response.json(pokemonData[pokeName]);
    console.log(`${pokeName} found.`);
  } else {
    console.log(`${pokeName} not found, please check spelling or try again.`);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
