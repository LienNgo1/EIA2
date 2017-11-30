namespace Aufgabe6 {
    export class snow extends MovingObjects{
       
    
        constructor (_x: number, _y: number) {
            super(_x,_y);
        }
        
        move(): void {

            if (this.y > 600) {
                this.y = 0;
            }

            this.y += Math.random(); //y wird erweitert um random

            this.draw();
        }
        draw(): void {
            crc2.fillStyle = "#FFFFFF";
        crc2.beginPath();
        crc2.arc(this.x, this.y, 3, 0, 2 * Math.PI);
        crc2.fill();
        }
    }
}