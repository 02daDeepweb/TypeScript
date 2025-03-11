interface People {
  name: string;
  age: number;
  city: string;
  country: string;
  married?: boolean;
  // se colocarmos | entre duas opções, como "sim | não",o sistema só vai aceitar uma delas
  // ex: married?: "sim" | "não"; somente um desse será aceito
  profission: string;
}

let CLT: People;

CLT = {
  name: "Henry",
  age: 17,
  city: "São Paulo",
  country: "SP",
  profission: "Desenvolvedor",
};

const apresentar = (CLT: People): void => {
  console.log(`Ola me chamo ${CLT.name}`);
  console.log(`Tenho ${CLT.age} anos`);
  console.log(`Sou ${CLT.profission}`);
};

apresentar(CLT);
