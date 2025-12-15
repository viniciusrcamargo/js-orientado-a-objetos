import User from './User.js';

//herança
export default class Admin extends User {
    constructor(nome, email, nascimento, role = 'admin', ativo = true){
        super(nome, email, nascimento, role, ativo);
    }

    criarCurso(nomeCurso, qtdeVagas){
        return `Curso ${nomeCurso} criado com ${qtdeVagas} vagas.`;
    }

}

const novoAdmin = new Admin('Marcos', 'teste@teste', '05/05/1995');
console.log(novoAdmin.nome);
// console.log(novoAdmin.criarCurso('JavaScript', 20));