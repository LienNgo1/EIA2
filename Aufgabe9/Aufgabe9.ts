/* Aufgabe : Erpresserbrief
Name: Ngo, Thi Lien
Matrikel: 256778
Datum: 8.12.2017

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.

*/


namespace Aufgabe9 {
    window.addEventListener("load", init);
 //Globale Variable anlegen. -wie kann ich die versch. Div's vergleichen?
let currentLetter: string;    

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
    
 //Funktion Kästchen Zeichnen
    function drawRect (_alphabet: string): void {

        let div: HTMLDivElement = document.createElement("div"); //div erstellen
      

        div.style.width = "40px"; //Returns a String of an object
        div.style.height = "40px";
        div.style.backgroundColor = "red";
        div.innerText = _alphabet; // 
        div.style.marginLeft = "2px";
        div.style.marginTop = "2px"; //
        div.id = _alphabet;
        div.className = "letters";
        
        div.addEventListener("click", handleClick);
        document.body.appendChild(div); //html ELement in den Code einfügen lassen - hängt div an body dran - wird gezeichnet
    }
    
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
    
    function handleClick(_event: MouseEvent): void {
            let click: HTMLDivElement = <HTMLDivElement>_event.target;
            click.style.backgroundColor = "blue";
            
            currentLetter  = click.id;
             
            let divlist: NodeListOf<HTMLDivElement> = <NodeListOf<HTMLDivElement>> document.getElementsByClassName("letters");
            
            for (let i: number = 0; i < divlist.length; i++) {
                if (currentLetter != divlist[i].id) {
                divlist[i].style.backgroundColor = "red";
                    
    
                    }
                }
        }
    /*function handleClick(_event: MouseEvent): void{
        let click: HTMLDivElement = <HTMLDivElement>_event.target;
        click.style.backgroundColor = "black";
        //property vom click verändert = blacl´k
        currentletter = click.id;
        
        let divlist: NodeListOf<HTMLDivElement> = <NodeListOf<HTMLDivElement>> document.getElementsByClassName("letters");
        
        // divlist ist von type nodelist of htmldiv element - hinter dem doppelpunkt: datentyp
        // nodelistof ... wie ien array ... kann viele versch. datentyp speichern
        //get element by clas name... 
        
        for(let i: number = 0; i<divlist.length; i++)<{
         if(currentLetter != divlist[i].idy    //wenn der Buchstabe "currentletter" nicht gleich divlist ist der angeklickt ist
            divlist[i].style.backgroundColor = "blue"; //dann wird der Buchstabe wieder blau
       }
    }
    
    */
    
   
        
  
    
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

            
let clicking: HTMLDivElement = <HTMLDivElement>_event.target;  
               
        }
    }
  