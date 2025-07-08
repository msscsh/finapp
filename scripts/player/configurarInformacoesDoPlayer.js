jogador_apelido = undefined
jogador_nivel = undefined

function recuperarNomeDoPlayer() {
    jogador_apelido = localStorage.getItem('jogador_apelido') || 'nome não encontrado'
}

function recuperarNivelDoPlayer() {
    jogador_nivel = localStorage.getItem('jogador_nivel') || 'nivel não definido, seu noob'
}