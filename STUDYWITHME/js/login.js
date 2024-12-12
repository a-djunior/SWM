document.addEventListener('DOMContentLoaded', function() {
    // Lista de usuários e senhas
    const users = {
        'Adão Dimas': { password: 'Adao1234', photo: 'https://github.com/seu_usuario/seu_repositorio/caminho_para_foto_Adao.jpg' },
        'Maria Silva': { password: 'Maria1234', photo: 'https://github.com/seu_usuario/seu_repositorio/caminho_para_foto_Maria.jpg' },
        // Adicione os outros usuários aqui com os respectivos links das fotos
    };

    // Adicionar evento de envio ao formulário
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Verificar se o login é bem-sucedido
        if (users[username] && users[username].password === password) {
            localStorage.setItem('currentUser', JSON.stringify({ name: username, photo: users[username].photo }));
            window.location.href = 'inicio.html'; // Redireciona para a página de início
        } else {
            alert('Usuário ou senha incorretos. Tente novamente.');
        }
    });
});
