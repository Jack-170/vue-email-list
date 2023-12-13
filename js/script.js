// Attraverso l’apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all’interno di una lista.


const { createApp } = Vue;

const app = createApp({
    data() {
        return {
          userMail:"",
          userEmails: [], 

        };
    },
    methods: {
       
    },

    mounted(){

        for (let i = 0; i < 10; i++) {
            axios.get(" https://flynn.boolean.careers/exercises/api/random/mail")
            .then((response) =>{

                this.userEmails.push(response.data.response);
                console.log(this.userEmails);
            });
        

        }

        

    }
    
});app.mount('#app');


