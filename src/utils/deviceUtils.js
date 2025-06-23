//Utilidades para detectar el tipo de dispositivo abre la aplicacion


/**
 *detecta si el dispositivo es móvil basado en el ancho de pantalla
 * @param {number} breakpoint --> punto de corte en los píxeles (por defecto suele ser 900)*
 * @returns {boolean} --> true si es móvil, false si es desktop*
 */

export const isMobileDevice = (breakpoint = 900) => {
  return window.innerWidth <= breakpoint;
};





/**
 *detecta si el dispositivo soporta touch
 * @returns {boolean} --> true si soporta touch
 */

export const isTouchDevice = () => {
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
};






/**
 *obtiene las dimensiones de la ventana
 * @returns {object} --> objetoo con width y height
 */
export const getWindowDimensions = () => {
  return {
    width: window.innerWidth,
    height: window.innerHeight
  };
};





/**
 * funcion para optimizar eventos de resize
 * @param {function} func --> funcion a ejecutar
 * @param {number} wait --> tiempo de espera en ms
 * @returns {function} --> funcion debounced
 */

export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};




/**
 * Clamp function para limitar valores entre un mínimo y máximo
 * @param {number} value --> valor a limitar
 * @param {number} min --> valor mínimo
 * @param {number} max --> valor máximo
 * @returns {number} --> valor limitado
 */

export const clamp = (value, min, max) => {
  return Math.min(Math.max(value, min), max);
};



export default {
  isMobileDevice,
  isTouchDevice,
  getWindowDimensions,
  debounce,
  clamp
};
