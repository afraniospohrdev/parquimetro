var array = [];

function calcular(){
    var tempoPermanencia = $("#tempoPermanencia").val();
    var totalAcumulado = 0;


var parquimetro = new Object();
parquimetro['tempoPermanencia'] = tempoPermanencia;
parquimetro['totalAcumulado'] = totalAcumulado;


array.push(parquimetro);

for (i = 0; i < array.length; i++){

    var hora = $("#tempoPermanencia").val().split(":");


    if (array[i].tempoPermanencia >= "01:00"){

        if(minutos[1] == "00"){
            totalAcumulado += 5 * minutos[0];
        }
        else if(minutos[1] != "00"){
            totalAcumulado += (5 * minutos[0]) + 2.5;

            console.log(minutos);

        }

    }else if (array[i].tempoPermanencia == "00:30"){

        totalAcumulado += 1,00;
    }
    else if (array[i].tempoPermanencia == "01:00"){

        totalAcumulado += 1,75;

    }
    else if (array[i].tempoPermanencia >= "02:00"){         

        if(minutos[1] == "00"){ 
            totalAcumulado += (minutos[0] * 2) * 2;

            console.log(minutos);

        }else if(minutos[1] != "00"){
            totalAcumulado += (minutos[0] * 2 + 1) * 2;

            console.log(minutos);

        }

    }
//$("#total").val(totalAcumulado);
//$("#tempoPermanencia").val("");
//$("#tempoPermanencia").focus();

}
$("#total").val(totalAcumulado);
$("#tempoPermanencia").val("");
$("#tempoPermanencia").focus(); 
}