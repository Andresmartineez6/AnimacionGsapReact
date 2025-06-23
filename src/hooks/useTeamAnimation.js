//hooks para la animacion
import { useRef, useEffect, useCallback } from 'react';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';


//registrar el plugin de gsap de SplitText
gsap.registerPlugin(SplitText);


export const useTeamAnimation = () => {

  const profileImagesRef = useRef(null);
  const nameElementsRef = useRef(null);
  const splitTextsRef = useRef([]);

  //iniciar las animaciones
  useEffect(() => {
  
    const profileImages = profileImagesRef.current?.querySelectorAll('.img');
    const nameElements = nameElementsRef.current?.querySelectorAll('.name');
    
    if (!profileImages || !nameElements) return;

    //aplico el plugin splittext a todos los titulos
    splitTextsRef.current = [];
    nameElements.forEach((nameEl) => {
      const heading = nameEl.querySelector('h1');
      if (heading) {
        const split = new SplitText(heading, { type: 'chars' });
        splitTextsRef.current.push(split);
      }
    });


    //oculto todos los nombres de los titulos excepto el titulo de equipo(h1)
    for (let i = 1; i < nameElements.length; i++) {
      gsap.set(nameElements[i], { autoAlpha: 0 });
    }


    //funcion para limpiarlo todo al desmontar el componente
    return () => {
      splitTextsRef.current.forEach(split => {
        if (split && split.revert) {
          split.revert();
        }
      });
    };

  }, []);


  //funcioon para mostrar un nombre solamente en especifico
  const showName = useCallback((index) => {

    const nameElements = nameElementsRef.current?.querySelectorAll('.name');
    if (!nameElements) return;

    const defaultNameElement = nameElements[0];
    
    //oculto el titulo h1 de equipo
    gsap.to(defaultNameElement, {
      autoAlpha: 0,
      duration: 0.3,
      ease: 'power2.out'
    });
    
    
    //muestro el nombre , es decir, el index +1 por que el 0 es el titulo de equipo(el h1)
    if (nameElements[index + 1]) {
      gsap.to(nameElements[index + 1], {
        autoAlpha: 1,
        duration: 0.3,
        ease: 'power2.in'
      });
    }
  }, []);

  
  //funcion para restaurar el titulo de equipo
  const showDefaultName = useCallback(() => {

    const nameElements = nameElementsRef.current?.querySelectorAll('.name');
    if (!nameElements) return;

    const defaultNameElement = nameElements[0];
    
    //oculto todos los nombre
    for (let i = 1; i < nameElements.length; i++) {
      gsap.to(nameElements[i], {
        autoAlpha: 0,
        duration: 0.3,
        ease: 'power2.out'
      });
    }
    
    //muestro el titulo
    gsap.to(defaultNameElement, {
      autoAlpha: 1,
      duration: 0.3,
      ease: 'power2.in'
    });
  }, []);


  //manejo los eventos pero en la resolucion de ordenaro
  const handleImageHover = useCallback((index) => {

    const profileImages = profileImagesRef.current?.querySelectorAll('.img');

    if (!profileImages || !profileImages[index]) return;

    //agrando la imagen
    gsap.to(profileImages[index], {
      width: 180,
      height: 180,
      duration: 0.3,
      ease: 'power2.out'
    });
    

    //te muestro el nombre correspondinete de la imagen
    showName(index);
  }, [showName]);


  const handleImageLeave = useCallback((index) => {

    const profileImages = profileImagesRef.current?.querySelectorAll('.img');

    if (!profileImages || !profileImages[index]) return;

    //reduzco el tamaño de la imagen
    gsap.to(profileImages[index], {
      width:140,
      height: 140,
      duration: 0.3,
      ease: 'power2.out'
    });
    
    //recupero el estado del titulo equipo
    showDefaultName();
  }, [showDefaultName]);

  //manejo los eeventos pero ahora para movil
  const handleImageTouch = useCallback((index, event) => {
    const profileImages = profileImagesRef.current?.querySelectorAll('.img');

    if (!profileImages) return;

    //reseteo todas las imagenes pero a su tamaño normal de inicio
    profileImages.forEach((img) => {
      gsap.to(img, {
        width: 60,
        height: 60,
        duration: 0.3,
        ease: 'power2.out'
      });
    });
    
    //agrando la imagen cunado las toco al hacer hover
    if (profileImages[index]) {
      gsap.to(profileImages[index], {
        width: 100,
        height: 100,
        duration: 0.3,
        ease: 'power2.out'
      });
    }
    
    //muestrop el nombre al hacer el hover con la animacion
    showName(index);
  }, [showName]);

  const handleDocumentTouch = useCallback((event) => {

    const profileImages = profileImagesRef.current?.querySelectorAll('.img');

    if (!profileImages) return;


    let clickedOnImage = false;

    //recorre todas las imagenes para ver si se dio click en alguna
    profileImages.forEach((img) => {
      if (img.contains(event.target)) {
        clickedOnImage = true;
      }
    });
    

    if (!clickedOnImage) {
      //reseteo todas las imágenes a su tamaño original
      profileImages.forEach((img) => {
        gsap.to(img, {
          width: 60,
          height: 60,
          duration: 0.3,
          ease: 'power2.out'
        });
      });
      
      //recupero el titulo equipo
      showDefaultName();
    }
  }, [showDefaultName]);


  return {
    profileImagesRef,
    nameElementsRef,
    handleImageHover,
    handleImageLeave,
    handleImageTouch,
    handleDocumentTouch
  };

};
