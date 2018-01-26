 /* Aufgabe 10: Weihnachtsbaumkonfigurator
Name: Ngo, Thi Lien
Matrikel: 256778
Datum: 21.12.2017
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace Aufgabe10 { 
    
    
    window.addEventListener("load", init);  
 //   window.addEventListener("change", createWarenkorb); 

    let name: HTMLInputElement; //variable Name vom typ htmlinputelement... 
    let strasse: HTMLInputElement; 
    let hNr: HTMLInputElement;
    let ort: HTMLInputElement;
    let plz: HTMLInputElement;
    let mail: HTMLInputElement;
       
    let label: HTMLLabelElement;

    let cartBaum: string [] =[] //die variable cartbaum vom typ stringarray --name + preis von baumklein etc. in cartBaum speichern
    let cartHalterung: string[] = ["keine Halterung gewaehlt", "0"]; 
    let cartLichterkette: string[] = [Lichterkette[0][0], "" + Lichterkette[0][1]]; //name + preis von Kerzen in kerz speichern
    let cartSchmuck: string[][] = [];
    let cartLiefern: string[] = ["keine Lieferoption gewaehlt", "0"];
    

    
    
    
    
  // ----------------- FUNKTION INIT----------------------------
  //------------------------------------------------------------
    
    function init(): void {
        
        initBaum(); //initalisiert die ganzen Daten für die Baumarten - funktionsaufruf
        initHalterung();
        initLichterkette();
        initSchmuck();
          
        initDaten();
        
  //-Lieferoptionen--
        
        let lieferopt: HTMLDivElement = <HTMLDivElement>document.getElementById("lieferoptionen"); // getElementById = programm sucht im html die id lieferelement - 
        for (let i: number = 0; i < angebot.length; i++) { //i< = ABBRUCHKRITERIUM, LAUFZEITKRITERIUM 
            if (angebot[i].kind == "Lieferung") { // 
                let radioB2: HTMLInputElement = document.createElement("input"); //variable radioB2 typ htmlinputelement
                radioB2.type = "radio"; //soll ein radiobutton sein - greift später auf die Daten zu wenn ich den warenkorb generiere
                radioB2.name = "radioGroupLieferoptionen"; 
                radioB2.value = "radio2." + i; //läuft ganzes angebot ab bis lieferung findet ...i.20 ....
                radioB2.id = "radio2." + i;
                lieferopt.appendChild(radioB2);

                let label3: HTMLLabelElement = document.createElement("label"); //element danamisch gemacht
                label3.id = "label3." + i; //label zB Standardlieferung
                label3.htmlFor = radioB2.id; 
                label3.innerText = angebot[i].name;
                lieferopt.appendChild(label3);
            }
        }

    //-Button:--
        let button: HTMLDivElement = <HTMLDivElement>document.getElementById("button"); //element danamisch gemacht
        let submit: HTMLButtonElement = document.createElement("button");
        submit.name = "Button";
        submit.type = "button";
        submit.innerText = "Bestellung pruefen";
        submit.addEventListener("mousedown", handleMouseDown);
        button.appendChild(submit);
        
        
    }
    
  //--------------------------------------------------------------  
  //--------------------------------------------------------------  
    
    
    

    //--------------- FUNKTION BAUM-DYNAMISCHER CODE -------------
    
    function initBaum(): void {
        
        //Baumart:
        let baumart: HTMLDivElement = <HTMLDivElement>document.getElementById("baumart"); //an die stelle wo die id im html steht
        let selectBaum: HTMLSelectElement = document.createElement("select"); //
        selectBaum.name = "SelectBaumart"; //create das element das heisst select
        selectBaum.id = "selectBaumart"; //ich geb der id den namen select baumart
        baumart.appendChild(selectBaum);
        
        for (let i: number = 0; i < angebot.length; i++) { //geht das Angebot durch
            if (angebot[i].kind == "Baumart") { //wenn 
                let opt: HTMLElement = document.createElement("option");
                opt.innerText = angebot[i].name;
                opt.id = "option" + i;
                selectBaum.appendChild(opt); 
            }
        }
    }
    
   //---------------------HALTERUNG DYNAMISCH ------------------------------
    
    function initHalterung(): void {
        
        
        let halterung: HTMLDivElement = <HTMLDivElement>document.getElementById("halterung");
        for (let i: number = 0; i < angebot.length; i++) {
            if (angebot[i].kind == "Halterung") {
                let radioB: HTMLInputElement = document.createElement("input");
                radioB.type = "radio";
                radioB.name = "radioGroupHalterung";
                radioB.value = "radio" + i;
                radioB.id = "radio" + i;
                halterung.appendChild(radioB);

                label = document.createElement("label");
                label.id = "label" + i;
                label.htmlFor = radioB.id;
                label.innerText = angebot[i].name;
                halterung.appendChild(label);
            }
        }
    }
    
    
   //-------------------LICHTERKETTE DYNAMISCH-------------------------
     function initLichterkette(): void {
        
        let Lichterkette: HTMLDivElement = <HTMLDivElement>document.getElementById("Lichterkette");
        let selectBox2: HTMLSelectElement = document.createElement("select");
        selectBox2.name = "SelectBeleuchtung"; //selektbox wird in html angehängt
        selectBox2.id = "selectBeleuchtung";
        Lichterkette.appendChild(selectBox2);
         
        for (let i: number = 0; i < angebot.length; i++) {

            if (angebot[i].kind == "Beleuchtung") { //Alle beleuchtungsarten werden
                var opt2: HTMLElement = document.createElement("option"); //alle beleuchtungsarten werden als optionen gespeichert bekommen eine id --optionen werden an selektbox drangehöngt
                opt2.innerText = angebot[i].name;
                opt2.id = "option2." + i; 
                selectBox2.appendChild(opt2);
            }
        }
    }
    
    //-------------------SCHMUCK DYNAMISCH------------------------------------
    
    
    function initSchmuck(): void {
        
        let schmuckartikel: HTMLDivElement = <HTMLDivElement>document.getElementById("schmuckartikel"); //var schmuckartikel soll an die stelle wo im htm die id schmuckartiekel steht
        for (let i: number = 0; i < angebot.length; i++) {
            
            if (angebot[i].kind == "Schmuck") { //wenn die art von angebot "schmuck" ist 
                let checkB: HTMLInputElement = document.createElement("input"); // dann mach ne variable checkB vom typ HTMLInput Element = soll ein inputelement kreieren-- mache checkbox für zb Kugel rot
                checkB.type = "checkbox"; //soll vom typ checkbox sein
                checkB.name = "CheckboxSchmuckartikel"; //name soll .. sein
                checkB.value = "check"; //Wert soll check sein
                checkB.id = "check" + i; // könnte check 15 sein... id= check 15 
                schmuckartikel.appendChild(checkB);
            

                let label2: HTMLLabelElement = document.createElement("label"); // 
                label2.id = "label2." + i; 
                label2.htmlFor = checkB.id;
                label2.innerText = angebot[i].name;
                schmuckartikel.appendChild(label2); //

                let stepper: HTMLInputElement = document.createElement("input");
                stepper.type = "number";
                stepper.name = "StepperSchmuckartikel" + i;
                stepper.value = "1";
                stepper.id = "stepper" + i;
                stepper.min = "0";
                stepper.max = "10";
                stepper.step = "1";
                schmuckartikel.appendChild(stepper);
                let br: HTMLElement = document.createElement("br"); //break elemnt
                schmuckartikel.appendChild(br);
            }
        }

    }
    
    
    
    //----------------------FUNKTION DATEN -------------------------------------
    
    function initDaten(): void {

        let daten: HTMLDivElement = <HTMLDivElement>document.getElementById("daten"); //var daten typ html... da wo die id = daten steht 
        name = document.createElement("input"); 
        name.type = "text"; 
        name.name = "DatenName";
        name.placeholder = "Name";
        name.pattern = "[a-zA-Z]{1,}";
        name.required = true; //checked ob alle namen eingegeben wurden .. kunde gibt nichts ein... fehlermeldung
        daten.appendChild(name);

        strasse = document.createElement("input");
        strasse.type = "text";
        strasse.name = "DatenStrasse";
        strasse.placeholder = "Strasse";
        strasse.pattern = "[a-zA-Z]{1,}";
        strasse.required = true;
        daten.appendChild(strasse);

        hNr = document.createElement("input");
        hNr.type = "text";
        hNr.name = "DatenHausnummer";
        hNr.placeholder = "Hausnummer";
        hNr.pattern = "[0-9]{1,}";
        hNr.required = true;
        daten.appendChild(hNr);

        ort = document.createElement("input");
        ort.type = "text";
        ort.name = "DatenOrt";
        ort.placeholder = "Ort";
        ort.pattern = "[a-zA-Z]{1,}";
        ort.required = true;
        daten.appendChild(ort);

        plz = document.createElement("input");
        plz.type = "text";
        plz.name = "DatenPLZ";
        plz.placeholder = "Postleitzahl";
        plz.pattern = "[0-9]{5}";
        plz.required = true;
        daten.appendChild(plz);

        mail = document.createElement("input");
        mail.type = "email";
        mail.name = "DatenMail";
        mail.placeholder = "E-Mail";
        mail.required = true;
        daten.appendChild(mail); //alle infos generier ich in die variable daten
    }
    
    
    
   /* 
    //--------------- FUNKTION WARENKORB----------------------
    function createWarenkorb(_event: Event): void {
        let target: HTMLInputElement = <HTMLInputElement>_event.target; //Target sind alle input elemente
        let stepper: HTMLInputElement[] = [];
        let checkBoxes: HTMLInputElement[] = [];
        let gesamtpreis: number = 0;

        for (let i: number = 0; i < angebot.length; i++) { //Angebot nach Schmuck durchsuchen
            if (angebot[i].kind == "Schmuck") {
                stepper[i] = <HTMLInputElement>document.getElementById("stepper" + i); //jedes Element, das als ID stepper hat wird in let stepper gespeichert
                checkBoxes[i] = <HTMLInputElement>document.getElementById("check" + i); //jedes Element, das als ID check hat wird in let checkboxes gespeichert   
            }
            if (target.value == angebot[i].name && target.id == "selectBaumart") {//wenn target value mit einem name in angebot übereinstimmt und die id des targets selectbaumart ist
                cartBaum[0] = angebot[i].name; //dann speichere jetzt an erster stelle in cartBaum den name des Artikels
                cartBaum[1] = "" + angebot[i].price; //an zweiter stelle den preis des artikels
            }
            if (target.id == "radio" + i) {
                cartHalterung[0] = angebot[i].name;
                cartHalterung[1] = "" + angebot[i].price;

            }
            if (target.id == "radio2." + i) {
                cartLiefern[0] = angebot[i].name;
                cartLiefern[1] = "" + angebot[i].price;

            }

            if (target.value == angebot[i].name && target.id == "selectBeleuchtung") {
                cartLichterkette[0] = angebot[i].name;
                cartLichterkette[1] = "" + angebot[i].price;

            }

            if (target.id == "check" + i || target.id == "stepper" + i) {//wenn die target id check i oder stepper i heisst
                cartSchmuck[i] = [angebot[i].name, "" + (angebot[i].price * parseInt(stepper[i].value))]; //dann speicher in cartSchmuck den name des artikels und den preis (Wert des steppers in zahl umwandeln)
            }
        }
        
        let korb: HTMLDivElement = <HTMLDivElement>document.getElementById("korb");
        korb.style.width = "25%";
        korb.style.height = "100%";
        korb.style.backgroundColor = "#0d640b";
        korb.style.color = "white";
        
        korb.innerHTML = "<div class='warenkorb'>Warenkorb</div><hr>";
        korb.innerHTML += "" + cartBaum[0] + " " + cartBaum[1] + " Euro <br>"; //Name + Preis des Artikels sind in cartBaum drin
        korb.innerHTML += "Weihnachtsbaumhalterung: " + cartHalterung[0] + " " + cartHalterung[1] + " Euro <br>"; 
        korb.innerHTML += "" + cartLichterkette[0] + " " + cartLichterkette[1] + "Euro <br>";
        korb.innerHTML += " " + cartLiefern[0] + " " + cartLiefern[1] + " Euro <br>";

        gesamtpreis = parseFloat(cartBaum[1]) + parseFloat(cartHalterung[1]) + parseFloat(cartLiefern[1]); //parseFloat convertiert string in Zahl: Preise als Zahlen umkodieren
        for (let i: number = 0; i < stepper.length; i++) { //alle Stepper durchgehen
            if (checkBoxes[i] != null && checkBoxes[i].checked == true) { //wenn checkboxen angeklickt
              
                gesamtpreis += parseFloat(cartSchmuck[i][1]); // dann rechne zum gesamtpreis den preis des Schmuckobjekts als zahl dazu
               
                korb.innerHTML += "" + cartSchmuck[i][0] + " " + cartSchmuck[i][1] + " Euro <br>"; //erweitere den warenkorb durch name und preis des schmuckobjekts das angeklickt wurde
            }
        }
        korb.innerHTML += "<hr> Gesamtpreis: " + Math.round(gesamtpreis * 100) / 100 + " Euro";
    }

    
*/    
    
    
    //----------------------FUNKTION HANDLE MOUSE DOWN---------------------------------------

    function handleMouseDown(_event: MouseEvent): void { //bei submit button
        let review: HTMLDivElement = document.createElement("div");
        
        review.style.paddingBottom = "0.5em";
        
        if (name.checkValidity() == false || strasse.checkValidity() == false ||  ort.checkValidity() == false  || mail.checkValidity() == false) {
            review.innerText = "Deine Daten sind leider nicht korrekt. Bitte ueberpruefe sie.";
            review.style.color = "#E74C3C";
            document.body.appendChild(review);
        }
        
        else {
            review.innerText = "Deine Daten sind korrekt, Danke.";
            review.style.color = "#ff0031";
            document.body.appendChild(review);
        }
    }
}