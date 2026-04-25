// ================== SCRIPT USUÁRIO LOGADO ==================
document.addEventListener('DOMContentLoaded', function () {
    const usuarioLogado = localStorage.getItem('usuarioLogado');
    const usuario = JSON.parse(localStorage.getItem('usuarioAtual'));
    const loginDiv = document.querySelector('.login');

    if (usuarioLogado && usuario) {
        // Pega a foto do usuário diretamente do objeto
        const fotoPerfil = usuario.foto
            ? usuario.foto
            : "./imagens/perfil.png";

        loginDiv.innerHTML = `
            <div class="usuario-dropdown" id="usuarioDropdown">
                <img src="${fotoPerfil}" alt="Usuário logado" class="icone-usuario">
                <span>${usuario.nome}</span>
                <div class="dropdown-menu" id="dropdownMenu">
                    <a href="arearestrita.html">Dashboard</a>
                    <a href="#" id="logout">Sair</a>
                </div>
            </div>
        `;

        const usuarioDropdown = document.getElementById('usuarioDropdown');
        const dropdownMenu = document.getElementById('dropdownMenu');

        // Toggle dropdown ao clicar no avatar
        usuarioDropdown.addEventListener('click', function (event) {
            event.stopPropagation(); // não fecha ao clicar dentro
            dropdownMenu.classList.toggle('show');
        });

        // Fecha dropdown ao clicar fora
        document.addEventListener('click', function () {
            dropdownMenu.classList.remove('show');
        });

        // Logout
        document.getElementById('logout').addEventListener('click', function () {
            localStorage.removeItem('usuarioLogado');
            localStorage.removeItem('usuarioAtual');
            window.location.reload();
        });
    }
});
