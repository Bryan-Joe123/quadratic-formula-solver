function calculate() {
  var a = Number(document.getElementById("aInput").value);
  var b = Number(document.getElementById("bInput").value);
  var c = Number(document.getElementById("cInput").value);

  document.getElementById("answer").innerHTML=("Answer: "+(-b+(Math.sqrt((b*b)-4*a*c)))/(2*a)+" or "+(-b-(Math.sqrt((b*b)-4*a*c)))/(2*a));
}