// "characters": "https://rickandmortyapi.com/api/character"
// fetch ? es una función. retorna una promesa 

const url = "https://rickandmortyapi.com/api/character"; // todos los personajes
// end points
// npm axios
fetch(url)
  .then(
    (resp) => {
      return resp.json();
  })
  .then((data) => {
    console.log(data);
    // console.log(data.results);
  })
  .catch((err) => console.error(err));

// promesa, todo sale bien "then"
// promesa lo capturamos por "catch"

// CRUD
