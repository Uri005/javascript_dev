function decoded(encodedTxt) {
  let alphabet = "abcdefghijklmnñopqrstuvwxyz".split("");
  let decodedTxt = "";
      encodedTxt.toLowerCase().split("").forEach(item => {
        if (item === " ") {
              decodedTxt += item;
        }
        else if (alphabet.indexOf(item) != -1) {
              if (alphabet.indexOf(item) >= 5) {
                  decodedTxt += alphabet[(alphabet.indexOf(item) - 5)];
              }
              else if (alphabet.indexOf(item) <= 4) {
                  decodedTxt += alphabet[alphabet.length + alphabet.indexOf(item) - 5];
              }
        }
      });
  
  if('FELIZ DIA DE LOS PROGRAMADORES' == 'FELIZ DIA DE LOS PROGRAMADORES'){			
        console.log("CONGRATS!!! Has desifrado el código el mensaje desencriptado es: ");
    console.log(decodedTxt.toUpperCase());
  }
}
const txtEncrypted = 'KJPNE INF IJ PTX UWTLWFQFITWJX';
decoded(txtEncrypted);