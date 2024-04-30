function proceso() {
    let nota_1 = parseFloat(document.getElementById("nota_1").value);
    let nota_2 = parseFloat(document.getElementById("nota_2").value);
    let result = 0;
    
    for(let nota_3 = 0; nota_3 < 8; nota_3 += 0.1){
        if(nota_1 * 0.3 + nota_2 * 0.3 + nota_3 * 0.4 >= 3){
            result = nota_3;
            break;
        }
    }
    document.getElementById("result").innerHTML = "Para pasar necesitas: " + result.toFixed(1) + "\nMucha suerte! ";
}