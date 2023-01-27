/*$(window).on("load", function () {
	$("#exampleModalToggle").modal("show");
});*/
let sender = document.getElementById('sender');
const info = document.getElementById('info');
const chat = document.getElementById('chat');
const style = document.getElementById('myStyle')
const title = document.getElementById('title')

const mode = {
        groot : {
                /*En fonction de ce que tu écris il active le mode groot et cherche aléatoirement des caractéres spéciaux*/
                punctuation: [
                        '?',
                        '!',
                        '...',
                        '!?',
                        ':O',
                        
                ],
        },
        debugMe : {
                /*Si tu lui pose une question il active le mode debugMe et cherche aléatoirement une réponse*/
                debugMeArray : [
                        "Pourquoi ?",
                        "Reformule ta question.",
                        "Reformule ta problématique.",
                        "Est-ce que tu es sûr de ce que tu as écrit ?",
                        "As-tu affiché du debug (console.log en JS, print_r ou var_dump en PHP, ...) ?",
                        "Est-ce que le fichier est bien appelé ?",
                        "Où est ton fichier ?",
                        "Où est la déclaration de ta fonction ?",
                        "Où exécutes-tu ta fonction ?",
                        "Où est la déclaration de ta variable ?",
                        "Qu'y a-t-il dans ta variable ?",
                        "Décris-moi ce que tu veux faire en langage courant.",
                        "Que fait ton code ?",
                        "Tu as regardé sur Google ?",
                        "Google est ton ami ;)",
                        "Il manquerait pas un point-virgule ou une parenthèse ?",
                        "Est-ce que ton code est bien indenté ?",
                        "As-tu regardé dans l'inspecteur du navigateur ?",
                        "Prends un papier et un crayon ;)",
                        "Fais une pause :)",
                        "Que fait cette fonction ?"
                ],
                
        },
}
const dialog = [
        {
                keywords : [
                        'blague',
                        'carambar'
                ],
                response : "Qu'est ce qu'un chien avec des lunettes ? Un optichien"
        },
        {
                keywords : [
                        'ça',
                        'va',
                        'comment',
                        'allez-vous'
                ],
                response : "Je vais bien"
        },
        {
                keywords : [
                        'blague',
                        'toto'
                ],
                multipleReponse : true,
                response : [
                    'C’est la maîtresse qui demande à Toto « Cite-moi un mammifère qui n’a pas de dents »… « Ma grand-mère ? ».',
                    'C’est l’histoire de Toto va voir sa maman en chialant comme une grosse merde « – Maman, Maman… je me suis fait mal ! – Où ça ? – Là-bas ! »',
                    'C’est la maîtresse de Toto qui lui demande : « Toto, quand je dis « il pleuvait », de quel temps il s’agit ? », et là Toto il répond « D’un sale temps madame ! ».'
                ]
        },
        {
                keywords : [
                        'quoi',
                        'neuf',
                ],
                response : "Tout va bien"
        },
        {
                keywords : [
                        'age',
                        'quel',
                ],
                response : "J'ai 22 ans"
        },
        {
                keywords : [
                        'habites',
                        'ou',
                ],
                response : "J'habite à Grenoble"
        },
        {
                keywords : [
                        'fais',
                        'tu',
                ],
                response : "Je fais le codage sur mon PC"
        },
        {
                keywords : [
                        'sport',
                        'tu',
                ],
                response : "Non, je pratiques plus de sport"
        },
        {
                keywords : [
                        'hobbies',
                        'tes',
                ],
                response : "Mes hobbies sont : jouer aux jeux vidéo, écouter la musique, aller au cinéma, regarder les séries, etc..."
        },
        {
                keywords : [
                        'parti',
                        'étranger',
                ],
                response : "Oui, je suis déjà parti à l'étranger"
        },
        {
                keywords : [
                        'vacances',
                        'parti',
                ],
                response : "Oui, je suis parti en vacances il y a longtemps"
        },
        {
                keywords : [
                        'temps',
                        'pc',
                ],
                response : "Je reste 4 heures en moyenne sur mon PC"
        },
        {
                keywords : [
                        'dehors',
                        'temps',
                ],
                response : "Je reste pas plus de 3 heures dehors"
        },
        {
                keywords : [
                        'compétences',
                        'technique',
                ],
                response : "Mes compétences techniques sont : HTML, CSS, JS, PHP, SQL, VSCODE, TRELLO, FIGMA, LUCID, ETC..."
        },
        {
                keywords : [
                        'pole',
                        'emploi',
                        'inscrit',
                ],
                response : "Oui, je suis inscrit à Pôle Emploi"
        },
        {
                keywords : [
                        'langue',
                        'parler',
                ],
                response : "Oui, je parle une deuxième langue telle que l'anglais"
        },
        {
                keywords : [
                        'frère',
                        'soeur',
                        'combien',
                ],
                response : "Oui, j'ai un grand frère et une petite soeur"
        },
        {
                keywords : [
                        'déteste',
                        'tu',
                ],
                response : "Bahh, je déteste vivre dans une montagne, le romantisme, la poésie, les mangas, le yoga, la culture..."
        },
        {
                keywords : [
                        'désire',
                        'tu',
                ],
                response : "Ehh bien, je désire acheter une maison de luxe puis une console de jeux vidéo, un nouveau PC Gamer, une nouvelle télé HD, une voiture de luxe Mercedes." +
                    " Ensuite, voyager à l'étranger et vivre dans une plage de mer pure"
        },
        {
                keywords : [
                        'paris',
                        'foot',
                        'sportif',
                ],
                response : "Non, pas du tout, pas de paris"
        },
        {
                keywords : [
                        'salaire',
                        'touche',
                        'combien',
                ],
                response : "Je touche 2889 euros net mensuel"
        },
        {
                keywords : [
                        'travaille',
                        'ou',
                ],
                response : "Je travaille dans une entreprise qui crée des prestations et services aux chers clients"
        },
        {
                keywords : [
                        'amis',
                        'combien',
                ],
                response : "J'en ai beaucoup"
        },
        {
                keywords : [
                        'gourmand',
                        'tu',
                ],
                response : "Non, pas vraiment gourmand"
        },
        {
                keywords : [
                        'saison',
                        'préférée',
                ],
                response : "Ma saison préférée est le printemps"
        },
        {
                keywords : [
                        'anniversaire',
                        'date',
                        'quand'
                ],
                response : "Mon aniversaire est le 28 juillet 2000"
        },
        {
                keywords : [
                        'courses',
                        'fait',
                ],
                response : "Nn, je n'ai pas la responsabilité de faire des courses"
        },
        {
                keywords : [
                        "l'avenir",
                        'devenir',
                        'dans',
                ],
                response : "Dans l'avenir, je me verrai comme concepteur développeur d'applications"
        },
        {
                keywords : [
                        'seul',
                        'vit',
                        'parents',
                ],
                response : "Avec mes parents"
        },
        {
                keywords : [
                        'voiture',
                        'aller',
                        'travail',
                ],
                response : "J'utilise ma voiture pour me rendre aux travail"
        },
        {
                keywords : [
                        'niveau',
                        "d'études",
                        'études',
                ],
                response : "Mon niveau d'études est Bac +2"
        },
        {
                keywords : [
                        'stade',
                        'foot',
                ],
                response : "Je suis allé qu'une fois au stade de foot"
        },
        {
                keywords : [
                        'des',
                        'animaux',
                ],
                response : "Oui, j'ai un chat et des perruches"
        },
        {
                keywords : [
                        'aux',
                        'restaurant',
                        'resto',
                ],
                response : "Je vais moins souvent au restos"
        },
]
function getRandomInt(max) {
        return Math.floor(Math.random() * max);
}

