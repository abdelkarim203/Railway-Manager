const trips = [
    {
        id: 1,
        departure: "Safi",
        destination: "Youssoufia",
        departureTime: "07:30",
        arrivalTime: "08:30",
        price: 25,
        availableSeats: 50
    },
    {
        id: 2,
        departure: "Safi",
        destination: "Marrakech",
        departureTime: "08:00",
        arrivalTime: "10:30",
        price: 90,
        availableSeats: 50
    },
    {
        id: 3,
        departure: "Safi",
        destination: "Casablanca",
        departureTime: "09:00",
        arrivalTime: "13:00",
        price: 140,
        availableSeats: 50
    },
    {
        id: 4,
        departure: "Youssoufia",
        destination: "Marrakech",
        departureTime: "09:15",
        arrivalTime: "11:00",
        price: 65,
        availableSeats: 50
    },
    {
        id: 5,
        departure: "Youssoufia",
        destination: "Casablanca",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 110,
        availableSeats: 50
    },
    {
        id: 6,
        departure: "Marrakech",
        destination: "Casablanca",
        departureTime: "11:30",
        arrivalTime: "14:30",
        price: 120,
        availableSeats: 50
    },
    {
        id: 7,
        departure: "Marrakech",
        destination: "Rabat",
        departureTime: "12:00",
        arrivalTime: "16:00",
        price: 150,
        availableSeats: 50
    },
    {
        id: 8,
        departure: "Casablanca",
        destination: "Rabat",
        departureTime: "14:00",
        arrivalTime: "15:15",
        price: 40,
        availableSeats: 50
    },
    {
        id: 9,
        departure: "Casablanca",
        destination: "Kenitra",
        departureTime: "15:00",
        arrivalTime: "16:45",
        price: 55,
        availableSeats: 50
    },
    {
        id: 10,
        departure: "Rabat",
        destination: "Kenitra",
        departureTime: "16:00",
        arrivalTime: "16:45",
        price: 30,
        availableSeats: 50
    },
    {
        id: 11,
        departure: "Rabat",
        destination: "Fes",
        departureTime: "17:00",
        arrivalTime: "19:30",
        price: 95,
        availableSeats: 50
    },
    {
        id: 12,
        departure: "Kenitra",
        destination: "Fes",
        departureTime: "17:30",
        arrivalTime: "20:00",
        price: 85,
        availableSeats: 50
    },
    {
        id: 13,
        departure: "Fes",
        destination: "Meknes",
        departureTime: "08:30",
        arrivalTime: "09:20",
        price: 35,
        availableSeats: 50
    },
    {
        id: 14,
        departure: "Fes",
        destination: "Oujda",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 130,
        availableSeats: 50
    },
    {
        id: 15,
        departure: "Meknes",
        destination: "Rabat",
        departureTime: "11:00",
        arrivalTime: "13:30",
        price: 80,
        availableSeats: 50
    },
    {
        id: 16,
        departure: "Meknes",
        destination: "Casablanca",
        departureTime: "12:00",
        arrivalTime: "15:00",
        price: 105,
        availableSeats: 50
    },
    {
        id: 17,
        departure: "Casablanca",
        destination: "El Jadida",
        departureTime: "16:30",
        arrivalTime: "18:00",
        price: 50,
        availableSeats: 50
    },
    {
        id: 18,
        departure: "El Jadida",
        destination: "Safi",
        departureTime: "18:30",
        arrivalTime: "20:30",
        price: 60,
        availableSeats: 50
    },
    {
        id: 19,
        departure: "Marrakech",
        destination: "Agadir",
        departureTime: "15:00",
        arrivalTime: "18:30",
        price: 100,
        availableSeats: 50
    },
    {
        id: 20,
        departure: "Agadir",
        destination: "Safi",
        departureTime: "19:00",
        arrivalTime: "22:00",
        price: 95,
        availableSeats: 50
    }
];

let prompt = require('prompt-sync')();
const tickets = [];
let id = 0;

let choice;
do {
    console.log("=============================");
    console.log("     RAILWAY MANAGER");
    console.log("=============================");
    console.log(1 + ".Afficher les trajets");
    console.log(2 + ".Acheter un ticket");
    console.log(3 + ". Afficher les tickets");
    console.log(4 + ". Annuler un ticket");
    console.log(5 + ". Rechercher un ticket");
    console.log(6 + ". Filtrer les trajets");
    console.log(7 + ". Trier les trajets");
    console.log(0 + ". Quitter");
    choice = +prompt('enter your choice : ');

    switch (choice) {
        case 1: AffichageTrajets();
            break;
        case 2:
            achatTicket(trips);
            break;
        case 3: affichageTickets();
            break;
        case 4: annulationTicket();
            break;
        case 5: recherchTicket();
            break;
        case 6: filtrerTrajets();
            break;
        case 7: trierTrajets();
            break;
        case 0: quitter();
            break;
        default:
            console.log("Choix invalide.");
    }
} while (choice !== 0)
function AffichageTrajets() {
    console.log("=== TRAJETS DISPONIBLES ===");
    for (let i = 0; i < trips.length; i++) {
        console.log("#", trips[i].id, trips[i].departure, " ->", trips[i].destination);
        console.log("Départ : ", trips[i].departureTime);
        console.log("Arrivée : ", trips[i].arrivalTime);
        console.log("Prix : ", trips[i].price, "DH");
        console.log("Places disponibles : ", trips[i].availableSeats, '\n');
    }

}

