// 1. Destructuring
const respostaApi = { id: 101, username: "user_a", email: "a@ex.com", status: "ativo" };
const { username, email } = respostaApi;
console.log("Username:", username);
console.log("Email:", email);

// 2. Rest
const { id, ...dadosComplementares } = respostaApi;
console.log("ID:", id);
console.log("Dados Complementares:", dadosComplementares);

// 3. Spread
const configPadrao = { tema: 'dark', notificacoes: true };
const configUsuario = { notificacoes: false };
const configFinal = { ...configPadrao, ...configUsuario };
console.log("Config Final:", configFinal);