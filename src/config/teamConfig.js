
//configuracion del equipo
export const teamConfig = {

  //miembros del eqipo
  members: [
    { 
      id: 1,
      name: 'Andres', 
      image: '/assets/images/after-effects.png',
      role: 'Developer'
    },

    { 
      id: 2,
      name: 'Aguayo', 
      image: '/assets/images/ilustrator.png',
      role: 'Designer and Developer'
    },

    { 
      id: 3,
      name: 'Alejandro', 
      image: '/assets/images/lightroom.png',
      role: 'Developer'
    },

    { 
      id: 4,
      name: 'Pepe', 
      image: '/assets/images/photoshoop.png',
      role: 'Developer'
    }
  ],


  //configuracion para las imagenes
  animations: {

    desktop: {

      imageSize: {
        normal: { width: 70, height: 70 },
        hover: { width: 140, height: 140 }
      },
      duration: 0.3,
      ease: 'power2.out'
    },

    mobile: {
      imageSize: {
        normal: { width: 60, height: 60 },
        active: { width: 100, height: 100 }
      },
      duration: 0.3,
      ease: 'power2.out'
    },

    text: {
      duration: 0.3,
      easeIn: 'power2.in',
      easeOut: 'power2.out'
    }

  },

  //breakpoints
  breakpoints: {
    mobile: 900
  }

};


export default teamConfig;
