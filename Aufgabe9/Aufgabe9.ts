/* Aufgabe : Erpresserbrief
Name: Ngo, Thi Lien
Matrikel: 256778
Datum: 13.12.2017

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.

*/


namespace Aufgabe9 {
    window.addEventListener("load", init);
 //Globale Variable anlegen. -wie kann ich die versch. Div's vergleichen?
    let currentLetter: string;    

    document.addEventListener ("keydown", tastaturEingabe);
    

   function init(): void{
       
       let alphabet: string [] = ["A", "B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","X","Y","Z"]
       let anzahl: number = alphabet.length;
       
      
       if (anzahl == alphabet.length){
           for (let i: number = 0; i < alphabet.length; i++){
               drawRect(alphabet[i]);
           }
        }
       drawKasten();
    }
    
    //handle click wird immmer aufgerufen, wenn mans anklickt 
    //Event.target gibt dir das objekt zurück - liefert div zurück
    
    
 //---------Funktion Kästchen (um Buchstaben) Zeichnen--------
    function drawRect (_alphabet: string): void {

        let div: HTMLDivElement = document.createElement("div"); //div erstellen
      

        div.style.width = "40px"; //Returns a String of an object
        div.style.height = "40px";
        div.style.backgroundColor = "lightgrey";
        div.innerText = _alphabet; // 
        div.style.marginLeft = "2px";
        div.style.marginTop = "2px"; //
        div.id = _alphabet;
        div.className = "letters";
        
        div.addEventListener("click", handleClick);
        document.body.appendChild(div); //html ELement in den Code einfügen lassen - hängt div an body dran - wird gezeichnet
    }
    
    
  //------ Funktion große Box zeichnen----
    function drawKasten(): void {
            let letter: HTMLDivElement = document.createElement("div");
        
            letter.style.width = "800px"; //Returns a String of an object
            letter.style.height = "300px";
            letter.style.backgroundColor = "grey";
            letter.style.marginLeft = "2px";
            letter.style.marginTop = "2px"; //
           
            letter.addEventListener("click", putLetter);
            document.body.appendChild(letter);
        }
    
    
    
 //----- Funktion: Farbe ändert sich durch einen Klick
    function handleClick(_event: MouseEvent): void {
            let click: HTMLDivElement = <HTMLDivElement>_event.target;
            click.style.backgroundColor = "lightblue";
            
            currentLetter  = click.id;
             
            let divlist: NodeListOf<HTMLDivElement> = <NodeListOf<HTMLDivElement>> document.getElementsByClassName("letters");
            
            for (let i: number = 0; i < divlist.length; i++) {
                if (currentLetter != divlist[i].id) {
                divlist[i].style.backgroundColor = "lightgrey";
                    
    
                }
            }
     }

    
    //---------Funktion: Buchstaben werden in den Brief gesetzt
    
        function putLetter(_event: MouseEvent): void {
            let box: HTMLDivElement = document.createElement("div");

            box.style.width = "30px";
            box.style.height = "30px";
            box.style.backgroundColor = "blue";
            box.innerText = currentLetter;
            box.style.marginLeft = "3px";
            box.style.marginTop = "3px";
            box.id = currentLetter;
            box.className = "letters";
            box.style.position = "absolute";
            box.style.left = _event.pageX + "px";
            box.style.top = _event.pageY + "px";
            
            
            document.body.appendChild(box);
            box.addEventListener("click", deleteLetter);

            
            let clicking: HTMLDivElement = <HTMLDivElement>_event.target;  
               
        }
    
    
    
    
    //Funktion:Buchstaben mit Tastaturklick auswählen
    function tastaturEingabe(event: KeyboardEvent): void {
        
        if (event.key == "a" || event.key == "A") { 
            currentLetter = event.key; 
            putLetter;
        }
        
        else if (event.key == "b" || event.key == "B") {
            currentLetter = event.key;
            putLetter;
        }
        
        else if (event.key == "c" || event.key == "C") {
            currentLetter = event.key;
            putLetter;
        }

        else if (event.key == "d" || event.key == "D") {
            currentLetter = event.key;
            putLetter;
        }

        else if (event.key == "e" || event.key == "E") {
            currentLetter = event.key;
            putLetter;
        }

        else if (event.key == "f" || event.key == "F") {
            currentLetter = event.key;
            putLetter;
        }

        else if (event.key == "g" || event.key == "G") {
            currentLetter = event.key;
            putLetter;
        }

        else if (event.key == "h" || event.key == "H") {
            currentLetter = event.key;
            putLetter;
        }

        else if (event.key == "i" || event.key == "I") {
            currentLetter = event.key;
            putLetter;
        }

        else if (event.key == "j" || event.key == "J") {
            currentLetter = event.key;
            putLetter;
        }

        else if (event.key == "k" || event.key == "K") {
            currentLetter = event.key;
            putLetter;
        }

        else if (event.key == "l" || event.key == "L") {
            currentLetter = event.key;
            putLetter;
        }

        else if (event.key == "m" || event.key == "M") {
            currentLetter = event.key;
            putLetter;
        }

        else if (event.key == "n" || event.key == "N") {
            currentLetter = event.key;
            putLetter;
        }

        else if (event.key == "o" || event.key == "O") {
            currentLetter = event.key;
            putLetter;
        }

        else if (event.key == "p" || event.key == "P") {
            currentLetter = event.key;
            putLetter;
        }

        else if (event.key == "q" || event.key == "Q") {
            currentLetter = event.key;
            putLetter;
        }

        else if (event.key == "r" || event.key == "R") {
            currentLetter = event.key;
            putLetter;
        }

        else if (event.key == "s" || event.key == "S") {
            currentLetter = event.key;
            putLetter;
        }

        else if (event.key == "t" || event.key == "T") {
            currentLetter = event.key;
            putLetter;
        }

        else if (event.key == "u" || event.key == "U") {
            currentLetter = event.key;
            putLetter;
        }

        else if (event.key == "v" || event.key == "V") {
            currentLetter = event.key;
            putLetter;
        }

        else if (event.key == "w" || event.key == "W") {
            currentLetter = event.key;
            putLetter;
        }

        else if (event.key == "x" || event.key == "X") {
            currentLetter = event.key;
            putLetter;
        }

        else if (event.key == "y" || event.key == "Y") {
            currentLetter = event.key;
            putLetter;
        }

        else if (event.key == "z" || event.key == "Z") {
            currentLetter = event.key;
            putLetter;
        }


    }

    
    
    //------ Funktion: Alt Taste gedrückt halten (1) 
    function handleAlt (_event: KeyboardEvent): void {
        if(_event.keyCode ==18) {
            deleteLetter;
            }
        }
    
    //------- Funkton: Buchstaben entfernen (2)
    function deleteLetter(_event:MouseEvent): void {
        let _delete: HTMLDivElement = <HTMLDivElement> _event.target;
        document.addEventListener("keypressed", handleAlt);
        document.body.removeChild(_delete);
        }
  

}
    
    


  