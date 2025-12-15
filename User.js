export default class User{
    //encapsulamento
    //atributos privados - foi implementato a partir do ES2022
    #nome;
    #email;
    #nascimento;
    #role;
    #ativo;
    constructor(nome,email, nascimento, role, ativo = true){
        this.#nome = nome;
        this.#email = email;
        this.#nascimento = nascimento;
        this.#role = role || 'estudante';
        this.#ativo = ativo;
    }

    // Método privado para montar o objeto do usuário
    #montaObjetoUser(){
        return({
            nome: this.#nome,
            email: this.#email,
            nascimento: this.#nascimento,
            role: this.#role,
            ativo: this.#ativo
        })
    }
    // Método para exibir informações do usuário
    exibirInfos(){
        const user = this.#montaObjetoUser();
        return `Nome: ${user.nome}, Email: ${user.email}, Nascimento: ${user.nascimento}`;
    }
}

const novoUsuario = new User('Vinicius','v@v.com','10/10/2000');
// console.log(novoUsuario);
// console.log(novoUsuario.exibirInfos());