class Heranca {
  name: string;
  age: number;

  comprimentar(name: string) {
    // metodo
    console.log(`Olá, ${name}`);
  }
}

interface teste {
  slario: number;
  fome(): void;
}

// 'extends' adiciona a "herança" ao 'class' e 'implements' adiciona a interface "teste"
class Usuario extends Heranca implements teste {
  // Para não dar erro na class, precisa declarar todos os atributos da interface
  slario: number;
  fome(): void {
    console.log("Estou com fome");
  }
}

const people = new Usuario();
