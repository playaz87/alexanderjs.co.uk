import { useEffect } from 'react';

export const usePokeFont = () => {
  useEffect(() => {
    if (document.getElementById('poke-font')) return;
    const link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('href', 'https://fonts.cdnfonts.com/css/pokemon-hollow');
    link.setAttribute('id', 'poke-font');
    document.head.appendChild(link);
  }, []);
};
