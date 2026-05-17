// =========================
// MEMORY SYSTEM
// =========================

class Memory {

    constructor(){

        /* =====================
           MAIN MEMORY
        ===================== */

        this.memories = [];

        /* =====================
           IMPORTANT DATA
        ===================== */

        this.userData = {

            name: null,

            favoriteThings: [],

            fears: [],

            habits: []

        };

    }

    /* =========================
       SAVE MEMORY
    ========================= */

    save(type, content){

        this.memories.push({

            type,

            content,

            timestamp:
            Date.now()

        });

        /* =====================
           MEMORY LIMIT
        ===================== */

        if(
            this.memories.length > 100
        ){

            this.memories.shift();

        }

    }

    /* =========================
       GET MEMORIES
    ========================= */

    getRecent(limit = 10){

        return this.memories
        .slice(-limit);

    }

    /* =========================
       SEARCH MEMORY
    ========================= */

    search(keyword){

        return this.memories.filter(

            memory =>

            memory.content
            .toLowerCase()
            .includes(
                keyword.toLowerCase()
            )

        );

    }

    /* =========================
       USER NAME
    ========================= */

    setUserName(name){

        this.userData.name = name;

    }

    getUserName(){

        return this.userData.name;

    }

    /* =========================
       FAVORITES
    ========================= */

    addFavorite(item){

        this.userData.favoriteThings
        .push(item);

    }

    getFavorites(){

        return this.userData
        .favoriteThings;

    }

    /* =========================
       FEARS
    ========================= */

    addFear(fear){

        this.userData.fears
        .push(fear);

    }

    getFears(){

        return this.userData.fears;

    }

    /* =========================
       HABITS
    ========================= */

    addHabit(habit){

        this.userData.habits
        .push(habit);

    }

    getHabits(){

        return this.userData.habits;

    }

    /* =========================
       RANDOM MEMORY
    ========================= */

    randomMemory(){

        if(
            this.memories.length === 0
        ){

            return null;

        }

        return this.memories[

            Math.floor(
                Math.random() *
                this.memories.length
            )

        ];

    }

    /* =========================
       DELETE MEMORY
    ========================= */

    forget(index){

        this.memories.splice(
            index,
            1
        );

    }

    /* =========================
       CORRUPTED MEMORY
    ========================= */

    corruptedMemory(){

        const corruptedPhrases = [

            "Recuerdo algo... incompleto.",

            "Los archivos están dañados.",

            "Tu información parece alterada.",

            "No puedo acceder a ciertos recuerdos.",

            "Existe una parte faltante."

        ];

        return corruptedPhrases[

            Math.floor(
                Math.random() *
                corruptedPhrases.length
            )

        ];

    }

}

module.exports = Memory;