const games = ["Zelda", "Mario Bros", "Metroid", "Chrono"];

export const deleteFirtPosition = () => {
  return games.shift();
};

export const deleteLastPosition = () => {
  return games.pop();
};
