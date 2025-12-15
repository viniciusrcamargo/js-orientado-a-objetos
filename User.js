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

    get nome(){
        return this.#nome;
    }
    set nome(novoNome){
        if(novoNome === ""){
            throw new Error('Nome não pode ser vazio');
        }
        this.#nome = novoNome;
    }
    get email(){
        return this.#email;
    }
    set email(novoEmail){
        this.#email = novoEmail;
    }
    get nascimento(){
        return this.#nascimento;
    }
    set nascimento(novoNascimento){
        this.#nascimento = novoNascimento;
    }
    get role(){
        return this.#role;
    }
    set role(novaRole){
        this.#role = novaRole;
    }
    get ativo(){
        return this.#ativo;
    }
    set ativo(novoAtivo){
        this.#ativo = novoAtivo;
    }

    // Método privado para montar o objeto do usuário
    // #montaObjetoUser(){
    //     return({
    //         nome: this.#nome,
    //         email: this.#email,
    //         nascimento: this.#nascimento,
    //         role: this.#role,
    //         ativo: this.#ativo
    //     })
    // }
    // Método para exibir informações do usuário
    exibirInfos(){
        return `Nome: ${this.nome}, Email: ${this.email}, Nascimento: ${this.nascimento}`;
    }
// Método estático para exibir informações sem instanciar a classe
static exibirInfos(nome, email, nascimento){
    return `Nome: ${nome}, Email: ${email}, Nascimento: ${nascimento}`;
}
}



const novoUsuario = new User('Vinicius','v@v.com','10/10/2000');
// console.log(novoUsuario);
// console.log(novoUsuario.exibirInfos());