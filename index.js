
//calculate Tip

function calculate(){
  var billAmount = document.getElementById("amt").value;
  var service = document.getElementById("val").value;
  var numOfPeople = document.getElementById("people").value;
  var tipAmount = Math.round((billAmount*service)/numOfPeople);
  var total1 =Math.round(billAmount*service);
  console.log(tipAmount);
  tipAmount.print;
  document.getElementById("tip").innerHTML=tipAmount;
 document.getElementById("total").innerHTML=total1;
}
document.getElementById("myBtn").addEventListener("click",calculate);
