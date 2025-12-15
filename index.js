import User from './User.js';
import Admin from './Admin.js';
import Docente from './Docente.js';

const novoUser = new User('Vinicius', 'vinicius@teste', '10/10/1990');
// novoUser.nome = 'Marcio';
console.log(novoUser.exibirInfos());

const novoAdmin = new Admin('Marcos', 'marcos@teste', '05/05/1995');
console.log(novoAdmin.exibirInfos());
