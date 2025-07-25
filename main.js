/*
Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.
*/

const bikes = [
    {
        "id": 1,
        "nome": "Bici da corsa tradizionale",
        "peso": 7.5
    },
    {
        "id": 2,
        "nome": "Bici da corsa aerodinamica (aero)",
        "peso": 7.8
    },
    {
        "id": 3,
        "nome": "Bici da corsa da scalata (climbing bike)",
        "peso": 6.8
    },
    {
        "id": 4,
        "nome": "Bici da corsa endurance",
        "peso": 8.2
    },
    {
        "id": 5,
        "nome": "Bici da cronometro / triathlon",
        "peso": 8.2
    },
    {
        "id": 6,
        "nome": "Bici da corsa in acciaio",
        "peso": 9.5
    },
    {
        "id": 7,
        "nome": "Bici da corsa in titanio",
        "peso": 8.0
    },
    {
        "id": 8,
        "nome": "Bici da pista (track bike)",
        "peso": 7.5
    },
    {
        "id": 9,
        "nome": "Bici criterium (crit bike)",
        "peso": 7.6
    }
]
console.log(bikes);
function getMinWeight(bikearray) {
    let minWeight = bikearray[0].peso;
    for (let i = 0; i < bikearray.length; i++) {
        let thisWeight = bikearray[i].peso;
        if (thisWeight < minWeight) {
            minWeight = thisWeight;
        }
    } return minWeight;
}
const lightestWeight = getMinWeight(bikes);
console.log(`il peso minimo è ${lightestWeight}kg`);


/*
Snack2
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/

const soccerTeams = [
    {
        id: 1,
        nome: "Inter",
        falliSubiti: 0,
        puntiFatti: 0
    },
    {
        id: 2,
        nome: "Milan",
        falliSubiti: 0,
        puntiFatti: 0
    },
    {
        id: 3,
        nome: "Napoli",
        falliSubiti: 0,
        puntiFatti: 0
    },
    {
        id: 4,
        nome: "Roma",
        falliSubiti: 0,
        puntiFatti: 0
    },
    {
        id: 5,
        nome: "Lazio",
        falliSubiti: 0,
        puntiFatti: 0
    },
    {
        id: 6,
        nome: "Atalanta",
        falliSubiti: 0,
        puntiFatti: 0
    },
    {
        id: 7,
        nome: "Fiorentina",
        falliSubiti: 0,
        puntiFatti: 0
    },
    {
        id: 8,
        nome: "Torino",
        falliSubiti: 0,
        puntiFatti: 0
    },
    {
        id: 9,
        nome: "Sassuolo",
        falliSubiti: 0,
        puntiFatti: 0
    },
    {
        id: 10,
        nome: "Empoli",
        falliSubiti: 0,
        puntiFatti: 0
    }
];
console.log(soccerTeams);
