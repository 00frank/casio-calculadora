var casio = {
    teclas: document.querySelectorAll("li"),
    display: document.querySelector("#display"),
    result: document.querySelector("#result"),
    accion: null,
    lastKey: null,
    cantidadSignos: 0,
    cantidadDecimal: false,
    isResult: false,
    inicio: function () {
        for (let i = 0; i < casio.teclas.length; i++) {
            //aniade eventListener a todos los botones
            casio.teclas[i].addEventListener("click", casio.use);
        }
        casio.teclado();
    },
    teclado() {
        document.addEventListener("keydown", casio.keyListener);
    },
    keyListener(tecla) {
        //ver https://keycode.info/
        console.log('tecla: ', tecla.keyCode);
        if (tecla.keyCode == 48 || tecla.keyCode == 96) {
            casio.accion = "number";
            casio.lastKey = 0;
            casio.calcular(casio.accion);
        } if (tecla.keyCode == 49 || tecla.keyCode == 97) {
            casio.accion = "number";
            casio.lastKey = 1;
            casio.calcular(casio.accion);
        } if (tecla.keyCode == 50 || tecla.keyCode == 98) {
            casio.accion = "number";
            casio.lastKey = 2;
            casio.calcular(casio.accion);
        } if (tecla.keyCode == 51 || tecla.keyCode == 99) {
            casio.accion = "number";
            casio.lastKey = 3;
            casio.calcular(casio.accion);
        } if (tecla.keyCode == 52 || tecla.keyCode == 100) {
            casio.accion = "number";
            casio.lastKey = 4;
            casio.calcular(casio.accion);
        } if (tecla.keyCode == 53 || tecla.keyCode == 101) {
            casio.accion = "number";
            casio.lastKey = 5;
            casio.calcular(casio.accion);
        } if (tecla.keyCode == 54 || tecla.keyCode == 102) {
            casio.accion = "number";
            casio.lastKey = 6;
            casio.calcular(casio.accion);
        } if (tecla.keyCode == 55 || tecla.keyCode == 103) {
            casio.accion = "number";
            casio.lastKey = 7;
            casio.calcular(casio.accion);
        } if (tecla.keyCode == 56 || tecla.keyCode == 104) {
            casio.accion = "number";
            casio.lastKey = 8;
            casio.calcular(casio.accion);
        } if (tecla.keyCode == 57 || tecla.keyCode == 105) {
            casio.accion = "number";
            casio.lastKey = 9;
            casio.calcular(casio.accion);
        } if (tecla.keyCode == 107 || tecla.keyCode == 187) {
            casio.accion = "sign";
            casio.lastKey = "+";
            casio.calcular(casio.accion);
        } if (tecla.keyCode == 109 || tecla.keyCode == 189) {
            casio.accion = "sign";
            casio.lastKey = "-";
            casio.calcular(casio.accion);
        } if (tecla.keyCode == 88 || tecla.keyCode == 106) {
            casio.accion = "sign";
            casio.lastKey = "*";
            casio.calcular(casio.accion);
        } if (tecla.keyCode == 111) {
            casio.accion = "sign";
            casio.lastKey = "/";
            casio.calcular(casio.accion);
        } if (tecla.keyCode == 188 || tecla.keyCode == 110 || tecla.keyCode == 190) {
            casio.accion = "decimal";
            casio.lastKey = ".";
            casio.calcular(casio.accion);
        } if (tecla.keyCode == 13) {
            casio.accion = "equal";
            casio.calcular(casio.accion);
        } if (tecla.keyCode == 8) {
            casio.del();
        }
    },
    use(tecla) {
        //se activa cuando se hace click sobre una tecla
        //accion = clase de boton
        casio.accion = tecla.target.getAttribute("class");
        //lastKey = ultimo boton apretado
        casio.lastKey = tecla.target.innerHTML;
        casio.calcular(casio.accion);
    },
    calcular(accion) {
        switch (accion) {
            case "number":
                casio.cantidadSignos = 0;
                if (casio.display.innerHTML == 0 || casio.isResult == true) {
                    casio.display.innerHTML = casio.lastKey;
                    casio.isResult = false;
                } else {
                    casio.display.innerHTML += casio.lastKey;
                }
                break;
            case "sign":
                if (casio.display.innerHTML != "0") {
                    casio.cantidadSignos++;
                    casio.isResult = false;
                    if (casio.cantidadSignos == 1) {
                        casio.display.innerHTML += casio.lastKey;
                        casio.cantidadDecimal = false;
                    }
                }
                break;
            case "decimal":
                if (!casio.cantidadDecimal) {
                    casio.isResult = false;
                    casio.display.innerHTML += casio.lastKey;
                    casio.cantidadDecimal = true;
                }
                break;
            case "equal":
                casio.calculate();
                casio.isResult = true;
                break;
        }
    },
    calculate() {
        casio.result.innerHTML = eval(casio.display.innerHTML);
    },
    del() {
        casio.display.innerText = casio.display.innerText.substr(0, casio.display.innerText.length - 1);
    },
    ac() {
        casio.display.innerHTML = "";
        casio.result.innerHTML = "";
        casio.accion = null;
        casio.isResult = false;
        casio.lastKey = null;
        casio.cantidadSignos = 0;
        casio.cantidadDecimal = 0;
    }
};

casio.inicio();