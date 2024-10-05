
class descricaoHeroi{
    constructor(nome, idade, tipo) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar() {
        let ataque;
        switch (this.tipo) {
            case 'mago':
                ataque = 'usou magia'
                break
            case 'guerreiro':
                ataque = 'usou espada'
                break
            case 'lutador':
                ataque = 'usou artes marciais'
                break
            case 'assassino':
                ataque = 'usou arma de fogo'
                break
            default:
                ataque = 'atacou'
        }
        console.log(this.formatarMensagem(ataque))
    }

    formatarMensagem(mensagem) {
        const palavras = mensagem.split(" ")
        palavras.shift()
        return `O ${this.tipo} atacou usando ${palavras.join(" ")}`
    }
    }

const listaHerois = [
    new descricaoHeroi("Rell", 16, "guerreiro"),
    new descricaoHeroi("Amumu", "milenios", "mago"),
    new descricaoHeroi("Briar", 25, "assassino"),
    new descricaoHeroi("Miss Fortune", 30,"assassino"),
    new descricaoHeroi("Camille", 80, "guerreiro"),
    new descricaoHeroi("Ahri",  200, "mago"),
    new descricaoHeroi("Aurora", "eras" , "mago"),
    new descricaoHeroi("Kai'Sa",  19, "mago"),
    new descricaoHeroi("Jinx",  26, "assassino"),
    new descricaoHeroi("Vi",  30, "lutador"),
    new descricaoHeroi("Caitlyn",  33, "assassino"),
    new descricaoHeroi("Gnar",  9000, "lutador"),
    new descricaoHeroi("Katarina",  35, "guerreiro"),
    new descricaoHeroi("Bel'Veth", "eras", "mago"),
    new descricaoHeroi("Renata Glasc", 45, "mago"),
    new descricaoHeroi("Ekko", 26, "lutador")
]

function solicitarAtaqueHeroi() {
    const nomeHeroi = prompt("Informe o nome do herói que você deseja saber o ataque:")
    const heroi = listaHerois.find(h => h.nome.toLowerCase() === nomeHeroi.toLowerCase())

    if (heroi) {
        heroi.atacar()
    } else {
        console.log("Herói não encontrado.")
    }
}

solicitarAtaqueHeroi()