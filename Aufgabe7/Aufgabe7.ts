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
        let splitted: string [] = _input.split(",");
        let student: StudentData = {
            matrikel: parseInt(splitted[0]),
            lastname: splitted[1],
            firstname: splitted[2],
            age: parseInt(splitted[3]),
            gender: parseInt(splitted[4]) == 0,
            comment: splitted[5]
        };

        students.push(student);
        
        let gender: string;
        if (parseInt(splitted[4]) == 0) {
            gender = "weiblich";
        }
            else {
                gender = "männlich";
        }
                
        return "Eingegebene Daten: " + "\nMatrikelnummer: " + student.matrikel + "\nName: " + student.lastname + "\nVorname: " + student.firstname + "\nAlter: " + student.age + "\nGeschlecht: " + student.gender + "\nKommentar: " + student.comment;
    }
    
    
    function queryData(_matrikel: number): string {
        
        for (let i: number = 0; i < students.length; i++) {
            
            if (students[i].matrikel == _matrikel) {
                let gender: string = students[i].gender ? "weiblich" : "männlich";
                return "Student: " + "\nMatrikelnummer: " + students[i].matrikel + "\nName: " + students[i].lastname + "\nVorname: " + students[i].firstname + "\nAlter: " + students[i].age + "\nGeschlecht: " + students[i].gender + "\nKommentar: " + students[i].comment;
            }
            
                else {
                return "Die Matrikelnummer ist nicht gespeichert";
                }
        }

        return;
    }
}
    
