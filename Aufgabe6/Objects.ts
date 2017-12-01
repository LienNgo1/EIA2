namespace Aufgabe6 {
    
    export class MovingObjects { //Superklasse+Datentyp: MovingObjects
        x: number;
        y: number;
        
        constructor (_x: number, _y: number)  {
            this.x = _x;
            this.y = _y;
            
        }
        
        draw(): void {}
        move(): void {}
        
    }
}