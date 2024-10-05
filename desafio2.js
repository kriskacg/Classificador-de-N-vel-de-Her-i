const listaHerois = [
    { nome: "Rell", vitorias: 0, derrotas: 0 },
    { nome: "Amumu", vitorias: 0, derrotas: 0 },
    { nome: "Briar", vitorias: 0, derrotas: 0 },
    { nome: "Miss Fortune", vitorias: 0, derrotas: 0 },
    { nome: "Camille", vitorias: 0, derrotas: 0 },
    { nome: "Ahri", vitorias: 0, derrotas: 0 },
    { nome: "Aurora", vitorias: 0, derrotas: 0 },
    { nome: "Kai'Sa", vitorias: 0, derrotas: 0 },
    { nome: "Jinx", vitorias: 0, derrotas: 0 },
    { nome: "Vi", vitorias: 0, derrotas: 0 },
    { nome: "Caitlyn", vitorias: 0, derrotas: 0 },
    { nome: "Gnar", vitorias: 0, derrotas: 0 },
    { nome: "Katarina", vitorias: 0, derrotas: 0 },
    { nome: "Bel'Veth", vitorias: 0, derrotas: 0 },
    { nome: "Renata Glasc", vitorias: 0, derrotas: 0 },
    { nome: "Ekko", vitorias: 0, derrotas: 0 },
];

function determinarNivelVitorias(vitorias) {
    if (vitorias <= 10) {
        return "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        return "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        return "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        return "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        return "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        return "Lendário";
    } else {
        return "Imortal";
    }
}

function calcularSaldoRankeadas(vitorias, derrotas) {
    return vitorias - derrotas;
}

function batalhar(heroi1, heroi2, vitorias1, derrotas1, vitorias2, derrotas2) {
    heroi1.vitorias += vitorias1;
    heroi1.derrotas += derrotas1;
    heroi2.vitorias += vitorias2;
    heroi2.derrotas += derrotas2;
}

for (let i = 0; i < 10; i++) {
    let nomeHeroi1 = prompt("Informe o nome do primeiro herói para a luta:");
    let nomeHeroi2 = prompt("Informe o nome do segundo herói para a luta:");
    
    let heroi1 = listaHerois.find(h => h.nome.toLowerCase() === nomeHeroi1.toLowerCase());
    let heroi2 = listaHerois.find(h => h.nome.toLowerCase() === nomeHeroi2.toLowerCase());

    if (heroi1 && heroi2) {
        let vitorias1 = parseInt(prompt(`Quantas vitórias ${heroi1.nome} obteve?`));
        let derrotas1 = parseInt(prompt(`Quantas derrotas ${heroi1.nome} obteve?`));
        let vitorias2 = parseInt(prompt(`Quantas vitórias ${heroi2.nome} obteve?`));
        let derrotas2 = parseInt(prompt(`Quantas derrotas ${heroi2.nome} obteve?`));

        batalhar(heroi1, heroi2, vitorias1, derrotas1, vitorias2, derrotas2);
        console.log(`Batalha ${i+1}: ${heroi1.nome} vs ${heroi2.nome}`);
    } else {
        console.log("Um ou ambos os heróis não foram encontrados.");
    }
}

listaHerois.forEach(heroi => {
    let saldoVitorias = calcularSaldoRankeadas(heroi.vitorias, heroi.derrotas);
    let nivel = determinarNivelVitorias(saldoVitorias);
    console.log(`O Herói ${heroi.nome} tem de saldo de vitórias ${saldoVitorias} e está no nível de ${nivel}.`);
});