namespace Aufgabe11 {

export interface Daten {
    element: string;
    name: string;
    preis: number;
}
    
    

export let baumdaten: Daten[] = [ //multidimensionales heterogenes Array
    {element: "Baumart", name: "", preis: 0},
    {element: "Baumart", name: "Fichte", preis: 19},
    {element: "Baumart", name: "Nordmanntanne", preis: 30},
    {element: "Baumart", name: "Kiefer", preis: 25 },
    {element: "Baumart", name: "Edeltanne", preis: 30 },
    {element: "Baumart", name: "Colorado-Tanne", preis: 50 },
    {element: "Baumart", name: "Fraser-Tanne", preis: 70 },
    {element: "Baumart", name: "Mammut-Tanne", preis: 100 }
];
   
export let halterungdaten: Daten[] = [
    {element: "halterung", name: "Standard", preis: 0},
    {element: "halterung", name: "Classic", preis: 10},
    {element: "halterung", name: "Premium", preis: 17}
];
    
    
export let schmucksetdaten: Daten[] = [
    {element: "schmucksetR", name: "Rot ohne Muster", preis: 10},
    {element: "schmucksetRM", name: "Rot ohne Muster", preis: 10},
    {element: "schmucksetG", name: "Gold ohne Muster", preis: 7},
    {element: "schmucksetGM", name: "Gold mit Muster", preis: 10},
    {element: "schmucksetS", name: "Silber ohn Muster", preis: 7},
    {element: "schmucksetSM", name: "Silber mit Muster", preis: 10}
];   
    
    
export let lichterkettendaten: Daten[] = [
    {element: "lichterketteW", name: "Lichterkette weiss", preis: 10},
    {element: "lichterketteG", name: "Lichterkette gold", preis: 7},
    {element: "lichterketteB", name: "Lichterkette bunt", preis: 7}
]; 
    
    
  export let lieferoptionen: Daten[] = [
    {element: "lieferant", name: "DHL", preis: 0},
    {element: "lieferant", name: "DHL Premium", preis: 5},
    {element: "lieferant", name: "Hermes", preis: 0},
    { element: "Lieferung", name: "Standard Lieferung", preis: 4 },
    { element: "Lieferung", name: "Morning Express Lieferung", preis: 9 }
];
       
}