function sendMessage() {
        info.style.visibility = 'hidden';
        title.style.visibility = 'hidden'
        chat.style.visibility = 'visible';
        chat.innerHTML += '<p class="messageSend">' + sender.value + '</p>';
        style.innerText = '.response {' +
            'overflow: hidden;' +
            'border-right: .15em solid orange;' +
            'white-space: nowrap;' +
            'margin: 0 auto;' +
            'letter-spacing: .15em;' +
            '}'

        function keywordCheck(string,array){
        let keywordsNumber = 0
        for (i=0 ; i<array.length ; i++){
                if(string.split(' ').includes(array[i]))
                keywordsNumber++
        }
        return keywordsNumber>=2;
}

        for (let i = 0; i < dialog.length; i++){
                //console.log(dialog[i].keywords)
                if (keywordCheck(sender.value, dialog[i].keywords)){
                        if (dialog[i].multipleReponse){
                                chat.innerHTML +=
                                    '<p id="rep" class="response text-end rep">'+
                                    dialog[i].response[getRandomInt(dialog[i].response.length )] +
                                    '</p>';
                                    console.log("true");
                                return;
                        }
                        chat.innerHTML +=
                            '<p id="rep" class="response text-end rep">'+
                            dialog[i].response +
                            '</p>';
                
                        return;
                }
                
        }
        if (sender.value.indexOf('?') >= 0){
                chat.innerHTML +=
                    '<p id="rep" class="response text-end rep">'+
                    mode.debugMe.debugMeArray[getRandomInt(mode.debugMe.debugMeArray.length)]+
                    '</p>';
                //console.log('je suis dans le deuxieme if')
        } else {
                        chat.innerHTML +=
                            '<p id="rep" class="response text-end rep"> Je suis Groot '+
                            mode.groot.punctuation[getRandomInt(mode.groot.punctuation.length)]+
                            '</p>';
                }
        
        //console.log("false");
    
}

