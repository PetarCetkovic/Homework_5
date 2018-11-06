function uRimski(br) {
    var rimski = {M: 1000,CM: 900,D: 500,CD: 400,C: 100,XC: 90,L: 50,XL: 40,X: 10,IX: 9,V: 5,IV: 4,I: 1};
    var str = '';
    for (var i of Object.keys(rimski)) {
      var q = Math.floor(br / rimski[i]);
      br -= q * rimski[i];
      str += i.repeat(q);
    }
    return str;
}

function uArapski(rim){
    var rimski = {M: 1000,D: 500,C: 100,L: 50,X: 10,V: 5,I: 1};
    if(rim=="") return 0;
    var broj = rimski[rim.charAt(0)];
    var preth, tren;

    for(let i=1;i<rim.length;i++){
        tren = rimski[rim.charAt(i)];
        preth = rimski[rim.charAt(i-1)];
        if(tren<=preth){
            broj+=tren;
        }else{
            broj-=preth*2+tren;
        }
    }
    return broj;
}

function isNumber(broj){
    let s=""+broj;
    for (let i = s.length - 1; i >= 0; i--) {
        const d = s.charCodeAt(i);
        if (d < 48 || d > 57) return false
      }
      return true
}

function isRoman(s){
    for (let i = 0; i <s.length; i++) {
        let d = s.charAt(i);
        if (d !="L" && d !="M" && d !="C" && d !="X" && d !="D" && d !="I" && d !="V") return false;
      }
      return true;
}

function konv(){
    var unos = document.getElementById("broj");
    let c = unos.value;
    if(!isNumber(c) && !isRoman(c)){
        alert("Molim vas unesite ispravno rimski ili arapski broj");
        document.getElementById("broj").value="";
        return 0;
    }
    if(isNumber(c)){
        var n = parseInt(document.getElementById("broj").value, 10);
        unos.value= uRimski(n);
        return 0;
    }
    unos.value = uArapski(c);
}

var dugme = document.getElementById("kon");
dugme.addEventListener("click", konv);

const ocisti = document.getElementById("clear");
ocisti.addEventListener("click", function(){
    document.getElementById("broj").value ="";
})
