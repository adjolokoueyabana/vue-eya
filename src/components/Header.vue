<script setup>
    import { ref } from 'vue'

    const lienActif = ref('')

</script>

<template>
    <header>
        <img src="../assets/photo.jpg" alt="Photo de logo" />
        <h3> Portfolio de Eyabana ADJOLOKOU </h3>
        <div id="liens">
            <nav>
                <!-- Résumé : On stocke le lien actif (ref) et On applique une classe dynamique (:class) -->
                <a href="#presentation" class = "menu" :class="{ actif: lienActif === 'presentation' }" @click="lienActif = 'presentation'">
                    <b> Présentation </b>
                </a>
                <a href="#projets" class = "menu" :class="{ actif: lienActif === 'projets' }" @click="lienActif = 'projets'">
                    <b> Projets </b>
                </a>
                <a href="#contact" class = "menu" :class="{ actif: lienActif === 'contact' }" @click="lienActif = 'contact'">
                    <b> Contact </b>
                </a>
            </nav>
            
        </div>
        
    </header>
</template>

<style scoped>
    header {
        position: sticky;
        top: 0;
        z-index: 1000;  /* pour rester au-dessus du contenu */
        max-width: 100%;
        display : flex;
        align-items : center;
        background-color: #2b7fce;
    }
    
    header div {
        display : flex;
        flex-direction : row;
        justify-content: flex-end;
        
    }

    header img {
        width: 80px;
        height: 80px;
        object-fit: cover;
        border-radius: 50%;
        border: 2px solid rgb(249, 251, 252);
        box-shadow: 2px 2px 30px #d8dad2;
        margin : 2.992px; 
        margin-left: 70px;
        margin-right: 5%;
    }
    h3 {
        margin-right: 37%;
        color: rgb(23, 212, 140);
    }
    header img:hover {
        box-shadow: 0 0 20px whit;
        border: 3px solid rgb(253, 253, 253);
    }
    .menu {
        color: rgb(23, 212, 140);
        margin-left: 70px;
        text-decoration: none;
    }
    .menu.actif {
        text-decoration: underline;
        text-decoration-color: rgb(23, 212, 140);
        text-underline-offset: 5px;
}
    

</style>