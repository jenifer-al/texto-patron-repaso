
/**
 * 1. LÓGICA DE NEGOCIO
 * Esta función debe existir en el mismo archivo o ser importada.
 */
const borrarPatron = (texto, patron) => {
    if (!texto || !patron) return texto;
    // Creamos la expresión regular global para eliminar todas las coincidencias
    const regex = new RegExp(patron, "g");
    return texto.replace(regex, "");
};

/**
 * 2. LÓGICA DE INTERFAZ (El puente)
 */
document.addEventListener("DOMContentLoaded", () => {
    const boton = document.getElementById("calcular");
    const input = document.getElementById("texto");
    const resultado = document.getElementById("resultado");

    boton.addEventListener("click", () => {
        const textoUsuario = input.value;
        const patronABuscar = "xyz"; 

        // Aquí ya podemos llamar a la función porque está definida arriba
        const resultadoFinal = borrarPatron(textoUsuario, patronABuscar);

        // Actualizamos el DOM
        resultado.innerHTML = `
            <span style="color: #0891b2; font-weight: bold;">
                Resultado:
            </span> 
            ${resultadoFinal}
        `;
    });
});

