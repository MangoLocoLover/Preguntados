const scanner = require("prompt-sync")({ sigint: true });

const categorias = ["Biología", "Historia", "Geografía", "Ciencia", "Deportes"];
let puntos = 0;

const preguntasPorCategoria = {
  Biología: [
    { pregunta: "¿Cuántos huesos tiene el cuerpo humano?", respuestas: ["A. 206", "B. 300", "C. 150"], correcta: "A" },
    { pregunta: "¿Cuál es el órgano más grande del cuerpo humano?", respuestas: ["A. Corazón", "B. Hígado", "C. Piel"], correcta: "C" },
    { pregunta: "¿En qué parte del cuerpo se encuentra el tímpano?", respuestas: ["A. Ojo", "B. Nariz", "C. Oído"], correcta: "C" },
    { pregunta: "¿Qué gas respiramos?", respuestas: ["A. Oxígeno", "B. Dióxido de carbono", "C. Nitrógeno"], correcta: "A" },
    { pregunta: "¿Cuál es la función principal de los pulmones?", respuestas: ["A. Bombear sangre", "B. Respirar", "C. Digetir alimentos"], correcta: "B" },
  ],
  Historia: [
    { pregunta: "¿En qué año comenzó la Revolución Francesa?", respuestas: ["A. 1789", "B. 1600", "C. 1850"], correcta: "A" },
    { pregunta: "¿Quién fue el primer presidente de Estados Unidos?", respuestas: ["A. Abraham Lincoln", "B. George Washington", "C. Thomas Jefferson"], correcta: "B" },
    { pregunta: "¿En qué año ocurrió la caída del Muro de Berlín?", respuestas: ["A. 1989", "B. 1975", "C. 1995"], correcta: "A" },
    { pregunta: "¿Dónde se libró la batalla de Waterloo?", respuestas: ["A. Francia", "B. Alemania", "C. Bélgica"], correcta: "C" },
    { pregunta: "¿Cuál fue la primera civilización conocida?", respuestas: ["A. Romana", "B. Egipcia", "C. Sumeria"], correcta: "C" },
  ],
  Geografía: [
    { pregunta: "¿Cuál es el río más largo del mundo?", respuestas: ["A. Amazonas", "B. Nilo", "C. Yangtsé"], correcta: "A" },
    { pregunta: "¿En qué continente se encuentra el desierto del Sahara?", respuestas: ["A. África", "B. Asia", "C. América"], correcta: "A" },
    { pregunta: "¿Cuál es la capital de Australia?", respuestas: ["A. Sydney", "B. Melbourne", "C. Canberra"], correcta: "C" },
    { pregunta: "¿En qué país se encuentra la Torre Eiffel?", respuestas: ["A. Italia", "B. Francia", "C. España"], correcta: "B" },
    { pregunta: "¿Cuál es el punto más alto de la Tierra?", respuestas: ["A. Everest", "B. K2", "C. Mont Blanc"], correcta: "A" },
  ],
  Ciencia: [
    { pregunta: "¿Cuál es la fórmula química del agua?", respuestas: ["A. H2O", "B. CO2", "C. O2"], correcta: "A" },
    { pregunta: "¿Cuál es el planeta más grande del sistema solar?", respuestas: ["A. Tierra", "B. Júpiter", "C. Marte"], correcta: "B" },
    { pregunta: "¿Cuál es el componente principal del aire?", respuestas: ["A. Nitrógeno", "B. Oxígeno", "C. Dióxido de carbono"], correcta: "A" },
    { pregunta: "¿Quién formuló la teoría de la relatividad?", respuestas: ["A. Newton", "B. Einstein", "C. Galileo"], correcta: "B" },
    { pregunta: "¿Cuál es el elemento más abundante en la corteza terrestre?", respuestas: ["A. Hierro", "B. Oxígeno", "C. Aluminio"], correcta: "B" },
  ],
  Deportes: [
    { pregunta: "¿En qué deporte se utiliza un bate y una pelota?", respuestas: ["A. Fútbol", "B. Béisbol", "C. Tenis"], correcta: "B" },
    { pregunta: "¿Cuál es el deporte más popular en la India?", respuestas: ["A. Críquet", "B. Fútbol", "C. Hockey"], correcta: "A" },
    { pregunta: "¿Cuál es el único deporte que se ha jugado en la Luna?", respuestas: ["A. Golf", "B. Fútbol", "C. Tenis"], correcta: "A" },
    { pregunta: "¿En qué país se originó el judo?", respuestas: ["A. China", "B. Japón", "C. Corea"], correcta: "B" },
    { pregunta: "¿Cuántos jugadores hay en un equipo de baloncesto en la cancha?", respuestas: ["A. 5", "B. 7", "C. 10"], correcta: "A" },
  ],
};

const categoriaRandom = categorias[Math.floor(Math.random() * categorias.length)];
const preguntas = preguntasPorCategoria[categoriaRandom];

console.log(`Categoría: ${categoriaRandom}\n`);

for (let i = 0; i < preguntas.length; i++) {
  const preguntaActual = preguntas[i];
  console.log(`${i + 1}. ${preguntaActual.pregunta}`);
  console.log(preguntaActual.respuestas.join("\n"));

  let respuestaUsuario = scanner("Tu respuesta (A, B, C) o escribe 'exit' para salir: ").toUpperCase();

  while (!["A", "B", "C", "EXIT"].includes(respuestaUsuario)) {
    console.log("Por favor, selecciona una opción válida (A, B, C) o escribe 'exit' para salir.");
    respuestaUsuario = scanner("Tu respuesta: ").toUpperCase();}

    if (respuestaUsuario === preguntaActual.correcta) {
        console.log("\n the GOAT Respuesta Correcta. ¡Ganas 2 puntos!\n\n");
        puntos += 2;
    } else {
        console.log("\n LOL Que mal Respuesta Incorrecta. Pierdes 2 puntos.\n\n");
        puntos -= 2;
    }
    
    if (respuestaUsuario === "EXIT") {
        break;
      }
      if ( i == 4) {
        console.log(`Fin del juego. Has acumulado ${puntos} puntos hablamo el malte.`);
      }
  }
