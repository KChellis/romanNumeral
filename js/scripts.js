function romanNumeral(number) {
  var reverse = ""
  for (var i = (number.length-1); i >= 0; i--) {
    reverse += number[i];
  }
  var numeral = ""
  if (reverse[3]){
    for (var i = 0; i < parseInt(reverse[3]); i++) {
      numeral += "M";
    }
  }
  for (var j = 2; j >= 0; j--) {
    var base = "";
    var mid = "";
    var max = "";
    if (j === 2){
      base = "C";
      mid = "D";
      max = "M";
    }else if (j === 1) {
      base = "X";
      mid = "L";
      max = "C";
    }else {
      base = "I";
      mid = "V";
      max = "X";
    }
    if(reverse[j] === "1" || reverse[j] === "2" || reverse[j] === "3"){
      for (var i = 0; i < parseInt(reverse[j]); i++) {
        numeral += base;
      }
    }else if (reverse[j] === "4") {
      numeral += (base + mid);
    }else if (reverse[j]=== "5") {
      numeral += mid;
    }else if (reverse[j] === "6" || reverse[j] === "7" || reverse[j] === "8") {
      numeral += mid;
      for (var i = 0; i < (parseInt(reverse[j])-5); i++) {
        numeral += base;
      }
    }else if (reverse[j] === "9"){
      numeral += (base + max);
    }
  }

  return numeral;
}

$(document).ready(function(){
  $("#form1").submit(function(event){
    event.preventDefault();
    var number = $("#number").val();
    if (parseInt(number) <= 3999 && parseInt(number) >0) {
      var result = romanNumeral(number);
      $("#result").text(result);
    }else if (parseInt(number) > 3999 || parseInt(number) <0) {
      alert("Please enter a number greater than 0 and less than 4,000");
    }

  });
});
