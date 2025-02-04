// Función para calcular el factorial
function calcularFactorial() {
    let input = document.getElementById("numero").value.trim();

    // Verifica si el input contiene caracteres antes o después del número
    if (!/^\d+$/.test(input)) {
        document.getElementById("resultado").innerText = "Error: Ingrese solo un número entero sin caracteres adicionales.";
        return;
    }

    let numero = parseInt(input);
    let factorial = 1;

    for (let i = 1; i <= numero; i++) {
        factorial *= i;
    }

    document.getElementById("resultado").innerText = `El factorial de ${numero} es: ${factorial}`;
}

// Ejecutar la función al presionar Enter
document.getElementById("numero").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        calcularFactorial();
    }
});