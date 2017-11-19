namespace skiski {
    export class skier{
        x: number;
        y: number;
        dx: number;
        dy: number;
        color: string;
        
        constructor(_x: number, _y: number, _dx: number, _dy: number,_color: string){
            this.x = _x;
            this.y = _y;
            this.dx = _dx;
            this.dy = _dy;
            this.color = _color;
            
            }
        
        move(): void {

            if (this.x > 800) {
                this.x = 0;
            }

            this.x +=  this.dx;
            this.y +=  this.dy;
         

          
           // this.color =  "hsl(" + Math.random() * 360 + ", 45%, 65%)";
            this.draw();
        }
        
        draw(): void{
            crc2.beginPath();
        crc2.fillStyle = this.color; // Farbe oben zugreifen
        crc2.fillRect(this.x, this.y, 5, - 40);
        crc2.beginPath();
        crc2.arc(this.x + 3, this.y - 50, 10, 0, 10 * Math.PI);
        crc2.fillStyle = this.color;
        crc2.fill();
        crc2.stroke();
        crc2.moveTo(this.x + 20, this.y - 10);
        crc2.lineTo(this.x - 20, this.y + 10)
        crc2.fill;
        crc2.stroke();
        }
       
    }
    }