const listaHerois = [
    { nome: "Rell", xp: 750 },
    { nome: "Amumu", xp: 950 },
    { nome: "Briar", xp: 1500 },
    { nome: "Miss Fortune", xp: 1950 },
    { nome: "Camille", xp: 2500 },
    { nome: "Ahri", xp: 3700 },
    { nome: "Aurora", xp: 6200 },
    { nome: "Kai'Sa", xp: 6900 },
    { nome: "Jinx", xp: 7450 },
    { nome: "Vi", xp: 7950 },
    { nome: "Caitlyn", xp: 8700 },
    { nome: "Gnar", xp: 8850 },
    { nome: "Katarina", xp: 9200 },
    { nome: "Bel'Veth", xp: 9450 },
    { nome: "Renata Glasc", xp: 10200 },
    { nome: "Ekko", xp: 11500 }
]

function determinarNivel(xp) {
    if (xp <= 1000) {
        return "Ferro"
    } else if (xp = 1001 && xp <= 2000) {
        return "Bronze"
    } else if (xp = 2001 && xp <= 5000) {
        return "Prata"
    } else if (xp = 5001 && xp <= 7000) {
        return "Ouro"
    } else if (xp = 7001 && xp <= 8000) {
        return "Platina"
    } else if (xp = 8001 && xp <= 9000) {
        return "Ascendente"
    } else if (xp = 9001 && xp <= 10000) {
        return "Imortal"
    } else {
        return "Radiante"
    }
}

const heroiUser = prompt("Olá, seja bem vindo (a) ao Classificador de Nível de Heróis! Quer saber o nível de qual herói? ")

const heroi = listaHerois.find(h => h.nome.toLowerCase() === heroiUser.toLowerCase())

if (heroi) {
    const nivel = determinarNivel(heroi.xp)
    console.log(`O Herói de nome ${heroi.nome} está no nível de ${nivel}`)
} else {
    console.log("Herói não encontrado!")
}
