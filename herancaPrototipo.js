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

const admin = {
     nome: 'Mariana',
    email: 'm@gmail.com',
    nascimento: '1987-10-31',
    role: 'admin',
    ativo: true,
    criarCurso: function() {
        console.log('Curso criado com sucesso!');
    }
}
// Estabelece a herança de protótipo
Object.setPrototypeOf(admin, user);

//herança de protótipo é quando um objeto herda propriedades e métodos de outro objeto através da cadeia de protótipos.

// Agora o objeto admin pode acessar o método exibirInfo do objeto user
//Array.ptototype  no navegador para ver os médodos que um array herda do protótipo

admin.exibirInfo();
admin.criarCurso();