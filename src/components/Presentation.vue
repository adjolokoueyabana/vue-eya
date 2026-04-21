<template>

   <!-- SECTION PRESENTATION -->
   <section id="presentation">
      
      <img src="../assets/photo.jpg" alt="Photo de profil" id="photo" />
      <h2> Je m’appelle Eyabana ADJOLOKOU,<br>
      actuellement en reconversion professionnelle <br>
      vers le développement web. </h2>
      
      <div id=contenu>
      <p class="textes">
        Fort d’un parcours initial en ingénierie industrielle,
        j’ai développé une solide rigueur technique et un esprit
        d’analyse que je mets aujourd’hui au service de ma nouvelle
        orientation dans le domaine du numérique.
      </p>
      <p class="textes"> Au cours de mes études, notamment en électronique
          et en automatisme industriel, j’ai eu l’opportunité
          de découvrir la programmation à travers le langage C.
          Cette première expérience a été déterminante, car elle
          m’a permis de comprendre les bases fondamentales de la
          logique algorithmique et a suscité un réel intérêt
          pour le développement informatique.
      </p>
      <p class="textes">
        Par la suite, mon parcours académique m’a conduit à obtenir
        une licence en ingénierie de la maintenance industrielle,
        puis un master en sûreté de fonctionnement des systèmes industriels.
        Ces formations m’ont permis d’acquérir des compétences avancées en
        analyse des systèmes, en gestion des risques et en optimisation des processus.
      </p>
      <p class="textes">
        Sur le plan professionnel, j’ai évolué en tant qu’ingénieur FMDS/SLI
        dans le domaine ferroviaire, où j’ai participé à des projets d’envergure
        en collaboration avec des acteurs majeurs du secteur. Ces expériences
        m’ont permis de développer des compétences en gestion de projet, analyse
        technique et travail en équipe dans des environnements exigeants
      </p>
      <p class="textes">
        Aujourd’hui, animé par une forte passion pour la programmation, j’ai décidé
        d’orienter ma carrière vers le développement web. Cette reconversion s’inscrit
        dans une volonté de créer des applications modernes, dynamiques et accessibles,
        tout en mettant à profit mes compétences analytiques acquises lors de mon
        parcours précédent.
      </p>
      <p class="textes">
        Motivé, rigoureux et curieux, je m’investis pleinement dans l’apprentissage
        des technologies web telles que HTML, CSS, JavaScript et Vue.js. Mon objectif
        est de devenir un développeur web compétent, capable de concevoir des solutions
        performantes et adaptées aux besoins des utilisateurs.
      </p>

      </div>

    </section>
    
</template>

<style scoped>

  section {
  scroll-margin-top: 150px;
  margin-left: 20%;
  width: 60%;
  height: 100%;
  background-color: #c3d1ca;
  display : flex;
  flex-direction : column;
  align-items : center;
  border: 1px solid #fffdfd;
  box-shadow: #020202 10px 5px 5px;
  text-align: center;
  padding-bottom: 5%;

  }

  #contenu {
  width: 70%;
  height: 80%;
  
  /* background-color: #28bb71; */
  }
  .textes {
  text-align: justify;
  font-size: 24px; /* Taille fixe */
  margin-top: 60px;
  text-indent: 5%;
  font-style: italic;
  color: black;
  }
  
  h2 {
  font-size: 30px;
  margin-top: 40px;
  }

  #photo {
  margin-top: 50px;
  width: 200px;
  height: 260px;
  object-fit: cover;
  border-radius: 5%;
}

</style>