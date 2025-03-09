class User { // parametros do constructor
  public name: string;
  public age: number;
	private saldoBancario: number;

  constructor(nome: string, idade: number) { // O constructor é executado toda vez que uma nova instancia é criada
    this.name = nome;
    this.age = idade;
		this.saldoBancario = 0;
    console.log("Nova instancia criada")
  }
}

const user = new User("ju", 4);
console.log(user); // apresenta o objeto denominado "user"