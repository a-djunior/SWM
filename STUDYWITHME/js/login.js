document.addEventListener('DOMContentLoaded', function() {
  // Lista de usuários e senhas
  const users = {
    'Adão Dimas Jr': {
      password: 'Dimas1234',
      photo: 'STUDYWITHME/Photos/Adão Dimas.jpeg'
    },
    'Giuliano Panik': {
      password: 'Giualiano1234',
      photo: 'STUDYWITHME/Photos/Maria Silva.jpg'
    },
    'Flávia Alessandra': {
      password: 'Flavia1234',
      photo: 'STUDYWITHME/Photos/Adão Dimas.jpeg'
    },
    'Iandra Beatriz': {
      password: 'Iandra1234',
      photo: 'STUDYWITHME/Photos/Adão Dimas.jpeg'
    },
    'Nicolas Nadal': {
      password: 'Nicolas1234',
      photo: 'STUDYWITHME/Photos/Adão Dimas.jpeg'
    },
    'Jeferson Eurides': {
      password: 'Jeferson1234',
      photo: 'STUDYWITHME/Photos/Adão Dimas.jpeg'
    },
    'Luana Eurides': {
      password: 'Luana1234',
      photo: 'STUDYWITHME/Photos/Adão Dimas.jpeg'
    },
    'Cintia Eurides': {
      password: 'Cintia1234',
      photo: 'STUDYWITHME/Photos/Adão Dimas.jpeg'
    },
    'Rosangela Aparecida': {
      password: 'Adao1234',
      photo: 'STUDYWITHME/Photos/Adão Dimas.jpeg'
    },
    'Adão Dimas': {
      password: 'Adao1234',
      photo: 'STUDYWITHME/Photos/Adão Dimas.jpeg'
    },
    // Adicione os outros usuários aqui com os respectivos links das fotos
  };

  // Verificar se o usuário já está logado ao carregar a página de login
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  if (currentUser && users[currentUser.name] && users[currentUser.name].password === currentUser.password) {
    window.location.href = 'page2.html'; // Redireciona para a página 2
  } else {
    // Adicionar evento de envio ao formulário
    document.getElementById('loginForm').addEventListener('submit', function(event) {
      event.preventDefault();
      const usernameField = document.getElementById('username');
      const passwordField = document.getElementById('password');
      const usernameValue = usernameField.value;
      const passwordValue = passwordField.value;

      // Verificar se o login é bem-sucedido
      if (users[usernameValue] && users[usernameValue].password === passwordValue) {
        localStorage.setItem('currentUser', JSON.stringify({ name: usernameValue, password: passwordValue, photo: users[usernameValue].photo }));
        window.location.href = 'page2.html'; // Redireciona para a página 2
      } else {
        alert('Usuário ou senha incorretos. Tente novamente.');
      }
    });
  }
});
