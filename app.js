alert("Bienvenid@s a la trivia de Laboratoria");
var play = prompt("¿Quieres jugar?");
play = play.toLowerCase();

    if (play == "si") {
    var name = prompt("ingresa tu nombre");
      alert("Comencemos " + name );

        var question1 = prompt("¿Cual es el nombre de la fundadora de laboratoria?")
        question1 = question1.toLowerCase();

        if (question1 == "mariana costa") {
          alert("Respuesta Correcta");
          }
        else {
          alert("Respuesta Incorrecta");
          }

        var question2 = prompt("¿En cuantos paises se encuentra laboratoria?")

        if (question2 == "4") {
          alert("Respuesta Correcta");
          }
        else {
          alert("Respuesta Incorrecta");
          }

        var question3 = prompt("¿Nombre uno de los perfiles de egreso de Laboratoria?")
        question3 = question3.toLowerCase();

        if (question3 == "frontend developer") {
          alert("Respuesta Correcta");
          }
        else if (question3 == "ux designer") {
          alert("Respuesta Correcta");
          }

        else {
          alert("Respuesta Incorrecta");
          }

        var question4 = prompt("¿Cual es la frase utilizada por laboratoria con motivo del dia internacional de la mujer?")

        if (question4 == "puedes ser lo que puedes ver") {
          alert("Respuesta Correcta");
          }

        else {
          alert("Respuesta Incorrecta");
          }
}

else {
  alert("Te estaremos esperando :( ");

}
