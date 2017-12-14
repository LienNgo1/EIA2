/* Aufgabe 8: RandomBoxes
Name: Ngo, Thi Lien
Matrikel: 256778
Datum: 8.12.2017

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.

*/


namespace Aufgabe8 {
    window.addEventListener("load", init);
 

   function init(): void{
       let alphabet: string [] = ["A", "B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","X","Y","Z"]
       let anzahl: number = alphabet.length;
       
       if (anzahl == alphabet.length){
           for (let i: number = 0; i < alphabet.length; i++){
               drawRect(alphabet[i]);
               }
           }
       }
    
    
    
 //Funktion Kästchen Zeichnen
    function drawRect (_alphabet: string): void {

        let div: HTMLDivElement = document.createElement("div"); //div erstellen
      

        div.style.width = "40px"; //Returns a String of an object
        div.style.height = "40px";
        div.style.backgroundColor = "red";
        div.innerText = _alphabet;
        div.style.marginLeft = "2px";
        div.style.marginTop = "2px";
        
 
        document.body.appendChild(div); //html ELement in den Code einfügen lassen - hängt div an body dran - wird gezeichnet
    }
}

