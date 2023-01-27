/*$(window).on("load", function () {
	$("#exampleModalToggle").modal("show");
});*/

let sender = document.getElementById('sender');
const info = document.getElementById('info');
const chat = document.getElementById('chat');
const style = document.getElementById('myStyle')

function sendMessage(){
        info.style.visibility = 'hidden';
        chat.style.visibility = 'visible';
        chat.innerHTML += '<p class="response">' + sender.value + '</p>';
        chat.innerHTML += '<p id="rep" class="response text-end">Vous avez envoyez un message</p>';
        style.innerText = '.response {\n' +
            '\toverflow: hidden; /* Ensures the content is not revealed until the animation */\n' +
            '\tborder-right: .15em solid orange; /* The typwriter cursor */\n' +
            '\twhite-space: nowrap; /* Keeps the content on a single line */\n' +
            '\tmargin: 0 auto; /* Gives that scrolling effect as the typing happens */\n' +
            '\tletter-spacing: .15em; /* Adjust as needed */\n' +
            '}'
        rep.style.animation = "typing 3.5s steps(40, end), blink-caret .75s step-end infinite";
}

// Questions prédéfinies => 34
let questions = ["Comment vas-tu ?", 
                 "Quoi de neuf ?", 
                 "Quel âge as-tu ?", 
                 "Ou habites-tu ?",
                 "Que fais-tu ?",
                 "Pratiques-tu au moins un sport ?",
                 "Quels sont tes hobbies ?",
                 "Es-tu parti à l'étranger ?",
                 "Es-tu parti en vacances",
                 "Combien de temps restes-tu sur ton PC?",
                 "Combien de temps restes-tu dehors ?",
                 "Quels sont tes compétences techniques ?",
                 "Es-tu inscrit à Pole Emploi ?",
                 "Parles-tu une deuxième langue?",
                 "As-tu des frères ou soeurs ?",
                 "Que détestes-tu ?",
                 "Que désires-tu ?",
                 "Fais-tu des paris foot ?",
                 "Combien de salaire touche-tu ?",
                 "Ou travailles-tu ?",
                 "Combien d'amis as-tu ?",
                 "Es-tu gourmand ?",
                 "quelle est ta saison préférée ?",
                 "Quel est ton anniversaire ?",
                 "Fais-tu des courses souvent ou régulièrement ?",
                 "Comment verras-tu dans l'avenir ?",
                 "Vis-tu seul ou avec parents ?",
                 "Rends-tu en voiture ou en bus pour aller au travail ?",
                 "Quel est ton niveau d'études ?",
                 "Es-tu allé au stade de foot ?",
                 "As-tu des animaux ?",
                 "Vas-tu aux restos ?",
                ];
console.log(questions.length);

// Réponses prédéfinies => 34
let reponses = ["Je vais bien",
                "Tout va bien",
                "J'ai 22 ans",
                "J'habite à Grenoble",
                "Je fais le codage sur mon PC",
                "Non, je pratiques plus de sport",
                "Mes hobbies sont : jouer aux jeux vidéo, écouter la musique, aller au cinéma, regarder les séries, etc...",
                "Oui, je suis déjà parti à l'étranger",
                "Oui, je suis parti en vacances il y a longtemps",
                "Je reste 4 heures en moyenne sur mon PC",
                "Je reste pas plus de 3 heures dehors",
                "Mes compétences techniques sont : HTML, CSS, JS, PHP, SQL, VSCODE, TRELLO, FIGMA, LUCID, ETC...",
                "Oui, je suis inscrit à Pôle Emploi",
                "Oui, je parle une deuxième langue telle que l'anglais",
                "Oui, j'ai un grand frère et une petite soeur",
                "Bahh, je déteste vivre dans une montagne, le romantisme, la poésie, les mangas, le yoga, la culture...",
                "Ehh bien, je désire acheter une maison de luxe puis une console de jeux vidéo, un nouveau PC Gamer, une nouvelle télé HD, une voiture de luxe Mercedes. Ensuite, voyager à l'étranger et vivre dans une plage de mer pure",
                "Non, pas du tout, pas de paris",
                "Je touche 2889 euros net mensuel",
                "Je travaille dans une entreprise qui crée des prestations et services aux chers clients",
                "J'en ai beaucoup",
                "Nnn, pas vraiment gourmand",
                "Ma saison préférée est le printemps",
                "Mon aniversaire est le 28 juillet 2000",
                "Nn, je n'ai pas la responsabilité de faire des courses",
                "Dans l'avenir, je me verrai comme concepteur développeur d'applications",
                "Avec mes parents",
                "J'utilise ma voiture pour me rendre au travail",
                "Mon niveau d'études est Bac +2",
                "Je suis allé qu'une fois au stade de foot",
                "Oui, j'ai un chat et des perruches",
                "Je vais moins souvent au restos"
               ];