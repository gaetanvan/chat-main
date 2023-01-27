/*$(window).on("load", function () {
	$("#exampleModalToggle").modal("show");
});*/
let sender = document.getElementById('sender');
const info = document.getElementById('info');
const chat = document.getElementById('chat');
const style = document.getElementById('myStyle');
const title = document.getElementById('title');

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
                isGroot : true
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
                isDebugMe : true
        },
        normal : {
                /*Si tu lui donne des mots-clés qui corresponde au question prédifinies, il répond avec la réponse prédéfinie*/
                keyword : [

                ],
                predQuestions: [
                        'Bonjour comment allez-vous ?',
                        'Quel technologie utilisez-vous'
                ],
                predResponse: [
                        'Je vais bien',
                        "J'utilise principalement JavaScript"
                ],
        }
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
                        'ça va',
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
                    '1','2','3'
                ]
        }
]
function getRandomInt(max) {
        return Math.floor(Math.random() * max);
}

function keywordCheck(string,array){
    stringarray = string.split(' ');
    for (i=0 ; i<array.length ; i++){
        if(!stringarray.includes(array[i]))
            return false;
    }
    return true;
}

function sendMessage() {
        info.style.visibility = 'hidden';
        title.style.visibility = 'hidden';
        chat.style.visibility = 'visible';
        chat.innerHTML += '<p class="messageSend">' + sender.value + '</p>';
        if(sender.value.indexOf('?') >= 0){
                chat.innerHTML +=
                    '<p id="rep" class="response text-end rep">'+
                    mode.debugMe.debugMeArray[getRandomInt(mode.debugMe.debugMeArray.length)]+
                    '</p>';
                console.log('je suis dans le deuxieme if')
        }
        else {
                chat.innerHTML +=
                    '<p id="rep" class="response text-end rep"> Je suis Groot '+
                    mode.groot.punctuation[getRandomInt(mode.groot.punctuation.length)]+
                    '</p>';
        }
        style.innerText = '.response {' +
            'overflow: hidden;' +
            'border-right: .15em solid orange;' +
            'white-space: nowrap;' +
            'margin: 0 auto;' +
            'letter-spacing: .15em;' +
            '}'


        for (let i = 0; i < dialog.length; i++){
                console.log(dialog[i].keywords)
                if (keywordCheck(sender.value,dialog[i].keywords)){
                        if (dialog[i].multipleReponse){
                                chat.innerHTML +=
                                    '<p id="rep" class="response text-end rep">'+
                                    dialog[i].response[getRandomInt(dialog[i].response.length )] +
                                    '</p>';
                                break;
                        }
                        chat.innerHTML +=
                            '<p id="rep" class="response text-end rep">'+
                            dialog[i].response +
                            '</p>';
                }
        }
}