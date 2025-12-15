import User from './User.js';
import Admin from './Admin.js';
import Docente from './Docente.js';

const novoUser = new User('Vinicius', 'vinicius@teste', '10/10/1990');
console.log(novoUser);
console.log(novoUser.exibirInfos());