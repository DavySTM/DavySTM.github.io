/*
====================================================
SECRET SANTA
====================================================

Chaque code donne accès à UNE seule personne.

IMPORTANT :
Les codes sont volontairement aléatoires.
Ne les publie pas dans une liste accessible aux participants.
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
   CODE DANS L'URL
========================================= */

function getCode() {

    const params =
        new URLSearchParams(window.location.search);

    return params.get("code");
}


/* =========================================
   PAGE D'ACCUEIL
========================================= */

function showLockedPage() {

    const content =
        document.getElementById("content");


    content.innerHTML = `

        <div class="locked-box">

            <div class="lock-icon">
                🔐
            </div>

            <h2>
                Une surprise t'attend
            </h2>

            <p>
                Cette page est personnelle.<br>
                Utilise le lien Secret Santa
                qui t'a été envoyé.
            </p>

        </div>

    `;
}


/* =========================================
   CODE INVALIDE
========================================= */

function showError() {

    const content =
        document.getElementById("content");


    content.innerHTML = `

        <div class="warning">

            🎄

            <br><br>

            Oups ! Ce lien Secret Santa
            n'est pas valide.

            <br><br>

            Vérifie le lien qui t'a été envoyé.

        </div>

    `;
}


/* =========================================
   LISTE DE CADEAUX
========================================= */

function createWishlist(wishlist) {

    if (!wishlist || wishlist.length === 0) {

        return `

            <p class="empty-list">

                🎁 La liste de souhaits
                sera bientôt disponible...

                <br><br>

                Revenez voir cette page
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
   REVELATION
========================================= */

function revealParticipant(participant) {

    const content =
        document.getElementById("content");


    content.innerHTML = `

        <div class="reveal">

            <div class="secret-label">
                Ton Secret Santa est...
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

                ${createWishlist(participant.wishlist)}

            </div>

        </div>

    `;


    createConfetti();
}


/* =========================================
   BOUTON REVELATION
========================================= */

function showRevealButton(participant) {

    const content =
        document.getElementById("content");


    content.innerHTML = `

        <div class="locked-box">

            <div class="lock-icon">
                🎁
            </div>

            <h2>
                Ton cadeau de Noël
            </h2>

            <p>
                Quelqu'un a été choisi spécialement
                pour toi...
            </p>


            <button
                class="reveal-button"
                id="revealButton"
            >
                🎅 Découvrir mon Secret Santa
            </button>

        </div>

    `;


    document
        .getElementById("revealButton")
        .addEventListener("click", () => {

            revealParticipant(participant);

        });
}


/* =========================================
   CONFETTIS
========================================= */

function createConfetti() {

    const container =
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


        piece.style.transform =
            `rotate(${Math.random() * 360}deg)`;


        container.appendChild(piece);


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


    const size =
        Math.random() * 12 + 8;


    flake.style.fontSize =
        size + "px";


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


/*
 * Une nouvelle neige toutes les 180 ms
 */

setInterval(createSnowflake, 180);


/* =========================================
   INITIALISATION
========================================= */

function init() {

    const code = getCode();


    /*
     * Pas de code :
     * page totalement neutre.
     */

    if (!code) {

        showLockedPage();

        return;
    }


    /*
     * Mauvais code
     */

    const participant =
        participants[code];


    if (!participant) {

        showError();

        return;
    }


    /*
     * Code valide :
     * on affiche d'abord le bouton.
     */

    showRevealButton(participant);
}


init();
