


const botonCalcularSueldo = document.querySelector('.calcular-sueldo');

botonCalcularSueldo.onclick = function(){
    const $sueldoUsuario = Number(document.querySelector('#sueldo-usuario').value);
    const $nombreUsuario = String(document.querySelector('#nombre-usuario').value);
    const $apellidoUsuario = String(document.querySelector('#apellido-usuario').value);
    let $tipoCalculo = String(document.querySelector('.boton-calculo').checked);
    if ($tipoCalculo === 'true'){$tipoCalculo = 'mensual';}else{$tipoCalculo = 'anual';}
    const $dniUsuario = Number(document.querySelector('#dni-usuario').value);
    resultadoCalculo = document.querySelector('.resultado')
    

    

    if ($sueldoUsuario != false && $nombreUsuario !== false && $dniUsuario != false && $apellidoUsuario !== false){
        let sueldoResultadoText = 'Tu sueldo ';
        if ($tipoCalculo === 'mensual'){
            sueldoResultadoText = sueldoResultadoText + `mensual es ${$sueldoUsuario/12}`;
        }
        else{
            sueldoResultadoText = sueldoResultadoText + `anual es ${$sueldoUsuario*12}`;
        };
        
        resultadoCalculo.innerText = sueldoResultadoText;
        resultadoCalculo.style.background= "#cecece";
        resultadoCalculo.style.color = "black";
        resultadoCalculo.style.padding = "20px";
    }
    else{
        resultadoCalculo.innerText = "Verifique los datos";
        resultadoCalculo.style.color = "red";
    }
    return false;
};

