function yznat() {
    var kg = Number(document.getElementById("kg").value);
    var rost = Number(document.getElementById("rost").value);
    let IMT = kg / (rost * rost);
    let text = `${IMT}`;
    document.getElementById("text").innerHTML = text;
}

function pos(op) {
    const chislo1 = Number(document.getElementById("chislo1").value);
    const chislo2 = Number(document.getElementById("chislo2").value);
    var otvet;

    switch (op) {
        case "+":
            otvet = chislo1 + chislo2;
            break;
        case "-":
            otvet = chislo1 - chislo2;
            break;
        case "*":
            otvet = chislo1 * chislo2;
            break;
        case "/":
            if (chislo2 === 0) {
                otvet = "На ноль делить нельзя!";
            } else {
                otvet = chislo1 / chislo2;
            }
            break;
        default:
            otvet = "Неверный оператор";
    }

    document.getElementById("otvet").innerHTML = otvet;
}

function ot() {
    var grammm = Number(document.getElementById("grammm").value);
    let chislo = grammm / 1000;
    let otvet1 = `${chislo} кг`;
    document.getElementById("otvet1").innerHTML = otvet1;
}

function pos1() {
    var kgg = Number(document.getElementById("kgg").value);
    let gr = kgg * 1000;
    let otvet2 = `${gr} грамм.`;
    document.getElementById("otvet2").innerHTML = otvet2;
}

function plus() {
    var todo = document.getElementById("todo").value;
    let td = document.getElementById("td");
    if (td) {
        td.innerHTML += `<p>${todo}</p>`;   
        
    }
}

let int;
    function Go() {
      let hour = 0;
      let minute = 0;
      let second = 0;
      int = setInterval(() => {
     second += 1;
     
     if (second === 60) {
      minute += 1;
      second = 0;
    }
    if (minute === 60) {
      hour += 1;
      minute = 0;
    }
    document.getElementById("second").innerText = second;
       document.getElementById("minute").innerText = minute;
       document.getElementById("hour").innerText = hour;
   }, 1000);
    }