export default function Point(x, y, label) { 
  this.x = x;
  this.y = y; 
  this.label = label;
}

Point.prototype.draw = function(context) {
  context.beginPath();
  context.arc(this.x, this.y, 1, 0, Math.PI * 2, true);
  context.stroke();
  context.closePath();
  if(this.label) context.fillText(this.label, this.x + 1, this.y + 10);
}

Point.prototype.circle = function(context, radius) {
  context.beginPath();
  context.arc(this.x, this.y, radius, 0, Math.PI * 2, true);
  context.stroke();
  context.closePath();
}

Point.prototype.getDistance = function(point) {
  const x1 = this.x;
  const y1 = this.y;
  const x2 = point.x;
  const y2 = point.y;

  //Pythagorean Theorem
  const a = Math.abs(x1 - x2);
  const b = Math.abs(y1 - y2);
  const c = Math.sqrt(a * a + b * b);

  return c;
}

Point.prototype.getSlope = function(point) {
  const x1 = this.x;
  const y1 = this.y;
  const x2 = point.x;
  const y2 = point.y;

  return (y2 - y1)/(x2 - x1);
}
