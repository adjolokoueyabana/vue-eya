<script setup>
import { ref } from 'vue'

const showModal = ref(false)

const openModal = () => {
  showModal.value = true
}

const closeModal = () => {
  showModal.value = false
}


const showModal2 = ref(false)

const openModal2 = () => {
  showModal2.value = true
}

const closeModal2 = () => {
  showModal2.value = false
}

const showModal3 = ref(false)

const openModal3 = () => {
  showModal3.value = true
}

const closeModal3 = () => {
  showModal3.value = false
}
</script>

<template>

    <!-- Mes réalisations -->
   <section id="projets">
      <h2> Mes réalisations </h2>  
      <div class="Realisation" @click="openModal">
          <h3> CV en ligne </h3>
          <img src="../assets/cv.png" alt="Photo de profil" class="photo" />
      </div>
      <div class="Realisation" @click="openModal2">
          <h3> Cahier des charges </h3>
          <img src="../assets/cdc.png" alt="Photo Cahier des charges" class="photo" />
      </div>
      <div class="Realisation" @click="openModal3">
          <h3> Espace commentaire </h3>
          <img src="../assets/communaute.png" alt="Photo Espace communautaire" class="photo" />
      </div>
    </section>

    <!-- MODAL 1 -->
    <div v-if="showModal" class="modal" @click.self="closeModal">
      <div class="modal-content">
        <h3> Devoir Appliqué - création de mon CV </h3>
        <img src="../assets/cv.png" alt="Photo de profil" class="modalPhoto" />
        <p class="modalTechno"><strong>Date : 29/10/2024 <br /> Technologies utilisée : HTML, CSS </strong></p>
        <button @click="closeModal"> Fermer </button>
      </div>
    </div>

    <!-- MODAL 2 -->
     <div v-if="showModal2" class="modal" @click.self="closeModal2">
      <div class="modal-content">
        <h3> Devoir Appliqué - Rédaction du Cahier des charges </h3>
        <p class="modalTechno"><strong> Pour l'entreprise Socketterie spécialisée <br /> dans la confection artisanale de <br />
         chaussettes dépareillées faites main. </strong></p>
        <img src="../assets/cdc.png" alt="Photo Cahier des charges" class="photo" />
        <p class="modalTechno"><strong>Date : 05/02/2026 <br /> Procédure : " Analyse et Rédaction " </strong></p>
        <button @click="closeModal2"> Fermer </button>
      </div>
    </div>

    <!-- MODAL 3 -->
     <div v-if="showModal3" class="modal" @click.self="closeModal3">
      <div class="modal-content">
        <h3> Devoir Appliqué - Dynamiser un espace commentaire </h3>
        <img src="../assets/communaute.png" alt="Photo Espace communautaire" class="photo" />
        <p class="modalTechno"><strong>Date : 10/03/2026 <br /> Technologies utilisée : HTML, CSS, JavaScript </strong></p>
        <button @click="closeModal3"> Fermer </button>
      </div>
    </div>

    
</template>

<style scoped>
   section {
  scroll-margin-top: 80px;
  margin-top: 20px;
  margin-left: 25%;
  width: 50%;
  height: 100%;
  background-color: #c3d1ca;
  display : flex;
  flex-direction : column;
  align-items : center;
  }
  h3 {
    margin-top: 10%;
  }
  h2 {
    margin-top: 5%;
  }
  .photo {
  width: 300px;
  height: 200px;
  border-radius: 3%;
  border: 1px solid #fffdfd;
}
.Realisation {
  display : flex;
  flex-direction : column;
  align-items : center;
  margin-bottom: 30px;
}
.modal {
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
.modalPhoto {
  width: 300px;
  height: 200px;
  border-radius: 3%;
  border: 1px solid #fffdfd;
}
.modal-content {
  background: white;
  padding: 10px;
  border-radius: 10px;
  display : flex;
  flex-direction : column;
  align-items : center;
}
button {
}
.Realisation:hover {
  border: 1px solid #fffdfd;
  box-shadow: #020202 10px 5px 5px;
}
.modalTechno {
    text-align: center;
}

</style>