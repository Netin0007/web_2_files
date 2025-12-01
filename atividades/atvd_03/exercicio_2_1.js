const configuracoes = { cache: undefined };

const tempoExpiracaoBruto = configuracoes.cache?.tempoExpiracao;

const tempoExpiracaoFinal = tempoExpiracaoBruto ?? 600;

console.log("Tempo Final:", tempoExpiracaoFinal);