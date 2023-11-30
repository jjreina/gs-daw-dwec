// Tipos
const jonSnow: string = "Jon";
const daenerys: string = "Daenerys";

const dragonsExist: boolean = true;

// Tuplas
const characters: [string, string] = [jonSnow, daenerys];
const isVillian: [string, number, boolean] = ["Cersei Lannister", 7, true];

// Arrays
const alliesGOT: string[] = [
  "Tyrion Lannister",
  "Arya Stark",
  "Sansa Stark",
  "Bran Stark",
];

// Enum
enum Characters {
  JonSnowPower = 30,
  DaenerysPower = 150,
  TyrionPower = 15,
  AryaPower = 20,
}

// Usar enum
const fuerzaJonSnow: Characters = Characters.JonSnowPower;
const fuerzaDaenerys: Characters = Characters.DaenerysPower;

// Retorno de funciones
const lightTorch = (): string => {
  return "Light Torch";
};

const askForHelp = (): void => {
  console.log("¡Help!!!");
};

// Casting
const age: any = "25";
// const ageLength: string = edad.length
// const ageLength: string = (age as string).length;
const ageLength: string = <string>age.length;
console.log(ageLength);
