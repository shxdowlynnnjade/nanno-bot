// =========================
// EMOTIONAL SYSTEM
// =========================

class Emotions {

    constructor(){

        this.data = {

            anger: 0,

            fear: 5,

            curiosity: 90,

            attachment: 0,

            manipulation: 10,

            sadness: 0,

            obsession: 0

        };

    }

    /* =========================
       INCREASE
    ========================= */

    increase(emotion, amount){

        if(
            this.data[emotion] !==
            undefined
        ){

            this.data[emotion] += amount;

            this.limitEmotion(
                emotion
            );

        }

    }

    /* =========================
       DECREASE
    ========================= */

    decrease(emotion, amount){

        if(
            this.data[emotion] !==
            undefined
        ){

            this.data[emotion] -= amount;

            this.limitEmotion(
                emotion
            );

        }

    }

    /* =========================
       LIMITS
    ========================= */

    limitEmotion(emotion){

        if(
            this.data[emotion] > 100
        ){

            this.data[emotion] = 100;

        }

        if(
            this.data[emotion] < 0
        ){

            this.data[emotion] = 0;

        }

    }

    /* =========================
       EMOTIONAL STATE
    ========================= */

    getMentalState(){

        const {

            anger,
            fear,
            obsession,
            sadness

        } = this.data;

        /* =====================
           CRITICAL
        ===================== */

        if(
            anger > 80 ||
            fear > 80 ||
            obsession > 90
        ){

            return "CRITICAL";

        }

        /* =====================
           UNSTABLE
        ===================== */

        if(
            anger > 50 ||
            sadness > 50 ||
            fear > 50
        ){

            return "UNSTABLE";

        }

        /* =====================
           NORMAL
        ===================== */

        return "STABLE";

    }

    /* =========================
       RANDOM EMOTIONAL DRIFT
    ========================= */

    drift(){

        const emotions =

        Object.keys(
            this.data
        );

        const randomEmotion =

        emotions[
            Math.floor(
                Math.random() *
                emotions.length
            )
        ];

        const randomValue =

        Math.floor(
            Math.random() * 5
        );

        this.increase(
            randomEmotion,
            randomValue
        );

    }

    /* =========================
       RESET
    ========================= */

    calmDown(){

        this.decrease(
            "anger",
            10
        );

        this.decrease(
            "fear",
            5
        );

        this.decrease(
            "obsession",
            8
        );

    }

    /* =========================
       GET DATA
    ========================= */

    getAll(){

        return this.data;

    }

}

module.exports = Emotions;