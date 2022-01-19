function tablaMultiplicar( tabla ) {
  document.write("<h1> Tabla de multiplicar del: " + tabla + "</h1>");

  document.write("<ul>");

  for(i = 1; i<=10; i++) {
    document.write("<li>");
    document.write( tabla  + "x" + i + "=" + tabla * i)
    document.write("</li>");
  }

  document.write("</ul>");
}

tablaMultiplicar(14);

// sumar++;  sumar = sumar + 1;
// sumar--;  sumar = sumar - 1;

// ruteamos
// a la i le asignamos el 5
// i = i + 1;
// 5 = 5 + 1;
// i = 6

// 6 = 6 + 1;
// i = 7

// i++; 