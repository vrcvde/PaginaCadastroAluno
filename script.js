document.getElementById("adicionar-idioma").addEventListener("click", function() {
    var novoIdioma = document.getElementById("outro-idioma").value; // Pega o valor do input
    if (novoIdioma) {
        var li = document.createElement("li"); // Cria um novo elemento de lista
        li.textContent = novoIdioma; // Define o texto do novo elemento
        document.getElementById("lista-idiomas").appendChild(li); // Adiciona o novo elemento à lista
        document.getElementById("outro-idioma").value = ""; // Limpa o campo de texto
    } else {
        alert("Por favor, digite um idioma."); // Alerta se o campo estiver vazio
    }
});
