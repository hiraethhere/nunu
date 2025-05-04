const btnConvert = document.getElementById("btn-convert");

btnConvert.addEventListener("click", () => {
    const inputNumber = parseFloat(document.getElementById("num-input").value);
    const fromValue = document.getElementById("from-value").value;
    const toValue = document.getElementById("to-value").value;
    const jenis = document.getElementById("jenis").value;
    const result = document.getElementById("result");
    console.log(fromValue);
    console.log(toValue);
    console.log(jenis);
    console.log(inputNumber);
   
    if (isNaN(inputNumber)) {
        result.innerText = "Input tidak valid!";
        result.classList.remove("placeholder");
        return;
    }

    switch(jenis){
        case "air":
            if(fromValue === toValue){
                result.innerText = inputNumber;
            } else {
                result.innerText = inputNumber;
            }
            break;
        case "susu":
            if(fromValue === toValue){
                result.innerText = inputNumber;
            } else if(fromValue === "kg" && toValue === "lt"){
                result.innerText = (inputNumber * 1.035).toFixed(3);
            } else if(fromValue === "lt" && toValue === "kg"){
                result.innerText = (inputNumber / 1.035).toFixed(3);
            } else {
                result.innerText = "Opsi tidak valid!";
            }
            break;
        default:
            result.innerText = "Jenis tidak dikenali!";
    }
    console.log("kont")
});
