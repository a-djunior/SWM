document.addEventListener('DOMContentLoaded', function() {
    // Lista de usuários e senhas
    const users = {
        'Adão Dimas': 'Adao1234',
        'Maria Silva': 'Maria1234',
        'João Souza': 'Joao1234',
        'Ana Paula': 'Ana1234',
        'Carlos Alberto': 'Carlos1234',
        'Fernanda Lima': 'Fernanda1234',
        'Pedro Santos': 'Pedro1234',
        'Juliana Pereira': 'Juliana1234',
        'Ricardo Oliveira': 'Ricardo1234',
        'Tatiana Costa': 'Tatiana1234'
    };

    // Adicionar evento de envio ao formulário
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Verificar se o login é bem-sucedido
        if (users[username] && users[username] === password) {
            // Redirecionar para outro arquivo HTML
            window.location.href = 'seu_arquivo.html'; // Substitua 'seu_arquivo.html' pelo nome do seu arquivo HTML
        } else {
            alert('Usuário ou senha incorretos. Tente novamente.');
        }
    });
});
