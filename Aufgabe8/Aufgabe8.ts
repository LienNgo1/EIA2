namespace Aufgabe8 {
    window.addEventListener("load", init);

    
    function init(): void {
        //var Zahl: string = prompt("Bitte gewünschte Anzahl zwischen 10 und 100 angeben"); 
        
        //var ZahlNumb: number = parseInt(Zahl); //die Funktion ParseInt wandelt einen String in eine Zahl um
   
        let input: string = prompt("Gib eine Zahl zwischen 10 und 100 ein."); //input Variable ruft prompt auf
        if (isNaN(parseInt(input)) || parseInt(input) < 10 || parseInt(input) > 100) { //Prüft ob die Eingabe richtig ist
            alert("Deine Eingabe ist falsch.");
            init(); //Rekursion
        } 
        
        else { //wenn Zahl zwischen 10 und 100 dann for schleife
            for (let i: number = 0; i < parseInt(input); i++) { 
                drawRect(Math.random() * window.innerWidth - 40, Math.random() * window.innerHeight - 40, Math.random() * 360);
            }
        }

    }
    
 //Funktion Kästchen Zeichnen
    function drawRect (_x: number, _y: number, _color: number): void {

        let div: HTMLDivElement = document.createElement("div"); //div erstellen
        
        div.style.width = "40px"; //Returns a String of an object
        div.style.height = "40px";
        div.style.marginLeft = _x + "px"; //_x in einen String umwandeln, da h.style nur strings entgegen nehmen kann
        div.style.marginTop = _y + "px";
        div.style.backgroundColor = "hsl(" + _color + ", 100%, 50%)"; //zufällige Farbe
        document.body.appendChild(div); //html ELement in den Code einfügen lassen
    }
}

