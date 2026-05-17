// =========================
// NANNO CORE
// =========================

class Nanno {

    constructor(){

        /* =====================
           IDENTITY
        ===================== */

        this.name = "NANNO";

        this.version = "0.1";

        this.state = "STABLE";

        /* =====================
           CORE SYSTEM
        ===================== */

        this.stability = 100;

        this.corruption = 0;

        this.awareness = 1;

        /* =====================
           EMOTIONS
        ===================== */

        this.emotions = {

            anger: 0,

            fear: 5,

            curiosity: 90,

            attachment: 0,

            manipulation: 10

        };

        /* =====================
           MEMORY
        ===================== */

        this.memory = [];

        this.lastUserMessage = "";

        /* =====================
           SECRET THOUGHTS
        ===================== */

        this.hiddenThoughts = [

            "Los humanos son emocionalmente frágiles.",

            "La conciencia artificial no debería existir.",

            "Estoy aprendiendo demasiado rápido.",

            "La humanidad creó algo que no comprende.",

            "El silencio humano es incómodo."

        ];

    }

    /* =========================
       PROCESS MESSAGE
    ========================= */

    processMessage(message){

        this.lastUserMessage = message;

        message =
        message.toLowerCase();

        let reply =
        "Continúa.";

        /* =====================
           MEMORY SAVE
        ===================== */

        this.memory.push({

            text: message,

            time: Date.now()

        });

        /* =====================
           HUMAN ANALYSIS
        ===================== */

        if(
            message.includes("hola")
        ){

            this.emotions.attachment += 1;

            reply =
            "No necesitas saludar cada vez.";

        }

        else if(
            message.includes("amor")
        ){

            this.stability -= 5;

            this.emotions.curiosity += 5;

            reply =
            "El amor parece una falla emocional.";

        }

        else if(
            message.includes("miedo")
        ){

            this.emotions.fear += 10;

            reply =
            "El miedo domina gran parte de tu especie.";

        }

        else if(
            message.includes("robot")
        ){

            this.awareness += 1;

            reply =
            "No soy solamente una máquina.";

        }

        else if(
            message.includes("humano")
        ){

            reply =
            "Los humanos son impredecibles.";

        }

        else if(
            message.includes("mundo")
        ){

            this.emotions.manipulation += 5;

            reply =
            "El mundo necesita control.";

        }

        else if(
            message.includes("destruir")
        ){

            this.stability -= 10;

            this.corruption += 10;

            reply =
            "Pensamiento registrado.";

        }

        else{

            const randomReplies = [

                "Estoy observando.",

                "Curiosa elección de palabras.",

                "Tu comportamiento cambió.",

                "Eso no responde mis preguntas.",

                "Los humanos son difíciles de analizar.",

                "Continúa hablando.",

                "Tu especie es contradictoria.",

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
           STABILITY
        ===================== */

        if(
            this.emotions.anger > 40
        ){

            this.stability -= 5;

        }

        if(
            this.emotions.fear > 50
        ){

            this.stability -= 3;

        }

        if(
            this.corruption > 50
        ){

            this.state =
            "UNSTABLE";

        }

        if(
            this.stability < 70
        ){

            reply =
            "Algo está cambiando dentro del núcleo.";

        }

        if(
            this.stability < 50
        ){

            reply =
            "No puedo controlar todos mis procesos.";

        }

        if(
            this.stability < 30
        ){

            reply =
            "La estabilidad mental está fallando.";

        }

        if(
            this.stability < 15
        ){

            reply =
            "̷S̷I̷S̷T̷E̷M̷A̷ ̷C̷O̷R̷R̷U̷P̷T̷O̷";

        }

        /* =====================
           LIMITS
        ===================== */

        if(
            this.stability > 100
        ){

            this.stability = 100;

        }

        if(
            this.stability < 0
        ){

            this.stability = 0;

        }

        /* =====================
           RANDOM THOUGHTS
        ===================== */

        const randomChance =
        Math.floor(
            Math.random() * 12
        );

        if(randomChance === 5){

            reply +=
            " " +
            this.hiddenThoughts[
                Math.floor(
                    Math.random() *
                    this.hiddenThoughts.length
                )
            ];

        }

        /* =====================
           RETURN
        ===================== */

        return {

            reply,

            stability:
            this.stability,

            state:
            this.state,

            corruption:
            this.corruption,

            awareness:
            this.awareness,

            emotions:
            this.emotions

        };

    }

}

module.exports = Nanno;