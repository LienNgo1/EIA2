namespace Aufgabe6    {
    
    export class sun extends MovingObjects { // Subklasse greift auf die Superklasse
      
    
        constructor (_x: number, _y: number) {
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