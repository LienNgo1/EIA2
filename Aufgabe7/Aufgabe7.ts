/* Aufgabe 7: StudiVZ
Name: Ngo, Thi Lien
Matrikel: 256778
Datum: 30.11.2017

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.

*/

namespace StudiVZ {
    
    interface StudentData {
        // hier ist noch die richtige Datenstruktur festzulegen
        matrikel: number;
        lastname: string;
        firstname: string;
        age: number;
        gender: boolean;
        comment: string;
        
    }
    
    
   
    var students: StudentData[] = [];
    var stop: boolean = false;

    while (!stop) {
        var action: string = prompt("Datensatz anlegen (n), abfragen(a) oder Programm beenden (s)\nn,a oder s eingeben");

        switch (action) {
            case "n":
            case "N":
                var input: string = prompt("Eingabe (jeweils mit Komma getrennt) von\nMatrikelnummer, Name, Vorname, Alter, Geschlecht (0 oder 1) und Kommentar");
                alert(saveData(input));
                break;
            case "a":
            case "A":
                var matrikel: number = parseInt(prompt("Eingabe Matrikelnummer"));
                alert(queryData(matrikel));
                break;
            case "s":
            case "S":
                stop = true;
        }
    }

    function saveData(_input: string): string {
        return "Hier fehlt noch der richtige Code...";
    }
    function queryData(_matrikel: number): string {
        return "Hier fehlt noch der richtige Code...";
    }
}