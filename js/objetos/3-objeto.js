const sitioWeb = {
  nombre: 'Google',
  redesSociales: {
    youtube: {
      enlace: 'youtube.com/google',
      nombre: 'Google'
    },
   facebook: {
     enlace: 'facebook.com/google',
     nombre: 'Google'
   }
  },
  link: {
    enlace: 'www.google.cl'
  },
};

const {nombre, redesSociales, redesSociales: { youtube: { enlace } } } = sitioWeb;

console.log(nombre);
console.log(redesSociales);
console.log(enlace);