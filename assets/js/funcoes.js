function setarVerde(cruzamento) {
    cruzamento.set("icon", sinalVerde);
}

function setarVermelho(cruzamento) {
    cruzamento.set("icon", sinalVermelho);
}

function fecharSinal(cruzamento) {
    setTimeout(function () { cruzamento.set("icon", sinalAmarelo); }, 5000);
    setTimeout(function () { cruzamento.set("icon", sinalVermelho); }, 7000);
}

function cruzamento_12() {
    setarVerde(cruzamento1);
    setarVerde(cruzamento2);
    setarVerde(cruzamento3);
    setarVerde(cruzamento31);
    setarVerde(cruzamento5);
    setarVerde(cruzamento7);

    setarVermelho(cruzamento4);
    setarVermelho(cruzamento6);
    setarVermelho(cruzamento61);
    
    fecharSinal(cruzamento1);
    fecharSinal(cruzamento2);
    fecharSinal(cruzamento3);
    fecharSinal(cruzamento31);
    fecharSinal(cruzamento5);
    fecharSinal(cruzamento7);
}

function cruzamento_3() {
    setarVerde(cruzamento3);
    setarVerde(cruzamento31);
    setarVerde(cruzamento61);

    setarVermelho(cruzamento6);

}