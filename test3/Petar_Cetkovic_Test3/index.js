const getTable = document.getElementById("igre")
function myFunction() {
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const myObj = JSON.parse(this.responseText);
            for(let i =0;i<myObj.length;i++){
                unesi(myObj[i],i);
            }
        }
    };
    xmlhttp.open("GET", "igrice.json", true);
    xmlhttp.send();
}
function unesi(igrica, broj){
    const tr = document.createElement("tr");
    tr.className = "igre_lista";
    tr.id=`${igrica.ime}`;
    var br = document.createElement("td");
    br.appendChild(document.createTextNode(broj+1));
    var slika = document.createElement("td");
    var url = document.createElement("div");
    url.id=`${igrica.IGN}`;
    url.innerHTML = `<img class="slidze" src="${igrica.slika_igre}" alt="" title="${igrica.ime}">`;
    slika.appendChild(url)
    slika.className = "slike";
    slika.style.width = "50px";
    var datum = document.createElement("td");
    datum.appendChild(document.createTextNode(igrica.datum_izlaska));
    var izvodjac = document.createElement("td");
    izvodjac.appendChild(document.createTextNode(igrica.izdavac));
    var zanr = document.createElement("td");
    zanr.className = "zanrovi";
    zanr.appendChild(document.createTextNode(igrica.zanr));
    var ime = document.createElement("td");
    ime.appendChild(document.createTextNode(igrica.ime));
    ime.className = "imena";

    var ocjena = document.createElement("td");
    ocjena.appendChild(document.createTextNode(igrica.ocjena));
    ocjena.className = "ocjene";

    var x = document.createElement("td");
    const deleteBtn = document.createElement("button");
    deleteBtn.className="delete";
    deleteBtn.appendChild(document.createTextNode("X"));
    x.appendChild(deleteBtn);

    tr.appendChild(br);
    tr.appendChild(slika);
    tr.appendChild(datum);
    tr.appendChild(izvodjac);
    tr.appendChild(zanr);
    tr.appendChild(ocjena);
    tr.appendChild(x)
    getTable.appendChild(tr);
}
var srch = document.getElementById("srch");
srch.addEventListener("click", filterItems);
var zanrovi = document.getElementsByClassName("zanrovi");
var imena = document.getElementsByClassName("imena");
function filterItems(event){
    let oc = document.getElementById("poz").value;
    console.log(oc);
    event.preventDefault();
    const text = document.getElementById("igran").value;
    console.log(text);
    let ocjLista = document.getElementsByClassName("ocjene");
    for(let i=0;i<ocjLista.length;i++){
        if(parseFloat(ocjLista[i].textContent)>oc){
            ocjLista[i].parentElement.style.display="-ms-grid";
        }
        else{
            ocjLista[i].parentElement.style.display="none";
        }
    }
    let slikeLista = document.getElementsByClassName("slidze");
    if(document.getElementById("i").checked){
        for(let i=0;i<slikeLista.length;i++){
            console.log(slikeLista[i].title);
            if(text==slikeLista[i].title){
                slikeLista[i].parentElement.parentElement.parentElement.style.display="-ms-grid";
            }
            else{
                slikeLista[i].parentElement.parentElement.parentElement.style.display="none";

            }
        }
    }

    if(document.getElementById("z").checked){

    }
}

getTable.addEventListener("click" , function(e){
    removeItem(e);
});
console.log(getTable);

function removeItem(event){
    if(event.target.classList.contains("delete")){
        if(confirm("Jeste li sigurni da zelite da uklonite item?")){
           const tr = event.target.parentNode.parentNode;
            getTable.removeChild(tr);

        }
    }
    saveList();
}

getTable.addEventListener("click" , function(e){
    otvoriIGN(e);
});
function otvoriIGN(event){
    if(event.target.classList.contains("slidze")){
        let c = event.target.parentElement.id;
        window.open(c,'_blank');
}
}
//as

myFunction();
