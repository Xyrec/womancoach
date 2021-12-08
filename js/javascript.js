console.log("JS loaded");

// Burger-menu kode //
// Sætter constants, så det er nemmere at kalde på senere
const burgerbtn = document.getElementById('navburger');
const burgermenu = document.getElementById('burgermenu');

// Declare "burgermenuOpen" til at være false
let burgermenuOpen = false;
console.log(!burgermenuOpen)

// Hvis der trykkes på "burgerbtn" (constant vi satte tidligere)
burgerbtn.addEventListener("click", function (event) {
    event.preventDefault(); // Ignorer den event der normalt vil ske, og i stedet...

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

// Kode til booking og kvitteringsside //
// Sætter constants op, så vi kan referere til specifikke ID'er hurtigere
const booking = document.getElementById('booking');
const bookingDate = document.getElementById('bookingDate');
const bookingTime = document.getElementById('bookingTime');
const bookingName = document.getElementById('bookingName');
const bookingEmail = document.getElementById('bookingEmail');
const bookingTele = document.getElementById('bookingTele');
const bookingComment = document.getElementById('bookingComment');
const kvittering = document.getElementById('kvittering');

// Hvis et element med ID booking eksisterer, så
if (booking) {
    booking.addEventListener("submit", function (event) { // Hvis form modtager "submit" signal
        event.preventDefault(); // Ignorer den event der normalt vil ske, og i stedet...

        // Sender brugeren videre til kvitteringssiden med indtastede informationer i URL
        window.location.href = `kvittering.html?dato=${bookingDate.value}&tid=${bookingTime.value}&navn=${bookingName.value}&email=${bookingEmail.value}&telefon=${bookingTele.value}&kommentar=${bookingComment.value}`;
    })
}

// Hvis et element med ID kvittering eksisterer, så
if (kvittering) {
    const urlData = new URLSearchParams(window.location.search); // Henter alle data fra URL

    // Indsætter alle indtastede informationer i de rette felter på kvitteringssiden
    bookingDate.insertAdjacentText("beforeend", urlData.get("dato"));
    bookingTime.insertAdjacentText("beforeend", urlData.get("tid"));
    bookingName.insertAdjacentText("beforeend", urlData.get("navn"));
    bookingEmail.insertAdjacentText("beforeend", urlData.get("email"));
    bookingTele.insertAdjacentText("beforeend", urlData.get("telefon"));
    bookingComment.insertAdjacentText("beforeend", urlData.get("kommentar"));

    // Normalt ville disse informationer også blive gemt i en database som Stine kan tilgå, 
    // men da vi ikke har haft undervisning som databaser endnu, 
    // kan vi ikke fortroligt gemme brugers informationer.
    // Vi kunne gemme data til en JSON-fil, men den kan tilgås af alle når hjemmesiden
    // kommer til at ligge ude på nettet.
    // Den nuværende løsning gemmer ikke informationer på lang sigt.
}