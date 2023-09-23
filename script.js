const number = document.querySelectorAll("#numbers");
const display = document.querySelector("#dailog-box");
const operation = document.querySelectorAll("#operations");

for (let i = 0; i < number.length; i++){
    number[i].style.cursor = "pointer";
    number[i].addEventListener("click", e => {
        display.innerHTML = display.innerHTML + number[i].innerText;

    })

}

for (let i = 0; i < operation.length; i++) {
    operation[i].style.cursor = "pointer";

    operation[i].addEventListener("click", e => {
        switch (operation[i].innerText) {
            case "DEL":
                display.innerText = "";
                break;
            case "C":
                display.innerText = display.innerHTML.slice(0, -1);
                break;
            case "=":
                if (display.innerHTML.length == 0) {
                    display.innerHTML = "ENTER NUMBER";
                    break;
                }
                else {
                    try {
                        display.innerText = eval(display.innerHTML);
                    break;
                    }
                    catch (e) {
                        display.innerText = "Enter vaild way";
                        break;
                    }
                    break;
                }

        }
    })
}
