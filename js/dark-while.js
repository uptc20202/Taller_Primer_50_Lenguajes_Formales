// Función para cambiar el tema
function toggleTheme() {
    const body = document.body;

    // Comprobar si el cuerpo del documento tiene la clase "light"
    if (body.classList.contains("light")) {
        // Cambiar a tema oscuro
        body.classList.remove("light");
        body.classList.add("dark");
    } else {
        // Cambiar a tema claro
        body.classList.remove("dark");
        body.classList.add("light");
    }
}

// Agregar un controlador de clic al botón de cambio de tema
const themeButton = document.getElementById("theme-toggle");
themeButton.addEventListener("click", toggleTheme);
