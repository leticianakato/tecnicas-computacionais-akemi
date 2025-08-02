const nomes = ["Akemi", "Lêlê", "Lice", "Mary", "Mel", "Milly", "Rhaissa", "Topázio"];

export function aleatorio (lista){
        const posicao = Math.floor(Math.random()* lista.length);
        return lista[posicao];
}

export const nome = aleatorio(nomes);