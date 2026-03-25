<template>
    <heaher>
        <img src="../assets/photo.jpg" alt="Photo de logo" />
        <div id="liens">
            <nav>
                <a style="text-decoration:none" href="#" class = "menu"> Présentation </a>
                <a style="text-decoration:none" href="#" class = "menu"> Projets </a>
                <a style="text-decoration:none" href="#" class = "menu"> Contact </a>
            </nav>
            
        </div>
        
    </heaher>
</template>

<style scoped>
    heaher {
        max-width: 100%;
        display : flex;
        align-items : center;
        background-color: #2b7fce;  /* fond rouge */
    }
    
    heaher div {
        display : flex;
        flex-direction : row;
        justify-content: flex-end;
        
    }

    heaher img {
        width: 80px;
        height: 80px;
        object-fit: cover;
        border-radius: 50%;
        box-shadow: 0 0 15px #d8dad2;
        margin : 2.992px; 
        margin-left: 70px;
    }
    heaher img:hover {
        box-shadow: 5px 5px 50px #d8dad2;
    }
    #liens {
       
    }
    .menu {
        color: #f8f6f3;
        margin-left: 70px;
    }
    

</style>