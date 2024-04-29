function proceso() {
    let nota1 = parseFloat(document.getElementById("nota1").value);
    let nota2 = parseFloat(document.getElementById("nota2").value);
    let result = nota1 + nota2;
    document.getElementById("result").innerHTML = "Result: " + result;
}