function quadraticEquation () {

  let a = parseFloat(frm.a.value);
  let b = parseFloat(frm.b.value);
  let c = parseFloat(frm.c.value);

  let D, x1, x2;

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
