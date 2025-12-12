const user = {
    nome: 'Vinicius',
    email: 'v@gmail.com',
    nascimento: '1985-10-31',
    role: 'estudante',
    ativo: true,

    exibirInfo: function() {
        console.log(`${this.nome} (${this.email})`);
    }
}


const exibir = function() {
    console.log(this.nome, this.email);
}

const exibirNome = exibir.bind(user);
exibirNome()

