const sitioWeb = {
  nombre: 'Google',
  link: {
    enlace: 'www.google.cl'
  },
  redesSociales: {
    youtube: {
      enlace: 'youtube.com/google',
      nombre: 'Google'
    }
  }
}

// guarden en una constante llama enlaceYoutube 
const enlaceYoutube = sitioWeb.redesSociales.youtube.enlace;
console.log(enlaceYoutube);

// Destructuring (Desmenuzar)
const { enlace, nombre } = sitioWeb.redesSociales.youtube;
console.log(enlace);
console.log(nombre);


const {nombre, link, redesSociales}  = sitioWeb;
const { youtube } = redesSociales;
const {enlace, nombre } = youtube;

console.log(nombre);
console.log(link.enlace);
console.log(enlace);
console.log(nombre);