/*$(window).on("load", function () {
	$("#exampleModalToggle").modal("show");
});*/
let sender = document.getElementById('sender');
const info = document.getElementById('info');
const chat = document.getElementById('chat');
const style = document.getElementById('myStyle');
const title = document.getElementById('title');
let url = 'https://api.thecatapi.com/v1/images/search';
let weather = 'https://api.openweathermap.org/data/2.5/weather?q=38400&appid=bfacca461e182b1048f2e099b1dbd023&units=metric'
let response = '';



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
        {
                keywords : [
                        'photo',
                        'chat',
                ],
                isAcat : true,
                response : ''
        },
        {
                keywords : [
                'meteo',
                'grenoble',
        ],
            isAmeteo : true,
            response : ''
}
]

sender.addEventListener("keypress", function (event) {
        if (event.key === 'Enter'){
                event.preventDefault();
                document.getElementById('btnSender').click();
        }
})

let rep = document.getElementById('rep')
var i = 0;
// var txt = rep.innerHTML; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */
function typeWriter(txt) {
        if (i < txt.length) {
                rep.innerHTML += txt.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
        }
}


function getRandomInt(max) {
        return Math.floor(Math.random() * max);
}

let pop = new Confetti('confetti');

function sendMessage() {
        info.style.display = 'none';
        title.style.display = 'none'
        chat.style.display = 'block';
        let classResponse = document.querySelectorAll('.response')

        confetti.click()

        // var confettiSettings = { target: 'confetti' };
        // var confetti = new ConfettiGenerator(confettiSettings);
        // confetti.render();
        // setTimeout(() => {
        //         confetti.clear();
        // }, 5000);
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
                                response = dialog[i].response[getRandomInt(dialog[i].response.length )]
                                chat.innerHTML +=
                                    '<p id="rep'+ classResponse.length +'" class="response text-end rep">'+
                                     response +
                                    '</p>';
                                    console.log("true");

                                let rep = document.getElementById('rep'+ (document.querySelectorAll('.response').length - 1))
                                var typewriter = new Typewriter(rep, {
                                        cursor: ""
                                });

                                typewriter.typeString(response)
                                    .changeDelay(5)
                                    .start();

                                return;
                        }
                        else if(dialog[i].isAcat){
                                fetch(url)
                                    .then((response)=> response.json()
                                        .then((data) => {
                                            chat.innerHTML +=
                                                '<img src="'+ data[0].url +'" id="rep" ' +
                                                'class="response text-end rep" alt="chat" style="width: 500px; height: 500px">';
                                        }
                                    )
                                )
                        }
                        else if(dialog[i].isAmeteo){
                                fetch(weather)
                                    .then((response)=> response.json()
                                        .then((data) => {
                                                response = 'Le temps a Grenoble est a peu près de : ' + data['main']['temp']+ ' C°';
                                                chat.innerHTML +=
                                                    '<p id="rep'+ classResponse.length +'" class="response text-end rep">'+
                                                    response +
                                                    '</p>';
                                            }
                                        )
                                    )
                                let rep = document.getElementById('rep'+ (document.querySelectorAll('.response').length - 1))
                                var typewriter = new Typewriter(rep, {
                                        cursor: ""
                                });

                                typewriter.typeString(response)
                                    .changeDelay(5)
                                    .start();

                                return;
                        }
                        response = dialog[i].response
                        chat.innerHTML +=
                            '<p id="rep'+ classResponse.length +'" class="response text-end rep">' + response + '</p>';

                        let rep = document.getElementById('rep' + (document.querySelectorAll('.response').length - 1))
                        var typewriter = new Typewriter(rep, {
                                cursor: ""
                        });

                        typewriter.typeString(response)
                            .changeDelay(5)
                            .start();

                        return;
                }
                
        }
        if (sender.value.indexOf('?') >= 0){
                response = mode.debugMe.debugMeArray[getRandomInt(mode.debugMe.debugMeArray.length)]
                chat.innerHTML +=
                    '<p id="rep'+ classResponse.length +'" class="response text-end rep">'+ response + '</p>';
                //console.log('je suis dans le deuxieme if'
        }
        else {
                         response = 'Je suis Groot'+ mode.groot.punctuation[getRandomInt(mode.groot.punctuation.length)]
                        chat.innerHTML +=
                            '<p id="rep'+ classResponse.length +'" class="response text-end rep">' + response + '</p>';
                }

        //console.log("false");
        if (chat) {
                chat.scrollTop = chat.scrollHeight;
        }
        let rep = document.getElementById('rep' + (document.querySelectorAll('.response').length - 1))
        var typewriter = new Typewriter(rep, {
                cursor: ""
        });

        typewriter.typeString(response)
            .changeDelay(5)
            .start();
}

