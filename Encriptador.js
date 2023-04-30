function encriptar(mensaje, clave) {
    // Definimos los alfabetos original y encriptado
    var alfabetoOriginal = "abcdefghijklmnopqrstuvwxyz";
    var alfabetoEncriptado = clave;
  
    // Creamos un objeto que contenga la correspondencia entre letras original y encriptado
    var correspondencia = {};
    for (var i = 0; i < alfabetoOriginal.length; i++) {
      correspondencia[alfabetoOriginal.charAt(i)] = alfabetoEncriptado.charAt(i);
    }
  
    // Convertimos el mensaje a minúsculas
    mensaje = mensaje.toLowerCase();
  
    // Creamos una variable para almacenar el mensaje encriptado
    var mensajeEncriptado = "";
  
  
    // Recorremos cada letra del mensaje original y la reemplazamos con su correspondiente encriptada
    for (var i = 0; i < mensaje.length; i++) {
      var letraOriginal = mensaje.charAt(i);
      var letraEncriptada = correspondencia[letraOriginal];
      // Si la letra no está en el alfabeto original, la agregamos al mensaje encriptado sin modificarla
      if (!letraEncriptada) {
        mensajeEncriptado += letraOriginal;
      } else {
        mensajeEncriptado += letraEncriptada;
      }
    }
  
    // Devolvemos el mensaje encriptado
    return mensajeEncriptado;
  }  