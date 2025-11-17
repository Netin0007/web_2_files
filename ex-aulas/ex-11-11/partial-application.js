//funçao generecia de três argumentos

//const log = (nivel, tag, mensagem) => console.log(`[${nivel}] <${tag}>: ${mensagem}`);

//log ("ERRO", "API","ERRO ao integrar api de pagamento." );

const log = (nivel) => (tag, mensagem) => console.log(`[${nivel}] <${tag}>: ${mensagem}`);

const logInfo = log("INFO"); 
const logErro = log("ERRO"); 
const logAviso = log("Aviso"); 

logInfo("BD", "Conexão bem sucedida");
logErro("API", "Erro de integração com API de fretes.");
logAviso("LIB", "Algumas /dependencias estão desatualizadas");

log