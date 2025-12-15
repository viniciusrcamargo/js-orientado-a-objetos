import User from './User.js';

class Docente extends User {
    constructor(nome, email, nascimento, role = 'docente', ativo = true){
        super(nome, email, nascimento, role, ativo);
    }   

    aprovarEstudante(estudante, curso){
        return `O estudante ${estudante} foi aprovado no curso de ${curso}, responsável ${this.nome}.`;
    }
}

const novoDocente = new Docente('Ana', 'ana@teste', '12/12/1990');
console.log(novoDocente);
console.log(novoDocente.aprovarEstudante('Vinicius', 'JavaScript'));