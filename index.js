function quadraticEquation () {

  var a = parseFloat(frm.a.value);
  var b = parseFloat(frm.b.value);
  var c = parseFloat(frm.c.value);

  var D, x1, x2;

  D = b*b - 4*a*c;

  if (D > 0) {
    x1 = (-b + Math.sqrt(D))/(2*a);
    x2 = (-b - Math.sqrt(D))/(2*a);
    document.write('x1 = '+x1+'   x2 = '+x2);
  }
  else if (D == 0) {
    x1 = (-b)/(2*a);
    document.write('x = '+x1);
  }
  else if (D < 0) {
    document.write('Рішення немає.');
  }
}
