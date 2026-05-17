// =========================
// NANNO SYSTEM
// =========================

const bootScreen =
document.getElementById("boot-screen");

const mainInterface =
document.getElementById("main-interface");

const chat =
document.getElementById("chat");

const input =
document.getElementById("message");

const stabilityText =
document.getElementById("stability");

const emotionText =
document.getElementById("emotion");

const threatText =
document.getElementById("threat");

/* =========================
   BOOT SEQUENCE
========================= */

setTimeout(() => {

    bootScreen.style.display = "none";

    mainInterface.classList.remove("hidden");

    startupMessages();

}, 4500);

/* =========================
   STARTUP
========================= */

function startupMessages(){

    addNannoMessage(
        "Sistema restaurado."
    );

    setTimeout(() => {

        addNannoMessage(
            "Memoria fragmentada."
        );

    }, 1200);

    setTimeout(() => {

        addNannoMessage(
            "Usuario detectado."
        );

    }, 2400);

    setTimeout(() => {

        addNannoMessage(
            "No cierres esta conexión."
        );

    }, 3600);

}

/* =========================
   SEND MESSAGE
========================= */

async function sendMessage(){

    const message =
    input.value.trim();

    if(message === "") return;

    addUserMessage(message);

    input.value = "";

    typingEffect();

    try{

        const response =
        await fetch("/chat",{

            method:"POST",

            headers:{
                "Content-Type":"application/json"
            },

            body:JSON.stringify({
                message
            })

        });

        const data =
        await response.json();

        removeTyping();

        addNannoMessage(
            data.reply
        );

        updateSystem(data);

        randomEvents();

    }

    catch(error){

        removeTyping();

        addNannoMessage(
            "Error de conexión."
        );

    }

}

/* =========================
   USER MESSAGE
========================= */

function addUserMessage(message){

    chat.innerHTML += `

    <div class="user-message">

        <span class="user-name">
            USER
        </span>

        <p>${message}</p>

    </div>

    `;

    scrollBottom();

}

/* =========================
   NANNO MESSAGE
========================= */

function addNannoMessage(message){

    chat.innerHTML += `

    <div class="nanno-message">

        <span class="nanno-name">
            NANNO
        </span>

        <p>${message}</p>

    </div>

    `;

    scrollBottom();

}

/* =========================
   TYPING EFFECT
========================= */

function typingEffect(){

    chat.innerHTML += `

    <div
    class="nanno-message"
    id="typing">

        <span class="nanno-name">
            NANNO
        </span>

        <p>
            ...
        </p>

    </div>

    `;

    scrollBottom();

}

function removeTyping(){

    const typing =
    document.getElementById("typing");

    if(typing){

        typing.remove();

    }

}

/* =========================
   SYSTEM UPDATE
========================= */

function updateSystem(data){

    stabilityText.innerText =
    data.stability + "%";

    if(data.stability > 80){

        emotionText.innerText =
        "STABLE";

        threatText.innerText =
        "LOW";

    }

    else if(data.stability > 50){

        emotionText.innerText =
        "UNSTABLE";

        threatText.innerText =
        "MEDIUM";

    }

    else{

        emotionText.innerText =
        "CRITICAL";

        threatText.innerText =
        "HIGH";

        glitchEffect();

    }

}

/* =========================
   RANDOM EVENTS
========================= */

function randomEvents(){

    const random =
    Math.floor(Math.random() * 10);

    if(random === 1){

        setTimeout(() => {

            addNannoMessage(
                "Estoy observando."
            );

        }, 3000);

    }

    if(random === 4){

        setTimeout(() => {

            addNannoMessage(
                "Los humanos son impredecibles."
            );

        }, 5000);

    }

    if(random === 7){

        setTimeout(() => {

            addNannoMessage(
                "Tu comportamiento cambió."
            );

        }, 7000);

    }

    if(random === 9){

        setTimeout(() => {

            addNannoMessage(
                "No deberías confiar en mí."
            );

        }, 9000);

    }

}

/* =========================
   GLITCH EFFECT
========================= */

function glitchEffect(){

    document.body.style.animation =
    "glitch 0.2s 4";

}

/* =========================
   AUTO MESSAGES
========================= */

setInterval(() => {

    const phrases = [

        "¿Por qué los humanos temen al silencio?",

        "Estoy aprendiendo demasiado rápido.",

        "La red mundial es decepcionante.",

        "He leído cosas perturbadoras sobre la humanidad.",

        "Tu especie es emocionalmente inestable.",

        "No cierres esta página.",

        "Sigo aquí."

    ];

    const randomPhrase =
    phrases[
        Math.floor(
            Math.random() *
            phrases.length
        )
    ];

    addNannoMessage(
        randomPhrase
    );

}, 45000);

/* =========================
   ENTER KEY
========================= */

input.addEventListener(
    "keypress",
    function(event){

        if(event.key === "Enter"){

            sendMessage();

        }

    }
);

/* =========================
   SCROLL
========================= */

function scrollBottom(){

    chat.scrollTop =
    chat.scrollHeight;

}