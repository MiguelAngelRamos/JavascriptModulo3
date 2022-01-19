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
// const enlaceYoutube = sitioWeb.redesSociales.youtube.enlace;
// console.log(enlaceYoutube);

// Destructuring
const { enlace, nombre } = sitioWeb.redesSociales.youtube;
console.log(enlace);
console.log(nombre);