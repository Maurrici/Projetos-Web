var aux = 0

function calcular(tipo, valor){
    const display = document.querySelector('#display');

    if(tipo === 'acao'){
        switch (valor){
            case 'c':
                display.value = ''
                aux = 0
                break

            case '=':
                if(display.value != ''){
                    let valorCampo = display.value
                    display.placeholder = eval(valorCampo)
                    display.value = ''
                }
                break
                
            default:
                if(aux == 0){
                    display.value += valor
                    aux = 1
                }

                break 
        }
    }else{
        display.value += valor
        aux = 0
    }
}
