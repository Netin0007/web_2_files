const form = document.querySelector('#formLogin');
const emailInput = document.querySelector('#email');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio real

    if (emailInput.value.trim() === '') {
        emailInput.classList.add('error'); // Adiciona classe visual
    } else {
        emailInput.classList.remove('error');
    }
});

// Seleção: Achar o elemento no HTML.
//Binding (Ligação) ->  Dizer "quando ocorrer X, faça Y".
//Callback A função Y que roda quando o evento ocorre.