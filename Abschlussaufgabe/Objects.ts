/*Aufgabe: Abschlussaufgabe
Name: Ngo, Thi Lien
Matrikel: 256778
Datum: 08.02.2018

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/



namespace Wasserfall {
    
    export class MovingObjects { //Superklasse+Datentyp: MovingObjects
        x: number;
        y: number;
        
        constructor (_x: number, _y: number)  {
            this.x = _x; //parameter in der Subklasse wird aufgerufen
            this.y = _y;
            
        }
        
        draw(): void {}
        move(): void {}
        
    }
}