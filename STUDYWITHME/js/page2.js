document.addEventListener('DOMContentLoaded', function() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {
        document.getElementById('profileName').textContent = currentUser.name;
        document.getElementById('profilePhoto').src = currentUser.photo;
    } else {
        // Redirecionar para a página de login se não houver um usuário logado
        window.location.href = 'login.html';
    }
});
