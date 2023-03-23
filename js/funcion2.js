let datos = [

    {
        productox: papas
    },

    {
        productox: ropa
    },

    {
        productox: juguetes
    },

    {
        productox: aparatos
    },

    {
        productox: consolas
    },

    {
        productox: peies
    },

    {
        productox: pieles
    },

    {
        productox: zpaatos
    },

    {
        productox: chanclas
    },

    {
        productox: pelotas
    },

]

function componentes () {
    let compo = 
    `
        <div class="elements">
            <img src="./img/imagen.png">
            <h1>New Product</h1>
            <p>Check while it is in stock</p>
        </div>
    `;

    return compo;
}

function mostrar_productos (){

    let box = document.querySelector(".inserte_catalogo");

    datos.forEach((element, indice) => {
        let data = document.createElement("div");
        data.innerHTML = componentes(indice);
        box.appendChild(data)
    });

}

mostrar_productos();


function envia_data () {

    let enviar = componentes;

    let fuuncion = document.querySelector(".inserte_catalogo")

    funcion.innerHTML = enviar;
}

envia_data();