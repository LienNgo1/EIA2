var Aufgabe10;
(function (Aufgabe10) {
    Aufgabe10.angebot = [
        { kind: "Baumart", name: "Fichte", price: 0 },
        { kind: "Baumart", name: "Kiefer", price: 25 },
        { kind: "Baumart", name: "Edeltanne", price: 30 },
        { kind: "Baumart", name: "Nordmann-Tanne", price: 40 },
        { kind: "Baumart", name: "Colorado-Tanne", price: 50 },
        { kind: "Baumart", name: "Fraser-Tanne", price: 70 },
        { kind: "Baumart", name: "Mammut-Tanne", price: 100 },
        { kind: "Halterung", name: "Einfach", price: 0 },
        { kind: "Halterung", name: "Classic", price: 10 },
        { kind: "Halterung", name: "Comfort", price: 20 },
        { kind: "Beleuchtung", name: "Lichterkette Weiß", price: 10 },
        { kind: "Beleuchtung", name: "Lichterkette Blau", price: 20 },
        { kind: "Beleuchtung", name: "Lichterkette Rot", price: 20 },
        { kind: "Beleuchtung", name: "Lichterkette Bunt", price: 30 },
        { kind: "Schmuck", name: "Kugel rot", price: 0.99 },
        { kind: "Schmuck", name: "Kugel rot mit Muster", price: 0.99 },
        { kind: "Schmuck", name: "Kugel gold", price: 0.99 },
        { kind: "Schmuck", name: "Kugel gold mit Muster", price: 0.99 },
        { kind: "Schmuck", name: "Kugel silber", price: 0.50 },
        { kind: "Schmuck", name: "Kugel silber mit Muster", price: 0.50 },
        { kind: "Lieferung", name: "Standard Lieferung", price: 4 },
        { kind: "Lieferung", name: "Morning Express Lieferung", price: 9 }
    ];
    Aufgabe10.baumart = []; //speichert temp: speichert name + preis der bäume
    Aufgabe10.lichterkette = []; //speichert temp: speichert name + preis der kerzen
    for (let i = 0; i < Aufgabe10.angebot.length; i++) {
        if (Aufgabe10.angebot[i].kind == "Baumart") {
            let temp = [Aufgabe10.angebot[i].name, Aufgabe10.angebot[i].price];
            Aufgabe10.baumart.push(temp);
        }
        if (Aufgabe10.angebot[i].kind == "Beleuchtung") {
            let temp = [Aufgabe10.angebot[i].name, Aufgabe10.angebot[i].price];
            Aufgabe10.lichterkette.push(temp);
        }
    }
})(Aufgabe10 || (Aufgabe10 = {}));
//# sourceMappingURL=Infos.js.map