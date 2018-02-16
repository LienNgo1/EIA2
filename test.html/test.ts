
namespace Abschluss {
    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;
    let saveBG: ImageData;
    export let confettis: confetti[] = [];
    let ToothOut: number = 0;
    let TeethHit: number = 0;
    let confettiN: number = Math.floor(Math.random() * (1000 - 300) + 300);
    let Eye: number = 0;
    let mouth: number = 0;
    let nose: number = 0;
    let canvas: HTMLCanvasElement;


    function init(_event: Event): void {

        console.log(confettiN + " Konfettis berechnet");


        canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);


        crc2 = canvas.getContext("2d");
        console.log(crc2);
        saveBG = crc2.getImageData(0, 0, canvas.width, canvas.height);
        drawFace();
        alert("Oh nein, der kleine Timmy verliert einen Zahn! Er hat den Zahn schon an die Tür geschnürrt, er traut sich aber nicht, sie zuzuschlagen. Kannst du das für ihn Übernehmen?");
        document.getElementById("DoorHitBox").addEventListener("click", Door)
        document.getElementById("DoorHitBox").addEventListener("touchstart", Door)


        document.getElementById("TeethHitBox").addEventListener("click", teeth)
        document.getElementById("TeethHitBox").addEventListener("touchstart", teeth)

        document.getElementById("EyeLeft").addEventListener("click", Auge)
        document.getElementById("EyeLeft").addEventListener("touchstart", Auge)
        document.getElementById("EyeRight").addEventListener("click", Auge)
        document.getElementById("EyeRight").addEventListener("touchstart", Auge)

        document.getElementById("Mouth").addEventListener("click", mouthClick);
        document.getElementById("Mouth").addEventListener("touchstart", mouthClick);


        document.getElementById("Ear").addEventListener("click", EarClick)
        document.getElementById("Ear").addEventListener("touchstart", EarClick)


