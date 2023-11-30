(() => {
  type Birth = {
    date: string;
    place: string;
  };
  type Director = {
    name: string;
    nationality: string;
    birth: Birth;
    notableFilmography: [string, string, string];
  };
  type Characters = {
    name: string;
    actor: string;
    description: string;
  };
  type Movi = {
    title: string;
    director: Director;
    year: number;
    genre: string;
    duration: number;
    rating: number;
    characters: Characters[];
    synopsis: string;
  };

  let movie: Movi = {
    title: "El Señor de los Anillos: La Comunidad del Anillo",
    director: {
      name: "Peter Jackson",
      nationality: "Neozelandés",
      birth: {
        date: "31 de octubre de 1961",
        place: "Pukerua Bay, Nueva Zelanda",
      },
      notableFilmography: ["El Señor de los Anillos", "El Hobbit", "King Kong"],
    },
    year: 2001,
    genre: "Fantasía",
    duration: 178,
    rating: 9.2,
    characters: [
      {
        name: "Frodo Baggins",
        actor: "Elijah Wood",
        description:
          "El portador del Anillo Único, encargado de destruirlo en el Monte del Destino.",
      },
      {
        name: "Gandalf",
        actor: "Ian McKellen",
        description:
          "Un poderoso mago y consejero que guía a Frodo en su misión.",
      },
      {
        name: "Aragorn",
        actor: "Viggo Mortensen",
        description:
          "Un guerrero y futuro rey que se une a la Comunidad para proteger a Frodo.",
      },
    ],
    synopsis:
      "Un hobbit llamado Frodo Baggins emprende un viaje épico para destruir un anillo malévolo y evitar que caiga en manos del Señor Oscuro Sauron.",
  };
})();
