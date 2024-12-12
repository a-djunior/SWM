document.addEventListener('DOMContentLoaded', function() {
  // Lista de usuários e senhas
  const users = {
    'Adão Dimas': {
      password: 'Adao1234',
      photo: 'https://github.com/seu_usuario/seu_repositorio/caminho_para_foto_Adao.jpg'
    },
    'Maria Silva': {
      password: 'Maria1234',
      photo: 'https://github.com/seu_usuario/seu_repositorio/caminho_para_foto_Maria.jpg'
    }
    // Adicione os outros usuários aqui com os respectivos links das fotos
  };

  // Adicionar evento de envio ao formulário
  document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const usernameField = document.getElementById('username');
    const passwordField = document.getElementById('password');
    const username = usernameField.value;
    const password = passwordField.value;

    // Verificar se o login é bem-sucedido
    if (users[username] && users[username].password === password) {
      localStorage.setItem('currentUser', JSON.stringify({ name: username, photo: users[username].photo }));
      window.location.href = 'page2.html'; // Redireciona para a página 2
    } else {
      alert('Usuário ou senha incorretos. Tente novamente.');
    }
  });
});
