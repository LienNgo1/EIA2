/* Aufgabe 10: Weihnachtsbaumkonfigurator
Name: Ngo, Thi Lien
Matrikel: 256778
Datum: 21.12.2017
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Aufgabe10;
(function (Aufgabe10) {
    window.addEventListener("load", init);
    //  window.addEventListener("change", createWarenkorb); 
    let name;
    let strasse;
    let hNr;
    let ort;
    let plz;
    let mail;
    let label;
    let cartBaum = [Aufgabe10.baumart[0][0], "" + Aufgabe10.baumart[0][1]]; //name + preis von baumklein etc. in cartBaum speichern
    let cartHalterung = ["keine Halterung gewaehlt", "0"];
    let cartLichterkette = [Aufgabe10.lichterkette[0][0], "" + Aufgabe10.lichterkette[0][1]]; //name + preis von Kerzen in kerz speichern
    let cartSchmuck = [];
    let cartLiefern = ["keine Lieferoption gewaehlt", "0"];
    // ----------------- FUNKTION INIT----------------------------
    function init() {
        initBaum();
        initHalterung();
        initLichterkette();
        initSchmuck();
        initDaten();
        //--------------Lieferoptionen------------------
        let lieferopt = document.getElementById("lieferoptionen");
        for (let i = 0; i < Aufgabe10.angebot.length; i++) {
            if (Aufgabe10.angebot[i].kind == "Lieferung") {
                let radioB2 = document.createElement("input");
                radioB2.type = "radio";
                radioB2.name = "radioGroupLieferoptionen";
                radioB2.value = "radio2." + i;
                radioB2.id = "radio2." + i;
                lieferopt.appendChild(radioB2);
                let label3 = document.createElement("label");
                label3.id = "label3." + i;
                label3.htmlFor = radioB2.id;
                label3.innerText = Aufgabe10.angebot[i].name;
                lieferopt.appendChild(label3);
            }
        }
        //Button:
        let button = document.getElementById("button");
        let submit = document.createElement("button");
        submit.name = "Button";
        submit.type = "button";
        submit.innerText = "Bestellung pruefen";
        submit.addEventListener("mousedown", handleMouseDown);
        button.appendChild(submit);
    }
    //--------------- FUNKTION BAUM- CODE -------------
    function initBaum() {
        //Baumart:
        let baumart = document.getElementById("baumart");
        let selectBaum = document.createElement("select");
        selectBaum.name = "SelectBaumart";
        selectBaum.id = "selectBaumart";
        baumart.appendChild(selectBaum);
        for (let i = 0; i < Aufgabe10.angebot.length; i++) {
            if (Aufgabe10.angebot[i].kind == "Baumart") {
                let opt = document.createElement("option");
                opt.innerText = Aufgabe10.angebot[i].name;
                opt.id = "option" + i;
                selectBaum.appendChild(opt);
            }
        }
    }
    function initHalterung() {
        //Halterung:
        let halterung = document.getElementById("halterung");
        for (let i = 0; i < Aufgabe10.angebot.length; i++) {
            if (Aufgabe10.angebot[i].kind == "Halterung") {
                let radioB = document.createElement("input");
                radioB.type = "radio";
                radioB.name = "radioGroupHalterung";
                radioB.value = "radio" + i;
                radioB.id = "radio" + i;
                halterung.appendChild(radioB);
                label = document.createElement("label");
                label.id = "label" + i;
                label.htmlFor = radioB.id;
                label.innerText = Aufgabe10.angebot[i].name;
                halterung.appendChild(label);
            }
        }
    }
    function initLichterkette() {
        let Lichterkette = document.getElementById("Lichterkette");
        let selectBox2 = document.createElement("select");
        selectBox2.name = "SelectBeleuchtung";
        selectBox2.id = "selectBeleuchtung";
        Lichterkette.appendChild(selectBox2);
        for (let i = 0; i < Aufgabe10.angebot.length; i++) {
            if (Aufgabe10.angebot[i].kind == "Beleuchtung") {
                var opt2 = document.createElement("option");
                opt2.innerText = Aufgabe10.angebot[i].name;
                opt2.id = "option2." + i;
                selectBox2.appendChild(opt2);
            }
        }
    }
    function initSchmuck() {
        //Schmuckartikel:
        let schmuckartikel = document.getElementById("schmuckartikel");
        for (let i = 0; i < Aufgabe10.angebot.length; i++) {
            if (Aufgabe10.angebot[i].kind == "Schmuck") {
                let checkB = document.createElement("input");
                checkB.type = "checkbox";
                checkB.name = "CheckboxSchmuckartikel";
                checkB.value = "check";
                checkB.id = "check" + i;
                schmuckartikel.appendChild(checkB);
                let label2 = document.createElement("label");
                label2.id = "label2." + i;
                label2.htmlFor = checkB.id;
                label2.innerText = Aufgabe10.angebot[i].name;
                schmuckartikel.appendChild(label2);
                let stepper = document.createElement("input");
                stepper.type = "number";
                stepper.name = "StepperSchmuckartikel" + i;
                stepper.value = "1";
                stepper.id = "stepper" + i;
                stepper.min = "0";
                stepper.max = "10";
                stepper.step = "1";
                schmuckartikel.appendChild(stepper);
                let br = document.createElement("br");
                schmuckartikel.appendChild(br);
            }
        }
    }
    function initDaten() {
        let daten = document.getElementById("daten");
        name = document.createElement("input");
        name.type = "text";
        name.name = "DatenName";
        name.placeholder = "Name";
        name.pattern = "[a-zA-Z]{1,}";
        name.required = true;
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
        daten.appendChild(mail);
    }
    function handleMouseDown(_event) {
        let review = document.createElement("div");
        review.style.paddingBottom = "0.5em";
        if (name.checkValidity() == false || strasse.checkValidity() == false || ort.checkValidity() == false || mail.checkValidity() == false) {
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
})(Aufgabe10 || (Aufgabe10 = {}));
//# sourceMappingURL=Aufgabe10.js.map