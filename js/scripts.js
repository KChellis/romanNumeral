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

function decimal(numeral){
  var decimal= 0;
  if (/IV/.test(numeral)) {
    decimal += 4;
    numeral = numeral.replace("IV")
  }
  if (/IX/.test(numeral)) {
    decimal += 9;
    numeral = numeral.replace("IX")
  }
  if (/XL/.test(numeral)) {
    decimal += 40;
    numeral = numeral.replace("XL")
  }
  if (/XC/.test(numeral)) {
    decimal += 90;
    numeral = numeral.replace("XC")
  }
  if (/CD/.test(numeral)) {
    decimal += 400;
    numeral = numeral.replace("CD")
  }
  if (/CM/.test(numeral)) {
    decimal += 900;
    numeral = numeral.replace("CM")
  }
  for (var i = 0; i < numeral.length; i++) {
    if(numeral[i] === "I"){
      decimal += 1;
    } else if(numeral[i] === "V"){
      decimal += 5;
    }else if(numeral[i] === "X"){
      decimal += 10;
    }else if(numeral[i] === "L"){
      decimal += 50;
    }else if(numeral[i] === "C"){
      decimal += 100;
    }else if(numeral[i] === "D"){
      decimal += 500;
    }else if(numeral[i] === "M"){
      decimal += 1000;
    }
  }
  return decimal;
}

$(document).ready(function(){
  $("#form1").submit(function(event){
    event.preventDefault();
    var number = $("#number").val();
    if (parseInt(number) <= 3999 && parseInt(number) >0) {
      var result = romanNumeral(number);
      $(".result").show();
      $("#result").prepend("<li>" + number + " is " + result + "</li>");
    }else {
      alert("Please enter a number greater than 0 and less than 4,000");
    }

  });
  $("#form2").submit(function(event){
    event.preventDefault();
    var numeral = $("#number2").val();
    var result = decimal(numeral);
    $(".result").show();
    $("#result").prepend("<li>" + numeral + " is " + result + "</li>");
  });
  $("#clear").click(function() {
    location.reload();
  });
});
