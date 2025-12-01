const props = {
    id: "btn-submit",
    className: "btn-primary",
    onClick: () => console.log("Clicado"),
    "data-acao": "enviar",
    disabled: true,
    title: "Enviar formulário"
};

function prepararPropsBotao(propriedades) {
    const { id, className, onClick, ...atributosNativos } = propriedades;
    
    const configuracaoPadrao = { id: 'default-id', type: 'button', disabled: false };
    
    const propsFinais = { 
        ...configuracaoPadrao, 
        ...atributosNativos, 
        disabled: false 
    };
    
    return propsFinais;
}

console.log(prepararPropsBotao(props));