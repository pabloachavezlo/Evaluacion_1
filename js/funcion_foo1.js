function laod_footer () {
    
    let foo = 
    `
    <footer class="footer">
        <div class="elenemtos1">
            <h1>Logo</h1>
            <button>Deprasure</button>
        </div>
        <div class="elenemtos">
            <a class="clase1" href="./index2.html">Home</a>
            <a class="clase1" href="./index3.html">About</a>
            <a class="clase1" href="./index4.html">Contact</a>
        </div>
    </footer>
    `;

    return foo
}

function envia_foo (){

    let send = laod_footer;

    let fooo = document.querySelector(".inserte_footer")

    fooo.innerHTML = send;

}

envia_foo();