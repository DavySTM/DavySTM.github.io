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
        recipient: "Brigitte",
        photo: "images/brigitte.PNG",
        wishlist: [
            "Moule à tarte tatin pro, antiadhesif en inox<br><small style='opacity:0.6'>C'est précis attention</small>",
            "Pochette porte monnaie<br><small style='opacity:0.6'>Pour le flouze qu'elle possède</small>",
            "Jeu de société Pili-Pili et Speed bac<br><small style='opacity:0.6'>Plus de jeux pour plus de triche</small>",
            "Savon de Groix Marcus à la criste marine<br><small style='opacity:0.6'>Pour sentir bon en tout circonstances</small>",
            "Carafe à vin<br><small style='opacity:0.6'>ça aurait été choquant qu'on parle pas d'alcool</small>",
            "Des livres mais on s'en fiche les cadeaux sont déja fait<br><small style='opacity:0.6'>Car Zaza est organisée</small>"
        ]
    },

    "P4M8QA": {
        santa: "Marine",
        recipient: "Jacques",
        photo: "images/jacques.PNG",
        wishlist: [
            "Bières & vins<br><small style='opacity:0.6'>Étonnant, non ?</small>",
            "Pull en taille M ou L<br><small style='opacity:0.6'>Pour supporter le dur hiver du nord 🥶</small>",
            "Carte cadeau Leroy Merlin ou Castorama<br><small style='opacity:0.6'>Pour faire plein de travaux !</small>"
        ]
    },

    "Z91L3C": {
        santa: "Morgan",
        recipient: "Suzanne",
        photo: "images/suzanne.PNG",
        wishlist: [
            "Carte cadeau surprise malo<br><small style='opacity:0.6'>Du petit commerce, on ADOOOREEE</small>",
            "Livre beauté fatale de Mona Chollet<br><small style='opacity:0.6'>Il faut souffrir pour être belle</small>",
            "Fixateur maquillage One Size On Til Dawn<br><small style='opacity:0.6'>Mais encore ?</small>",
            "Poudre Laura Mercier couleur Translucent <br><small style='opacity:0.6'>Ah quand même</small>",
            "Carte cadeau Sephora<br><small style='opacity:0.6'>Simple mais efficace</small>",
            "Masque Olaplex 4 en 1<br><small style='opacity:0.6'>C'est de la torture non ? Bon courage</small>",
            "Echarpe & Gant qui vont ensemble<br><small style='opacity:0.6'>Truc drôle accepter tant que c'est raccord</small>",
            "Masque Kerasta Genesis <br><small style='opacity:0.6'>C'est fini après promis Morgan</small>"
        ]
    },

    "R6T2KP": {
        santa: "Meganne",
        recipient: "Marine",
        photo: "images/marine.PNG",
        wishlist: [
            "La green card ou un mec riche americain <br><small style='opacity:0.6'>Qui vit à Orlando, oui c'est important</small>",
            "Lego « Le blason des maisons de Poudlard »<br><small style='opacity:0.6'>Poufsoufle un jour, poufsoufle toujours</small>",
            "Livre Harry Potter and the goblet of fire version « Minalima » EN ANGLAIS <br><small style='opacity:0.6'>To be or not to be et pour pas se tromper : a href='https://www.amazon.fr/dp/1546154418' target='_blank'>Voir sur Amazon</a></small>",
            "Kit haltères de musculation 20 kg avec disque de fonte en partie recyclée - Domyos Décathlon<br><small style='opacity:0.6'>Pour soulever Mickey</small>"
        ]
    },

    "V8Q5HD": {
        santa: "Nathan",
        recipient: "Meganne",
        photo: "images/meganne.PNG",
        wishlist: [
            "Degustation de vin <br><small style='opacity:0.6'>La villageoise ça marche</small>",
            "Bon cadeau chez Ynes lashe <br><small style='opacity:0.6'>Moi non plus je connais pas</small>",
            "Un foulard de chez Vic et Zag, <br><small style='opacity:0.6'>Les petits commerçant c'est bien</small>",
            "Soins visage - Les secrets de Laura,<br><small style='opacity:0.6'>Plus très secret</small>",
            "Legging marron de chez BYS<br><small style='opacity:0.6'>En taille XL pour 3x plus de plaisir</small>",
            "Verre à petit punch<br><small style='opacity:0.6'>Faudra pensez à inviter le père noël</small>",
            "Bougie <br><small style='opacity:0.6'>Pas celle des voitures je suppose</small>",
            "Veste de running deperlant H&M couleur ivoir / soleil<br><small style='opacity:0.6'>+ de précision pour moins de risque d'erreur</small>"
        ]
    },

    "B3N7WF": {
        santa: "Suzanne",
        recipient: "Isabelle",
        photo: "images/isabelle.PNG",
        wishlist: [
            "4 galettes chaises marque SunnyPillow velours anthracite<br><small style='opacity:0.6'>Moi la galette je préfére avec de la saucisse</small>",
            "Livre Stephen king<br><small style='opacity:0.6'>Les manquants : Chambre 1408 / Plus noir que noir / Holly / Tout est fatal / Juste avant le crépuscule / Nuit noire, étoiles mortes</small>",
            "Taille Haies Parkside (elle à déja la batterie)<br><small style='opacity:0.6'>Pour mieux voir la mer quand on ira prendre l'apéro</small>",
            "Cadeau surprise, à votre imagination<br><small style='opacity:0.6'>Imagination = Dillon 55%</small>"
        ]
    },

    "X5C9RM": {
        santa: "Brigitte",
        recipient: "Nathan",
        photo: "images/nathan.PNG",
        wishlist: [
            "Du vin <br><small style='opacity:0.6'>Un bon français, pourquoi pas un pack fromage ?</small>",
            "Du champagne ! <br><small style='opacity:0.6'>Vous allez peut-être avoir une annonce à féter ?</small>",
            "Du chiffre d'affaire ? <br><small style='opacity:0.6'>Un vrai business-man</small>"
        ]
    },

    "L2A8JQ": {
        santa: "Jacques",
        recipient: "Morgan",
        photo: "images/morgan.PNG",
        wishlist: [
            "Du gin <br><small style='opacity:0.6'>Et pas un Jean</small>",
            "Dégustation de vin<br><small style='opacity:0.6'>La deuxième personne à mettre ça dans sa liste tiens</small>",
            "Maillot Tommy Hifilghher ou lévis<br><small style='opacity:0.6'>Un homme de goût</small>",
            "Pull",
            "Montre <br><small style='opacity:0.6'>Une montre pour enfant ça passe</small>"
        ]
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
            "❌ Ce code n'est pas valide. Vérifie ton code et réessaie. Tata tu as voulu triché ?";

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
                     Sa liste de souhaits
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
