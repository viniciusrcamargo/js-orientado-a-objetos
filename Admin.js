import User from './User.js';

//herança
class Admin extends User {
    constructor(nome, email, nascimento, role = 'admin', ativo = true){
        super(nome, email, nascimento, role, ativo);
    }
}

const novoAdmin = new Admin('Marcos', 'teste@teste', '05/05/1995');
console.log(novoAdmin);
console.log(novoAdmin.ExibirInfos());