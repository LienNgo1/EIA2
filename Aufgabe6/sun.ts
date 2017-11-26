namespace skiski    {
    
    export class sun {
        x: number;
        y: number;
    
        constructor (_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
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