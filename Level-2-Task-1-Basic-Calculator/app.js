window.onload = function() {

    // initializing tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    const tooltips = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    });

    // Add click event listener to the buttons
    tooltipTriggerList.forEach(function (button) {
        button.addEventListener("click", function () {
        // Hide the tooltip associated with the clicked button
        const tooltip = tooltips.find(function (t) {
            return t._element === button;
        });
        tooltip.hide();
        });
    });

    // Get the calculator elements
    const ipdisplay = document.getElementById("calc-ip-display");
    const opdisplay = document.getElementById("calc-op-display");
    const reset = document.querySelector(".calc-reset");
    const clear = document.querySelector(".calc-clear");
    const submit = document.querySelector(".calc-submit");
    const ans = document.querySelector(".calc-ans");
    const sqrt = document.querySelector(".calc-sqrt");
    const numbers = document.querySelectorAll(".number");
    const operators = document.querySelectorAll(".operator");
    const brackets = document.querySelectorAll(".bracket");
  
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        ans.setAttribute("title", "");
        sqrt.removeAttribute("data-bs-toggle");
        reset.removeAttributeNS("title");
    }

    // Set current value of display to 0
    let current = "0";
    ipdisplay.value = current;

    // Store previous answer
    let prevAns = "";
  
    // Add event listeners for number buttons
    numbers.forEach(function(number) {
        number.addEventListener("click", function() {
            if (current === "0") {
                current = "";
                current = number.innerHTML;
            } else {
                current += number.innerHTML;
            }
            ipdisplay.value = current;
        });
    });
  
    // Add event listener for operator buttons
    operators.forEach(function(operator) {
        operator.addEventListener("click", function() {
            current += operator.innerHTML;
            ipdisplay.value = current;
        });
    });
  
    // Add event listener for bracket buttons
    brackets.forEach(function(bracket) {
        bracket.addEventListener("click", function() {
            if (current === "0"){
                current = "";
                current = bracket.innerHTML;
            }
            else {
                current += bracket.innerHTML;
            }
            ipdisplay.value = current;
        });
    });

    // Add event listener for sqrt button
    sqrt.addEventListener("click", function() {
        if (current ==="0"){
            current = "";
            current = sqrt.innerHTML;
        }
        else {
            current += sqrt.innerHTML;
        }
        ipdisplay.value = current;
    });

    // Add event listener for ANS button
    ans.addEventListener("click", function() {
        current += prevAns;
        ipdisplay.value = current;
    });
  
    // Add event listener for clear button
    clear.addEventListener("click", function() {
        current = current.substring(0, current.length - 1);
        ipdisplay.value = current;
    });
  
    // Add event listener for reset button
    reset.addEventListener("click", function() {
        current = "0";
        prevAns = "";
        ipdisplay.value = current;
    });
  
    // Add event listener for submit button
    submit.addEventListener("click", function(e) {
        e.preventDefault();

        // Implement percentage operation by dividing the current number by 100
        current = current.replace(/%/g, "/100");

        current = current.replace(/\u221A(\d+)/g, "Math.sqrt($1)");

        try {
            prevAns = eval(current);
            opdisplay.value = prevAns;
            current = prevAns.toString();
        } catch (error) {
            opdisplay.value = "Error";
        }
    });

    // add event listener for keyboard input
    document.addEventListener("keydown", function(event) {
        const button = document.querySelector(`button[data-key="${event.key}"]`);
        if (button) {
          button.click();
        }
      });   
};
