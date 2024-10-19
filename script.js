var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var h3 = document.querySelector("h3");
var h4 = document.querySelector("h4");
var randomButton = document.getElementById("randomButton");

// Gradiente inicial en JavaScript
var initialGradient = window
  .getComputedStyle(body)
  .getPropertyValue("background");
console.log(initialGradient);

// Obtener el gradiente inicial y mostrarlo en el elemento h3
var gradientStartIndex = initialGradient.indexOf("linear-gradient(");
console.log(gradientStartIndex);

if (gradientStartIndex !== -1) {
  var gradientEndIndex = initialGradient.lastIndexOf(")");
  console.log(gradientEndIndex);
  if (gradientEndIndex !== -1) {
    var gradientText = initialGradient.substring(
      gradientStartIndex,
      gradientEndIndex + 1
    );
    console.log(gradientText);

    css.textContent = "Initial CSS Linear Gradient: " + gradientText + ";";
  } else {
    css.textContent = "No CSS Linear Gradient found.";
  }
} else {
  css.textContent = "No CSS Linear Gradient found.";
}

// Obtener los colores del gradiente CSS
var gradientColors = initialGradient.match(/rgb\(\d+,\s*\d+,\s*\d+\)/g);
console.log(gradientColors);

if (gradientColors.length >= 2) {
  // Asignar los colores a los campos de entrada
  // document.getElementById('gradientStart').value = gradientColors[0];
  // document.getElementById('gradientEnd').value = gradientColors[1];

  // Convertir los valores RGB en colores visuales y aplicarlos a los campos de entrada
  document.getElementById("gradientStart").style.backgroundColor =
    gradientColors[0];
  document.getElementById("gradientEnd").style.backgroundColor =
    gradientColors[1];
} else {
  console.log("No se encontraron suficientes colores en el gradiente CSS.");
}

// body.style.background = "blue";

h4.textContent =
  "Initial Inputs Linear Gradient (loaded values of input fields): " +
  "linear-gradient(to right, " +
  color1.value +
  ", " +
  color2.value +
  ");";

//events aplicables: click, mouseenet, keypress, input (este es el que usamos)

function setGradient() {
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

  css.textContent = body.style.background + ";";
}

function setRandomGradient() {
  // Generar colores aleatorios
  var randomColor1 = getRandomColor();
  var randomColor2 = getRandomColor();

  // Establecer los valores de los campos de color
  color1.value = randomColor1;
  color2.value = randomColor2;

  // Aplicar el nuevo gradiente
  setGradient();
}

// Función para generar un color hexadecimal aleatorio
function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

randomButton.addEventListener("click", setRandomGradient);
