window.onload = function() {

    const convertBtn = document.getElementById("convert-btn");
    const resetBtn = document.getElementById("reset-btn");
    const input = document.getElementById("tc-input");
    const select = document.getElementById("tc-select");
    const kelvin = document.getElementById("temp-values").children[0];
    const celsius = document.getElementById("temp-values").children[1];
    const fahrenheit = document.getElementById("temp-values").children[2];

    convertBtn.addEventListener("click", function () {
    const temperature = Number(input.value);

    if (temperature === "") {
        input.classList.add("is-invalid");
    } 
    
    else {
        input.classList.remove("is-invalid");

        const selectedUnit = select.value;
        let kelvinTemp, celsiusTemp, fahrenheitTemp;

        if (selectedUnit === "Kelvin ( \u00b0K )") {
        kelvinTemp = temperature;
        celsiusTemp = temperature - 273.15;
        fahrenheitTemp = (celsiusTemp * 9) / 5 + 32;
        } 
        
        else if (selectedUnit === "Celsius ( \u00b0C )") {
        celsiusTemp = temperature;
        kelvinTemp = temperature + 273.15;
        fahrenheitTemp = (celsiusTemp * 9) / 5 + 32;
        } 
        
        else {
        fahrenheitTemp = temperature;
        celsiusTemp = (fahrenheitTemp - 32) * 5 / 9;
        kelvinTemp = celsiusTemp + 273.15;
        }

        kelvin.innerHTML = "<b>Kelvin = " + kelvinTemp + " &deg;K</b>";
        celsius.innerHTML = "<b>Celsius = " + celsiusTemp + " &deg;C</b>";
        fahrenheit.innerHTML = "<b>Fahrenheit = " + fahrenheitTemp + " &deg;F</b>";
    }
    }); 

    resetBtn.addEventListener("click", function (event) {
        input.value = "0";
        select.value = "Kelvin ( &deg;K )";
        kelvin.innerHTML = "Kelvin = &deg;K";
        celsius.innerHTML = "Celsius = &deg;C";
        fahrenheit.innerHTML = "Fahrenheit = &deg;F";
    });

}
