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
    const usernameValue = usernameField.value;
    const passwordValue = passwordField.value;

    // Verificar se o login é bem-sucedido
    if (users[usernameValue] && users[usernameValue].password === passwordValue) {
      localStorage.setItem('currentUser', JSON.stringify({ name: usernameValue, photo: users[usernameValue].photo }));
      window.location.href = 'inicio.html'; // Redireciona para a página de início
    } else {
      alert('Usuário ou senha incorretos. Tente novamente.');
    }
  });

  // Verificar se o usuário já está logado ao carregar a página de início
  window.addEventListener('load', function() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {
      // Redirecionar para a página de login para verificar novamente
      window.location.href = 'login.html';
    }
  });
});
