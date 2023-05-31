const open = document.getElementById("open");
const popup = document.getElementById("container-bg")
const close = document.getElementById("close")
const fechadores = document.querySelectorAll(".bc")

open.addEventListener('click', function () {
    popup.style.display = "block";
});

fechadores.forEach(Elements => {
    Elements.addEventListener("click", clicado => {
        let classeclicada = clicado.target.classList[0]
        if (classeclicada == "bc") {
            popup.style.display = "none";
        }
    });
});