document.addEventListener('DOMContentLoaded', function() {
  // Lista de usuários e senhas
  const users = {
    'Adão Dimas Jr': {
      password: 'Dimas1234',
      photo: 'STUDYWITHME/Photos/Adão Dimas Jr.jpg'
    },
    'Giuliano Panik': {
      password: 'Giualiano1234',
      photo: 'STUDYWITHME/Photos/Giuliano Panik.jpg'
    },
    'Flávia Alessandra': {
      password: 'Flavia1234',
      photo: 'STUDYWITHME/Photos/Flávia Alessandra.jpg'
    },
    'Iandra Beatriz': {
      password: 'Iandra1234',
      photo: 'STUDYWITHME/Photos/Iandra Beatriz.jpg'
    },
    'Nicolas Nadal': {
      password: 'Nicolas1234',
      photo: 'STUDYWITHME/Photos/Nicolas Nadal.jpg'
    },
    'Jeferson Eurides': {
      password: 'Jeferson1234',
      photo: 'STUDYWITHME/Photos/Jeferson Eurides.jpg'
    },
    'Luana Eurides': {
      password: 'Luana1234',
      photo: 'STUDYWITHME/Photos/Luana Eurides.jpg'
    },
    'Cintia Eurides': {
      password: 'Cintia1234',
      photo: 'STUDYWITHME/Photos/Cintia Eurides.jpg'
    },
    'Rosângela Ribeiro': {
      password: 'Rosangela1234',
      photo: 'STUDYWITHME/Photos/Rosângela Ribeiro.jpg'
    },
    'Adão Dimas': {
      password: 'Adao1234',
      photo: 'STUDYWITHME/Photos/Adão Dimas.jpg'
    },
     'Fabrício Ferreira': {
      password: 'Fabricio1234',
      photo: 'STUDYWITHME/Photos/Fabrício Ferreira.jpg'
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
