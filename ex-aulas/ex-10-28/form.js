function cadastrar() {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;

    if (nome === "" || email === "") {
        document.getElementById("mensagem").innerText = "Por favor, preencha todos os campos!";
    } else {
        document.getElementById("mensagem").innerText = 
            "Cadastro realizado com sucesso!\nNome: " + nome + "\nEmail: " + email;
    }
}
