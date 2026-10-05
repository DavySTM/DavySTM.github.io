/*
====================================================
SECRET SANTA
====================================================

Les codes sont personnels.

La page d'accueil demande le code.
Si le code est correct, on affiche directement
la page personnelle correspondante.

====================================================
*/


const participants = {

    "K7F2X9": {
        santa: "Isabelle",
        recipient: "Tata",
        photo: "images/tata.jpg",
        wishlist: []
    },

    "P4M8QA": {
        santa: "Marine",
        recipient: "Tonton",
        photo: "images/tonton.jpg",
        wishlist: []
    },

    "Z91L3C": {
        santa: "Morgan",
        recipient: "Suzanne",
        photo: "images/suzanne.jpg",
        wishlist: []
    },

    "R6T2KP": {
        santa: "Megane",
        recipient: "Marine",
        photo: "images/marine.jpg",
        wishlist: []
    },

    "V8Q5HD": {
        santa: "Nathan",
        recipient: "Megane",
        photo: "images/megane.jpg",
        wishlist: []
    },

    "B3N7WF": {
        santa: "Suzanne",
        recipient: "Isabelle",
        photo: "images/isabelle.jpg",
        wishlist: []
    },

    "X5C9RM": {
        santa: "Tata",
        recipient: "Nathan",
        photo: "images/nathan.jpg",
        wishlist: []
    },

    "L2A8JQ": {
        santa: "Tonton",
        recipient: "Morgan",
        photo: "images/morgan.jpg",
        wishlist: []
    }

};


/* =========================================
   FORMULAIRE DU CODE
========================================= */

const form =
    document.getElementById("codeForm");


const input =
    document.getElementById("secretCode");


const error =
    document.getElementById("error");


form.addEventListener("submit", function(event) {

    event.preventDefault();


    /*
     * On transforme automatiquement
     * le code en majuscules.
     */

    const code =
        input.value
            .trim()
            .toUpperCase();


    /*
     * Code incorrect
     */

    if (!participants[code]) {

        error.textContent =
            "❌ Ce code n'est pas valide. Vérifie ton code et réessaie.";

        input.classList.add("input-error");

        setTimeout(() => {
            input.classList.remove("input-error");
        }, 500);

        return;
    }


    /*
     * Code correct
     */

    error.textContent = "";


    /*
     * On enregistre temporairement
     * le code dans la session du navigateur.
     */

    sessionStorage.setItem(
        "secretSantaCode",
        code
    );


    /*
     * On affiche directement
     * la page personnelle.
     */

    showPersonalPage(
        participants[code]
    );

});


/* =========================================
   PAGE PERSONNELLE
========================================= */

function showPersonalPage(participant) {

    const content =
        document.getElementById("content");


    content.innerHTML = `

        <div class="reveal">

            <div class="secret-label">
                🎄 Ton Secret Santa est...
            </div>


            <div class="recipient">
                ${participant.recipient}
            </div>


            <div class="photo-container">

                <img
                    class="photo"
                    src="${participant.photo}"
                    alt="Photo de ${participant.recipient}"

                    onerror="
                        this.style.display='none';
                        this.nextElementSibling.style.display='flex';
                    "
                >

                <div
                    class="photo-placeholder"
                    style="display:none;"
                >
                    📷
                </div>

            </div>


            <div class="wishlist">

                <h2 class="wishlist-title">
                    🎁 Sa liste de souhaits
                </h2>

                ${createWishlist(
                    participant.wishlist
                )}

            </div>


            <button
                class="reveal-button"
                onclick="logout()"
            >
                🔒 Quitter ma page
            </button>

        </div>

    `;


    createConfetti();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================================
   LISTE DE SOUHAITS
========================================= */

function createWishlist(wishlist) {

    if (!wishlist || wishlist.length === 0) {

        return `

            <p class="empty-list">

                🎁 La liste de souhaits
                sera bientôt disponible...

                <br><br>

                Reviens voir cette page
                un peu plus tard !

            </p>

        `;
    }


    return `

        <ul>

            ${wishlist.map(item => `
                <li>
                    🎁 ${item}
                </li>
            `).join("")}

        </ul>

    `;
}


/* =========================================
   QUITTER LA PAGE
========================================= */

function logout() {

    sessionStorage.removeItem(
        "secretSantaCode"
    );


    location.reload();
}


/* =========================================
   CONFETTIS
========================================= */

function createConfetti() {

    const container =
        document.getElementById("confetti");


    /*
     * Si le conteneur n'existe pas encore,
     * on le crée.
     */

    if (!container) {

        const newContainer =
            document.createElement("div");

        newContainer.id = "confetti";

        document.body.appendChild(
            newContainer
        );
    }


    const confettiContainer =
        document.getElementById("confetti");


    const colors = [
        "#ff3b3b",
        "#ffd166",
        "#54e0a1",
        "#ffffff",
        "#e85d75"
    ];


    for (let i = 0; i < 80; i++) {

        const piece =
            document.createElement("div");


        piece.className =
            "confetti-piece";


        piece.style.left =
            Math.random() * 100 + "vw";


        piece.style.background =
            colors[
                Math.floor(
                    Math.random() * colors.length
                )
            ];


        piece.style.animationDelay =
            Math.random() * 0.5 + "s";


        confettiContainer.appendChild(
            piece
        );


        setTimeout(() => {

            piece.remove();

        }, 3500);
    }
}


/* =========================================
   NEIGE
========================================= */

function createSnowflake() {

    const snow =
        document.getElementById("snow");


    const flake =
        document.createElement("div");


    flake.className =
        "snowflake";


    const symbols = [
        "❄",
        "❅",
        "❆",
        "•"
    ];


    flake.innerText =
        symbols[
            Math.floor(
                Math.random() * symbols.length
            )
        ];


    flake.style.left =
        Math.random() * 100 + "vw";


    flake.style.fontSize =
        Math.random() * 12 + 8 + "px";


    const duration =
        Math.random() * 6 + 5;


    flake.style.animationDuration =
        duration + "s";


    flake.style.opacity =
        Math.random() * 0.6 + 0.3;


    snow.appendChild(flake);


    setTimeout(() => {

        flake.remove();

    }, duration * 1000);
}


setInterval(
    createSnowflake,
    180
);
