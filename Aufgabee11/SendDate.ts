/* Aufgabe 10: Weihnachtsbaumkonfigurator
Name: Ngo, Thi Lien
Matrikel: 256778
Datum: 21.12.2017
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/


namespace Aufgabe111 {
    window.addEventListener("load", init); // Wenn Fenster geöffnet wird soll die Funktion init aufgerufen werden
    
    let label: HTMLLabelElement; //variable wird erstellt vom Typ HTMLLabelElement
    
    //AuswahlBoxen
    let baumart: HTMLSelectElement = document.createElement("select");  //Variable Baumart vom Typ HTMLSelectElement soll ein Element "select" kreieren - zum auswählen
    let halterungtyp: HTMLSelectElement = document.createElement("select");
    let lieferopttyp: HTMLSelectElement = document.createElement("select");
    
    var korb: HTMLDivElement = document.createElement("div");

    //Persöhnliche Daten
    let persName: HTMLInputElement = document.createElement("input"); //Variable perName vom Typ HTMLInputElement soll ein Element "input" kreieren
    let persVorname: HTMLInputElement = document.createElement("input");
    let persMail: HTMLInputElement = document.createElement("input");
    let persAdresse: HTMLInputElement = document.createElement("input");
    let persPlz: HTMLInputElement = document.createElement("input");

    //Button
    let prufen: HTMLDivElement = document.createElement("div"); //Variable prufern vom Typ HTMLDivElement soll ein "div" Element kreieren 

    var gesamtpreis: number = 0; //Variable gesamtpreis vom Typ number soll 0 sein
    var gesamtpreisVar: HTMLInputElement = document.createElement("input");
      
    gesamtpreisVar.style.display = "none"; // Nichts erscheinen???????
    
    
    
 //------------------------------------------------FUNKTION INIT------------------------------------------------------------------------   
    function init(): void {
        
        //Warenkorb Überschrift erstellen und dranhängen
        let h2: HTMLHeadingElement = document.createElement("h2"); //Variable h2 vom Typ HTMLHeadingElement soll ein Element "h2" kreieren
        h2.innerText = "Warenkorb"; // Der Text in dem h2 soll sein "Warenkorb"  xxxxxxxxxxxxxx Woher weiß er dass das ein Div ist?? 
        h2.style.position = "absolute";
        h2.style.right = "390px";
        h2.style.top = "0px";
        h2.style.zIndex = "99";       
        document.getElementById("korbid").appendChild(h2); //die h2 soll im html an die "korbid" drangehängt werden
        
        korb.style.display = "inline-block";
        korb.style.position = "absolute";
        korb.style.right = "10px";
        korb.style.top = "10px";
        korb.style.width = "500px";
        korb.style.height = "100%";
        korb.style.backgroundColor = "#063500";
        korb.style.paddingTop = "40px";
        korb.style.paddingLeft = "10px";
        document.getElementById("korbid").appendChild(korb); //Das Element "korb" soll an die "korbid" im html drangehängt werden
        

        //--------------Baum Definieren und Anhängen xxxxxxxxxxxxxxxxxxxxx       
        baumart.addEventListener("change", AuswahlAuslesen); //xxxxxxxxxxxbaumart bekommt ein Ohr - Wartet bist es augewählt wird - Change: Typ vom Eventlistener - wenn sich was ändert - Drop down was änder dann wird der event listener ausgelöst
        document.getElementById("baumart").appendChild(baumart); //xxxxxxxxxxxda wo die ID "baumart" im html ist soll es drangehöngt werden
        
        for (let i: number = 0; i < baumdaten.length; i++) { //For Schleife: Zählervariable i vom Typ number soll 0 sein und die baumdaten.length durchgehen i++ wird immer eins hochgezählt bist baumdaten.length durch ist ist dann tzd kleiner als baumdaten.length
            let option: HTMLOptionElement = document.createElement("option"); //Variable option vom Datentyp HTMLOptionElement soll ein Element "Option" kreieren
            option.innerText = baumdaten[i].name; //xxxxxxxxxxxxxdieses Element soll einen Text haben - die schleife geht baumdaten durch und setzt die namen ein
            baumart.id = baumdaten[i].element; //überflüssig?? id der baumart wird geleichgesetzt mit baumdaten.element (von daten ts) jeder unterpunkt im dropdown bekommt eine id  xxxxxxxxxxxxxxxxSchleife suct nach baumdaten und vergibt ID und zählt immer ins hoch (zB. baumdaten 5) bzw ID Des Elements zuweisen, siehe infoWarenkorb.ts
            baumart.appendChild(option);  //baumart an html Datei dranhängen
        }



        //-----------------Halterungen-----------         
        let halterung: HTMLDivElement = <HTMLDivElement>document.getElementById("halterung"); //xxxxxxxxxxxxxxxxxxxx
        for (let i: number = 0; i < halterungdaten.length; i++) { //For Schleife: Zählervariable vom typ number soll 0 sein, Es wird immer ein hochgezählt und geht dabei solange wie die halterungsdaten.length ist
            if (halterungdaten[i].element == "halterung") { //wenn halterungdaten gleich halterung sind
                var radioB: HTMLInputElement = document.createElement("input"); // dann soll es ein input Element kreieren
                radioB.type = "radio"; // ein Typ für den Radio Button 
                radioB.name = "radioGroupHalterung";
                radioB.value = "radio" + i; //Einen Wert für den Radio Button zB. radio 4
                radioB.id = "radio" + i; //Die ID soll nach dem value benannt sein 
                halterung.appendChild(radioB); //Radiobutton soll im html drangehängt werden
                
                
                //Label für jede Halterung hinzufügen xxxxxxxxxxxxxxxxx
                label = document.createElement("label"); //label soll sein xxxxxxxxxxxxx
                label.id = "label" + i; //ID wird vergeben - 
                label.htmlFor = radioB.id; //xxxxxxxxxxxx
                label.innerText = halterungdaten[i].name; 
                halterung.appendChild(label); //xxxxxxxxxxxxxx
            }
        }

        
        
       
       //------------------Schmuckset       
        for (let i: number = 0; i < schmucksetdaten.length; i++) { //For Schleife: Zählervariable vom Typ number soll 0 sein - zählt immer eins hoch und soll dabei schmucksetdaten.length durchlaufen - Am Ende immer noch kleiner als schmucksetdaten.length
            let schmucksettyp: HTMLInputElement = document.createElement("input"); // Variable Schmucksettyp vom Typ HTMLInputElement soll ein "input"Element kreieren
            schmucksettyp.type = "checkbox"; //Macht es zur Checkbox
            schmucksettyp.id = schmucksetdaten[i].element; 
            schmucksettyp.addEventListener("change", function(): void { //Anonyme Funktion erforderlich um Parameter zu übergeben
            schmucksetAuslesen(schmucksettyp, "1"); //Werte übergeben; in schmucksettyp ist alles enthalten
            });
                           
            document.getElementById("schmuckset").appendChild(schmucksettyp);

            //Labels hinzufügen
            let schmucksetlabel: HTMLLabelElement = document.createElement("label");
            schmucksetlabel.innerText = schmucksetdaten[i].name;
            document.getElementById("schmuckset").appendChild(schmucksetlabel);

            //Anzahl Selektor
            let schmucksetanz: HTMLInputElement = document.createElement("input");
            schmucksetanz.type = "number"; //Macht es zum NummerHochZählFeld
            schmucksetanz.step = "1";
            schmucksetanz.min = "0";
            schmucksetanz.value = "1";
            schmucksetanz.style.marginRight = "1.5em";
            schmucksetanz.addEventListener("change", function(): void { //Anonyme Funktion erforderlich um Parameter zu übergeben
            schmucksettyp.checked = true; //Chekbox Anhaken wenn wert geändert wird
            schmucksetAuslesen(schmucksettyp, schmucksetanz.value);
            });
            document.getElementById("schmuckset").appendChild(schmucksetanz);
}



        //---------------------Lichterketten        
        for (let i: number = 0; i < lichterkettendaten.length; i++) {
            let lichterkettentyp: HTMLInputElement = document.createElement("input");
            lichterkettentyp.type = "checkbox";
            lichterkettentyp.id = lichterkettendaten[i].element;
            lichterkettentyp.name = "lichterkettentyp: " + lichterkettendaten[i].name;
            lichterkettentyp.addEventListener("change", function(): void { //Anonyme Funktion erforderlich um Parameter zu ï¿½bergeben
                lichterkettenAuslesen(lichterkettentyp, "1");
            });
                   
            document.getElementById("lichterketten").appendChild(lichterkettentyp);

            //---------------Label hinzufügen
            let kerzelabel: HTMLLabelElement = document.createElement("label");
            kerzelabel.innerText = lichterkettendaten[i].name;
            document.getElementById("lichterketten").appendChild(kerzelabel);

            //-------------Anzahl
            let lichterkettenanz: HTMLInputElement = document.createElement("input");
            lichterkettenanz.type = "number";
            lichterkettenanz.step = "1";
            lichterkettenanz.min = "0";
            lichterkettenanz.value = "1";
            lichterkettenanz.style.marginRight = "1.5em";
            lichterkettenanz.addEventListener("change", function(): void { //Anonyme Funktion erforderlich um Parameter zu ï¿½bergeben
                lichterkettentyp.checked = true; //Chekbox Anhaken wenn wert geï¿½ndert wird
                lichterkettenAuslesen(lichterkettentyp, lichterkettenanz.value);
            });
            document.getElementById("lichterketten").appendChild(lichterkettenanz);
        }



        //----------------Lieferoption        
        lieferopttyp.addEventListener("change", AuswahlAuslesen);
        document.getElementById("lieferoption").appendChild(lieferopttyp);
        lieferopttyp.name = "Lieferoption";

        for (let i: number = 0; i < lieferoptionen.length; i++) {
            let option: HTMLOptionElement = document.createElement("option");
            option.innerText = lieferoptionen[i].name;
            lieferopttyp.id = lieferoptionen[i].element;
            lieferopttyp.appendChild(option);
        }


        //-----------------Persönliche Daten Eingeben
        persName.type = "text"; //Element persName soll vom Typ "text" sein - Inputelemente
        persName.name = "Name"; //
        persName.placeholder = "Name";
        persName.required = true; //ist true wenn was reingeschrieben wird
        persName.style.marginRight = "1em";
        document.getElementById("persdaten").appendChild(persName); //bei der ID persdaten in der html dranhängen


        persVorname.type = "text";
        persVorname.name = "Vorname";
        persVorname.placeholder = "Vorname";
        persVorname.required = true;
        persVorname.style.marginRight = "1em";
        document.getElementById("persdaten").appendChild(persVorname);


        persMail.type = "email"; //Um nutzung von @ vorauszusetzen
        persMail.name = "Mail";
        persMail.placeholder = "Email, bitte @ nicht vergessen";
        persMail.required = true;
        persMail.style.marginRight = "1em";
        document.getElementById("persdaten").appendChild(persMail);


        persAdresse.type = "text";
        persAdresse.name = "Adresse";
        persAdresse.placeholder = "Adresse";
        persAdresse.required = true;
        persAdresse.style.marginRight = "1em";
        document.getElementById("persdaten").appendChild(persAdresse);


        persPlz.type = "text";
        persName.name = "PLZ";
        persPlz.placeholder = "PLZ";
        persPlz.required = true;
        document.getElementById("persdaten").appendChild(persPlz);


        //---------------------Button generieren
        let button: HTMLButtonElement = document.createElement("button"); //Variable Button vom Typ HTMLButtonElement soll ein button kreieren
        button.type = "submit";  
        button.innerText = "Bestellung Prüfen";
        button.addEventListener("click", PrufeDaten); //bei click wird prüfeaten ausgelöst
        button.style.marginTop = "10px";
        document.getElementById("prufenbutton").appendChild(button);
    }

    
    //--------------------------------FUNKTIONEN--------------------------------------------------------------------------------

    function schmucksetAuslesen(chkElement: HTMLInputElement, anzahl: string): void { //parameter chkElemten vom typ html input element. anzahl vom typ string ---jederm schmuck eine ID gegeben  xxxxxxxxxxxxxxxx
        for (let i: number = 0; i < schmucksetdaten.length; i++) { //geht schmuckdatenlength durch--  --läuft durch schmuckdaten.length durch oben hab ich jedem schmuck einer id gegeben
            if (schmucksetdaten[i].element == chkElement.id) { //schaut nur was ich gecheckt hab und vergelichts -- geht die schmucksetdaten durch zB ich check schmucksetdatenG und dann geht es alles durch wenns es cschmucktyp G ist dann kommt es in den Warenkorb--sucht nach dem gleichen namen und wenn die daten vorhanden sind kommt es in den warenkorb
                Warenkorb(chkElement.id, schmucksetdaten[i].name, schmucksetdaten[i].preis, parseInt(anzahl), chkElement.checked); //Soll chkElement.id an Warenkorb üergeben

            }
        }
    }
    
    
    //-----------

    function lichterkettenAuslesen(chkElement: HTMLInputElement, anzahl: string): void {
        for (let i: number = 0; i < lichterkettendaten.length; i++) {
            if (lichterkettendaten[i].element == chkElement.id) {
                
                Warenkorb(chkElement.id, lichterkettendaten[i].name, lichterkettendaten[i].preis, parseInt(anzahl), chkElement.checked);
            }
        }
    }

    
    
    function initHalterung(): void {
        
        //Halterung:
        let halterung: HTMLDivElement = <HTMLDivElement>document.getElementById("halterung");
        for (let i: number = 0; i < halterungdaten.length; i++) {
            if (halterungdaten[i].element == "Halterung") {
                let radioB: HTMLInputElement = document.createElement("input");
                radioB.type = "radio";
                radioB.name = "radioGroupHalterung";
                radioB.value = "radio" + i;
                radioB.id = "radio" + i;
                halterung.appendChild(radioB);

                label = document.createElement("label");
                label.id = "label" + i;
                label.htmlFor = radioB.id;
                label.innerText = halterungdaten[i].name;
                halterung.appendChild(label);
            }
        }
    }
    
    
    
    
    
    //------------ ZU WARENKORB XXXXXXXXXXXXXXXXXXXXXXXXXX

    function AuswahlAuslesen(): void { //
        var baumname: string = baumart.value; //baumname string soll value om baumname ssein--baumart.value == ausgewälter Wert im DropDown - 
        if (baumname != "") { //wenn //wenn baumname nicht nichts ist dann wird die funktion zuWarenkorb ausgelöst
            baumart.name = "Baumtyp"; //dann baumart xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            ZuWarenkorb(baumdaten, true, baumname); //true --> element ist ausgewÃ¤hlt 
        }
        else {
            ZuWarenkorb(baumdaten, false, baumname); //false --> Element wurde abgewÃ¤hlt -- wenn nichts augewählt wird dann ists false
        }


        var halterungname: string = halterungtyp.value; //
        if (halterungname != "") {
            halterungtyp.name = "Halterungtyp"; //XXXXXXXXXXXXXXXXXX
            ZuWarenkorb(halterungdaten, true, halterungname);
        } else {
            ZuWarenkorb(halterungdaten, false, halterungname);
        }
        

        var lieferant: string = lieferopttyp.value;
        if (lieferant != "") {
            ZuWarenkorb(lieferoptionen, true, lieferant);
        }
    }

    
    //---------------Wird von DropDown genutzt
    function ZuWarenkorb(daten: Daten[], ischeckt: boolean, elementname: string): void {  //boolean: treu oder false, 

        for (let i: number = 0; i < daten.length; i++) { // 
            if (daten[i].name == elementname) { //wenn element name erreicht ist durchgehn dann - geht den ganzen Warenkorb durch und schaut obs das gleiche ist wenn ja dann wird warenkorb ausgefüht
                Warenkorb(daten[i].element, elementname, daten[i].preis, 1, ischeckt); //1 --> da nur ein Element ausgewÃ¤hlt werden kann
            }
        }
    }

    
    //-----------------FUNKTION WARENKORB

    function Warenkorb(elementId: string, value: string, preis: number, anzahl: number, selected: boolean): void {

        var preisElement: number; //Variable preisElement vom typ number 
        preisElement = anzahl * preis; //Preiselement soll sein anzahl * preis

        //Wird erst bei zweitem Durchgang ausgeführt, zu Beginn keine Elemente in Korb vorhanden
        for (let i: number = 0; i < korb.getElementsByTagName("p").length; i++) { //Warenkorb auf vorhandene p prüfen - For Schleife: zählervariable vom typ number soll 0 sein -- wird ertst beim 2 mal ausgeüfhrt
            if (korb.getElementsByTagName("p")[i].id == elementId) { // Vergleicht Elemente im Warenkorb mit ausgewÃ¤hltem Element schaut ob sich p gechanged wurde - hat die gleiche id
                //p ist alles im WArenkorb jedes element eigenes p
                var innerPreis: string = korb.getElementsByTagName("p")[i].innerText.split("=")[1]; //innerpreis keann zB 10 - Preis extrahieren - nimmt sich text von ausgewähltem p und spaltet diesen am = in ein string array auf - stelle 1 wird rausgeneommen, da Preis 1 PReis wird in innerpreis gespeichert
                korb.getElementsByTagName("p")[i].remove(); //p wird gelöscht- 
                gesamtpreis = gesamtpreis - parseInt(innerPreis); //Gesamtpreis bereinigen NICHT HINZUGEFÜGT: innerpreis wird vom gesamtpreis abgezogen - gesamtpreis aktualisieren
            }
            
            //Gesamtpreis p entfernen um später aktualisiert zurÃ¼ck einzufÃ¼gen
            if (korb.getElementsByTagName("p")[i].id == "gesamtpreisid") { //geht die ganzen p durch sobald es bei gesamtpreis id ist 
                korb.getElementsByTagName("p")[i].remove(); //p vom GEsamtpreis wird gelöscht
            }
        }

        if (selected) { //wenn was von links ausgezwählt wurde dann gibts ein p nur anzahl verändert... geht hier rein bzw. wenn was zum ersten mal ausgewählt haben
            var p: HTMLParagraphElement = document.createElement("p");//.-.. es entsteht ein p Element erzeugt
            p.id = elementId; //die id von der roten kerze wird auch die rotekerze id wir übergeben dem p die id rote kerze
            p.innerText = value + "  = " + preisElement + "€"; // value :zB Elementname kerze = Preiselemt (Preis*Anzahl) Der ausgerechnete Preis soll erscheinen Gesamtpreis + Preiselement
            korb.appendChild(p); // GEsamtpreis wird drangehängt
        }

        //Gesamtpreis wieder hinzufügen
        gesamtpreis = gesamtpreis + preisElement; //GEsamtpreis ganz unten
        
        var pGesamt: HTMLParagraphElement = document.createElement("p"); // 
        pGesamt.id = "gesamtpreisid"; 
        pGesamt.innerText = "Gesamtpreis =  " + gesamtpreis + "€"; //gesamtpreis als text
        pGesamt.style.position = "absolute";
        pGesamt.style.bottom = "0";
        pGesamt.style.paddingTop = "10px";
        pGesamt.style.borderTop = "2px solid grey";
        korb.appendChild(pGesamt);
       
        gesamtpreisVar.name = "Gesamtpreis " + gesamtpreis;   
        korb.appendChild(gesamtpreisVar);
    }
    
    
    //------------------ BUTTON DRÜCKEN


    function PrufeDaten(): void {  //prufen als div erstellt oben 
        

        prufen.innerText = ""; //steht gar nichts
        if (persName.checkValidity() == false || persVorname.checkValidity() == false || persMail.checkValidity() == false || persPlz.checkValidity() == false || persAdresse.checkValidity() == false) { // checkt ob es true ist
            prufen.innerText = "FEHLER BEI DER DATENEINGABE";
            prufen.style.color = "red";
            document.body.appendChild(prufen);
        }
        else {
            prufen.innerText = "Deine Bestellung wurde verschickt";
            prufen.style.color = "green";
            document.body.appendChild(prufen);
        }
    }





}