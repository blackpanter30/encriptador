
function codificar() {
  let onOffMin = true;      // Variable Booleana que indica ausencia de letras mayúsculas.
  let onOffSinAc = true;    // Variable Booleana que indica ausencia de acentos.
  let onOffSinEsp = true;   // Variable Booleana que indica ausencia de caracteres especiales.
  let txtEncriptar = "";    // Cadena que guarda el texto ingresado. 
  let txtEncriptado = "";   // Cadena con el texto encriptado.
  let textoEncriptado = "";       
  let j = 0;                // Indice txtEncriptado.
  let key = "";             // Guarda caracter o llave.

  // Se captura el texto a codificar:
  txtEncriptar = document.getElementById("txtEntrada").value; 

  // Se verifica si hay presencia/ausencia de letras mayúsculas:
  if(mayusculas(txtEncriptar)){
    onOffMin = false;
    alert("¡Solo usar letras minúsculas!");
  }

  // Se verifica si hay presencia/ausencia de acentos:
  if(acentos(txtEncriptar)){
    onOffSinAc = false;
    alert("¡No utilizar acentos!");
  }

  // Se verifica si hay presencia/ausencia de caracteres especiales:
  if(carEspeciales(txtEncriptar)){
    onOffSinEsp = false;
    alert("¡No utilizar caracteres especiales!");
  }

  // Encriptación:
  if(onOffMin && onOffSinAc && onOffSinEsp){
    for (j = 0; j < txtEncriptar.length; j++) {
    
      switch (txtEncriptar[j]) {
        case "e":
          key = "enter";
          break;

        case "i":
          key = "imes";
          break;

        case "a":
          key = "ai";
          break;

        case "o":
          key = "ober";
          break;

        case "u":
          key = "ufat";
          break;

        default:
          key = txtEncriptar[j];
          break;
      }

      txtEncriptado = txtEncriptado + key;
    }

    // Se captura el elemento txtsalida:
    textoEncriptado = document.getElementById("txtSalida"); 
    textoEncriptado.value = txtEncriptado;

    // Se limpia el campo de txtentrada:
    document.getElementById("txtEntrada").value = "";
  }

  return;
}


function mayusculas(cadena){
  // Se emplea una expresión regular para buscar al menos una letra mayúscula en el texto:
  const regex = /[A-Z]/;
  return regex.test(cadena);
}


function acentos(cadena) {
  // La función devuelve true/false si hay presencia/ausencia de acentos.

  flag = false; // Bandera para indicar presencia/ausencia de acentos.

  // Lista de caracteres acentuados extraida de la Tabla Unicode usando ChatGPT:
  const caracteresAcentuados = "àáâãäāăąǎǟǡǻȁȃȧǡắằẳẵặảấầẩẫậæèéêëēĕėęěȅȇėẽẹẻếềểễệìíîïĩīĭįǐȉȋỉịòóôõöōŏőǒǫǭȍȏǫồốổỗộớờởỡợùúûüũūŭůűųưǔȕȗủứừửữựỳýŷÿȳỹỵỷỷḃćĉċčçďḋḍḏđḟĝğġģĥȟḧḩḫħĵķĺļľḷḹḿṁńņňṅṇṉṗŕŗřśŝşšṣṡṣťŧṭṯṳṽŵẁẃẅýẋźżžẓẕß";

  for (let i = 0; i < cadena.length; i++) {
    // Verificar si el carácter actual está en la lista de caracteres acentuados:
    if (caracteresAcentuados.includes(cadena[i])) {
      flag = true; // Se encontró un carácter acentuado.
      break;
    } 
    else 
    {
      flag = false;
    }
  }

  return flag;
}



function carEspeciales(cadena) {
  flag = false; // Bandera para indicar presencia/ausencia de caracteres especiales.

  // Lista de caracteres especiales extraida de la Tabla Unicode usando ChatGPT:
  const caracteresEspeciales = ".,:;¨¡!¿?#$%&'()*+-/<=>@[]^_`'{|}~└";
  
  // Busca los caracteres especiales:
  for (let i = 0; i < cadena.length; i++) {
    // Verificar si el carácter actual está en la lista de caracteres especiales:
    if (caracteresEspeciales.includes(cadena[i])) {
      flag = true; // Se encontró un carácter especial.
      break; // Sale del for.
    } 

    else 
    {
      flag = false;
    }
  }

  return flag;
}


function descodificar() {
  let textoPorDesencriptar = "";  // Cadena que guarda el texto a descodificar.
  
  // Se captura el texto a descodificar:
  textoPorDesencriptar = document.getElementById("txtEntrada").value;

  // Desencriptación:
  textoPorDesencriptar = textoPorDesencriptar.replaceAll("ai", "a");
  textoPorDesencriptar = textoPorDesencriptar.replaceAll("enter", "e");
  textoPorDesencriptar = textoPorDesencriptar.replaceAll("imes", "i");
  textoPorDesencriptar = textoPorDesencriptar.replaceAll("ober", "o");
  textoPorDesencriptar = textoPorDesencriptar.replaceAll("ufat", "u");

  // Se limpia el campo de Encriptar:
  document.getElementById("txtEntrada").value = "";

  // Se muestra el resultado:
  document.getElementById("txtSalida").value = textoPorDesencriptar;

  return;
}



function copiar() {
  let txtentrada = "";
  let txtsalida = "";

  txtentrada = document.getElementById("txtEntrada");
  txtsalida = document.getElementById("txtSalida");

  txtentrada.value = txtsalida.value;
  document.getElementById("txtSalida").value = "";

}