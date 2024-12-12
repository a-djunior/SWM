document.addEventListener('DOMContentLoaded', function() {
    // Lista de usuários e senhas
    const users = {
        document.addEventListener('DOMContentLoaded', function() {
    const users = {
        'Adão Dimas': { password: 'Adao1234', photo: 'https://github.com/seu_usuario/seu_repositorio/caminho_para_foto_Adao.jpg' },
        'Maria Silva': { password: 'Maria1234', photo: 'https://github.com/seu_usuario/seu_repositorio/caminho_para_foto_Maria.jpg' },
        // Adicione os outros usuários aqui com os respectivos links das fotos
    };

    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (users[username] && users[username].password === password) {
            localStorage.setItem('currentUser', JSON.stringify({ name: username, photo: users[username].photo }));
            window.location.href = 'inicio.html'; // Redireciona para a página de início
        } else {
            alert('Usuário ou senha incorretos. Tente novamente.');
        }
    });
});

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
