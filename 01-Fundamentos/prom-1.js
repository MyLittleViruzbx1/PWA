function sumarUno(numero, cabllback){

    if(numero >= 7){
        cabllback('Numero muy alto');
        return;
    }
    setTimeout(function(){
        cabllback(null, numero + 1)
    }, 800);
}

sumarUno(5, function(error, nuevoValor){
    if(error){
        console.log(error);
        return;
    }

    sumarUno(nuevoValor, function(error, nuevoValor2){
    if(error){
        console.log(error);
        return;
    }
       sumarUno(nuevoValor2, function(error, nuevoValor3){
       if(error){
        console.log(error);
        return;
       }

        console.log(nuevoValor3);

       });
    });

});