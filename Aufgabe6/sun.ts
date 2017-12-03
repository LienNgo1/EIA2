namespace Aufgabe6    {
    
    export class sun extends MovingObjects { // Subklasse greift auf die Superklasse //Subklasse (sun) ist automatisch auch eine Instanz der Superklasse (Moving objects)
                                             //extends = Vererbung
      
    
        constructor (_x: number, _y: number) { //constructor wird immer benögtig - mit ihm wird das schlüsselwort eine nue instanz des objects erstellen
            super(_x,_y);
        
        }
     move(): void {
      
            this.draw();
            }
      draw(): void{
          crc2.beginPath();
        crc2.arc(73, 73, 70, 0, 2 * Math.PI);
        crc2.fillStyle = "#FFFF00";
        crc2.fill();
        crc2.stroke();
          }
}
      }