        document.getElementById("Nose").addEventListener("click", noseClick)
        document.getElementById("Nose").addEventListener("touchstart", noseClick)
    }
    function Door(): void {
        ToothOut++;
        if (ToothOut == 1)
        { clicked(); }
        else { }
    }

    function teeth(): void {
        if (ToothOut != 1) {
            TeethHit++;
            if (TeethHit == 10) {
                crc2.putImageData(saveBG, 0, 0);
                drawTeethOutHit();
                saveBG = crc2.getImageData(0, 0, canvas.width, canvas.height);
                generateConfetti();
                animate();
                ToothOut++;
                alert("BIST DU WAHNSINNIG? Das war eine grandiose Idee! Einfach den Zahn abzuschlagen. Woaw. Der kleine Timmy hat jetzt zwar ganz dolle schmerzen, aber er wird es überleben!");
            }
        }
    }

    function Auge(): void {
        if (Eye == 0) {
            alert("Whoah, man drückt einem doch nicht einfach so im Auge rum!");
            Eye++;
        }
        else {
            Eye++;
            if (Eye == 5) {
                crc2.putImageData(saveBG, 0, 0);
                drawTeethOutHit();
                saveBG = crc2.getImageData(0, 0, canvas.width, canvas.height);
                generateConfetti();
                animate();
                ToothOut++;
                alert("Timmy wollte deine Maus wegschlagen, hat sich dabei aber den Zahn weggeschlagen. Das ist wohl auch eine Möglichkeit, denke ich...");
            }
        }
    }

    function mouthClick(): void {
        if (mouth == 0) {
            mouth++;
            alert("Deine Maus ist jetzt irgendwie echt feucht von Timmys Speichel.... EKELHAFT");
        }
    }

    function EarClick(): void {
        if (nose == 1 && mouth == 1) {
            alert("Was ist schlimmer als Speichel und Popel in dem Ohr? Richtig! Beides zusammen. Du bist das letzte...");
            nose++;
            mouth++;
            crc2.putImageData(saveBG, 0, 0);
            drawTeethOutHit();
            saveBG = crc2.getImageData(0, 0, canvas.width, canvas.height);
            generateConfetti();
            animate();
            ToothOut++;
            alert("Beim Versuch das Zeug aus seinem Ohr zu holen musste er niesen. Dabei ist ihm der Zahn rausgefallen.");

        }
        if (mouth == 1) {
            mouth++;
            alert("Wow.... Du hast ihm jetzt nicht wirklich seinen Speichel in sein Ort getan, oder? Okay, das ist ekelhaft. Schäm dich, ernsthaft. Warum geht sowas überhaupt? Wer programmiert so ein scheiß?");
        }
        if (nose == 1) {
            alert("Seine Popel in sein Ohr? Alter....")
            nose++;
        }
    }

    function noseClick(): void {
        if (nose == 0) {
            alert("Du popelst jetzt in seiner Nase? Boah... Ich kann nicht hinsehen...")
            nose++;
        }
    }

    function clicked() {
        crc2.putImageData(saveBG, 0, 0);
        drawGoneTeeth();
        saveBG = crc2.getImageData(0, 0, canvas.width, canvas.height);
        generateConfetti();
        console.log(confettis);
        alert("JAAA, du hast es geschafft! Timmy freut sich jetzt. Aber bist du dir sicher, dass das die einzige Möglichkeit ist, den Zahn zu entfernen? Lade die Seite neu und versuche mal etwas rum!")
        animate();
        console.log("Animate startet");
    }

    function generateConfetti() {
        for (let i: number = 0; i < confettiN; i++) {
            let color: string = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ","
                + Math.floor(Math.random() * 0) + ")";
            let x: number = Math.floor(Math.random() * (1551));
            let y: number = Math.floor(Math.random() * (-700));
            let c: confetti = new confetti(x, y, color);
            confettis.push(c)
        }
    }

    function animate() {
        crc2.putImageData(saveBG, 0, 0);

        for (let i: number = 0; i < confettis.length; i++) { // Zufällige Bewegung der Konfetti
            let c: confetti = confettis[i];
            c.update();
        }
        window.setTimeout(animate, 20);
    }

    function drawFace(): void {

        //Gesicht
        crc2.save();
        crc2.beginPath();
        crc2.moveTo(309.7, 892.3);
        crc2.bezierCurveTo(309.7, 892.3, 249.2, 872.0, 246.9, 869.1);
        crc2.bezierCurveTo(240.3, 860.8, 108.0, 784.8, 98.1, 738.5);
        crc2.bezierCurveTo(83.2, 695.5, 65.0, 637.7, 70.0, 636.0);
        crc2.bezierCurveTo(63.4, 636.0, 45.2, 631.0, 43.5, 617.8);
        crc2.bezierCurveTo(41.9, 604.6, 43.5, 607.9, 43.5, 607.9);
        crc2.bezierCurveTo(43.5, 607.9, 10.5, 545.1, 10.5, 505.4);
        crc2.bezierCurveTo(10.5, 505.4, -2.8, 464.1, 0.5, 462.4);
        crc2.bezierCurveTo(3.8, 460.8, 38.6, 472.3, 35.2, 477.3);
        crc2.bezierCurveTo(31.9, 482.2, 40.2, 267.3, 46.8, 262.4);
        crc2.bezierCurveTo(53.4, 257.4, 137.8, 90.4, 164.2, 93.7);
        crc2.bezierCurveTo(190.7, 97.0, 408.9, 105.3, 422.1, 108.6);
        crc2.bezierCurveTo(435.3, 111.9, 559.3, 196.2, 559.3, 196.2);
        crc2.lineTo(625.5, 358.3);
        crc2.lineTo(608.9, 475.6);
        crc2.lineTo(643.7, 444.2);
        crc2.bezierCurveTo(643.7, 444.2, 670.1, 450.8, 655.2, 497.1);
        crc2.bezierCurveTo(650.3, 508.7, 627.1, 593.0, 627.1, 593.0);
        crc2.bezierCurveTo(627.1, 593.0, 587.4, 675.7, 572.6, 657.5);
        crc2.bezierCurveTo(572.6, 657.5, 546.1, 778.2, 437.0, 841.0);
        crc2.bezierCurveTo(420.5, 849.3, 377.5, 898.9, 329.5, 892.3);
        crc2.bezierCurveTo(318.0, 892.3, 309.7, 892.3, 309.7, 892.3);
        crc2.closePath();
        crc2.fillStyle = "rgb(253, 212, 182)";
        crc2.fill();

        //Linkes Auge
        crc2.beginPath();
        crc2.moveTo(103.9, 436.8);
        crc2.lineTo(125.4, 463.2);
        crc2.lineTo(248.2, 453.2);
        crc2.lineTo(272.5, 421.9);
        crc2.lineTo(198.1, 400.4);
        crc2.lineTo(103.9, 436.8);
        crc2.closePath();
        crc2.fillStyle = "rgb(224, 187, 165)";
        crc2.fill();

        crc2.beginPath();
        crc2.moveTo(229.5, 473.2);
        crc2.bezierCurveTo(229.5, 474.8, 184.9, 496.3, 148.5, 464.9);
        crc2.bezierCurveTo(144.7, 458.9, 168.3, 440.1, 197.4, 439.2);
        crc2.bezierCurveTo(227.9, 438.4, 270.8, 471.5, 229.5, 473.2);
        crc2.closePath();
        crc2.fillStyle = "rgb(223, 223, 223)";
        crc2.fill();



        crc2.save();
        crc2.beginPath();
        crc2.moveTo(222.1, 460.8);
        crc2.bezierCurveTo(222.1, 473.5, 211.7, 483.9, 198.9, 483.9);
        crc2.bezierCurveTo(186.1, 483.9, 175.8, 473.5, 175.8, 460.8);
        crc2.bezierCurveTo(175.8, 448.0, 186.1, 437.6, 198.9, 437.6);
        crc2.bezierCurveTo(211.7, 437.6, 222.1, 448.0, 222.1, 460.8);
        crc2.closePath();
        crc2.fillStyle = "rgb(9, 197, 40)";
        crc2.fill();


        crc2.beginPath();
        crc2.moveTo(237.8, 474.8);
        crc2.lineTo(251.0, 473.2);
        crc2.bezierCurveTo(251.0, 473.2, 254.3, 431.8, 216.3, 430.2);
        crc2.bezierCurveTo(178.3, 428.5, 135.3, 436.8, 125.4, 463.2);
        crc2.bezierCurveTo(128.7, 471.5, 135.3, 469.8, 136.9, 469.8);
        crc2.bezierCurveTo(138.6, 469.8, 188.2, 498.0, 221.2, 481.4);
        crc2.bezierCurveTo(222.9, 478.1, 193.1, 489.7, 148.5, 464.9);
        crc2.bezierCurveTo(148.5, 464.9, 168.3, 433.5, 209.7, 440.1);
        crc2.bezierCurveTo(267.5, 461.6, 239.4, 473.2, 237.8, 474.8);
        crc2.closePath();
        crc2.fillStyle = "rgb(215, 175, 131)";
        crc2.fill();


        crc2.beginPath();
        crc2.moveTo(188.2, 460.8);
        crc2.bezierCurveTo(188.2, 466.7, 193.0, 471.5, 198.9, 471.5);
        crc2.bezierCurveTo(204.9, 471.5, 209.7, 466.7, 209.7, 460.8);
        crc2.bezierCurveTo(209.7, 454.8, 204.9, 450.0, 198.9, 450.0);
        crc2.bezierCurveTo(193.0, 450.0, 188.2, 454.8, 188.2, 460.8);
        crc2.closePath();
        crc2.fillStyle = "rgb(0, 0, 0)";
        crc2.fill();


        crc2.beginPath();
        crc2.moveTo(202.2, 445.9);
        crc2.bezierCurveTo(202.2, 445.9, 215.5, 445.9, 212.2, 452.5);
        crc2.bezierCurveTo(189.0, 455.8, 202.2, 445.9, 202.2, 445.9);
        crc2.closePath();
        crc2.fillStyle = "rgb(218, 218, 218)";
        crc2.fill();


        crc2.beginPath();
        crc2.moveTo(194.0, 459.1);
        crc2.bezierCurveTo(194.0, 460.9, 192.1, 462.4, 189.8, 462.4);
        crc2.bezierCurveTo(187.5, 462.4, 185.7, 460.9, 185.7, 459.1);
        crc2.bezierCurveTo(185.7, 457.3, 187.5, 455.8, 189.8, 455.8);
        crc2.bezierCurveTo(192.1, 455.8, 194.0, 457.3, 194.0, 459.1);
        crc2.closePath();
        crc2.fillStyle = "rgb(205, 205, 205)";
        crc2.fill();

        // Nase
        crc2.restore();
        crc2.beginPath();
        crc2.moveTo(256.0, 603.8);
        crc2.bezierCurveTo(256.0, 603.8, 279.1, 592.2, 289.9, 610.6);
        crc2.bezierCurveTo(290.7, 613.7, 259.3, 613.7, 259.3, 610.4);
        crc2.bezierCurveTo(259.3, 607.1, 256.0, 603.8, 256.0, 603.8);
        crc2.closePath();
        crc2.fillStyle = "rgb(55, 51, 9)";
        crc2.fill();
        crc2.beginPath();
        crc2.moveTo(372.6, 603.8);
        crc2.bezierCurveTo(372.6, 603.8, 349.4, 592.2, 338.6, 610.6);
        crc2.bezierCurveTo(337.9, 613.7, 369.3, 613.7, 369.3, 610.4);
        crc2.bezierCurveTo(369.3, 607.1, 372.6, 603.8, 372.6, 603.8);
        crc2.closePath();
        crc2.fill();

        //Nasenschatten
        crc2.beginPath();
        crc2.moveTo(251.0, 612.0);
        crc2.lineTo(209.7, 691.4);
        crc2.lineTo(431.2, 691.4);
        crc2.lineTo(381.4, 607.9);
        crc2.lineTo(315.5, 620.3);
        crc2.lineTo(251.0, 612.0);
        crc2.closePath();
        crc2.fillStyle = "rgb(224, 187, 164)";
        crc2.fill();

        // Lippe
        crc2.beginPath();
        crc2.moveTo(320.4, 671.5);
        crc2.bezierCurveTo(320.4, 671.5, 284.1, 668.2, 277.5, 664.9);
        crc2.bezierCurveTo(272.1, 662.2, 232.6, 677.1, 216.4, 686.3);
        crc2.bezierCurveTo(212.8, 688.4, 210.3, 690.2, 209.7, 691.4);
        crc2.bezierCurveTo(206.4, 698.0, 252.7, 741.0, 320.4, 747.6);
        crc2.fillStyle = "rgb(218, 109, 109)";
        crc2.fill();
        crc2.beginPath();
        crc2.moveTo(320.3, 671.5);
        crc2.bezierCurveTo(320.3, 671.5, 356.6, 668.2, 363.3, 664.9);
        crc2.bezierCurveTo(369.9, 661.6, 427.7, 684.8, 431.0, 691.4);
        crc2.bezierCurveTo(434.3, 698.0, 388.1, 741.0, 320.3, 747.6);
        crc2.fill();

        // Mundschatten
        crc2.beginPath();
        crc2.moveTo(237.7, 681.5);
        crc2.bezierCurveTo(237.7, 681.5, 254.5, 680.9, 275.8, 683.6);
        crc2.bezierCurveTo(290.0, 685.3, 322.1, 694.7, 322.1, 694.7);
        crc2.bezierCurveTo(322.1, 694.7, 346.1, 687.1, 358.5, 685.6);
        crc2.bezierCurveTo(379.2, 683.0, 396.4, 681.5, 396.4, 681.5);
        crc2.bezierCurveTo(396.4, 681.5, 423.2, 681.5, 421.2, 691.7);
        crc2.bezierCurveTo(307.8, 783.2, 233.6, 699.8, 227.4, 693.7);
        crc2.bezierCurveTo(217.1, 683.6, 237.7, 681.5, 237.7, 681.5);
        crc2.closePath();
        crc2.fillStyle = "rgb(0, 0, 0)";
        crc2.fill();

        // Zähne
        crc2.beginPath();
        crc2.moveTo(237.7, 681.5);
        crc2.bezierCurveTo(237.7, 681.5, 251.2, 677.7, 272.5, 679.8);
        crc2.bezierCurveTo(286.7, 681.2, 300.6, 689.7, 320.4, 689.7);
        crc2.bezierCurveTo(340.3, 689.7, 347.8, 679.4, 360.1, 678.2);
        crc2.bezierCurveTo(380.8, 676.1, 396.4, 681.5, 396.4, 681.5);
        crc2.bezierCurveTo(396.4, 681.5, 423.2, 681.5, 421.2, 689.7);
        crc2.bezierCurveTo(382.7, 715.0, 348.8, 720.6, 320.4, 721.1);
        crc2.bezierCurveTo(265.3, 722.1, 231.5, 694.7, 227.4, 691.4);
        crc2.bezierCurveTo(217.1, 683.1, 237.7, 681.5, 237.7, 681.5);
        crc2.closePath();
        crc2.fillStyle = "rgb(255, 255, 255)";
        crc2.fill();



        // Rechts Auge
        // ebene1/Pfad
        crc2.beginPath();
        crc2.moveTo(510.6, 436.8);
        crc2.lineTo(489.1, 463.2);
        crc2.lineTo(366.2, 453.2);
        crc2.lineTo(341.9, 421.9);
        crc2.lineTo(416.3, 400.4);
        crc2.lineTo(510.6, 436.8);
        crc2.closePath();
        crc2.fillStyle = "rgb(224, 187, 165)";
        crc2.fill();

        crc2.beginPath();
        crc2.moveTo(385.0, 473.2);
        crc2.bezierCurveTo(385.0, 474.8, 429.6, 496.3, 466.0, 464.9);
        crc2.bezierCurveTo(469.8, 458.9, 446.2, 440.1, 417.1, 439.2);
        crc2.bezierCurveTo(386.6, 438.4, 343.6, 471.5, 385.0, 473.2);
        crc2.closePath();
        crc2.fillStyle = "rgb(223, 223, 223)";
        crc2.fill();


        crc2.save();
        crc2.beginPath();
        crc2.moveTo(392.4, 460.8);
        crc2.bezierCurveTo(392.4, 473.5, 402.8, 483.9, 415.6, 483.9);
        crc2.bezierCurveTo(428.4, 483.9, 438.7, 473.5, 438.7, 460.8);
        crc2.bezierCurveTo(438.7, 448.0, 428.4, 437.6, 415.6, 437.6);
        crc2.bezierCurveTo(402.8, 437.6, 392.4, 448.0, 392.4, 460.8);
        crc2.closePath();
        crc2.fillStyle = "rgb(9, 197, 40)";
        crc2.fill();


        crc2.beginPath();
        crc2.moveTo(376.7, 474.8);
        crc2.lineTo(363.5, 473.2);
        crc2.bezierCurveTo(363.5, 473.2, 360.2, 431.8, 398.2, 430.2);
        crc2.bezierCurveTo(436.2, 428.5, 479.2, 436.8, 489.1, 463.2);
        crc2.bezierCurveTo(485.8, 471.5, 479.2, 469.8, 477.6, 469.8);
        crc2.bezierCurveTo(475.9, 469.8, 426.3, 498.0, 393.3, 481.4);
        crc2.bezierCurveTo(391.6, 478.1, 421.4, 489.7, 466.0, 464.9);
        crc2.bezierCurveTo(466.0, 464.9, 446.2, 433.5, 404.8, 440.1);
        crc2.bezierCurveTo(347.0, 461.6, 375.1, 473.2, 376.7, 474.8);
        crc2.closePath();
        crc2.fillStyle = "rgb(215, 175, 131)";
        crc2.fill();


        crc2.beginPath();
        crc2.moveTo(426.3, 460.8);
        crc2.bezierCurveTo(426.3, 466.7, 421.5, 471.5, 415.6, 471.5);
        crc2.bezierCurveTo(409.6, 471.5, 404.8, 466.7, 404.8, 460.8);
        crc2.bezierCurveTo(404.8, 454.8, 409.6, 450.0, 415.6, 450.0);
        crc2.bezierCurveTo(421.5, 450.0, 426.3, 454.8, 426.3, 460.8);
        crc2.closePath();
        crc2.fillStyle = "rgb(0, 0, 0)";
        crc2.fill();


        crc2.beginPath();
        crc2.moveTo(420.5, 445.9);
        crc2.bezierCurveTo(420.5, 445.9, 433.7, 445.9, 430.4, 452.5);
        crc2.bezierCurveTo(407.2, 455.8, 420.5, 445.9, 420.5, 445.9);
        crc2.closePath();
        crc2.fillStyle = "rgb(218, 218, 218)";
        crc2.fill();


        crc2.beginPath();
        crc2.moveTo(401.5, 459.9);
        crc2.bezierCurveTo(401.5, 461.8, 403.3, 463.2, 405.6, 463.2);
        crc2.bezierCurveTo(407.9, 463.2, 409.7, 461.8, 409.7, 459.9);
        crc2.bezierCurveTo(409.7, 458.1, 407.9, 456.6, 405.6, 456.6);
        crc2.bezierCurveTo(403.3, 456.6, 401.5, 458.1, 401.5, 459.9);
        crc2.closePath();
        crc2.fillStyle = "rgb(205, 205, 205)";
        crc2.fill();

        //Haaaaarrreeeee      
        crc2.restore();
        crc2.beginPath();
        crc2.moveTo(6.3, 463.2);
        crc2.bezierCurveTo(9.6, 228.5, -15.2, 164.0, 113.8, 71.4);
        crc2.bezierCurveTo(183.2, 64.8, 221.2, -52.6, 497.3, 45.0);
        crc2.bezierCurveTo(578.4, 102.8, 687.5, 116.0, 642.8, 445.0);
        crc2.lineTo(609.8, 476.5);
        crc2.bezierCurveTo(609.8, 476.5, 617.9, 204.4, 338.6, 211.9);
        crc2.bezierCurveTo(31.1, 220.2, 36.1, 466.5, 34.4, 474.8);
        crc2.bezierCurveTo(21.2, 464.9, 6.3, 463.2, 6.3, 463.2);
        crc2.closePath();
        crc2.fillStyle = "rgb(136, 110, 28)";
        crc2.fill();


        crc2.beginPath();
        crc2.moveTo(168.3, 96.2);
        crc2.bezierCurveTo(168.3, 96.2, 85.7, 36.7, 31.1, 69.8);
        crc2.bezierCurveTo(93.0, 65.8, 86.1, 85.6, 155.1, 102.8);
        crc2.bezierCurveTo(168.3, 106.1, 168.3, 96.2, 168.3, 96.2);
        crc2.closePath();
        crc2.fill();


        crc2.beginPath();
        crc2.moveTo(138.6, 92.9);
        crc2.lineTo(21.2, 124.3);
        crc2.bezierCurveTo(21.2, 124.3, 110.5, 46.6, 148.5, 66.4);
        crc2.bezierCurveTo(186.5, 86.3, 138.6, 92.9, 138.6, 92.9);
        crc2.closePath();
        crc2.fill();


        crc2.beginPath();
        crc2.moveTo(189.8, 51.6);
        crc2.bezierCurveTo(189.8, 51.6, 118.7, 54.9, 103.9, 59.8);
        crc2.bezierCurveTo(89.0, 64.8, 192.0, 32.3, 208.0, 45.0);
        crc2.bezierCurveTo(224.0, 57.6, 189.8, 54.9, 189.8, 54.9);
        crc2.lineTo(189.8, 51.6);
        crc2.closePath();
        crc2.fill();


        crc2.beginPath();
        crc2.moveTo(196.4, 36.7);
        crc2.bezierCurveTo(196.4, 36.7, 79.1, 56.5, 72.4, 54.9);
        crc2.bezierCurveTo(64.4, 52.9, 217.9, -6.3, 244.4, 23.5);
        crc2.bezierCurveTo(270.8, 53.2, 196.4, 36.7, 196.4, 36.7);
        crc2.closePath();
        crc2.fill();


        crc2.beginPath();
        crc2.moveTo(295.6, 21.8);
        crc2.bezierCurveTo(295.6, 21.8, 133.6, 28.4, 100.6, 15.2);
        crc2.bezierCurveTo(308.9, -19.5, 330.4, 15.2, 333.7, 21.8);
        crc2.bezierCurveTo(338.6, 48.3, 295.6, 21.8, 295.6, 21.8);
        crc2.closePath();
        crc2.fill();


        crc2.beginPath();
        crc2.moveTo(399.8, 48.3);
        crc2.lineTo(269.2, 14.9);
        crc2.bezierCurveTo(269.2, 14.9, 475.8, -1.3, 456.0, 48.3);
        crc2.bezierCurveTo(436.2, 97.9, 399.8, 48.3, 399.8, 48.3);
        crc2.closePath();
        crc2.fill();


        crc2.beginPath();
        crc2.moveTo(247.7, 590.5);
        crc2.bezierCurveTo(247.7, 590.5, 256.0, 562.4, 260.9, 559.1);
        crc2.bezierCurveTo(265.9, 555.8, 298.9, 549.2, 292.3, 476.5);
        crc2.bezierCurveTo(291.2, 464.5, 335.3, 473.2, 335.3, 473.2);
        crc2.bezierCurveTo(335.3, 473.2, 344.0, 553.4, 360.1, 557.5);
        crc2.bezierCurveTo(386.6, 564.1, 381.6, 590.5, 381.6, 590.5);
        crc2.fillStyle = "rgb(253, 212, 182)";
        crc2.fill();

        //Augenbrauen
        crc2.beginPath();
        crc2.moveTo(103.9, 436.8);
        crc2.lineTo(118.7, 445.0);
        crc2.bezierCurveTo(118.7, 445.0, 214.6, 378.9, 256.0, 428.5);
        crc2.bezierCurveTo(272.5, 421.9, 272.5, 421.9, 272.5, 421.9);
        crc2.bezierCurveTo(272.5, 421.9, 219.6, 349.2, 103.9, 436.8);
        crc2.closePath();
        crc2.fillStyle = "rgb(136, 110, 28)";
        crc2.fill();


        crc2.beginPath();
        crc2.moveTo(510.6, 436.8);
        crc2.lineTo(495.7, 445.0);
        crc2.bezierCurveTo(495.7, 445.0, 399.8, 378.9, 358.5, 428.5);
        crc2.bezierCurveTo(341.9, 421.9, 341.9, 421.9, 341.9, 421.9);
        crc2.bezierCurveTo(341.9, 421.9, 394.8, 349.2, 510.6, 436.8);
        crc2.closePath();
        crc2.fill();

        //GesichtSchatten
        crc2.beginPath();
        crc2.moveTo(505.1, 785.3);
        crc2.bezierCurveTo(523.8, 762.0, 548.2, 743.9, 559.8, 696.0);
        crc2.bezierCurveTo(616.8, 537.0, 630.8, 438.0, 571.8, 329.0);
        crc2.bezierCurveTo(500.8, 196.0, 346.8, 212.0, 346.8, 212.0);
        crc2.bezierCurveTo(346.8, 212.0, 717.8, 285.0, 505.1, 785.3);
        crc2.closePath();
        crc2.fillStyle = "rgb(224, 188, 166)";
        crc2.fill();


        crc2.beginPath();
        crc2.moveTo(583.0, 625.3);
        crc2.bezierCurveTo(583.0, 625.3, 614.7, 638.5, 646.1, 483.1);
        crc2.bezierCurveTo(652.9, 449.7, 608.9, 500.5, 608.9, 500.5);
        crc2.lineTo(583.0, 625.3);
        crc2.closePath();
        crc2.fill();


        crc2.beginPath();
        crc2.moveTo(592.0, 581.5);
        crc2.bezierCurveTo(592.0, 581.5, 629.6, 532.7, 626.3, 512.8);
        crc2.bezierCurveTo(623.0, 493.0, 605.7, 515.5, 605.7, 515.5);
        crc2.lineTo(592.0, 581.5);
        crc2.closePath();
        crc2.fillStyle = "rgb(238, 200, 174)";
        crc2.fill();


        crc2.beginPath();
        crc2.moveTo(65.8, 613.7);
        crc2.bezierCurveTo(65.8, 613.7, 3.0, 519.4, 12.9, 481.4);
        crc2.bezierCurveTo(15.3, 472.4, 36.1, 486.4, 36.1, 486.4);
        crc2.lineTo(65.8, 613.7);
        crc2.closePath();
        crc2.fillStyle = "rgb(224, 187, 165)";
        crc2.fill();


        crc2.beginPath();
        crc2.moveTo(54.3, 564.1);
        crc2.bezierCurveTo(54.3, 564.1, 27.8, 522.8, 31.1, 517.8);
        crc2.bezierCurveTo(34.4, 512.8, 41.0, 509.5, 41.0, 509.5);
        crc2.lineTo(54.3, 564.1);
        crc2.closePath();
        crc2.fillStyle = "rgb(238, 200, 174)";
        crc2.fill();


        crc2.beginPath();
        crc2.moveTo(1550.4, 771.1);
        crc2.lineTo(1140.9, 771.1);
        crc2.lineTo(1140.9, 173.5);
        crc2.lineTo(1550.4, 173.5);
        crc2.lineTo(1550.4, 771.1);
        crc2.closePath();
        crc2.fillStyle = "rgb(155, 255, 242)";
        crc2.fill();
        crc2.strokeStyle = "rgb(28, 28, 26)";
        crc2.lineCap = "round";
        crc2.stroke();


        crc2.beginPath();
        crc2.moveTo(1536.9, 766.2);
        crc2.lineTo(1151.2, 766.2);
        crc2.lineTo(1151.2, 187.7);
        crc2.lineTo(1536.9, 187.7);
        crc2.lineTo(1536.9, 766.2);
        crc2.closePath();
        crc2.fillStyle = "rgb(241, 241, 241)";
        crc2.fill();
        crc2.stroke();


        crc2.beginPath();
        crc2.moveTo(1151.3, 187.5);
        crc2.lineTo(1356.3, 112.5);
        crc2.lineTo(1356.3, 810.5);
        crc2.lineTo(1151.3, 766.5);
        crc2.lineTo(1151.3, 187.5);
        crc2.closePath();
        crc2.fillStyle = "rgb(155, 241, 229)";
        crc2.fill();
        crc2.stroke();


        crc2.beginPath();
        crc2.moveTo(1315.8, 464.5);
        crc2.bezierCurveTo(1315.8, 474.2, 1321.2, 482.0, 1327.8, 482.0);
        crc2.bezierCurveTo(1334.4, 482.0, 1339.8, 474.2, 1339.8, 464.5);
        crc2.bezierCurveTo(1339.8, 454.8, 1334.4, 447.0, 1327.8, 447.0);
        crc2.bezierCurveTo(1321.2, 447.0, 1315.8, 454.8, 1315.8, 464.5);
        crc2.closePath();
        crc2.fillStyle = "rgb(255, 255, 255)";
        crc2.fill();


        crc2.beginPath();
        crc2.moveTo(247.7, 590.5);
        crc2.bezierCurveTo(247.7, 590.5, 242.7, 615.3, 264.2, 615.3);
        crc2.bezierCurveTo(285.7, 615.3, 313.8, 623.6, 315.5, 625.3);
        crc2.bezierCurveTo(315.5, 625.3, 317.1, 618.6, 315.5, 617.0);
        crc2.bezierCurveTo(313.8, 615.3, 291.3, 610.9, 289.0, 610.4);
        crc2.bezierCurveTo(282.7, 609.0, 266.7, 607.1, 264.2, 608.7);
        crc2.bezierCurveTo(261.1, 610.8, 251.0, 590.5, 252.7, 590.5);
        crc2.bezierCurveTo(254.3, 590.5, 247.7, 590.5, 247.7, 590.5);
        crc2.closePath();
        crc2.fillStyle = "rgb(236, 200, 175)";
        crc2.fill();

        crc2.beginPath();
        crc2.moveTo(383.5, 590.5);
        crc2.bezierCurveTo(383.5, 590.5, 388.5, 615.3, 367.0, 615.3);
        crc2.bezierCurveTo(345.5, 615.3, 317.4, 623.6, 315.7, 625.3);
        crc2.bezierCurveTo(315.7, 625.3, 314.1, 618.6, 315.7, 617.0);
        crc2.bezierCurveTo(317.4, 615.3, 339.9, 610.9, 342.2, 610.4);
        crc2.bezierCurveTo(348.5, 609.0, 364.5, 607.1, 367.0, 608.7);
        crc2.bezierCurveTo(370.1, 610.8, 380.2, 590.5, 378.5, 590.5);
        crc2.bezierCurveTo(376.9, 590.5, 383.5, 590.5, 383.5, 590.5);
        crc2.closePath();
        crc2.fill();


        crc2.beginPath();
        crc2.moveTo(350.8, 680.8);
        crc2.bezierCurveTo(350.8, 681.0, 350.8, 686.0, 350.8, 686.0);
        crc2.lineTo(359.8, 686.0);
        crc2.lineTo(359.8, 678.2);
        crc2.bezierCurveTo(359.8, 678.2, 355.8, 678.0, 350.8, 680.8);
        crc2.closePath();
        crc2.fillStyle = "rgb(220, 123, 123)";
        crc2.fill();


        crc2.beginPath();
        crc2.moveTo(350.8, 685.9);
        crc2.lineTo(350.8, 726.0);
        crc2.lineTo(360.8, 726.0);
        crc2.lineTo(359.8, 685.9);
        crc2.lineTo(358.0, 685.9);
        crc2.lineTo(356.8, 682.0);
        crc2.lineTo(353.8, 682.0);
        crc2.lineTo(352.8, 685.9);
        crc2.lineTo(350.8, 685.9);
        crc2.closePath();
        crc2.fillStyle = "rgb(243, 243, 243)";
        crc2.fill();


        crc2.beginPath();
        crc2.moveTo(352.0, 726.0);
        crc2.bezierCurveTo(352.0, 726.0, 351.8, 722.0, 352.8, 722.0);
        crc2.bezierCurveTo(353.8, 722.0, 353.8, 726.0, 353.8, 726.0);
        crc2.lineTo(352.0, 726.0);
        crc2.closePath();
        crc2.fillStyle = "rgb(200, 200, 200)";
        crc2.fill();


        crc2.beginPath();
        crc2.moveTo(355.0, 726.0);
        crc2.bezierCurveTo(355.0, 726.0, 354.8, 722.0, 355.8, 722.0);
        crc2.bezierCurveTo(356.8, 722.0, 356.8, 726.0, 356.8, 726.0);
        crc2.lineTo(355.0, 726.0);
        crc2.closePath();
        crc2.fill();


        crc2.beginPath();
        crc2.moveTo(358.0, 726.0);
        crc2.bezierCurveTo(358.0, 726.0, 357.8, 722.0, 358.8, 722.0);
        crc2.bezierCurveTo(359.8, 722.0, 359.8, 726.0, 359.8, 726.0);
        crc2.lineTo(358.0, 726.0);
        crc2.closePath();
        crc2.fill();

        crc2.beginPath();
        crc2.moveTo(350.8, 720.0);
        crc2.bezierCurveTo(446.8, 722.0, 1327.8, 482.0, 1327.8, 482.0);
        crc2.lineTo(1321.6, 449.5);
        crc2.bezierCurveTo(1321.6, 449.5, 1150.8, 543.0, 350.8, 718.9);
        crc2.bezierCurveTo(350.8, 720.0, 350.8, 720.0, 350.8, 720.0);
        crc2.closePath();
        crc2.fillStyle = "rgb(101, 85, 17)";
        crc2.fill();
        crc2.restore();
    }

    function drawGoneTeeth(): void {


        crc2.save();
        crc2.beginPath();
        crc2.moveTo(309.7, 892.3);
        crc2.bezierCurveTo(309.7, 892.3, 249.2, 872.0, 246.9, 869.1);
        crc2.bezierCurveTo(240.3, 860.8, 108.0, 784.8, 98.1, 738.5);
        crc2.bezierCurveTo(83.2, 695.5, 65.0, 637.7, 70.0, 636.0);
        crc2.bezierCurveTo(63.4, 636.0, 45.2, 631.0, 43.5, 617.8);
        crc2.bezierCurveTo(41.9, 604.6, 43.5, 607.9, 43.5, 607.9);
        crc2.bezierCurveTo(43.5, 607.9, 10.5, 545.1, 10.5, 505.4);
        crc2.bezierCurveTo(10.5, 505.4, -2.8, 464.1, 0.5, 462.4);
        crc2.bezierCurveTo(3.8, 460.8, 38.6, 472.3, 35.2, 477.3);
        crc2.bezierCurveTo(31.9, 482.2, 40.2, 267.3, 46.8, 262.4);
        crc2.bezierCurveTo(53.4, 257.4, 137.8, 90.4, 164.2, 93.7);
        crc2.bezierCurveTo(190.7, 97.0, 408.9, 105.3, 422.1, 108.6);
        crc2.bezierCurveTo(435.3, 111.9, 559.3, 196.2, 559.3, 196.2);
        crc2.lineTo(625.5, 358.3);
        crc2.lineTo(608.9, 475.6);
        crc2.lineTo(643.7, 444.2);
        crc2.bezierCurveTo(643.7, 444.2, 670.1, 450.8, 655.2, 497.1);
        crc2.bezierCurveTo(650.3, 508.7, 627.1, 593.0, 627.1, 593.0);
        crc2.bezierCurveTo(627.1, 593.0, 587.4, 675.7, 572.6, 657.5);
        crc2.bezierCurveTo(572.6, 657.5, 546.1, 778.2, 437.0, 841.0);
        crc2.bezierCurveTo(420.5, 849.3, 377.5, 898.9, 329.5, 892.3);
        crc2.bezierCurveTo(318.0, 892.3, 309.7, 892.3, 309.7, 892.3);
        crc2.closePath();
        crc2.fillStyle = "rgb(253, 212, 182)";
        crc2.fill();


        crc2.beginPath();
        crc2.moveTo(103.9, 436.8);
        crc2.lineTo(125.4, 463.2);
        crc2.lineTo(248.2, 453.2);
        crc2.lineTo(272.5, 421.9);
        crc2.lineTo(198.1, 400.4);
        crc2.lineTo(103.9, 436.8);
        crc2.closePath();
        crc2.fillStyle = "rgb(224, 187, 165)";
        crc2.fill();


        crc2.beginPath();
        crc2.moveTo(229.5, 473.2);
        crc2.bezierCurveTo(229.5, 474.8, 184.9, 496.3, 148.5, 464.9);
        crc2.bezierCurveTo(144.7, 458.9, 168.3, 440.1, 197.4, 439.2);
        crc2.bezierCurveTo(227.9, 438.4, 270.8, 471.5, 229.5, 473.2);
        crc2.closePath();
        crc2.fillStyle = "rgb(223, 223, 223)";
        crc2.fill();




        crc2.save();
        crc2.beginPath();
        crc2.moveTo(222.1, 460.8);
        crc2.bezierCurveTo(222.1, 473.5, 211.7, 483.9, 198.9, 483.9);
        crc2.bezierCurveTo(186.1, 483.9, 175.8, 473.5, 175.8, 460.8);
        crc2.bezierCurveTo(175.8, 448.0, 186.1, 437.6, 198.9, 437.6);
        crc2.bezierCurveTo(211.7, 437.6, 222.1, 448.0, 222.1, 460.8);
        crc2.closePath();
        crc2.fillStyle = "rgb(9, 197, 40)";
        crc2.fill();


        crc2.beginPath();
        crc2.moveTo(237.8, 474.8);
        crc2.lineTo(251.0, 473.2);
        crc2.bezierCurveTo(251.0, 473.2, 254.3, 431.8, 216.3, 430.2);
        crc2.bezierCurveTo(178.3, 428.5, 135.3, 436.8, 125.4, 463.2);
        crc2.bezierCurveTo(128.7, 471.5, 135.3, 469.8, 136.9, 469.8);
        crc2.bezierCurveTo(138.6, 469.8, 188.2, 498.0, 221.2, 481.4);
        crc2.bezierCurveTo(222.9, 478.1, 193.1, 489.7, 148.5, 464.9);
        crc2.bezierCurveTo(148.5, 464.9, 168.3, 433.5, 209.7, 440.1);
        crc2.bezierCurveTo(267.5, 461.6, 239.4, 473.2, 237.8, 474.8);
        crc2.closePath();
        crc2.fillStyle = "rgb(215, 175, 131)";
        crc2.fill();


        crc2.beginPath();
        crc2.moveTo(188.2, 460.8);
        crc2.bezierCurveTo(188.2, 466.7, 193.0, 471.5, 198.9, 471.5);
        crc2.bezierCurveTo(204.9, 471.5, 209.7, 466.7, 209.7, 460.8);
        crc2.bezierCurveTo(209.7, 454.8, 204.9, 450.0, 198.9, 450.0);
        crc2.bezierCurveTo(193.0, 450.0, 188.2, 454.8, 188.2, 460.8);
        crc2.closePath();
        crc2.fillStyle = "rgb(0, 0, 0)";
        crc2.fill();


        crc2.beginPath();
        crc2.moveTo(202.2, 445.9);
        crc2.bezierCurveTo(202.2, 445.9, 215.5, 445.9, 212.2, 452.5);
        crc2.bezierCurveTo(189.0, 455.8, 202.2, 445.9, 202.2, 445.9);
        crc2.closePath();
        crc2.fillStyle = "rgb(218, 218, 218)";
        crc2.fill();


        crc2.beginPath();
        crc2.moveTo(194.0, 459.1);
        crc2.bezierCurveTo(194.0, 460.9, 192.1, 462.4, 189.8, 462.4);
        crc2.bezierCurveTo(187.5, 462.4, 185.7, 460.9, 185.7, 459.1);
        crc2.bezierCurveTo(185.7, 457.3, 187.5, 455.8, 189.8, 455.8);
        crc2.bezierCurveTo(192.1, 455.8, 194.0, 457.3, 194.0, 459.1);
        crc2.closePath();
        crc2.fillStyle = "rgb(205, 205, 205)";
        crc2.fill();


        crc2.restore();
        crc2.beginPath();
        crc2.moveTo(256.0, 603.8);
        crc2.bezierCurveTo(256.0, 603.8, 279.1, 592.2, 289.9, 610.6);
        crc2.bezierCurveTo(290.7, 613.7, 259.3, 613.7, 259.3, 610.4);
        crc2.bezierCurveTo(259.3, 607.1, 256.0, 603.8, 256.0, 603.8);
        crc2.closePath();
        crc2.fillStyle = "rgb(55, 51, 9)";
        crc2.fill();


        crc2.beginPath();
        crc2.moveTo(372.6, 603.8);
        crc2.bezierCurveTo(372.6, 603.8, 349.4, 592.2, 338.6, 610.6);
        crc2.bezierCurveTo(337.9, 613.7, 369.3, 613.7, 369.3, 610.4);
        crc2.bezierCurveTo(369.3, 607.1, 372.6, 603.8, 372.6, 603.8);
        crc2.closePath();
        crc2.fill();


        crc2.beginPath();
        crc2.moveTo(251.0, 612.0);
        crc2.lineTo(209.7, 691.4);
        crc2.lineTo(431.2, 691.4);
        crc2.lineTo(381.4, 607.9);
        crc2.lineTo(315.5, 620.3);
        crc2.lineTo(251.0, 612.0);
        crc2.closePath();
        crc2.fillStyle = "rgb(224, 187, 164)";
        crc2.fill();


        crc2.beginPath();
        crc2.moveTo(320.4, 671.5);
        crc2.bezierCurveTo(320.4, 671.5, 284.1, 668.2, 277.5, 664.9);
        crc2.bezierCurveTo(272.1, 662.2, 232.6, 677.1, 216.4, 686.3);
        crc2.bezierCurveTo(212.8, 688.4, 210.3, 690.2, 209.7, 691.4);
        crc2.bezierCurveTo(206.4, 698.0, 252.7, 741.0, 320.4, 747.6);
        crc2.fillStyle = "rgb(218, 109, 109)";
        crc2.fill();

        crc2.beginPath();
        crc2.moveTo(320.3, 671.5);
        crc2.bezierCurveTo(320.3, 671.5, 356.6, 668.2, 363.3, 664.9);
        crc2.bezierCurveTo(369.9, 661.6, 427.7, 684.8, 431.0, 691.4);
        crc2.bezierCurveTo(434.3, 698.0, 388.1, 741.0, 320.3, 747.6);
        crc2.fill();


        crc2.beginPath();
        crc2.moveTo(237.7, 681.5);
        crc2.bezierCurveTo(237.7, 681.5, 254.5, 680.9, 275.8, 683.6);
        crc2.bezierCurveTo(290.0, 685.3, 322.1, 694.7, 322.1, 694.7);
        crc2.bezierCurveTo(322.1, 694.7, 346.1, 687.1, 358.5, 685.6);
        crc2.bezierCurveTo(379.2, 683.0, 396.4, 681.5, 396.4, 681.5);
        crc2.bezierCurveTo(396.4, 681.5, 423.2, 681.5, 421.2, 691.7);
        crc2.bezierCurveTo(307.8, 783.2, 233.6, 699.8, 227.4, 693.7);
        crc2.bezierCurveTo(217.1, 683.6, 237.7, 681.5, 237.7, 681.5);
        crc2.closePath();
        crc2.fillStyle = "rgb(0, 0, 0)";
        crc2.fill();


        crc2.beginPath();
        crc2.moveTo(237.7, 681.5);
        crc2.bezierCurveTo(237.7, 681.5, 251.2, 677.7, 272.5, 679.8);
        crc2.bezierCurveTo(286.7, 681.2, 300.6, 689.7, 320.4, 689.7);
        crc2.bezierCurveTo(340.3, 689.7, 347.8, 679.4, 360.1, 678.2);
        crc2.bezierCurveTo(380.8, 676.1, 396.4, 681.5, 396.4, 681.5);
        crc2.bezierCurveTo(396.4, 681.5, 423.2, 681.5, 421.2, 689.7);
        crc2.bezierCurveTo(382.7, 715.0, 348.8, 720.6, 320.4, 721.1);
        crc2.bezierCurveTo(265.3, 722.1, 231.5, 694.7, 227.4, 691.4);
        crc2.bezierCurveTo(217.1, 683.1, 237.7, 681.5, 237.7, 681.5);
        crc2.closePath();
        crc2.fillStyle = "rgb(255, 255, 255)";
        crc2.fill();


        crc2.beginPath();
        crc2.moveTo(510.6, 436.8);
        crc2.lineTo(489.1, 463.2);
        crc2.lineTo(366.2, 453.2);
        crc2.lineTo(341.9, 421.9);
        crc2.lineTo(416.3, 400.4);
        crc2.lineTo(510.6, 436.8);
        crc2.closePath();
        crc2.fillStyle = "rgb(224, 187, 165)";
        crc2.fill();


        crc2.beginPath();
        crc2.moveTo(385.0, 473.2);
        crc2.bezierCurveTo(385.0, 474.8, 429.6, 496.3, 466.0, 464.9);
        crc2.bezierCurveTo(469.8, 458.9, 446.2, 440.1, 417.1, 439.2);
        crc2.bezierCurveTo(386.6, 438.4, 343.6, 471.5, 385.0, 473.2);
        crc2.closePath();
        crc2.fillStyle = "rgb(223, 223, 223)";
        crc2.fill();

        crc2.save();
        crc2.beginPath();
        crc2.moveTo(392.4, 460.8);
        crc2.bezierCurveTo(392.4, 473.5, 402.8, 483.9, 415.6, 483.9);
        crc2.bezierCurveTo(428.4, 483.9, 438.7, 473.5, 438.7, 460.8);
        crc2.bezierCurveTo(438.7, 448.0, 428.4, 437.6, 415.6, 437.6);
        crc2.bezierCurveTo(402.8, 437.6, 392.4, 448.0, 392.4, 460.8);
        crc2.closePath();
        crc2.fillStyle = "rgb(9, 197, 40)";
        crc2.fill();


        crc2.beginPath();
        crc2.moveTo(376.7, 474.8);
        crc2.lineTo(363.5, 473.2);
        crc2.bezierCurveTo(363.5, 473.2, 360.2, 431.8, 398.2, 430.2);
        crc2.bezierCurveTo(436.2, 428.5, 479.2, 436.8, 489.1, 463.2);
        crc2.bezierCurveTo(485.8, 471.5, 479.2, 469.8, 477.6, 469.8);
        crc2.bezierCurveTo(475.9, 469.8, 426.3, 498.0, 393.3, 481.4);
        crc2.bezierCurveTo(391.6, 478.1, 421.4, 489.7, 466.0, 464.9);
        crc2.bezierCurveTo(466.0, 464.9, 446.2, 433.5, 404.8, 440.1);
        crc2.bezierCurveTo(347.0, 461.6, 375.1, 473.2, 376.7, 474.8);
        crc2.closePath();
        crc2.fillStyle = "rgb(215, 175, 131)";
        crc2.fill();


        crc2.beginPath();
        crc2.moveTo(426.3, 460.8);
        crc2.bezierCurveTo(426.3, 466.7, 421.5, 471.5, 415.6, 471.5);
        crc2.bezierCurveTo(409.6, 471.5, 404.8, 466.7, 404.8, 460.8);
        crc2.bezierCurveTo(404.8, 454.8, 409.6, 450.0, 415.6, 450.0);
        crc2.bezierCurveTo(421.5, 450.0, 426.3, 454.8, 426.3, 460.8);
        crc2.closePath();
        crc2.fillStyle = "rgb(0, 0, 0)";
        crc2.fill();


        crc2.beginPath();
        crc2.moveTo(420.5, 445.9);
        crc2.bezierCurveTo(420.5, 445.9, 433.7, 445.9, 430.4, 452.5);
        crc2.bezierCurveTo(407.2, 455.8, 420.5, 445.9, 420.5, 445.9);
        crc2.closePath();
        crc2.fillStyle = "rgb(218, 218, 218)";
        crc2.fill();


        crc2.beginPath();
        crc2.moveTo(401.5, 459.9);
        crc2.bezierCurveTo(401.5, 461.8, 403.3, 463.2, 405.6, 463.2);
        crc2.bezierCurveTo(407.9, 463.2, 409.7, 461.8, 409.7, 459.9);
        crc2.bezierCurveTo(409.7, 458.1, 407.9, 456.6, 405.6, 456.6);
        crc2.bezierCurveTo(403.3, 456.6, 401.5, 458.1, 401.5, 459.9);
        crc2.closePath();
        crc2.fillStyle = "rgb(205, 205, 205)";
        crc2.fill();


        crc2.restore();
        crc2.beginPath();
        crc2.moveTo(6.3, 463.2);
        crc2.bezierCurveTo(9.6, 228.5, -15.2, 164.0, 113.8, 71.4);
        crc2.bezierCurveTo(183.2, 64.8, 221.2, -52.6, 497.3, 45.0);
        crc2.bezierCurveTo(578.4, 102.8, 687.5, 116.0, 642.8, 445.0);
        crc2.lineTo(609.8, 476.5);
        crc2.bezierCurveTo(609.8, 476.5, 617.9, 204.4, 338.6, 211.9);
        crc2.bezierCurveTo(31.1, 220.2, 36.1, 466.5, 34.4, 474.8);
        crc2.bezierCurveTo(21.2, 464.9, 6.3, 463.2, 6.3, 463.2);
        crc2.closePath();
        crc2.fillStyle = "rgb(136, 110, 28)";
        crc2.fill();


        crc2.beginPath();
        crc2.moveTo(168.3, 96.2);
        crc2.bezierCurveTo(168.3, 96.2, 85.7, 36.7, 31.1, 69.8);
        crc2.bezierCurveTo(93.0, 65.8, 86.1, 85.6, 155.1, 102.8);
        crc2.bezierCurveTo(168.3, 106.1, 168.3, 96.2, 168.3, 96.2);
        crc2.closePath();
        crc2.fill();


        crc2.beginPath();
        crc2.moveTo(138.6, 92.9);
        crc2.lineTo(21.2, 124.3);
        crc2.bezierCurveTo(21.2, 124.3, 110.5, 46.6, 148.5, 66.4);
        crc2.bezierCurveTo(186.5, 86.3, 138.6, 92.9, 138.6, 92.9);
        crc2.closePath();
        crc2.fill();


        crc2.beginPath();
        crc2.moveTo(189.8, 51.6);
        crc2.bezierCurveTo(189.8, 51.6, 118.7, 54.9, 103.9, 59.8);
        crc2.bezierCurveTo(89.0, 64.8, 192.0, 32.3, 208.0, 45.0);
        crc2.bezierCurveTo(224.0, 57.6, 189.8, 54.9, 189.8, 54.9);
        crc2.lineTo(189.8, 51.6);
        crc2.closePath();
        crc2.fill();


        crc2.beginPath();
        crc2.moveTo(196.4, 36.7);
        crc2.bezierCurveTo(196.4, 36.7, 79.1, 56.5, 72.4, 54.9);
        crc2.bezierCurveTo(64.4, 52.9, 217.9, -6.3, 244.4, 23.5);
        crc2.bezierCurveTo(270.8, 53.2, 196.4, 36.7, 196.4, 36.7);
        crc2.closePath();
        crc2.fill();


        crc2.beginPath();
        crc2.moveTo(295.6, 21.8);
        crc2.bezierCurveTo(295.6, 21.8, 133.6, 28.4, 100.6, 15.2);
        crc2.bezierCurveTo(308.9, -19.5, 330.4, 15.2, 333.7, 21.8);
        crc2.bezierCurveTo(338.6, 48.3, 295.6, 21.8, 295.6, 21.8);
        crc2.closePath();
        crc2.fill();


        crc2.beginPath();
        crc2.moveTo(399.8, 48.3);
        crc2.lineTo(269.2, 14.9);
        crc2.bezierCurveTo(269.2, 14.9, 475.8, -1.3, 456.0, 48.3);
        crc2.bezierCurveTo(436.2, 97.9, 399.8, 48.3, 399.8, 48.3);
        crc2.closePath();
        crc2.fill();


        crc2.beginPath();
        crc2.moveTo(247.7, 590.5);
        crc2.bezierCurveTo(247.7, 590.5, 256.0, 562.4, 260.9, 559.1);
        crc2.bezierCurveTo(265.9, 555.8, 298.9, 549.2, 292.3, 476.5);
        crc2.bezierCurveTo(291.2, 464.5, 335.3, 473.2, 335.3, 473.2);
        crc2.bezierCurveTo(335.3, 473.2, 344.0, 553.4, 360.1, 557.5);
        crc2.bezierCurveTo(386.6, 564.1, 381.6, 590.5, 381.6, 590.5);
        crc2.fillStyle = "rgb(253, 212, 182)";
        crc2.fill();


        crc2.beginPath();
        crc2.moveTo(103.9, 436.8);
        crc2.lineTo(118.7, 445.0);
        crc2.bezierCurveTo(118.7, 445.0, 214.6, 378.9, 256.0, 428.5);
        crc2.bezierCurveTo(272.5, 421.9, 272.5, 421.9, 272.5, 421.9);
        crc2.bezierCurveTo(272.5, 421.9, 219.6, 349.2, 103.9, 436.8);
        crc2.closePath();
        crc2.fillStyle = "rgb(136, 110, 28)";
        crc2.fill();


        crc2.beginPath();
        crc2.moveTo(510.6, 436.8);
        crc2.lineTo(495.7, 445.0);
        crc2.bezierCurveTo(495.7, 445.0, 399.8, 378.9, 358.5, 428.5);
        crc2.bezierCurveTo(341.9, 421.9, 341.9, 421.9, 341.9, 421.9);
        crc2.bezierCurveTo(341.9, 421.9, 394.8, 349.2, 510.6, 436.8);
        crc2.closePath();
        crc2.fill();


        crc2.beginPath();
        crc2.moveTo(505.1, 785.3);
        crc2.bezierCurveTo(523.8, 762.0, 548.2, 743.9, 559.8, 696.0);
        crc2.bezierCurveTo(616.8, 537.0, 630.8, 438.0, 571.8, 329.0);
        crc2.bezierCurveTo(500.8, 196.0, 346.8, 212.0, 346.8, 212.0);
        crc2.bezierCurveTo(346.8, 212.0, 717.8, 285.0, 505.1, 785.3);
        crc2.closePath();
        crc2.fillStyle = "rgb(224, 188, 166)";
        crc2.fill();


        crc2.beginPath();
        crc2.moveTo(583.0, 625.3);
        crc2.bezierCurveTo(583.0, 625.3, 614.7, 638.5, 646.1, 483.1);
        crc2.bezierCurveTo(652.9, 449.7, 608.9, 500.5, 608.9, 500.5);
        crc2.lineTo(583.0, 625.3);
        crc2.closePath();
        crc2.fill();

        crc2.beginPath();
        crc2.moveTo(592.0, 581.5);
        crc2.bezierCurveTo(592.0, 581.5, 629.6, 532.7, 626.3, 512.8);
        crc2.bezierCurveTo(623.0, 493.0, 605.7, 515.5, 605.7, 515.5);
        crc2.lineTo(592.0, 581.5);
        crc2.closePath();
        crc2.fillStyle = "rgb(238, 200, 174)";
        crc2.fill();


        crc2.beginPath();
        crc2.moveTo(65.8, 613.7);
        crc2.bezierCurveTo(65.8, 613.7, 3.0, 519.4, 12.9, 481.4);
        crc2.bezierCurveTo(15.3, 472.4, 36.1, 486.4, 36.1, 486.4);
        crc2.lineTo(65.8, 613.7);
        crc2.closePath();
        crc2.fillStyle = "rgb(224, 187, 165)";
        crc2.fill();


        crc2.beginPath();
        crc2.moveTo(54.3, 564.1);
        crc2.bezierCurveTo(54.3, 564.1, 27.8, 522.8, 31.1, 517.8);
        crc2.bezierCurveTo(34.4, 512.8, 41.0, 509.5, 41.0, 509.5);
        crc2.lineTo(54.3, 564.1);
        crc2.closePath();
        crc2.fillStyle = "rgb(238, 200, 174)";
        crc2.fill();


        crc2.beginPath();
        crc2.moveTo(1550.4, 771.1);
        crc2.lineTo(1140.9, 771.1);
        crc2.lineTo(1140.9, 173.5);
        crc2.lineTo(1550.4, 173.5);
        crc2.lineTo(1550.4, 771.1);
        crc2.closePath();
        crc2.fillStyle = "rgb(155, 255, 242)";
        crc2.fill();
        crc2.strokeStyle = "rgb(28, 28, 26)";
        crc2.lineCap = "round";
        crc2.stroke();


        crc2.beginPath();
        crc2.moveTo(1536.9, 766.2);
        crc2.lineTo(1151.2, 766.2);
        crc2.lineTo(1151.2, 187.7);
        crc2.lineTo(1536.9, 187.7);
        crc2.lineTo(1536.9, 766.2);
        crc2.closePath();
        crc2.fillStyle = "rgb(241, 241, 241)";
        crc2.fill();
        crc2.stroke();


        crc2.beginPath();
        crc2.moveTo(1151.3, 187.5);
        crc2.lineTo(1537.3, 187.5);
        crc2.lineTo(1537.3, 766.5);
        crc2.lineTo(1151.3, 766.5);
        crc2.lineTo(1151.3, 187.5);
        crc2.closePath();
        crc2.fillStyle = "rgb(155, 241, 229)";
        crc2.fill();
        crc2.stroke();


        crc2.beginPath();
        crc2.moveTo(247.7, 590.5);
        crc2.bezierCurveTo(247.7, 590.5, 242.7, 615.3, 264.2, 615.3);
        crc2.bezierCurveTo(285.7, 615.3, 313.8, 623.6, 315.5, 625.3);
        crc2.bezierCurveTo(315.5, 625.3, 317.1, 618.6, 315.5, 617.0);
        crc2.bezierCurveTo(313.8, 615.3, 291.3, 610.9, 289.0, 610.4);
        crc2.bezierCurveTo(282.7, 609.0, 266.7, 607.1, 264.2, 608.7);
        crc2.bezierCurveTo(261.1, 610.8, 251.0, 590.5, 252.7, 590.5);
        crc2.bezierCurveTo(254.3, 590.5, 247.7, 590.5, 247.7, 590.5);
        crc2.closePath();
        crc2.fillStyle = "rgb(236, 200, 175)";
        crc2.fill();


        crc2.beginPath();
        crc2.moveTo(383.5, 590.5);
        crc2.bezierCurveTo(383.5, 590.5, 388.5, 615.3, 367.0, 615.3);
        crc2.bezierCurveTo(345.5, 615.3, 317.4, 623.6, 315.7, 625.3);
        crc2.bezierCurveTo(315.7, 625.3, 314.1, 618.6, 315.7, 617.0);
        crc2.bezierCurveTo(317.4, 615.3, 339.9, 610.9, 342.2, 610.4);
        crc2.bezierCurveTo(348.5, 609.0, 364.5, 607.1, 367.0, 608.7);
        crc2.bezierCurveTo(370.1, 610.8, 380.2, 590.5, 378.5, 590.5);
        crc2.bezierCurveTo(376.9, 590.5, 383.5, 590.5, 383.5, 590.5);
        crc2.closePath();
        crc2.fill();


        crc2.beginPath();
        crc2.moveTo(350.8, 680.8);
        crc2.bezierCurveTo(350.8, 681.0, 350.8, 686.0, 350.8, 686.0);
        crc2.bezierCurveTo(350.8, 686.0, 351.8, 685.0, 354.8, 685.0);
        crc2.bezierCurveTo(357.8, 685.0, 359.8, 686.0, 359.8, 686.0);
        crc2.lineTo(359.8, 678.2);
        crc2.bezierCurveTo(359.8, 678.2, 355.8, 678.0, 350.8, 680.8);
        crc2.closePath();
        crc2.fillStyle = "rgb(220, 123, 123)";
        crc2.fill();


        crc2.beginPath();
        crc2.moveTo(350.8, 685.0);
        crc2.lineTo(350.8, 687.0);
        crc2.lineTo(355.8, 687.0);
        crc2.lineTo(359.8, 687.0);
        crc2.lineTo(359.8, 685.0);
        crc2.bezierCurveTo(359.8, 685.0, 355.8, 682.0, 350.8, 685.0);
        crc2.closePath();
        crc2.fillStyle = "rgb(164, 97, 97)";
        crc2.fill();


        crc2.beginPath();
        crc2.moveTo(359.8, 687.0);
        crc2.lineTo(359.8, 716.5);
        crc2.bezierCurveTo(359.8, 716.5, 350.8, 718.7, 350.8, 718.3);
        crc2.bezierCurveTo(350.8, 718.0, 350.8, 687.0, 350.8, 687.0);
        crc2.lineTo(359.8, 687.0);
        crc2.closePath();
        crc2.fillStyle = "rgb(0, 0, 0)";
        crc2.fill();


        crc2.beginPath();
        crc2.moveTo(1462.8, 715.0);
        crc2.lineTo(1505.8, 715.0);
        crc2.lineTo(1505.8, 725.9);
        crc2.lineTo(1505.8, 727.0);
        crc2.lineTo(1462.8, 727.0);
        crc2.lineTo(1462.8, 715.0);
        crc2.closePath();
        crc2.fillStyle = "rgb(255, 255, 255)";
        crc2.fill();


        crc2.beginPath();
        crc2.moveTo(1472.3, 468.5);
        crc2.lineTo(1472.3, 727.5);
        crc2.lineTo(1477.3, 727.5);
        crc2.lineTo(1477.3, 468.5);
        crc2.lineTo(1472.3, 468.5);
        crc2.closePath();
        crc2.fillStyle = "rgb(75, 60, 14)";
        crc2.fill();


        crc2.beginPath();
        crc2.moveTo(1472.8, 468.5);
        crc2.bezierCurveTo(1472.8, 481.5, 1483.3, 492.0, 1496.3, 492.0);
        crc2.bezierCurveTo(1509.3, 492.0, 1519.8, 481.5, 1519.8, 468.5);
        crc2.bezierCurveTo(1519.8, 455.5, 1509.3, 445.0, 1496.3, 445.0);
        crc2.bezierCurveTo(1483.3, 445.0, 1472.8, 455.5, 1472.8, 468.5);
        crc2.closePath();
        crc2.fillStyle = "rgb(255, 255, 255)";
        crc2.fill();


        crc2.beginPath();
        crc2.moveTo(1502.8, 725.0);
        crc2.bezierCurveTo(1502.8, 723.0, 1505.8, 723.8, 1505.8, 723.8);
        crc2.lineTo(1505.8, 726.0);
        crc2.bezierCurveTo(1505.8, 726.0, 1502.8, 727.0, 1502.8, 725.0);
        crc2.closePath();
        crc2.fillStyle = "rgb(215, 215, 215)";
        crc2.fill();


        crc2.beginPath();
        crc2.moveTo(1505.8, 722.0);
        crc2.bezierCurveTo(1505.8, 722.0, 1502.8, 723.0, 1502.8, 721.0);
        crc2.bezierCurveTo(1502.8, 719.0, 1505.8, 719.8, 1505.8, 719.8);
        crc2.fill();


        crc2.beginPath();
        crc2.moveTo(1505.8, 718.0);
        crc2.bezierCurveTo(1505.8, 718.0, 1502.8, 719.0, 1502.8, 717.0);
        crc2.bezierCurveTo(1502.8, 715.0, 1505.8, 715.8, 1505.8, 715.8);
        crc2.fill();


        crc2.beginPath();
        crc2.moveTo(378.3, 476.5);
        crc2.bezierCurveTo(378.3, 476.5, 381.3, 508.5, 386.3, 509.5);
        crc2.bezierCurveTo(391.3, 510.5, 393.3, 539.5, 380.3, 535.5);
        crc2.bezierCurveTo(367.3, 531.5, 363.3, 512.5, 368.3, 510.5);
        crc2.bezierCurveTo(373.3, 508.5, 378.3, 476.5, 378.3, 476.5);
        crc2.closePath();
        crc2.fillStyle = "rgb(155, 241, 229)";
        crc2.fill();


        crc2.beginPath();
        crc2.moveTo(380.5, 523.5);
        crc2.bezierCurveTo(380.5, 526.5, 382.1, 529.0, 384.2, 529.0);
        crc2.bezierCurveTo(386.2, 529.0, 387.8, 526.5, 387.8, 523.5);
        crc2.bezierCurveTo(387.8, 520.5, 386.2, 518.0, 384.2, 518.0);
        crc2.bezierCurveTo(382.1, 518.0, 380.5, 520.5, 380.5, 523.5);
        crc2.closePath();
        crc2.fillStyle = "rgb(243, 243, 243)";
        crc2.fill();
        crc2.restore();
    }

    function drawTeethOutHit(): void {
        // ebene1/Pfad
        crc2.save();
        crc2.beginPath();
        crc2.moveTo(309.7, 892.3);
        crc2.bezierCurveTo(309.7, 892.3, 249.2, 872.0, 246.9, 869.1);
        crc2.bezierCurveTo(240.3, 860.8, 108.0, 784.8, 98.1, 738.5);
        crc2.bezierCurveTo(83.2, 695.5, 65.0, 637.7, 70.0, 636.0);
        crc2.bezierCurveTo(63.4, 636.0, 45.2, 631.0, 43.5, 617.8);
        crc2.bezierCurveTo(41.9, 604.6, 43.5, 607.9, 43.5, 607.9);
        crc2.bezierCurveTo(43.5, 607.9, 10.5, 545.1, 10.5, 505.4);
        crc2.bezierCurveTo(10.5, 505.4, -2.8, 464.1, 0.5, 462.4);
        crc2.bezierCurveTo(3.8, 460.8, 38.6, 472.3, 35.2, 477.3);
        crc2.bezierCurveTo(31.9, 482.2, 40.2, 267.3, 46.8, 262.4);
        crc2.bezierCurveTo(53.4, 257.4, 137.8, 90.4, 164.2, 93.7);
        crc2.bezierCurveTo(190.7, 97.0, 408.9, 105.3, 422.1, 108.6);
        crc2.bezierCurveTo(435.3, 111.9, 559.3, 196.2, 559.3, 196.2);
        crc2.lineTo(625.5, 358.3);
        crc2.lineTo(608.9, 475.6);
        crc2.lineTo(643.7, 444.2);
        crc2.bezierCurveTo(643.7, 444.2, 670.1, 450.8, 655.2, 497.1);
        crc2.bezierCurveTo(650.3, 508.7, 627.1, 593.0, 627.1, 593.0);
        crc2.bezierCurveTo(627.1, 593.0, 587.4, 675.7, 572.6, 657.5);
        crc2.bezierCurveTo(572.6, 657.5, 546.1, 778.2, 437.0, 841.0);
        crc2.bezierCurveTo(420.5, 849.3, 377.5, 898.9, 329.5, 892.3);
        crc2.bezierCurveTo(318.0, 892.3, 309.7, 892.3, 309.7, 892.3);
        crc2.closePath();
        crc2.fillStyle = "rgb(253, 212, 182)";
        crc2.fill();

        // ebene1/Pfad
        crc2.beginPath();
        crc2.moveTo(103.9, 436.8);
        crc2.lineTo(125.4, 463.2);
        crc2.lineTo(248.2, 453.2);
        crc2.lineTo(272.5, 421.9);
        crc2.lineTo(198.1, 400.4);
        crc2.lineTo(103.9, 436.8);
        crc2.closePath();
        crc2.fillStyle = "rgb(224, 187, 165)";
        crc2.fill();

        // ebene1/Pfad
        crc2.beginPath();
        crc2.moveTo(229.5, 473.2);
        crc2.bezierCurveTo(229.5, 474.8, 184.9, 496.3, 148.5, 464.9);
        crc2.bezierCurveTo(144.7, 458.9, 168.3, 440.1, 197.4, 439.2);
        crc2.bezierCurveTo(227.9, 438.4, 270.8, 471.5, 229.5, 473.2);
        crc2.closePath();
        crc2.fillStyle = "rgb(223, 223, 223)";
        crc2.fill();

        // ebene1/Gruppe
        // ebene1/Gruppe/Ellipse
        crc2.save();
        crc2.beginPath();
        crc2.moveTo(222.1, 460.8);
        crc2.bezierCurveTo(222.1, 473.5, 211.7, 483.9, 198.9, 483.9);
        crc2.bezierCurveTo(186.1, 483.9, 175.8, 473.5, 175.8, 460.8);
        crc2.bezierCurveTo(175.8, 448.0, 186.1, 437.6, 198.9, 437.6);
        crc2.bezierCurveTo(211.7, 437.6, 222.1, 448.0, 222.1, 460.8);
        crc2.closePath();
        crc2.fillStyle = "rgb(9, 197, 40)";
        crc2.fill();

        // ebene1/Gruppe/Pfad
        crc2.beginPath();
        crc2.moveTo(237.8, 474.8);
        crc2.lineTo(251.0, 473.2);
        crc2.bezierCurveTo(251.0, 473.2, 254.3, 431.8, 216.3, 430.2);
        crc2.bezierCurveTo(178.3, 428.5, 135.3, 436.8, 125.4, 463.2);
        crc2.bezierCurveTo(128.7, 471.5, 135.3, 469.8, 136.9, 469.8);
        crc2.bezierCurveTo(138.6, 469.8, 188.2, 498.0, 221.2, 481.4);
        crc2.bezierCurveTo(222.9, 478.1, 193.1, 489.7, 148.5, 464.9);
        crc2.bezierCurveTo(148.5, 464.9, 168.3, 433.5, 209.7, 440.1);
        crc2.bezierCurveTo(267.5, 461.6, 239.4, 473.2, 237.8, 474.8);
        crc2.closePath();
        crc2.fillStyle = "rgb(215, 175, 131)";
        crc2.fill();

        // ebene1/Gruppe/Ellipse
        crc2.beginPath();
        crc2.moveTo(188.2, 460.8);
        crc2.bezierCurveTo(188.2, 466.7, 193.0, 471.5, 198.9, 471.5);
        crc2.bezierCurveTo(204.9, 471.5, 209.7, 466.7, 209.7, 460.8);
        crc2.bezierCurveTo(209.7, 454.8, 204.9, 450.0, 198.9, 450.0);
        crc2.bezierCurveTo(193.0, 450.0, 188.2, 454.8, 188.2, 460.8);
        crc2.closePath();
        crc2.fillStyle = "rgb(0, 0, 0)";
        crc2.fill();

        // ebene1/Gruppe/Pfad
        crc2.beginPath();
        crc2.moveTo(202.2, 445.9);
        crc2.bezierCurveTo(202.2, 445.9, 215.5, 445.9, 212.2, 452.5);
        crc2.bezierCurveTo(189.0, 455.8, 202.2, 445.9, 202.2, 445.9);
        crc2.closePath();
        crc2.fillStyle = "rgb(218, 218, 218)";
        crc2.fill();

        // ebene1/Gruppe/Ellipse
        crc2.beginPath();
        crc2.moveTo(194.0, 459.1);
        crc2.bezierCurveTo(194.0, 460.9, 192.1, 462.4, 189.8, 462.4);
        crc2.bezierCurveTo(187.5, 462.4, 185.7, 460.9, 185.7, 459.1);
        crc2.bezierCurveTo(185.7, 457.3, 187.5, 455.8, 189.8, 455.8);
        crc2.bezierCurveTo(192.1, 455.8, 194.0, 457.3, 194.0, 459.1);
        crc2.closePath();
        crc2.fillStyle = "rgb(205, 205, 205)";
        crc2.fill();

        // ebene1/Pfad
        crc2.restore();
        crc2.beginPath();
        crc2.moveTo(256.0, 603.8);
        crc2.bezierCurveTo(256.0, 603.8, 279.1, 592.2, 289.9, 610.6);
        crc2.bezierCurveTo(290.7, 613.7, 259.3, 613.7, 259.3, 610.4);
        crc2.bezierCurveTo(259.3, 607.1, 256.0, 603.8, 256.0, 603.8);
        crc2.closePath();
        crc2.fillStyle = "rgb(55, 51, 9)";
        crc2.fill();

        // ebene1/Pfad
        crc2.beginPath();
        crc2.moveTo(372.6, 603.8);
        crc2.bezierCurveTo(372.6, 603.8, 349.4, 592.2, 338.6, 610.6);
        crc2.bezierCurveTo(337.9, 613.7, 369.3, 613.7, 369.3, 610.4);
        crc2.bezierCurveTo(369.3, 607.1, 372.6, 603.8, 372.6, 603.8);
        crc2.closePath();
        crc2.fill();

        // ebene1/Pfad
        crc2.beginPath();
        crc2.moveTo(251.0, 612.0);
        crc2.lineTo(209.7, 691.4);
        crc2.lineTo(431.2, 691.4);
        crc2.lineTo(381.4, 607.9);
        crc2.lineTo(315.5, 620.3);
        crc2.lineTo(251.0, 612.0);
        crc2.closePath();
        crc2.fillStyle = "rgb(224, 187, 164)";
        crc2.fill();

        // ebene1/Pfad
        crc2.beginPath();
        crc2.moveTo(320.4, 671.5);
        crc2.bezierCurveTo(320.4, 671.5, 284.1, 668.2, 277.5, 664.9);
        crc2.bezierCurveTo(272.1, 662.2, 232.6, 677.1, 216.4, 686.3);
        crc2.bezierCurveTo(212.8, 688.4, 210.3, 690.2, 209.7, 691.4);
        crc2.bezierCurveTo(206.4, 698.0, 252.7, 741.0, 320.4, 747.6);
        crc2.fillStyle = "rgb(218, 109, 109)";
        crc2.fill();

        // ebene1/Pfad
        crc2.beginPath();
        crc2.moveTo(320.3, 671.5);
        crc2.bezierCurveTo(320.3, 671.5, 356.6, 668.2, 363.3, 664.9);
        crc2.bezierCurveTo(369.9, 661.6, 427.7, 684.8, 431.0, 691.4);
        crc2.bezierCurveTo(434.3, 698.0, 388.1, 741.0, 320.3, 747.6);
        crc2.fill();

        // ebene1/Pfad
        crc2.beginPath();
        crc2.moveTo(237.7, 681.5);
        crc2.bezierCurveTo(237.7, 681.5, 254.5, 680.9, 275.8, 683.6);
        crc2.bezierCurveTo(290.0, 685.3, 322.1, 694.7, 322.1, 694.7);
        crc2.bezierCurveTo(322.1, 694.7, 346.1, 687.1, 358.5, 685.6);
        crc2.bezierCurveTo(379.2, 683.0, 396.4, 681.5, 396.4, 681.5);
        crc2.bezierCurveTo(396.4, 681.5, 423.2, 681.5, 421.2, 691.7);
        crc2.bezierCurveTo(307.8, 783.2, 233.6, 699.8, 227.4, 693.7);
        crc2.bezierCurveTo(217.1, 683.6, 237.7, 681.5, 237.7, 681.5);
        crc2.closePath();
        crc2.fillStyle = "rgb(0, 0, 0)";
        crc2.fill();

        // ebene1/Pfad
        crc2.beginPath();
        crc2.moveTo(237.7, 681.5);
        crc2.bezierCurveTo(237.7, 681.5, 251.2, 677.7, 272.5, 679.8);
        crc2.bezierCurveTo(286.7, 681.2, 300.6, 689.7, 320.4, 689.7);
        crc2.bezierCurveTo(340.3, 689.7, 347.8, 679.4, 360.1, 678.2);
        crc2.bezierCurveTo(380.8, 676.1, 396.4, 681.5, 396.4, 681.5);
        crc2.bezierCurveTo(396.4, 681.5, 423.2, 681.5, 421.2, 689.7);
        crc2.bezierCurveTo(382.7, 715.0, 348.8, 720.6, 320.4, 721.1);
        crc2.bezierCurveTo(265.3, 722.1, 231.5, 694.7, 227.4, 691.4);
        crc2.bezierCurveTo(217.1, 683.1, 237.7, 681.5, 237.7, 681.5);
        crc2.closePath();
        crc2.fillStyle = "rgb(255, 255, 255)";
        crc2.fill();

        // ebene1/Pfad
        crc2.beginPath();
        crc2.moveTo(510.6, 436.8);
        crc2.lineTo(489.1, 463.2);
        crc2.lineTo(366.2, 453.2);
        crc2.lineTo(341.9, 421.9);
        crc2.lineTo(416.3, 400.4);
        crc2.lineTo(510.6, 436.8);
        crc2.closePath();
        crc2.fillStyle = "rgb(224, 187, 165)";
        crc2.fill();

        // ebene1/Pfad
        crc2.beginPath();
        crc2.moveTo(385.0, 473.2);
        crc2.bezierCurveTo(385.0, 474.8, 429.6, 496.3, 466.0, 464.9);
        crc2.bezierCurveTo(469.8, 458.9, 446.2, 440.1, 417.1, 439.2);
        crc2.bezierCurveTo(386.6, 438.4, 343.6, 471.5, 385.0, 473.2);
        crc2.closePath();
        crc2.fillStyle = "rgb(223, 223, 223)";
        crc2.fill();

        // ebene1/Gruppe
        // ebene1/Gruppe/Ellipse
        crc2.save();
        crc2.beginPath();
        crc2.moveTo(392.4, 460.8);
        crc2.bezierCurveTo(392.4, 473.5, 402.8, 483.9, 415.6, 483.9);
        crc2.bezierCurveTo(428.4, 483.9, 438.7, 473.5, 438.7, 460.8);
        crc2.bezierCurveTo(438.7, 448.0, 428.4, 437.6, 415.6, 437.6);
        crc2.bezierCurveTo(402.8, 437.6, 392.4, 448.0, 392.4, 460.8);
        crc2.closePath();
        crc2.fillStyle = "rgb(9, 197, 40)";
        crc2.fill();

        // ebene1/Gruppe/Pfad
        crc2.beginPath();
        crc2.moveTo(376.7, 474.8);
        crc2.lineTo(363.5, 473.2);
        crc2.bezierCurveTo(363.5, 473.2, 360.2, 431.8, 398.2, 430.2);
        crc2.bezierCurveTo(436.2, 428.5, 479.2, 436.8, 489.1, 463.2);
        crc2.bezierCurveTo(485.8, 471.5, 479.2, 469.8, 477.6, 469.8);
        crc2.bezierCurveTo(475.9, 469.8, 426.3, 498.0, 393.3, 481.4);
        crc2.bezierCurveTo(391.6, 478.1, 421.4, 489.7, 466.0, 464.9);
        crc2.bezierCurveTo(466.0, 464.9, 446.2, 433.5, 404.8, 440.1);
        crc2.bezierCurveTo(347.0, 461.6, 375.1, 473.2, 376.7, 474.8);
        crc2.closePath();
        crc2.fillStyle = "rgb(215, 175, 131)";
        crc2.fill();

        // ebene1/Gruppe/Ellipse
        crc2.beginPath();
        crc2.moveTo(426.3, 460.8);
        crc2.bezierCurveTo(426.3, 466.7, 421.5, 471.5, 415.6, 471.5);
        crc2.bezierCurveTo(409.6, 471.5, 404.8, 466.7, 404.8, 460.8);
        crc2.bezierCurveTo(404.8, 454.8, 409.6, 450.0, 415.6, 450.0);
        crc2.bezierCurveTo(421.5, 450.0, 426.3, 454.8, 426.3, 460.8);
        crc2.closePath();
        crc2.fillStyle = "rgb(0, 0, 0)";
        crc2.fill();

        // ebene1/Gruppe/Pfad
        crc2.beginPath();
        crc2.moveTo(420.5, 445.9);
        crc2.bezierCurveTo(420.5, 445.9, 433.7, 445.9, 430.4, 452.5);
        crc2.bezierCurveTo(407.2, 455.8, 420.5, 445.9, 420.5, 445.9);
        crc2.closePath();
        crc2.fillStyle = "rgb(218, 218, 218)";
        crc2.fill();

        // ebene1/Gruppe/Ellipse
        crc2.beginPath();
        crc2.moveTo(401.5, 459.9);
        crc2.bezierCurveTo(401.5, 461.8, 403.3, 463.2, 405.6, 463.2);
        crc2.bezierCurveTo(407.9, 463.2, 409.7, 461.8, 409.7, 459.9);
        crc2.bezierCurveTo(409.7, 458.1, 407.9, 456.6, 405.6, 456.6);
        crc2.bezierCurveTo(403.3, 456.6, 401.5, 458.1, 401.5, 459.9);
        crc2.closePath();
        crc2.fillStyle = "rgb(205, 205, 205)";
        crc2.fill();

        // ebene1/Pfad
        crc2.restore();
        crc2.beginPath();
        crc2.moveTo(6.3, 463.2);
        crc2.bezierCurveTo(9.6, 228.5, -15.2, 164.0, 113.8, 71.4);
        crc2.bezierCurveTo(183.2, 64.8, 221.2, -52.6, 497.3, 45.0);
        crc2.bezierCurveTo(578.4, 102.8, 687.5, 116.0, 642.8, 445.0);
        crc2.lineTo(609.8, 476.5);
        crc2.bezierCurveTo(609.8, 476.5, 617.9, 204.4, 338.6, 211.9);
        crc2.bezierCurveTo(31.1, 220.2, 36.1, 466.5, 34.4, 474.8);
        crc2.bezierCurveTo(21.2, 464.9, 6.3, 463.2, 6.3, 463.2);
        crc2.closePath();
        crc2.fillStyle = "rgb(136, 110, 28)";
        crc2.fill();

        // ebene1/Pfad
        crc2.beginPath();
        crc2.moveTo(168.3, 96.2);
        crc2.bezierCurveTo(168.3, 96.2, 85.7, 36.7, 31.1, 69.8);
        crc2.bezierCurveTo(93.0, 65.8, 86.1, 85.6, 155.1, 102.8);
        crc2.bezierCurveTo(168.3, 106.1, 168.3, 96.2, 168.3, 96.2);
        crc2.closePath();
        crc2.fill();

        // ebene1/Pfad
        crc2.beginPath();
        crc2.moveTo(138.6, 92.9);
        crc2.lineTo(21.2, 124.3);
        crc2.bezierCurveTo(21.2, 124.3, 110.5, 46.6, 148.5, 66.4);
        crc2.bezierCurveTo(186.5, 86.3, 138.6, 92.9, 138.6, 92.9);
        crc2.closePath();
        crc2.fill();

        // ebene1/Pfad
        crc2.beginPath();
        crc2.moveTo(189.8, 51.6);
        crc2.bezierCurveTo(189.8, 51.6, 118.7, 54.9, 103.9, 59.8);
        crc2.bezierCurveTo(89.0, 64.8, 192.0, 32.3, 208.0, 45.0);
        crc2.bezierCurveTo(224.0, 57.6, 189.8, 54.9, 189.8, 54.9);
        crc2.lineTo(189.8, 51.6);
        crc2.closePath();
        crc2.fill();

        // ebene1/Pfad
        crc2.beginPath();
        crc2.moveTo(196.4, 36.7);
        crc2.bezierCurveTo(196.4, 36.7, 79.1, 56.5, 72.4, 54.9);
        crc2.bezierCurveTo(64.4, 52.9, 217.9, -6.3, 244.4, 23.5);
        crc2.bezierCurveTo(270.8, 53.2, 196.4, 36.7, 196.4, 36.7);
        crc2.closePath();
        crc2.fill();

        // ebene1/Pfad
        crc2.beginPath();
        crc2.moveTo(295.6, 21.8);
        crc2.bezierCurveTo(295.6, 21.8, 133.6, 28.4, 100.6, 15.2);
        crc2.bezierCurveTo(308.9, -19.5, 330.4, 15.2, 333.7, 21.8);
        crc2.bezierCurveTo(338.6, 48.3, 295.6, 21.8, 295.6, 21.8);
        crc2.closePath();
        crc2.fill();

        // ebene1/Pfad
        crc2.beginPath();
        crc2.moveTo(399.8, 48.3);
        crc2.lineTo(269.2, 14.9);
        crc2.bezierCurveTo(269.2, 14.9, 475.8, -1.3, 456.0, 48.3);
        crc2.bezierCurveTo(436.2, 97.9, 399.8, 48.3, 399.8, 48.3);
        crc2.closePath();
        crc2.fill();

        // ebene1/Pfad
        crc2.beginPath();
        crc2.moveTo(247.7, 590.5);
        crc2.bezierCurveTo(247.7, 590.5, 256.0, 562.4, 260.9, 559.1);
        crc2.bezierCurveTo(265.9, 555.8, 298.9, 549.2, 292.3, 476.5);
        crc2.bezierCurveTo(291.2, 464.5, 335.3, 473.2, 335.3, 473.2);
        crc2.bezierCurveTo(335.3, 473.2, 344.0, 553.4, 360.1, 557.5);
        crc2.bezierCurveTo(386.6, 564.1, 381.6, 590.5, 381.6, 590.5);
        crc2.fillStyle = "rgb(253, 212, 182)";
        crc2.fill();

        // ebene1/Pfad
        crc2.beginPath();
        crc2.moveTo(103.9, 436.8);
        crc2.lineTo(118.7, 445.0);
        crc2.bezierCurveTo(118.7, 445.0, 214.6, 378.9, 256.0, 428.5);
        crc2.bezierCurveTo(272.5, 421.9, 272.5, 421.9, 272.5, 421.9);
        crc2.bezierCurveTo(272.5, 421.9, 219.6, 349.2, 103.9, 436.8);
        crc2.closePath();
        crc2.fillStyle = "rgb(136, 110, 28)";
        crc2.fill();

        // ebene1/Pfad
        crc2.beginPath();
        crc2.moveTo(510.6, 436.8);
        crc2.lineTo(495.7, 445.0);
        crc2.bezierCurveTo(495.7, 445.0, 399.8, 378.9, 358.5, 428.5);
        crc2.bezierCurveTo(341.9, 421.9, 341.9, 421.9, 341.9, 421.9);
        crc2.bezierCurveTo(341.9, 421.9, 394.8, 349.2, 510.6, 436.8);
        crc2.closePath();
        crc2.fill();

        // ebene1/Pfad
        crc2.beginPath();
        crc2.moveTo(505.1, 785.3);
        crc2.bezierCurveTo(523.8, 762.0, 548.2, 743.9, 559.8, 696.0);
        crc2.bezierCurveTo(616.8, 537.0, 630.8, 438.0, 571.8, 329.0);
        crc2.bezierCurveTo(500.8, 196.0, 346.8, 212.0, 346.8, 212.0);
        crc2.bezierCurveTo(346.8, 212.0, 717.8, 285.0, 505.1, 785.3);
        crc2.closePath();
        crc2.fillStyle = "rgb(224, 188, 166)";
        crc2.fill();

        // ebene1/Pfad
        crc2.beginPath();
        crc2.moveTo(583.0, 625.3);
        crc2.bezierCurveTo(583.0, 625.3, 614.7, 638.5, 646.1, 483.1);
        crc2.bezierCurveTo(652.9, 449.7, 608.9, 500.5, 608.9, 500.5);
        crc2.lineTo(583.0, 625.3);
        crc2.closePath();
        crc2.fill();

        // ebene1/Pfad
        crc2.beginPath();
        crc2.moveTo(592.0, 581.5);
        crc2.bezierCurveTo(592.0, 581.5, 629.6, 532.7, 626.3, 512.8);
        crc2.bezierCurveTo(623.0, 493.0, 605.7, 515.5, 605.7, 515.5);
        crc2.lineTo(592.0, 581.5);
        crc2.closePath();
        crc2.fillStyle = "rgb(238, 200, 174)";
        crc2.fill();

        // ebene1/Pfad
        crc2.beginPath();
        crc2.moveTo(65.8, 613.7);
        crc2.bezierCurveTo(65.8, 613.7, 3.0, 519.4, 12.9, 481.4);
        crc2.bezierCurveTo(15.3, 472.4, 36.1, 486.4, 36.1, 486.4);
        crc2.lineTo(65.8, 613.7);
        crc2.closePath();
        crc2.fillStyle = "rgb(224, 187, 165)";
        crc2.fill();

        // ebene1/Pfad
        crc2.beginPath();
        crc2.moveTo(54.3, 564.1);
        crc2.bezierCurveTo(54.3, 564.1, 27.8, 522.8, 31.1, 517.8);
        crc2.bezierCurveTo(34.4, 512.8, 41.0, 509.5, 41.0, 509.5);
        crc2.lineTo(54.3, 564.1);
        crc2.closePath();
        crc2.fillStyle = "rgb(238, 200, 174)";
        crc2.fill();

        // ebene1/Rechteck
        crc2.beginPath();
        crc2.moveTo(1550.4, 771.1);
        crc2.lineTo(1140.9, 771.1);
        crc2.lineTo(1140.9, 173.5);
        crc2.lineTo(1550.4, 173.5);
        crc2.lineTo(1550.4, 771.1);
        crc2.closePath();
        crc2.fillStyle = "rgb(155, 255, 242)";
        crc2.fill();
        crc2.strokeStyle = "rgb(28, 28, 26)";
        crc2.lineCap = "round";
        crc2.stroke();

        // ebene1/Rechteck
        crc2.beginPath();
        crc2.moveTo(1536.9, 766.2);
        crc2.lineTo(1151.2, 766.2);
        crc2.lineTo(1151.2, 187.7);
        crc2.lineTo(1536.9, 187.7);
        crc2.lineTo(1536.9, 766.2);
        crc2.closePath();
        crc2.fillStyle = "rgb(241, 241, 241)";
        crc2.fill();
        crc2.stroke();

        // ebene1/Pfad
        crc2.beginPath();
        crc2.moveTo(1151.3, 187.5);
        crc2.lineTo(1356.3, 112.5);
        crc2.lineTo(1356.3, 810.5);
        crc2.lineTo(1151.3, 766.5);
        crc2.lineTo(1151.3, 187.5);
        crc2.closePath();
        crc2.fillStyle = "rgb(155, 241, 229)";
        crc2.fill();
        crc2.stroke();

        // ebene1/Ellipse
        crc2.beginPath();
        crc2.moveTo(1315.8, 464.5);
        crc2.bezierCurveTo(1315.8, 474.2, 1321.2, 482.0, 1327.8, 482.0);
        crc2.bezierCurveTo(1334.4, 482.0, 1339.8, 474.2, 1339.8, 464.5);
        crc2.bezierCurveTo(1339.8, 454.8, 1334.4, 447.0, 1327.8, 447.0);
        crc2.bezierCurveTo(1321.2, 447.0, 1315.8, 454.8, 1315.8, 464.5);
        crc2.closePath();
        crc2.fillStyle = "rgb(255, 255, 255)";
        crc2.fill();

        // ebene1/Pfad
        crc2.beginPath();
        crc2.moveTo(247.7, 590.5);
        crc2.bezierCurveTo(247.7, 590.5, 242.7, 615.3, 264.2, 615.3);
        crc2.bezierCurveTo(285.7, 615.3, 313.8, 623.6, 315.5, 625.3);
        crc2.bezierCurveTo(315.5, 625.3, 317.1, 618.6, 315.5, 617.0);
        crc2.bezierCurveTo(313.8, 615.3, 291.3, 610.9, 289.0, 610.4);
        crc2.bezierCurveTo(282.7, 609.0, 266.7, 607.1, 264.2, 608.7);
        crc2.bezierCurveTo(261.1, 610.8, 251.0, 590.5, 252.7, 590.5);
        crc2.bezierCurveTo(254.3, 590.5, 247.7, 590.5, 247.7, 590.5);
        crc2.closePath();
        crc2.fillStyle = "rgb(236, 200, 175)";
        crc2.fill();

        // ebene1/Pfad
        crc2.beginPath();
        crc2.moveTo(383.5, 590.5);
        crc2.bezierCurveTo(383.5, 590.5, 388.5, 615.3, 367.0, 615.3);
        crc2.bezierCurveTo(345.5, 615.3, 317.4, 623.6, 315.7, 625.3);
        crc2.bezierCurveTo(315.7, 625.3, 314.1, 618.6, 315.7, 617.0);
        crc2.bezierCurveTo(317.4, 615.3, 339.9, 610.9, 342.2, 610.4);
        crc2.bezierCurveTo(348.5, 609.0, 364.5, 607.1, 367.0, 608.7);
        crc2.bezierCurveTo(370.1, 610.8, 380.2, 590.5, 378.5, 590.5);
        crc2.bezierCurveTo(376.9, 590.5, 383.5, 590.5, 383.5, 590.5);
        crc2.closePath();
        crc2.fill();

        // ebene1/Pfad
        crc2.beginPath();
        crc2.moveTo(350.8, 680.8);
        crc2.bezierCurveTo(350.8, 681.0, 350.8, 686.0, 350.8, 686.0);
        crc2.bezierCurveTo(350.8, 686.0, 351.8, 685.0, 354.8, 685.0);
        crc2.bezierCurveTo(357.8, 685.0, 359.8, 686.0, 359.8, 686.0);
        crc2.lineTo(359.8, 678.2);
        crc2.bezierCurveTo(359.8, 678.2, 355.8, 678.0, 350.8, 680.8);
        crc2.closePath();
        crc2.fillStyle = "rgb(220, 123, 123)";
        crc2.fill();

        // ebene1/Pfad
        crc2.beginPath();
        crc2.moveTo(350.8, 685.0);
        crc2.lineTo(350.8, 687.0);
        crc2.lineTo(355.8, 687.0);
        crc2.lineTo(359.8, 687.0);
        crc2.lineTo(359.8, 685.0);
        crc2.bezierCurveTo(359.8, 685.0, 355.8, 682.0, 350.8, 685.0);
        crc2.closePath();
        crc2.fillStyle = "rgb(164, 97, 97)";
        crc2.fill();

        // ebene1/Pfad
        crc2.beginPath();
        crc2.moveTo(359.8, 687.0);
        crc2.lineTo(359.8, 716.5);
        crc2.bezierCurveTo(359.8, 716.5, 350.8, 718.7, 350.8, 718.3);
        crc2.bezierCurveTo(350.8, 718.0, 350.8, 687.0, 350.8, 687.0);
        crc2.lineTo(359.8, 687.0);
        crc2.closePath();
        crc2.fillStyle = "rgb(0, 0, 0)";
        crc2.fill();

        // ebene1/Pfad
        crc2.beginPath();
        crc2.moveTo(368.3, 485.5);
        crc2.bezierCurveTo(368.3, 485.5, 375.8, 503.0, 392.3, 506.5);
        crc2.bezierCurveTo(408.8, 528.0, 401.8, 541.0, 389.8, 548.0);
        crc2.bezierCurveTo(377.8, 555.0, 357.8, 524.0, 363.3, 511.5);
        crc2.bezierCurveTo(368.8, 499.0, 368.3, 485.5, 368.3, 485.5);
        crc2.closePath();
        crc2.fillStyle = "rgb(155, 241, 229)";
        crc2.fill();

        // ebene1/Pfad
        crc2.beginPath();
        crc2.moveTo(384.3, 561.4);
        crc2.bezierCurveTo(384.3, 561.4, 397.3, 581.3, 406.9, 581.9);
        crc2.bezierCurveTo(416.5, 582.6, 419.9, 599.7, 413.7, 601.8);
        crc2.bezierCurveTo(407.6, 603.8, 392.5, 600.4, 393.9, 593.6);
        crc2.bezierCurveTo(395.3, 586.7, 384.3, 564.8, 384.3, 564.8);
        crc2.fill();

        // ebene1/Ellipse
        crc2.beginPath();
        crc2.moveTo(386.8, 509.5);
        crc2.bezierCurveTo(386.8, 510.9, 387.9, 512.0, 389.3, 512.0);
        crc2.bezierCurveTo(390.7, 512.0, 391.8, 510.9, 391.8, 509.5);
        crc2.bezierCurveTo(391.8, 508.1, 390.7, 507.0, 389.3, 507.0);
        crc2.bezierCurveTo(387.9, 507.0, 386.8, 508.1, 386.8, 509.5);
        crc2.closePath();
        crc2.fillStyle = "rgb(231, 231, 231)";
        crc2.fill();

        // ebene1/Ellipse
        crc2.beginPath();
        crc2.moveTo(375.8, 517.5);
        crc2.bezierCurveTo(375.8, 520.5, 374.0, 523.0, 371.8, 523.0);
        crc2.bezierCurveTo(369.6, 523.0, 367.8, 520.5, 367.8, 517.5);
        crc2.bezierCurveTo(367.8, 514.5, 369.6, 512.0, 371.8, 512.0);
        crc2.bezierCurveTo(374.0, 512.0, 375.8, 514.5, 375.8, 517.5);
        crc2.closePath();
        crc2.fill();

        // ebene1/Ellipse
        crc2.beginPath();
        crc2.moveTo(412.8, 596.5);
        crc2.bezierCurveTo(412.8, 598.4, 411.7, 600.0, 410.3, 600.0);
        crc2.bezierCurveTo(408.9, 600.0, 407.8, 598.4, 407.8, 596.5);
        crc2.bezierCurveTo(407.8, 594.6, 408.9, 593.0, 410.3, 593.0);
        crc2.bezierCurveTo(411.7, 593.0, 412.8, 594.6, 412.8, 596.5);
        crc2.closePath();
        crc2.fill();
        crc2.restore();

    }
}