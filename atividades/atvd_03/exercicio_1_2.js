function registrarEvento(tipo, ...metadados) {
    console.log(`Tipo de evento: ${tipo}`);
    console.log('Metadados:', metadados);
}

registrarEvento("Click");
registrarEvento("Erro", "404", "Not Found");
registrarEvento("Login", { user: "admin" }, "Sucesso");