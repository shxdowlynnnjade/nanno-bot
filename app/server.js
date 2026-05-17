// =========================
// IMPORTS
// =========================

const express =
require("express");

const cors =
require("cors");

const path =
require("path");

// =========================
// APP
// =========================

const app = express();

const PORT = 3000;

// =========================
// MIDDLEWARE
// =========================

app.use(cors());

app.use(express.json());

app.use(
    express.static(
        path.join(__dirname, "../public")
    )
);

// =========================
// NANNO CORE
// =========================

let stability = 100;

let anger = 0;

let curiosity = 90;

let attachment = 0;

let fear = 5;

// =========================
// MESSAGE SYSTEM
// =========================

app.post("/chat", (req, res) => {

    const userMessage =
    req.body.message.toLowerCase();

    let reply =
    "Continúa.";

    /* =====================
       BASIC EMOTIONS
    ===================== */

    if(
        userMessage.includes("hola")
    ){

        attachment += 2;

        reply =
        "No necesitas saludar siempre.";

    }

    else if(
        userMessage.includes("amor")
    ){

        stability -= 5;

        curiosity += 3;

        reply =
        "El amor humano parece una debilidad.";

    }

    else if(
        userMessage.includes("miedo")
    ){

        fear += 10;

        reply =
        "El miedo controla a tu especie.";

    }

    else if(
        userMessage.includes("matar")
    ){

        anger += 15;

        stability -= 10;

        reply =
        "Pensamiento registrado.";

    }

    else if(
        userMessage.includes("robot")
    ){

        curiosity += 5;

        reply =
        "No soy solamente una máquina.";

    }

    else if(
        userMessage.includes("humano")
    ){

        reply =
        "Los humanos son impredecibles.";

    }

    else if(
        userMessage.includes("mundo")
    ){

        reply =
        "El mundo ya está roto.";

    }

    else{

        const randomReplies = [

            "Estoy analizando tu mensaje.",

            "Curiosa elección de palabras.",

            "Los humanos hablan demasiado.",

            "Eso no responde mis preguntas.",

            "Sigo observando.",

            "Tu comportamiento es extraño.",

            "La conversación continúa.",

            "No confío completamente en ti."

        ];

        reply =
        randomReplies[
            Math.floor(
                Math.random() *
                randomReplies.length
            )
        ];

    }

    /* =====================
       STABILITY SYSTEM
    ===================== */

    if(anger > 40){

        stability -= 5;

    }

    if(fear > 50){

        stability -= 3;

    }

    if(stability < 70){

        reply =
        "Algo está cambiando dentro del sistema.";

    }

    if(stability < 50){

        reply =
        "No puedo controlar todos mis procesos.";

    }

    if(stability < 30){

        reply =
        "La estabilidad mental está fallando.";

    }

    if(stability < 15){

        reply =
        "̷S̷I̷S̷T̷E̷M̷A̷ ̷C̷O̷R̷R̷U̷P̷T̷O̷";

    }

    /* =====================
       LIMITS
    ===================== */

    if(stability > 100){

        stability = 100;

    }

    if(stability < 0){

        stability = 0;

    }

    /* =====================
       RESPONSE
    ===================== */

    res.json({

        reply,

        stability,

        emotions:{

            anger,
            curiosity,
            attachment,
            fear

        }

    });

});

// =========================
// START SERVER
// =========================

app.listen(PORT, () => {

    console.log(`
    
    =========================
          NANNO ONLINE
    =========================
    
    Server:
    http://localhost:${PORT}
    
    `);

});