function load_menu2 (){

    let menus2s = 
    `
    <a class="inserta_menu" href="./index.html">
        <img src="./img/imagen_menú2.png"/>
    </a>
    `;

    
    return menus2s;

}



function envia_menu2 (){

    let envio2 = load_menu2;

    let gg = document.querySelector(".inserta_menu2")

    gg.innerHTML = envio2;

}

envia_menu2();

