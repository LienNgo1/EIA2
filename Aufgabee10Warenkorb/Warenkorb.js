/* Aufgabe 10: Weihnachtsbaumkonfigurator
Name: Ngo, Thi Lien
Matrikel: 256778
Datum: 21.12.2017
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Aufgabe11;
(function (Aufgabe11) {
    window.addEventListener("load", init);
    let label;
    //AuswahlBoxen
    let baumart = document.createElement("select");
    let halterungtyp = document.createElement("select");
    let lieferopttyp = document.createElement("select");
    var korb = document.createElement("div");
    //Persöhnliche Daten
    let persName = document.createElement("input");
    let persVorname = document.createElement("input");
    let persMail = document.createElement("input");
    let persAdresse = document.createElement("input");
    let persPlz = document.createElement("input");
    //Button
    let prufen = document.createElement("div");
    var gesamtpreis = 0;
    var gesamtpreisVar = document.createElement("input");
    gesamtpreisVar.style.display = "none";
    //------------------------------------------------FUNKTION INIT------------------------------------------------------------------------   
    function init() {
        //Warenkorb Definieren und Anhängen
        let h2 = document.createElement("h2");
        h2.innerText = "Warenkorb";
        h2.style.position = "absolute";
        h2.style.right = "390px";
        h2.style.top = "0px";
        h2.style.zIndex = "99";
        document.getElementById("korbid").appendChild(h2); //h2 soll im html an die "korbid" drangehängt werden
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
        //--------------Baum Definieren und Anhängen        
        baumart.addEventListener("change", AuswahlAuslesen);
        document.getElementById("baumart").appendChild(baumart); //da wo die ID "baumart" im html ist soll es drangehöngt werden
        for (let i = 0; i < Aufgabe11.baumdaten.length; i++) {
            let option = document.createElement("option");
            option.innerText = Aufgabe11.baumdaten[i].name;
            baumart.id = Aufgabe11.baumdaten[i].element;
            baumart.appendChild(option);
        }
        //-----------------Halterungen-----------         
        let halterung = document.getElementById("halterung"); //?????????
        for (let i = 0; i < Aufgabe11.halterungdaten.length; i++) {
            if (Aufgabe11.halterungdaten[i].element == "halterung") {
                var radioB = document.createElement("input");
                radioB.type = "radio";
                radioB.name = "radioGroupHalterung";
                radioB.value = "radio" + i;
                radioB.id = "radio" + i;
                halterung.appendChild(radioB);
                //Label für jede Halterung hinzufügen 
                label = document.createElement("label");
                label.id = "label" + i;
                label.htmlFor = radioB.id;
                label.innerText = Aufgabe11.halterungdaten[i].name;
                halterung.appendChild(label);
            }
        }
        //------------------Schmuckset       
        for (let i = 0; i < Aufgabe11.schmucksetdaten.length; i++) {
            let schmucksettyp = document.createElement("input");
            schmucksettyp.type = "checkbox";
            schmucksettyp.id = Aufgabe11.schmucksetdaten[i].element;
            schmucksettyp.addEventListener("change", function () {
                schmucksetAuslesen(schmucksettyp, "1");
            });
            document.getElementById("schmuckset").appendChild(schmucksettyp);
            //Labels hinzufügen
            let schmucksetlabel = document.createElement("label");
            schmucksetlabel.innerText = Aufgabe11.schmucksetdaten[i].name;
            document.getElementById("schmuckset").appendChild(schmucksetlabel);
            //Anzahl Selektor
            let schmucksetanz = document.createElement("input");
            schmucksetanz.type = "number"; //Macht es zum NummerHochZählFeld
            schmucksetanz.step = "1";
            schmucksetanz.min = "0";
            schmucksetanz.value = "1";
            schmucksetanz.style.marginRight = "1.5em";
            schmucksetanz.addEventListener("change", function () {
                schmucksettyp.checked = true;
                schmucksetAuslesen(schmucksettyp, schmucksetanz.value);
            });
            document.getElementById("schmuckset").appendChild(schmucksetanz);
        }
        //---------------------Lichterkette        
        for (let i = 0; i < Aufgabe11.lichterkettendaten.length; i++) {
            let lichterkettentyp = document.createElement("input");
            lichterkettentyp.type = "checkbox";
            lichterkettentyp.id = Aufgabe11.lichterkettendaten[i].element;
            lichterkettentyp.name = "lichterkettentyp: " + Aufgabe11.lichterkettendaten[i].name;
            lichterkettentyp.addEventListener("change", function () {
                lichterkettenAuslesen(lichterkettentyp, "1");
            });
            document.getElementById("lichterketten").appendChild(lichterkettentyp);
            //---------------Label hinzufügen
            let lichterkettenlabel = document.createElement("label");
            lichterkettenlabel.innerText = Aufgabe11.lichterkettendaten[i].name;
            document.getElementById("lichterketten").appendChild(lichterkettenlabel);
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
        for (let i = 0; i < Aufgabe11.lieferoptionen.length; i++) {
            let option = document.createElement("option");
            option.innerText = Aufgabe11.lieferoptionen[i].name;
            lieferopttyp.id = Aufgabe11.lieferoptionen[i].element;
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
        for (let i = 0; i < Aufgabe11.schmucksetdaten.length; i++) {
            if (Aufgabe11.schmucksetdaten[i].element == chkElement.id) {
                Warenkorb(chkElement.id, Aufgabe11.schmucksetdaten[i].name, Aufgabe11.schmucksetdaten[i].preis, parseInt(anzahl), chkElement.checked); //Soll chkElement.id an Warenkorb üergeben
            }
        }
    }
    //-----------
    function lichterkettenAuslesen(chkElement, anzahl) {
        for (let i = 0; i < Aufgabe11.lichterkettendaten.length; i++) {
            if (Aufgabe11.lichterkettendaten[i].element == chkElement.id) {
                Warenkorb(chkElement.id, Aufgabe11.lichterkettendaten[i].name, Aufgabe11.lichterkettendaten[i].preis, parseInt(anzahl), chkElement.checked);
            }
        }
    }
    function initHalterung() {
        //Halterung:
        let halterung = document.getElementById("halterung");
        for (let i = 0; i < Aufgabe11.halterungdaten.length; i++) {
            if (Aufgabe11.halterungdaten[i].element == "Halterung") {
                let radioB = document.createElement("input");
                radioB.type = "radio";
                radioB.name = "radioGroupHalterung";
                radioB.value = "radio" + i;
                radioB.id = "radio" + i;
                halterung.appendChild(radioB);
                label = document.createElement("label");
                label.id = "label" + i;
                label.htmlFor = radioB.id;
                label.innerText = Aufgabe11.halterungdaten[i].name;
                halterung.appendChild(label);
            }
        }
    }
    //------------ 
    function AuswahlAuslesen() {
        var baumname = baumart.value;
        if (baumname != "") {
            baumart.name = "Baumtyp";
            ZuWarenkorb(Aufgabe11.baumdaten, true, baumname); //true --> element ist ausgewÃ¤hlt
        }
        else {
            ZuWarenkorb(Aufgabe11.baumdaten, false, baumname);
        }
        var halterungname = halterungtyp.value; //
        if (halterungname != "") {
            halterungtyp.name = "Halterungtyp";
            ZuWarenkorb(Aufgabe11.halterungdaten, true, halterungname);
        }
        else {
            ZuWarenkorb(Aufgabe11.halterungdaten, false, halterungname);
        }
        var lieferant = lieferopttyp.value;
        if (lieferant != "") {
            ZuWarenkorb(Aufgabe11.lieferoptionen, true, lieferant);
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
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=Warenkorb.js.map