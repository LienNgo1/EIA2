/* Aufgabe 10: Weihnachtsbaumkonfigurator
Name: Ngo, Thi Lien
Matrikel: 256778
Datum: 21.12.2017
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Aufgabe111;
(function (Aufgabe111) {
    window.addEventListener("load", init); // Wenn Fenster geöffnet wird soll die Funktion init aufgerufen werden
    let label; //variable wird erstellt vom Typ HTMLLabelElement
    //AuswahlBoxen
    let baumart = document.createElement("select"); //Variable Baumart vom Typ HTMLSelectElement soll ein Element "select" kreieren - zum auswählen
    let halterungtyp = document.createElement("select");
    let lieferopttyp = document.createElement("select");
    var korb = document.createElement("div");
    //Persöhnliche Daten
    let persName = document.createElement("input"); //Variable perName vom Typ HTMLInputElement soll ein Element "input" kreieren
    let persVorname = document.createElement("input");
    let persMail = document.createElement("input");
    let persAdresse = document.createElement("input");
    let persPlz = document.createElement("input");
    //Button
    let prufen = document.createElement("div"); //Variable prufern vom Typ HTMLDivElement soll ein "div" Element kreieren 
    var gesamtpreis = 0; //Variable gesamtpreis vom Typ number soll 0 sein
    var gesamtpreisVar = document.createElement("input");
    gesamtpreisVar.style.display = "none"; // Nichts erscheinen???????
    //------------------------------------------------FUNKTION INIT------------------------------------------------------------------------   
    function init() {
        //Warenkorb Überschrift erstellen und dranhängen
        let h2 = document.createElement("h2"); //Variable h2 vom Typ HTMLHeadingElement soll ein Element "h2" kreieren
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
        baumart.addEventListener("change", AuswahlAuslesen); //xxxxxxxxxxxbaumart bekommt ein Ohr - Wartet bist es augewählt wird
        document.getElementById("baumart").appendChild(baumart); //xxxxxxxxxxxda wo die ID "baumart" im html ist soll es drangehöngt werden
        for (let i = 0; i < Aufgabe111.baumdaten.length; i++) {
            let option = document.createElement("option"); //Variable option vom Datentyp HTMLOptionElement soll ein Element "Option" kreieren
            option.innerText = Aufgabe111.baumdaten[i].name; //xxxxxxxxxxxxxdieses Element soll einen Text haben - die schleife geht baumdaten durch und setzt die namen ein
            baumart.id = Aufgabe111.baumdaten[i].element; //xxxxxxxxxxxxxxxxSchleife suct nach baumdaten und vergibt ID und zählt immer ins hoch (zB. baumdaten 5) bzw ID Des Elements zuweisen, siehe infoWarenkorb.ts
            baumart.appendChild(option); //baumart an html Datei dranhängen
        }
        //-----------------Halterungen-----------         
        let halterung = document.getElementById("halterung"); //xxxxxxxxxxxxxxxxxxxx
        for (let i = 0; i < Aufgabe111.halterungdaten.length; i++) {
            if (Aufgabe111.halterungdaten[i].element == "halterung") {
                var radioB = document.createElement("input"); // dann soll es ein input Element kreieren
                radioB.type = "radio"; // ein Typ für den Radio Button 
                radioB.name = "radioGroupHalterung";
                radioB.value = "radio" + i; //Einen Wert für den Radio Button zB. radio 4
                radioB.id = "radio" + i; //Die ID soll nach dem value benannt sein 
                halterung.appendChild(radioB); //Radiobutton soll im html drangehängt werden
                //Label für jede Halterung hinzufügen xxxxxxxxxxxxxxxxx
                label = document.createElement("label"); //label soll sein xxxxxxxxxxxxx
                label.id = "label" + i; //ID wird vergeben - 
                label.htmlFor = radioB.id; //xxxxxxxxxxxx
                label.innerText = Aufgabe111.halterungdaten[i].name;
                halterung.appendChild(label); //xxxxxxxxxxxxxx
            }
        }
        //------------------Schmuckset       
        for (let i = 0; i < Aufgabe111.schmucksetdaten.length; i++) {
            let schmucksettyp = document.createElement("input"); // Variable Schmucksettyp vom Typ HTMLInputElement soll ein "input"Element kreieren
            schmucksettyp.type = "checkbox"; //Macht es zur Checkbox
            schmucksettyp.id = Aufgabe111.schmucksetdaten[i].element;
            schmucksettyp.addEventListener("change", function () {
                schmucksetAuslesen(schmucksettyp, "1"); //Werte übergeben; in schmucksettyp ist alles enthalten
            });
            document.getElementById("schmuckset").appendChild(schmucksettyp);
            //Labels hinzufügen
            let schmucksetlabel = document.createElement("label");
            schmucksetlabel.innerText = Aufgabe111.schmucksetdaten[i].name;
            document.getElementById("schmuckset").appendChild(schmucksetlabel);
            //Anzahl Selektor
            let schmucksetanz = document.createElement("input");
            schmucksetanz.type = "number"; //Macht es zum NummerHochZählFeld
            schmucksetanz.step = "1";
            schmucksetanz.min = "0";
            schmucksetanz.value = "1";
            schmucksetanz.style.marginRight = "1.5em";
            schmucksetanz.addEventListener("change", function () {
                schmucksettyp.checked = true; //Chekbox Anhaken wenn wert geändert wird
                schmucksetAuslesen(schmucksettyp, schmucksetanz.value);
            });
            document.getElementById("schmuckset").appendChild(schmucksetanz);
        }
        //---------------------Lichterketten        
        for (let i = 0; i < Aufgabe111.lichterkettendaten.length; i++) {
            let lichterkettentyp = document.createElement("input");
            lichterkettentyp.type = "checkbox";
            lichterkettentyp.id = Aufgabe111.lichterkettendaten[i].element;
            lichterkettentyp.name = "lichterkettentyp: " + Aufgabe111.lichterkettendaten[i].name;
            lichterkettentyp.addEventListener("change", function () {
                lichterkettenAuslesen(lichterkettentyp, "1");
            });
            document.getElementById("lichterketten").appendChild(lichterkettentyp);
            //---------------Label hinzufügen
            let kerzelabel = document.createElement("label");
            kerzelabel.innerText = Aufgabe111.lichterkettendaten[i].name;
            document.getElementById("lichterketten").appendChild(kerzelabel);
            //-------------Anzahl
            let lichterkettenanz = document.createElement("input");
            lichterkettenanz.type = "number";
            lichterkettenanz.step = "1";
            lichterkettenanz.min = "0";
            lichterkettenanz.value = "1";
            lichterkettenanz.style.marginRight = "1.5em";
            lichterkettenanz.addEventListener("change", function () {
                lichterkettentyp.checked = true; //Chekbox Anhaken wenn wert geï¿½ndert wird
                lichterkettenAuslesen(lichterkettentyp, lichterkettenanz.value);
            });
            document.getElementById("lichterketten").appendChild(lichterkettenanz);
        }
        //----------------Lieferoption        
        lieferopttyp.addEventListener("change", AuswahlAuslesen);
        document.getElementById("lieferoption").appendChild(lieferopttyp);
        lieferopttyp.name = "Lieferoption";
        for (let i = 0; i < Aufgabe111.lieferoptionen.length; i++) {
            let option = document.createElement("option");
            option.innerText = Aufgabe111.lieferoptionen[i].name;
            lieferopttyp.id = Aufgabe111.lieferoptionen[i].element;
            lieferopttyp.appendChild(option);
        }
        //-----------------Persönliche Daten Eingeben
        persName.type = "text"; //Element persName soll vom Typ "text" sein
        persName.name = "Name";
        persName.placeholder = "Name";
        persName.required = true;
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
        let button = document.createElement("button"); //Variable Button vom Typ HTMLButtonElement soll ein button kreieren
        button.type = "submit";
        button.innerText = "Bestellung Prüfen";
        button.addEventListener("click", PrufeDaten);
        button.style.marginTop = "10px";
        document.getElementById("prufenbutton").appendChild(button);
    }
    //--------------------------------FUNKTIONEN--------------------------------------------------------------------------------
    function schmucksetAuslesen(chkElement, anzahl) {
        for (let i = 0; i < Aufgabe111.schmucksetdaten.length; i++) {
            if (Aufgabe111.schmucksetdaten[i].element == chkElement.id) {
                Warenkorb(chkElement.id, Aufgabe111.schmucksetdaten[i].name, Aufgabe111.schmucksetdaten[i].preis, parseInt(anzahl), chkElement.checked); //Soll chkElement.id an Warenkorb üergeben
            }
        }
    }
    //-----------
    function lichterkettenAuslesen(chkElement, anzahl) {
        for (let i = 0; i < Aufgabe111.lichterkettendaten.length; i++) {
            if (Aufgabe111.lichterkettendaten[i].element == chkElement.id) {
                Warenkorb(chkElement.id, Aufgabe111.lichterkettendaten[i].name, Aufgabe111.lichterkettendaten[i].preis, parseInt(anzahl), chkElement.checked);
            }
        }
    }
    function initHalterung() {
        //Halterung:
        let halterung = document.getElementById("halterung");
        for (let i = 0; i < Aufgabe111.halterungdaten.length; i++) {
            if (Aufgabe111.halterungdaten[i].element == "Halterung") {
                let radioB = document.createElement("input");
                radioB.type = "radio";
                radioB.name = "radioGroupHalterung";
                radioB.value = "radio" + i;
                radioB.id = "radio" + i;
                halterung.appendChild(radioB);
                label = document.createElement("label");
                label.id = "label" + i;
                label.htmlFor = radioB.id;
                label.innerText = Aufgabe111.halterungdaten[i].name;
                halterung.appendChild(label);
            }
        }
    }
    //------------ ZU WARENKORB XXXXXXXXXXXXXXXXXXXXXXXXXX
    function AuswahlAuslesen() {
        var baumname = baumart.value; //baumart.value == ausgewälter Wert im DropDown
        if (baumname != "") {
            baumart.name = "Baumtyp";
            ZuWarenkorb(Aufgabe111.baumdaten, true, baumname); //true --> element ist ausgewÃ¤hlt
        }
        else {
            ZuWarenkorb(Aufgabe111.baumdaten, false, baumname); //false --> Element wurde abgewÃ¤hlt
        }
        var halterungname = halterungtyp.value; //
        if (halterungname != "") {
            halterungtyp.name = "Halterungtyp";
            ZuWarenkorb(Aufgabe111.halterungdaten, true, halterungname);
        }
        else {
            ZuWarenkorb(Aufgabe111.halterungdaten, false, halterungname);
        }
        var lieferant = lieferopttyp.value;
        if (lieferant != "") {
            ZuWarenkorb(Aufgabe111.lieferoptionen, true, lieferant);
        }
    }
    //---------------Wird von DropDown genutzt
    function ZuWarenkorb(daten, ischeckt, elementname) {
        for (let i = 0; i < daten.length; i++) {
            if (daten[i].name == elementname) {
                Warenkorb(daten[i].element, elementname, daten[i].preis, 1, ischeckt); //1 --> da nur ein Element ausgewÃ¤hlt werden kann
            }
        }
    }
    //-----------------FUNKTION WARENKORB
    function Warenkorb(elementId, value, preis, anzahl, selected) {
        var preisElement; //Variable preisElement vom typ number 
        preisElement = anzahl * preis; //Preiselement soll sein anzahl * preis
        //Wird erst bei zweitem Durchgang ausgeführt, zu Beginn keine Elemente in Korb vorhanden
        for (let i = 0; i < korb.getElementsByTagName("p").length; i++) {
            if (korb.getElementsByTagName("p")[i].id == elementId) {
                //p ist alles im WArenkorb jedes element eigenes p
                var innerPreis = korb.getElementsByTagName("p")[i].innerText.split("=")[1]; //Preis extrahieren - nimmt sich text von ausgewähltem p und spaltet diesen am = in ein string array auf - stelle 1 wird rausgeneommen, da Preis 1 PReis wird in innerpreis gespeichert
                korb.getElementsByTagName("p")[i].remove(); //p wird gelöscht-
                gesamtpreis = gesamtpreis - parseInt(innerPreis); //Gesamtpreis bereinigen - gesamtpreis aktualisieren
            }
            //Gesamtpreis p entfernen um später aktualisiert zurÃ¼ck einzufÃ¼gen
            if (korb.getElementsByTagName("p")[i].id == "gesamtpreisid") {
                korb.getElementsByTagName("p")[i].remove();
            }
        }
        if (selected) {
            var p = document.createElement("p");
            p.id = elementId;
            p.innerText = value + "  = " + preisElement + "€";
            korb.appendChild(p);
        }
        //Gesamtpreis wieder hinzufügen
        gesamtpreis = gesamtpreis + preisElement;
        var pGesamt = document.createElement("p");
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
    function PrufeDaten() {
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
})(Aufgabe111 || (Aufgabe111 = {}));
//# sourceMappingURL=SendDate.js.map