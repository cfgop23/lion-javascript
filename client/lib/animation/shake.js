/* global gsap */

export const shake = gsap.to('form', {
  duration: 0.1,
  x: -10,
  repeat: 6,
  yoyo: true,
  clearProp: 'x',
  paused: true,
});
