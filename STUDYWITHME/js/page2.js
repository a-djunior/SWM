document.addEventListener('DOMContentLoaded', function() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {
        document.getElementById('username').textContent = currentUser.name;
        document.getElementById('userPhoto').src = currentUser.photo;
    } else {
        // Se não houver usuário logado, redireciona para a página de login
        window.location.href = 'login.html';
    }
});
