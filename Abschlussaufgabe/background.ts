namespace Wasserfall {
    export class Background {
        x: number;
        y: number;

        constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
        }



        drawBackground(x: number, y: number): void {

            
             //Himmel malen
                crc2.fillStyle = "#CECEF6";
                crc2.fillRect(0, 0, 800, 40);
                crc2.fillStyle = "#D8CEF6";
                crc2.fillRect(0, 40, 800, 60);
                crc2.fillStyle = "#E3CEF6";
                crc2.fillRect(0, 60, 800, 100);
                crc2.fillStyle = "#ECCEF5";
                crc2.fillRect(0, 100, 800, 600);
        
            //Mond malen
                crc2.beginPath();
                crc2.arc(73, 73, 60, 0, 2 * Math.PI);
                crc2.fillStyle = "#A4A4A4";
                crc2.fill();
                crc2.stroke();
            
                crc2.beginPath();
                crc2.arc(63, 33, 12, 0, 3 * Math.PI);
                crc2.fillStyle = "#848484";
                crc2.fill();
                crc2.stroke();
            
                crc2.beginPath();
                crc2.arc(90, 103, 10, 0, 2 * Math.PI);
                crc2.fillStyle = "#848484";
                crc2.fill();
                crc2.stroke();
            
                crc2.beginPath();
                crc2.arc(73, 103, 15, 0, 2 * Math.PI);
                crc2.fillStyle = "#848484";
                crc2.fill();
                crc2.stroke();
                
                crc2.beginPath();
                crc2.arc(43, 64, 22, 0, 2 * Math.PI);
                crc2.fillStyle = "#848484";
                crc2.fill();
                crc2.stroke();
            
            //Berg zeichnen
                
                crc2.beginPath();
                crc2.moveTo(0,300);
                crc2.lineTo(250,150);
            
                crc2.fillStyle="#A4A4A4";
                crc2.fill();
                crc2.stroke();
            

        }


    }

}