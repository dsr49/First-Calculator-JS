function calculate(num1, num2, operator) {
    if (operator === "+") {
					return  num1 + num2;
				} else if (operator === "-") {
					return num1 - num2;
				} else if (operator === "*") {
					return num1 * num2;
				} else if (operator === "/") {
					if (num2 === 0) {
						return "Cannot divide by zero.";
					} else {
						return num1 / num2;
					}
				} else {
					return "Please choose a valid operator.";
				}

}


function performOperations() {
  
  var num1 = document.getElementById("num1").value;
  var num2 = document.getElementById("num2").value;
  var result = document.getElementById("result");
  var operator = document.getElementById("operator").value;
  
  if (isNaN(num1) || isNaN(num2)) {
    result.textContent = "Please enter valid numbers!";
  }
  if (operator === "") {
    result.textContent = "Please select an operator!";
  }

  const res = calculate(parseFloat(num1), parseFloat(num2), operator);
  result.textContent = "Result is : " + res;
}