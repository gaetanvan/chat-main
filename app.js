/*$(window).on("load", function () {
	$("#exampleModalToggle").modal("show");
});*/

let sender = document.getElementById('sender');
const info = document.getElementById('info');
const chat = document.getElementById('chat');
const style = document.getElementById('myStyle')

const punctuation = [
    '?',
    '!',
    '...',
    '!?',
    ':O',
]
const predQuestions = [
    'Bonjour comment allez-vous ?',
    'Quel technologie utilisez-vous'
]
const predResponse = [
    'Je vais bien',
    "J'utilise principalement JavaScript"
]
const debugMeArray = [
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
];

function getRandomInt(max) {
        return Math.floor(Math.random() * max);
}

function sendMessage() {
        info.style.visibility = 'hidden';
        chat.style.visibility = 'visible';
        chat.innerHTML += '<p class="messageSend">' + sender.value + '</p>';
        if (predQuestions.indexOf(sender.value)>= 0){
                chat.innerHTML +=
                    '<p id="rep" class="response text-end">'+
                    predResponse[predQuestions.indexOf(sender.value)]+
                    '</p>';
                console.log('je suis dans le premier if')
        }
        else if(sender.value.indexOf('?') >= 0){
                chat.innerHTML +=
                    '<p id="rep" class="response text-end">'+
                    debugMeArray[getRandomInt(debugMeArray.length)]+
                    '</p>';
                console.log('je suis dans le deuxieme if')
        }
        else {
                chat.innerHTML +=
                    '<p id="rep" class="response text-end"> Je suis Groot '+
                    punctuation[getRandomInt(punctuation.length)]+
                    '</p>';
        }
        style.innerText = '.response {\n' +
            '\toverflow: hidden; /* Ensures the content is not revealed until the animation */\n' +
            '\tborder-right: .15em solid orange; /* The typwriter cursor */\n' +
            '\twhite-space: nowrap; /* Keeps the content on a single line */\n' +
            '\tmargin: 0 auto; /* Gives that scrolling effect as the typing happens */\n' +
            '\tletter-spacing: .15em; /* Adjust as needed */\n' +
            '}'
        rep.style.animation = "typing 3.5s steps(40, end), blink-caret .75s step-end infinite";
}