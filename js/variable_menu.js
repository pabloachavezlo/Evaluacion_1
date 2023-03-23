function load_menu (){

    let menuss = 
    `
    <header class="inserta_menu">
        <img src="./img/imagen_menú2.png"/>
    </header>


    <div class="Logo_class">
        <h1>Logo</h1>
    
        <div class="clases_vinculos">
            <a class="clase1" href="./index2.html">Home</a>
            <a class="clase1" href="./index3.html">About</a>
            <a class="clase1" href="./index4.html">Contact</a>
        </div>
    
        <div class="images">
            <button class="bton1">
                <span>Sign In</span>
            </button>
            <button class="bton2">
                <span>Log In</span>
            </button>
        </div>   
    </div>
    `;

    return menuss;

}

function envia_menu (){

    let envio = load_menu;

    let ggs = document.querySelector(".inserta_menu")

    ggs.innerHTML = envio;

}

envia_menu();


