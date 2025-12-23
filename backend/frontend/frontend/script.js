function calcular() {
    fetch("https://oliverkaiky-dotcom.github.io/Calculadora_online", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            num1: document.getElementById("num1").value,
            num2: document.getElementById("num2").value,
            operacao: document.getElementById("operacao").value
        })
    })
    .then(res => res.json())
    .then(data => {
        document.getElementById("resultado").innerText =
            data.resultado ?? data.erro
    })
}

