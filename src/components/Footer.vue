<template>
   <footer id="footer">
            <div id="liensReseaux">
                <figure id="reseau1">
                    <a href="#"> <img id="imag1" src="../assets/linkedin.png" alt="icône linkedin"> </a>
                </figure>
                <figure id="reseau2">
                    <a href="#"> <img id="imag2" src="../assets/twitter.png" alt="icône twitter"> </a>
                </figure>
                <figure id="reseau3">
                    <a href="#"> <img id="imag3" src="../assets/github.png" alt="icône twitter"> </a>
                </figure>
            </div>
            <p id="reseau4"><small> Dernière mise à jour le 25 Mars 2026 </small></p>
   </footer>
</template>

<style scoped>

/* Liens réeaux sociaux */
#footer {
    margin-top: 500px;
    height: 100px;
    max-width: 100%;
    background-color: #2b7fce;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items : center;
       
}

#liensReseaux {
    margin-top: 22px;
    width: 315px;
    height: 60px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: #3196e9;
    border-radius: 40%;
    
}
#reseau1:hover, #reseau2:hover, #reseau3:hover{
    opacity: 0.70;   
}
#reseau1{
    width: 27px;
    height: 27px;
}
#reseau2{
    width: 27px;
    height: 27px;
}
#reseau3{
    width: 27px;
    height: 27px;
}
#reseau4{
    margin-top: 3px;
    font-size: 1.2rem;
    color: #f8f5f5;
    
    
}

#imag1, #imag2, #imag3{
    width: 100%;
    height: 100%;
}
    

</style>