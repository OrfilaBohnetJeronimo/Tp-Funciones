//1)
function cuadrado(x)
{
    var resultado = x * x
    return 'El resultado es ' + resultado
}

//2)
var numero1 = prompt('Elige un numero para elevarlo al cuadrado');
alert(cuadrado(numero1))
console.log(cuadrado(numero1))

function cubo(x)
{
    var resultado = x * x * x
    return 'El resultado es ' + resultado
}

var numero2 = prompt('Elige un numero para elevarlo al cubo');
alert(cubo(numero2))
console.log(cubo(numero2))

//3)
function cuentaA(x)
{
    var resultado = x^2-x-10
    return 'El resultado es ' + resultado
}

var numero3 = prompt('Elige un numero para la esta cuenta: x^2-x-10');
alert(cuentaA(numero3))
console.log(cuentaA(numero3))

function cuentaB(x)
{
    var resultado = (x-3)*2
    return 'El resultado es ' + resultado
}

var numero4 = prompt('Elige un numero para la esta cuenta: (x-3)*2');
alert(cuentaB(numero4))
console.log(cuentaB(numero4))

function cuentaC(x)
{
    var resultado = x*x^2+20
    return 'El resultado es ' + resultado
}

var numero5 = prompt('Elige un numero para la esta cuenta: x*x^2+20');
alert(cuentaC(numero5))
console.log(cuentaC(numero5))

function cuentaD(x)
{
    var resultado = (x/2)+5
    return 'El resultado es ' + resultado
}

var numero6 = prompt('Elige un numero para la esta cuenta: (x/2)+5');
alert(cuentaD(numero6))
console.log(cuentaD(numero6))

function cuentaE(x)
{
    var resultado = x^3+x^2+10
    return 'El resultado es ' + resultado
}

var numero7 = prompt('Elige un numero para la esta cuenta: x^3+x^2+10');
alert(cuentaE(numero7))
console.log(cuentaE(numero7))

function cuentaF(x)
{
    var resultado = (x*10)*5
    return 'El resultado es ' + resultado
}

var numero8 = prompt('Elige un numero para la esta cuenta: (x*10)*5');
alert(cuentaF(numero8))
console.log(cuentaF(numero8))