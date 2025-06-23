
//constantes para la aplicaicon


export const BREAKPOINTS = {
  MOBILE: 900,
  TABLET: 1024,
  DESKTOP: 1200

};


export const ANIMATION_DURATIONS = {
  FAST: 0.2,
  NORMAL: 0.3,
  SLOW: 0.5
};


export const EASING_TYPES = {
  POWER2_OUT: 'power2.out',
  POWER2_IN: 'power2.in',
  ELASTIC_OUT: 'elastic.out',
  BACK_OUT: 'back.out'

};


export const IMAGE_SIZES = {

  DESKTOP: {
    NORMAL: { width: 70, height: 70 },
    HOVER: { width: 140, height: 140 }
  },

  MOBILE: {
    NORMAL: { width: 60, height: 60 },
    ACTIVE: { width: 100, height: 100 }
  }

};


export const COLORS = {
  PRIMARY: '#f93535',
  SECONDARY: '#e3e3db',
  BACKGROUND: '#0f0f0f'

};


export default {
  BREAKPOINTS,
  ANIMATION_DURATIONS,
  EASING_TYPES,
  IMAGE_SIZES,
  COLORS
};
