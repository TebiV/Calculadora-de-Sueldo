


const botonCalcularSueldo = document.querySelector('.calcular-sueldo');

botonCalcularSueldo.onclick = function(){
    // Importa las constantes
    const $sueldoUsuario = Number(document.querySelector('#sueldo-usuario').value);
    const $nombreUsuario = String(document.querySelector('#nombre-usuario').value);
    const $apellidoUsuario = String(document.querySelector('#apellido-usuario').value);
    let $tipoCalculo = String(document.querySelector('.boton-calculo').checked);
    //Cambia segun si es mensual o anual
    if ($tipoCalculo === 'true'){$tipoCalculo = 'mensual';}else{$tipoCalculo = 'anual';}
    const $dniUsuario = Number(document.querySelector('#dni-usuario').value);
    //Importa el resultado
    resultadoCalculo = document.querySelector('.resultado')
    

    
    //Funcion que realiza el calculo SOLO si estan los datos.
    if ($sueldoUsuario != false && $nombreUsuario !== false && $dniUsuario != false && $apellidoUsuario !== false){
        let sueldoResultadoText = 'Tu sueldo ';
        //Calculo mensual
        if ($tipoCalculo === 'mensual'){
            sueldoResultadoText = sueldoResultadoText + `mensual es ${$sueldoUsuario/12}`;
        }
        //Calculo Anual
        else{
            sueldoResultadoText = sueldoResultadoText + `anual es ${$sueldoUsuario*12}`;
        };
        
        //Actualiza el resultado.
        resultadoCalculo.innerText = sueldoResultadoText;
        resultadoCalculo.style.background= "#cecece";
        resultadoCalculo.style.color = "black";
        resultadoCalculo.style.padding = "20px";
    }
    //Funcion que avisa que faltan datos.
    else{
        resultadoCalculo.innerText = "Verifique los datos";
        resultadoCalculo.style.color = "red";
    }
    return false;
};

