function User(nome, email){
    this.nome = nome;
    this.email = email;

    this.exibirInfos = function(){
        return `Nome: ${this.nome}, Email: ${this.email}`;
    }
}

const novoUsuario = new User('Vinicius','vinicius@gmail.com');
// console.log(novoUsuario.exibirInfos());