const DEFAULT_DAY = "Número de día inválido";

export const getDayOfWeekSC = (day) => {
  switch (day) {
    case 1:
      return "Lunes";
    case 2:
      return "Martes";
    case 3:
      return "Miércoles";
    case 4:
      return "Jueves";
    case 5:
      return "Viernes";
    case 6:
      return "Sábado";
    case 7:
      return "Domingo";
    default:
      return DEFAULT_DAY;
  }
};

let dayOfWeek = {
  1: "Lunes",
  2: "Martes",
  3: "Miércoles",
  4: "Jueves",
  5: "Viernes",
  6: "Sábado",
  7: "Domingo",
};

export const getDayOfWeekObject = (day) => {
  return dayOfWeek[day] || DEFAULT_DAY;
};
