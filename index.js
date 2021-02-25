


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


    //Creo el elemento de resultado y le doy atributos de css.
    let resultadoCalculo = null;
    resultadoCalculo = document.createElement('div');
    resultadoCalculo.className = 'resultado';
    resultadoCalculo.style.background= "#cecece";
    resultadoCalculo.style.color = "black";
    resultadoCalculo.style.padding = "20px";
    resultadoCalculo.style.marginTop = "20px";
    resultadoCalculo.style.borderRadius = "20px";
    //Creo el boton limpiar para luego utilizarlo si es necesario.
    limpiar = document.createElement('button');
    limpiar.type = 'reset';
    limpiar.innerText = "Limpiar";
    limpiar.className= "limpiar";



    
    
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
        document.querySelector('.calcular-sueldo').disabled=true;
        
        
        //Agrega el boton limpiar y actualiza el resultado.
        resultadoCalculo.innerText = sueldoResultadoText;
        document.querySelector('main').appendChild(limpiar);

    }
    //Funcion que avisa que faltan datos.
    else{
            resultadoCalculo.innerText = "Verifique los datos.";
            resultadoCalculo.style.color = "red";
            //Desactivo boton
            document.querySelector('.calcular-sueldo').disabled=true;
            //Activo el boton y borro la alerta
            setTimeout(function(){
                document.querySelector('main').removeChild(resultadoCalculo);
                document.querySelector('.calcular-sueldo').disabled=false;
                
            },3000)
    }
    //Agrega el resultado en el sector inferior de la web
    document.querySelector('main').appendChild(resultadoCalculo);

    //Si se aprieta el boton limpar, recarga la pagina.
    document.querySelector('.limpiar').onclick = function(){
        location.reload();
        return false;
    }
    
  
    return false;
};

