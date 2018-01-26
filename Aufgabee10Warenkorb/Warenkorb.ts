

namespace Aufgabe11 {
    window.addEventListener("load", init);
    
    let label: HTMLLabelElement;
    
    //AuswahlBoxen
    let baumart: HTMLSelectElement = document.createElement("select");
    let halterungtyp: HTMLSelectElement = document.createElement("select");
    let lieferopttyp: HTMLSelectElement = document.createElement("select");
    var korb: HTMLDivElement = document.createElement("div");

    //Persöhnliche Daten
    let persName: HTMLInputElement = document.createElement("input");
    let persVorname: HTMLInputElement = document.createElement("input");
    let persMail: HTMLInputElement = document.createElement("input");
    let persAdresse: HTMLInputElement = document.createElement("input");
    let persPlz: HTMLInputElement = document.createElement("input");

    //Button
    let prufen: HTMLDivElement = document.createElement("div");

    var gesamtpreis: number = 0;
    var gesamtpreisVar: HTMLInputElement = document.createElement("input");
      
    gesamtpreisVar.style.display = "none";
    
    
    
 //---------------------------FUNKTION INIT------------------------------------------------   
    function init(): void {
        
        
        
        
        //Warenkorb Definieren und AnhÃ¤ngen
        let h2: HTMLHeadingElement = document.createElement("h2");
        h2.innerText = "Warenkorb";
        h2.style.position = "absolute";
        h2.style.right = "390px";
        h2.style.top = "0px";
        h2.style.zIndex = "99";
        
        document.getElementById("korbid").appendChild(h2);
        korb.style.display = "inline-block";
        korb.style.position = "absolute";
        korb.style.right = "10px";
        korb.style.top = "10px";
        korb.style.width = "500px";
        korb.style.height = "100%";
        korb.style.backgroundColor = "#063500";
        korb.style.paddingTop = "40px";
        korb.style.paddingLeft = "10px";
        document.getElementById("korbid").appendChild(korb);

        //Baum Definieren und AnhÃ¤ngen        
        baumart.addEventListener("change", AuswahlAuslesen);
        document.getElementById("baumart").appendChild(baumart); //da wo die ID "baumart" im html ist soll es drangehöngt werden
        
        for (let i: number = 0; i < baumdaten.length; i++) {
            let option: HTMLOptionElement = document.createElement("option");
            option.innerText = baumdaten[i].name;
            baumart.id = baumdaten[i].element; //Typ bzw ID Des Elements zuweisen, siehe Daten.ts
            baumart.appendChild(option);
        }



        //Halterungen Selektor          
        halterungtyp.addEventListener("change", AuswahlAuslesen);
        document.getElementById("halterung").appendChild(halterungtyp);
        

        for (let i: number = 0; i < halterungdaten.length; i++) {
            let option: HTMLOptionElement = document.createElement("option");
            option.innerText = halterungdaten[i].name;
            halterungtyp.id = halterungdaten[i].element; //Typ bzw ID Des Elements zuweisen, siehe Daten.ts
            halterungtyp.appendChild(option);
        }

        
       
       //Schmuckset Selektor       
        for (let i: number = 0; i < schmucksetdaten.length; i++) {
            let schmucksettyp: HTMLInputElement = document.createElement("input");
            schmucksettyp.type = "checkbox"; //Macht es zur Checkbox
            schmucksettyp.id = schmucksetdaten[i].element; 
            schmucksettyp.addEventListener("change", function(): void { //Anonyme Funktion erforderlich um Parameter zu �bergeben
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
            schmucksetanz.addEventListener("change", function(): void { //Anonyme Funktion erforderlich um Parameter zu �bergeben
                schmucksettyp.checked = true; //Chekbox Anhaken wenn wert ge�ndert wird
                schmucksetAuslesen(schmucksettyp, schmucksetanz.value);
            });
            document.getElementById("schmuckset").appendChild(schmucksetanz);
}



        //Kerzen Selektor       
        for (let i: number = 0; i < lichterkettendaten.length; i++) {
            let lichterkettentyp: HTMLInputElement = document.createElement("input");
            lichterkettentyp.type = "checkbox";
            lichterkettentyp.id = lichterkettendaten[i].element;
            lichterkettentyp.name = "Kerzentyp: " + lichterkettendaten[i].name;
            lichterkettentyp.addEventListener("change", function(): void { //Anonyme Funktion erforderlich um Parameter zu ï¿½bergeben
                lichterkettenAuslesen(lichterkettentyp, "1");
            });
                   
            document.getElementById("lichterketten").appendChild(lichterkettentyp);

            //Label HinzufÃ¼gen
            let kerzelabel: HTMLLabelElement = document.createElement("label");
            kerzelabel.innerText = lichterkettendaten[i].name;
            document.getElementById("lichterketten").appendChild(kerzelabel);

            //Anzahl
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



        //Lieferoption Selektor       
        lieferopttyp.addEventListener("change", AuswahlAuslesen);
        document.getElementById("lieferoption").appendChild(lieferopttyp);
        lieferopttyp.name = "Lieferoption";

        for (let i: number = 0; i < lieferoptionen.length; i++) {
            let option: HTMLOptionElement = document.createElement("option");
            option.innerText = lieferoptionen[i].name;
            lieferopttyp.id = lieferoptionen[i].element;
            lieferopttyp.appendChild(option);
        }


//PersÃ¶nliche Daten Eingeben
        persName.type = "text";
        persName.name = "Name";
        persName.placeholder = "Name";
        persName.required = true;
        persName.style.marginRight = "1em";
        document.getElementById("persdaten").appendChild(persName);


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


        //Button generieren
        let button: HTMLButtonElement = document.createElement("button");
        button.type = "submit";
        button.innerText = "Bestellung Prüfen";
        button.addEventListener("click", PrufeDaten);
        button.style.marginTop = "10px";
        document.getElementById("prufenbutton").appendChild(button);
    }

    
    //--------------------------------FUNKTIONEN-------------------------------------------------

    function schmucksetAuslesen(chkElement: HTMLInputElement, anzahl: string): void {
        for (let i: number = 0; i < schmucksetdaten.length; i++) {
            if (schmucksetdaten[i].element == chkElement.id) {
                Warenkorb(chkElement.id, schmucksetdaten[i].name, schmucksetdaten[i].preis, parseInt(anzahl), chkElement.checked);

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
    
    
    
    
    
    //------------

    function AuswahlAuslesen(): void {
        var baumname: string = baumart.value; //baumart.value == ausgewälter Wert im DropDown
        if (baumname != "") {
            baumart.name = "Baumtyp";
            ZuWarenkorb(baumdaten, true, baumname); //true --> element ist ausgewÃ¤hlt
        }
        else {
            ZuWarenkorb(baumdaten, false, baumname); //false --> Element wurde abgewÃ¤hlt
        }


        var halterungname: string = halterungtyp.value;
        if (halterungname != "") {
            halterungtyp.name = "Halterungtyp";
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
    function ZuWarenkorb(daten: Daten[], ischeckt: boolean, elementname: string): void { 

        for (let i: number = 0; i < daten.length; i++) {
            if (daten[i].name == elementname) {
                Warenkorb(daten[i].element, elementname, daten[i].preis, 1, ischeckt); //1 --> da nur ein Element ausgewÃ¤hlt werden kann
            }
        }
    }

    
    //-----------------

    function Warenkorb(elementId: string, value: string, preis: number, anzahl: number, selected: boolean): void {

        var preisElement: number;
        preisElement = anzahl * preis;

        //Wird erst bei zweitem Durchgang ausgefï¿½hrt, zu Beginn keine Elemente in Korb vorhanden
        for (let i: number = 0; i < korb.getElementsByTagName("p").length; i++) { //Warenkorb auf vorhandene p prï¿½fen
            if (korb.getElementsByTagName("p")[i].id == elementId) { //Vergleicht Elemente im Warenkorb mit ausgewÃ¤hltem Element
                var innerPreis: string = korb.getElementsByTagName("p")[i].innerText.split("=")[1]; //Preis extrahieren
                korb.getElementsByTagName("p")[i].remove(); //Wenn vorhanden Element lÃ¶schen
                gesamtpreis = gesamtpreis - parseInt(innerPreis); //Gesamtpreis bereinigen
            }
            
            //Gesamtpreis p entfernen um spÃ¤ter aktualisiert zurÃ¼ck einzufÃ¼gen
            if (korb.getElementsByTagName("p")[i].id == "gesamtpreisid") {
                korb.getElementsByTagName("p")[i].remove();
            }
        }

        if (selected) {
            var p: HTMLParagraphElement = document.createElement("p");
            p.id = elementId;
            p.innerText = value + "  = " + preisElement + "€";
            korb.appendChild(p);
        }

        //Gesamtpreis wieder hinzufÃ¼gen
        gesamtpreis = gesamtpreis + preisElement;
        var pGesamt: HTMLParagraphElement = document.createElement("p");
        pGesamt.id = "gesamtpreisid";
        pGesamt.innerText = "Gesamtpreis =  " + gesamtpreis + "€";
        pGesamt.style.position = "absolute";
        pGesamt.style.bottom = "0";
        pGesamt.style.paddingTop = "10px";
        pGesamt.style.borderTop = "2px solid grey";
        korb.appendChild(pGesamt);
       
        gesamtpreisVar.name = "Gesamtpreis " + gesamtpreis;   
        korb.appendChild(gesamtpreisVar);
    }
    
    
    //------------------


    function PrufeDaten(): void {   
        

        prufen.innerText = "";
        if (persName.checkValidity() == false || persVorname.checkValidity() == false || persMail.checkValidity() == false || persPlz.checkValidity() == false || persAdresse.checkValidity() == false) {
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