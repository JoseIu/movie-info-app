export const getNumberRandom = (): number => {
  // Genera un número aleatorio entre 1 y 20
  const numberRandom = Math.floor(Math.random() * 20);
  return numberRandom;
};
