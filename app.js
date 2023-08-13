
 
function btnAgregar() {
  var tag= document.getElementById("tag").value;
  console.log(tag);
  //var marca= document.getElementById("marca").value;
  var modelo= document.getElementById("modelo").value;
  console.log(modelo);
  var  kks= document.getElementById("kks").value;
  console.log(kks);
  var ndeserie= document.getElementById("ndeserie").value;
  console.log(ndeserie);
  //var sistema= document.getElementById("sistema").value;
  //var subsistema= document.getElementById("subsistema").value;
  var rangomin= document.getElementById("rangomin").value;
  console.log(rangomin);
  var rangomax= document.getElementById("rangomax").value;
  console.log(rangomax);
  //var unidad= document.getElementById("unidad").value;
  var tipo= document.getElementById("tipo").value;
  console.log(tipo);
  //var central= document.getElementById("central").value;
  var fecha= document.getElementById("fecha").value;
  console.log(fecha);
  //
  //plandemant= document.getElementById("plandemant").value;
  
  }

  function calibracion(){
    var valor1=document.getElementById("valor1").value;
    console.log(valor1);
    var valor2=document.getElementById("valor2").value;
    console.log(valor2);
    var valor3=document.getElementById("valor3").value;
    console.log(valor3);
    var valor4=document.getElementById("valor4").value;
    console.log(valor4);
    var valor5=document.getElementById("valor5").value;
    console.log(valor5);
    var valor6=document.getElementById("valor6").value;
    console.log(valor6);
    var valor7=document.getElementById("valor7").value;
    console.log(valor7);
    var valor8=document.getElementById("valor8").value;
    console.log(valor8);
    var valor9=document.getElementById("valor9").value;
    console.log(valor9);
    var valor10=document.getElementById("valor10").value;
    console.log(valor10);
    var valor11=document.getElementById("valor11").value;
    console.log(valor11);
    var valor12=document.getElementById("valor12").value;
    console.log(valor12);
    var valor13=document.getElementById("valor13").value;
    console.log(valor13);
    var valor14=document.getElementById("valor14").value;
    console.log(valor14);
    var valor15=document.getElementById("valor15").value;
    console.log(valor15);
    var valor16=document.getElementById("valor16").value;
    console.log(valor16);
    var valor17=document.getElementById("valor17").value;
    console.log(valor17);
    var valor18=document.getElementById("valor18").value;
    console.log(valor18);

    
    
    document.getElementById("valor1").value="";
    document.getElementById("valor2").value="";
    document.getElementById("valor3").value="";
    document.getElementById("valor4").value="";
    document.getElementById("valor5").value="";
    document.getElementById("valor6").value="";
    document.getElementById("valor7").value="";
    document.getElementById("valor8").value="";
    document.getElementById("valor9").value="";
    document.getElementById("valor10").value="";
    document.getElementById("valor11").value="";
    document.getElementById("valor12").value="";
    document.getElementById("valor13").value="";
    document.getElementById("valor14").value="";
    document.getElementById("valor15").value="";
    document.getElementById("valor16").value="";
    document.getElementById("valor17").value="";
    document.getElementById("valor18").value="";
     
    }


    encontrado = (valor1+valor2+valor3+valor4+valor5+valor6+valor7+valor8+valor9)/9;

    console.log("El porcentaje de error de valores encontrados es:" + "" + encontrado);
     if(encontrado < 1){
    console.log("El error es Aceptable");    
    } else
    { console.log("Fuera del criterio de Aceptacion, Realizar Ajuste de calibracion")
    }
    ajustado = (valor10+valor11+valor12+valor13+valor14+valor15+valor16+valor17+valor18)/9;
    if (ajustado < 1){
    console.log("El error es Aceptable");
    }
  
  