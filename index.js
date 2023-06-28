
class Funcionario {
  constructor(nome, idade, salario) {
    this.nome = nome;
    this.idade = idade;
    this.salario = salario;
  }

  calcularBonus(percentual) {
    return (this.salario * (percentual/100));
  }
    imprimirDados(){
        return {
            nome: this.nome,
            idade: this.idade,
            salario: this.salario
        };
    }  
  
}
class Gerente extends Funcionario{
    constructor(nome, idade, salario, departamento){
        super(nome, idade, salario)
        this.departamento = departamento;
    }
    imprimirDados(){
        return `<div> ${this.nome}</div>
                <div> ${this.idade}</div>
                <div> ${this.salario}</div>
                <div> ${this.departamento}</div>
        `
    }
}

const funcionario = new Funcionario("João", 16, 1000);
const gerente = new Gerente ("João", 16, 1000, "limpeza")
const imprimirDados = funcionario.calcularBonus(15);

console.log(imprimirDados.nome);   
console.log(imprimirDados.idade);  
console.log(imprimirDados.salario); 
console.log(imprimirDados)

