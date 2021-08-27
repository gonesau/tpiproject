function irArriba(pxPantalla){
    window.addEventListener('scroll', () => {
        var scroll = document.documentElement.scrollTop; //Guardar pixeles desplazados hacia abajo
        var botonArriba = document.getElementById('botonArriba');

        if(scroll > 100){
            botonArriba.style.right=20 + "px";
        }else{
            botonArriba.style.right=-100 + "px";
        }
    })
}
irArriba(90);