window.addEventListener("scroll", function () {
    var header = this.document.querySelector('#header');
    var text = this.document.querySelector('#name');

    if (this.window.scrollY > 0) {
        text.style.color = 'white';
        header.classList.add('rolagem');
    } else {
        text.style.color = 'black';
        header.classList.remove('rolagem');
    }
});

function enviar() {
    var infoUm = document.getElementById('infoUm').value;
    alert(`Olá ${infoUm}, obrigado pela visita. Caso queira entrar em contato comigo, me mande um e-mail!`);
}
