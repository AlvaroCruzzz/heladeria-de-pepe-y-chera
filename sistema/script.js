// --- DOM: Selección de elementos ---
const mostrador = document.getElementById("mostrador-helados"); // <-- Actualizado
const btnLista = document.getElementById("btn-lista");

const btnDdl = document.getElementById("btn-ddl");
const btnChocolate = document.getElementById("btn-chocolate");
const btnFrutilla = document.getElementById("btn-frutilla");
const btnPistacho = document.getElementById("btn-pistacho");

// --- Función para preparar y agregar helados al DOM ---
function prepararHelado(nombreHelado) {
    // Busca y remueve el mensaje inicial "juntando frío" si existe
    const cucuruchoViejo = document.getElementById("obsoleto");
    if (cucuruchoViejo) {
        cucuruchoViejo.remove();
    }

    // CREACIÓN DOM: Crea un nuevo elemento <p> y lo inserta
    const nuevoHelado = document.createElement("p");
    nuevoHelado.textContent = nombreHelado;
    mostrador.appendChild(nuevoHelado);
}

// --- Event Listeners para los botones ---
btnDdl.addEventListener("click", function() {
    prepararHelado("🍨 Dulce de Leche servido!");
});

btnChocolate.addEventListener("click", function() {
    prepararHelado("🍫 Chocolate servido!");
});

btnFrutilla.addEventListener("click", function() {
    prepararHelado("🍓 Frutilla servida!");
});

btnPistacho.addEventListener("click", function() {
    prepararHelado("🥜 Pistacho servido!");
});

// --- Event Listener para ver la carta ---
btnLista.addEventListener("click", function() {
    const cucuruchoViejo = document.getElementById("obsoleto");
    if (cucuruchoViejo) {
        cucuruchoViejo.remove();
    }

    // MANIPULACIÓN DOM: Agregar la lista de sabores
    const lista = document.createElement("div");
    lista.innerHTML = "<h3>📜 Carta de Helados:</h3><ul><li>🍨 Dulce de Leche</li><li>🍫 Chocolate</li><li>🍓 Frutilla</li><li>🥜 Pistacho</li></ul>";
    mostrador.appendChild(lista);

    // USO DEL BOM (Browser Object Model): Interactuar con la ventana del navegador
    // 1. window.location.href (Lee la URL actual)
    // 2. window.alert (Llama a una función nativa del navegador para mostrar un popup)
    window.alert("Estás consultando la carta desde la URL:\n" + window.location.href);
});