 //this can eventually be a generator function
 //the user can click a button to go through each step of the proof
 
export default function(context, point1, point2) {

  //given points a and b, construct equilateral triangle a, b, c
  const a = point1;
  const b = point2;
  const ab = a.getDistance(b);
  const angle = Math.atan2(b.y - a.y, b.x - a.x);

  a.draw(context);
  a.circle(context, ab);
  b.draw(context);
  b.circle(context, ab);
  context.beginPath();
  context.moveTo(a.x, a.y);
  context.lineTo(b.x, b.y);
  context.stroke();
  context.closePath();

  context.moveTo(a.x, a.y);
  //find c
  context.beginPath();
  context.arc(a.x, a.y, ab, angle, angle + Math.PI/3, false);
  context.lineTo(a.x, a.y);
  context.arc(a.x, a.y, ab, angle, angle + Math.PI/3, false);
  context.lineTo(b.x, b.y);

  //find -c
  context.moveTo(a.x, a.y);
  context.arc(a.x, a.y, ab, angle, (angle - Math.PI/3), true);
  context.lineTo(a.x, a.y);
  context.arc(a.x, a.y, ab, angle, (angle - Math.PI/3), true);
  context.lineTo(b.x, b.y);
  context.stroke();
  context.closePath();
}