function achatTicket(trips) {

    let nom = prompt('Nom du passager : ');
    identifiant = Number(prompt('Identifiant du trajet : '));
    let trajetTrouve = null;
    let train = "Trajet introuvable"
    for (let i = 0; i < trips.length; i++) {
        if (identifiant == trips[i].id) {
            if (trips[i].availableSeats == 0) {
                console.log("Train complet");
                return;
            }
            --trips[i].availableSeats;
            trajetTrouve = trips[i];
            train = "Trouvable"
            let counter = 0
            for (let j = 0; j < tickets.length; j++) {
                if (tickets[j].tripId === trajetTrouve.id) {
                    counter++;
                }
            }
            let seatNumber = counter + 1;
            let ticket = {
                id: ++id,
                start: trips[i].departure,
                end: trips[i].destination,
                passengerName: nom,
                tripId: trips[i].id,
                seatNumber: seatNumber,
                price: trips[i].price
            }
            tickets.push(ticket)
            console.log("ticket acheté avec succès", '\n');
            console.log("ticket #" + ticket.id);
            console.log("passager : " + ticket.passengerName);
            console.log("trajet : " + trajetTrouve.departure + " -> " + trajetTrouve.destination);
            console.log("place : " + ticket.seatNumber);
            console.log("prix : " + ticket.price + " DH");

            break;
        }
    }


    if (train == "Trajet introuvable") {
        console.log("Trajet introuvable");
    }
}

function affichageTickets() {
    if (tickets.length == 0) {
        console.log("aucun ticket enregistre")
        return;
    }
    console.log("    TICKETS   ", '\n');
    for (let k = 0; k < tickets.length; k++) {
        let trajet;
        for (let m = 0; m < trips.length; m++) {
            if (trips[m].id == tickets[k].tripId) {
                trajet = trips[m];
                break;
            }
        }
        console.log("Ticket #", tickets[k].id);
        console.log("Passager : ", tickets[k].passengerName);
        console.log("Trajet : ", trajet.departure, " -> " + trajet.destination);
        console.log("Place : ", tickets[k].seatNumber);
        console.log("Prix : ", tickets[k].price, " DH", '\n');

    }

}

function annulationTicket() {
    identifiant = Number(prompt('Identifiant du ticket : '));
    for (let i = 0; i < tickets.length; i++) {
        if (tickets[i].id === identifiant) {
            for (j=0 ; j < trips.length ; j++){
                if (tickets[i].tripId == trips[j].id){
                    ++trips[j].availableSeats
                    break;
                }
            }
            tickets.splice(i, 1)
            console.log("ticket annule avec succes");
            return;
            
        }

    }


    console.log('\n'+"ticket introvable"+'\n');
}


function recherchTicket() {
    let ticketTrouve = [];
    let nom = prompt('entrer nom du passager : ');
    if (!nom) return;
    let nomcherch = nom.toLowerCase();
    for (let i = 0; i < tickets.length; i++) {
        if (nomcherch === tickets[i].passengerName.toLowerCase()) {
            ticketTrouve.push(tickets[i]);
        }
    }
    for (let ticket of ticketTrouve) {
        let trajet;
        for (let m = 0; m < trips.length; m++) {
            if (trips[m].id === ticket.tripId) {
                trajet = trips[m];
                break;
            }
        }

        console.log("Ticket #", ticket.id);
        console.log("Passager : ", ticket.passengerName);
        console.log("Trajet : ", trajet.departure, " --> ", trajet.destination);
        console.log("Place : ", ticket.seatNumber);
        console.log("Prix : ", ticket.price, " DH", '\n');
    }
    if (ticketTrouve.length === 0) {
        console.log("Aucun ticket trouve pour ca passager.");
        return;
    }
}

function trierTrajets() {

    for (let i = 0; i < trips.length - 1; i++) {
        for (let j = 0; j < trips.length - 1 - i; j++) {
            if (trips[j].price > trips[j + 1].price) {
                let temp = trips[j]
                trips[j] = trips[j + 1]
                trips[j + 1] = temp
            }
        }
    }
    console.log(trips);

}

function filtrerTrajets() {
    let ville = prompt('entrer ville de depart : ');
    for (let i = 0; i < trips.length; i++) {
        if (ville == trips[i].departure.toLowerCase()) {

            console.log(ville + "-->" + trips[i].destination);

        }

    }
    return;

}
function quitter(){
    console.log("Au revoir ");
}