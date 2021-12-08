console.log("JS loaded");

// Burger-menu
// Sætter constants, så det er nemmere at kalde på senere
const burgerbtn = document.getElementById('navburger');
const burgermenu = document.getElementById('burgermenu');

// Declare "burgermenuOpen" til at være false
let burgermenuOpen = false;
console.log(!burgermenuOpen)

// Hvis der trykkes på "burgerbtn" (constant vi satte tidligere)
burgerbtn.addEventListener("click", function(event) {
    event.preventDefault(); // Ignorer den event der normalt vil ske, ved klik af knappen
    console.log("Burger button clicked") // Debugging, logger i console at der er trykket
    if (!burgermenuOpen) { // Hvis burgermenu er lukket
        burgerbtn.classList.add('open'); // Tilføj en class "open" til elementet navburger
        burgermenuOpen = true; // Sæt burgermenuOpen til true (åben)
    } else { // Hvis burgermenu er åben
        burgerbtn.classList.remove('open'); // Fjern class "open"
        burgermenuOpen = false; // Sæt burgermenuOpen til false (lukket)
    }
    if (burgermenu.style.display === "block") { // Når der trykkes på knappen, tjek om menuen er åben
        burgermenu.style.display = "none"; // Lukker menuen hvis den er åben
    } else { // Hvis menuen er lukket
        burgermenu.style.display = "block"; // Åbner menuen hvis den er lukket
    }
})