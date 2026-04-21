<script setup>

import { ref } from 'vue'
const messageEnvoye = ref(false)

const envoyerFormulaire = () => {
  messageEnvoye.value = true
}
const envoiTerminer = () => {
  messageEnvoye.value = false
}
</script>

<template>

   <!-- SECTION Contact -->
   <section id="contact">
      <h2> Contact </h2>

      <div id="blocContact">
        <div class="nomPrenom">
          <label for="name"> Nom / Prénom : </label>
          <input type="text" id="name" />
        </div>
        <!-- Adresse e-mail -->
        <div class="adressMail">
          <label for="mail"> Adresse e-mail : </label>
          <input type="text" id="mail" />
        </div>

        <!-- MESSAGE -->
        <div class="msg">
          <label for="message"> Message : </label>
          <textarea id="message" > </textarea>
        </div>

        <!-- BOUTON (@click.prevent évite le rechargement de la page) -->

        <div class="boutonEnvoi">
          <button type="submit" @click.prevent="envoyerFormulaire"> Envoyer </button>
        </div>

      </div>
    </section>

    <!-- Modal : Message de confirmation -->
    <div v-if="messageEnvoye" id="confirmation" >
      <div id="modalContent">
        <p> Votre message a bien été envoyé à eyabana.adjolokou@gmail.com ! </p>
        <button @click="envoiTerminer" id="boutonModal"> OK </button>
      </div>
    </div>
    
</template>

<style scoped>
  section {
  scroll-margin-top: 80px;
  padding-top: 4%;
  margin-left: 25%;
  width: 50%;
  height: 10%;
  background-color: #c3d1ca;
  display : flex;
  flex-direction : column;
  align-items : center;
}
#blocContact {
  width: 80%;
  border: 1px solid white;
  box-shadow: #020202 10px 5px 5px;
  display : flex;
  flex-direction : column;
  align-items : center;
  margin-bottom: 5%;
}
.nomPrenom {
  margin-top: 5%;
}
.adressMail {
  margin-top: 10px;

}
.msg {
  margin-top: 10px;
    display: flex;
    text-align: left;
}
label {
    margin-right: 15px;
}
.boutonEnvoi {
  margin-top: 10px;
  margin-bottom: 5%;

}
#confirmation {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(3, 3, 3, 0.7); /* fond sombre */
  display: flex;
  justify-content: center;
  align-items: center;
}
#modalContent {
  background: white;
  padding: 10px;
  border-radius: 10px;
  display : flex;
  flex-direction : column;
  align-items : center;
}
#boutonModal {
background : blue;
color :white;
}

</style>