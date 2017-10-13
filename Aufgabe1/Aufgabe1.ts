window.addEventListener("load", ski);

function ski(): void {
    let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
    console.log(canvas);

    let crc2: CanvasRenderingContext2D = canvas.getContext("2d");
    console.log(crc2);

    crc2.fillStyle = "#A9F5F2";
    crc2.fillRect(0, 0, 800, 600);

   
    //Berge//
    crc2.beginPath();
    crc2.moveTo(0,500);
    crc2.lineTo(200,10);
    crc2.lineTo(400,600);
    crc2.fillStyle = "#585858";
    crc2.fill();
    crc2.stroke();
    
    crc2.beginPath();
    crc2.moveTo(100,600);
    crc2.lineTo(550,10);
    crc2.lineTo(800,600);
    crc2.fillStyle = "#585858";
    crc2.fill();
    crc2.closePath();
    crc2.stroke();
    
    //Skiberg//
    crc2.beginPath();
    crc2.moveTo(900, 0);
    crc2.lineTo(200, 600);
    crc2.lineTo(800,600)
    crc2.closePath();
    crc2.fillStyle = "#FFFFFF";
    crc2.fill();
    crc2.stroke();
    
    //Sonne//
    crc2.beginPath();
    crc2.arc(73,73,70,0,2* Math.PI);
    crc2.fillStyle = "#FFFF00";
    crc2.fill();
    crc2.stroke();
    
    //Bäume//
    crc2.beginPath();
    crc2.moveTo(10,600);
    crc2.lineTo(140,350);
    crc2.lineTo(250,600);
    crc2.fillStyle = "#0A2A12";
    crc2.fill();
    crc2.closePath();
    crc2.stroke();
    
    crc2.beginPath();
    crc2.moveTo(0,600);
    crc2.lineTo(80,350);
    crc2.lineTo(120,600);
    crc2.fillStyle = "#0A2A12";
    crc2.fill();
    crc2.closePath();
    crc2.stroke();
    
    crc2.beginPath();
    crc2.moveTo(120,600);
    crc2.lineTo(200,350);
    crc2.lineTo(300,600);
    crc2.fillStyle = "#0A2A12";
    crc2.fill();
    crc2.closePath();
    crc2.stroke();
    
    crc2.beginPath();
    crc2.moveTo(0,600);
    crc2.lineTo(0,350);
    crc2.lineTo(50,600);
    crc2.fillStyle = "#0A2A12";
    crc2.fill();
    crc2.closePath();
    crc2.stroke();
    
    //Skilift//
    crc2.beginPath();
    crc2.moveTo(240,450);
    crc2.lineTo(800,10);
    crc2.stroke();
    
    crc2.beginPath();
    crc2.moveTo(500,250);
    crc2.lineTo(500,400);
    crc2.stroke();
    
    crc2.fillRect(600,150,50,30)
    crc2.fillStyle = "##0101DF";
    crc2.fill();
    crc2.closePath();
    crc2.stroke();
    
      crc2.fillRect(350,350,50,30)
     crc2.fillStyle = "##0101DF";
    crc2.fill();
    crc2.stroke();
   
}