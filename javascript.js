

//STOCK//
let hojasUsadas = 0
let costoHojas = 6500/500
let costoTapas = (7100/50)
let costoTinta = 3 //por hoja con tinta de mayor precio
let costoAnillos = 72 //hasta 40 hojas
let costoAnillosXL = 100 // de 41 hojas para adelante
let stockHojas = 500
let stockTapas = 30
let stockAnillos = 50
let ganancia = 0
let gananciaCuadernillos = 0
let gananciaFotocopias = 0
let gananciaCuadernillosTotal = 0
let gananciaFotocopiasTotal = 0

//VARIABLES DE HTML//
const cuadernos = document.querySelector("#cuadernos")
const menu = document.querySelector("#menu")
const cuadernillos = document.querySelector("#cuadernillos")
const pages = document.querySelector("#pages")
const pagesOriginal = pages.value
const buttonCalcular = document.querySelector("#calcular")
const buttonAceptar = document.querySelector("#buttonAceptar")
const precioPorPagina = document.querySelector("#precio")
const home = document.querySelector("#home")
const infoCuadernillos = document.querySelector("#seccionInfo")
const fotocopias = document.querySelector("#fotocopias")
const seccionFotocopias = document.querySelector("#seccionFotocopias")
const pagesFotocopias = document.querySelector("#pagesFotocopias")
const pagesFotocopiasOriginal = pagesFotocopias.value
const buttonCalcularFotocopias = document.querySelector("#calcularFotocopias")
const infoFotocopias = document.querySelector("#infoFotocopias")
const buttonAceptarFotocopias = document.querySelector("#buttonAceptarFotocopias")
const info = document.querySelector("#info")
const seccionInfo = document.querySelector("#seccionInfoGeneral")
const infoGeneral = document.querySelector("#infoGeneral")


let resultado = document.querySelector("#result")

cuadernos.addEventListener("click",openCuadernillos)
fotocopias.addEventListener("click",openFotocopias)
buttonCalcular.addEventListener("click",calcularPrecioCuadernillo)
home.addEventListener("click",menuInicio)
buttonCalcularFotocopias.addEventListener("click",functionFotocopias)
info.addEventListener("click",openInfo)
pages.addEventListener("click",reiniciarMenuCuadernillos)
pagesFotocopias.addEventListener("click",reiniciarMenuFotocopias)

//funcionas para mostrar u ocultar secciones
function menuInicio () {
    menu.classList.remove("inactive")
    cuadernillos.classList.add("inactive")
    seccionFotocopias.classList.add("inactive")
    seccionInfo.classList.add("inactive")

    infoCuadernillos.innerHTML=""
    ocultarButtonAceptar()
    pages.value = pagesOriginal
    pages.disabled = false
    buttonCalcular.disabled = false

    infoFotocopias.innerHTML=""
    ocultarButtonAceptarFotocopias ()
    pagesFotocopias.value = pagesFotocopiasOriginal
    pagesFotocopias.disabled = false
    buttonCalcularFotocopias.disabled = false

    infoGeneral.innerHTML = ""

}

function openCuadernillos() {
    menu.classList.toggle("inactive")
    cuadernillos.classList.remove("inactive")
}

function openFotocopias() {
    menu.classList.toggle("inactive")
    seccionFotocopias.classList.remove("inactive")
}

function mostrarButtonAceptar() {
    buttonAceptar.classList.remove("inactive")
    buttonAceptar.classList.add("active")
}

function ocultarButtonAceptar() {
    buttonAceptar.classList.remove("active")
    buttonAceptar.classList.add("inactive")
}

function mostrarButtonAceptarFotocopias() {
    buttonAceptarFotocopias.classList.remove("inactive")
    buttonAceptarFotocopias.classList.add("active")
}

function ocultarButtonAceptarFotocopias() {
    buttonAceptarFotocopias.classList.remove("active")
    buttonAceptarFotocopias.classList.add("inactive")
}

function openInfo() {
    menu.classList.toggle("inactive")
    seccionInfo.classList.remove("inactive")

   agregarP ("GANANCIAS " + ganancia)
   agregarP ("GANANCIAS CON CUADERNILLOS " + gananciaCuadernillosTotal)
   agregarP ("GANANCIAS CON FOTOCOPIAS " + gananciaFotocopiasTotal)
   agregarP (".............................................")
   agregarP ("STOCK")
   agregarP ("HOJAS RESTANTES " + stockHojas)
   agregarP ("TAPAS RESTANTES " + stockTapas)
   agregarP ("ANILLOS RESTANTES " + stockAnillos)
   agregarP (".............................................")
   agregarP ("COSTOS ACTUALES")
   agregarP ("COSTO POR HOJA " + costoHojas)
   agregarP ("COSTO POR TAPA " + costoTapas)
   agregarP ("COSTO POR ANILLO " + costoAnillos)
   agregarP ("COSTO POR ANILLO XL " + costoAnillosXL)
   agregarP ("COSTO DE TINTA POR HOJA " + costoTinta)
   agregarP (".............................................")
   agregarP ("OTRA INFO")
   agregarP ("CANTIDAD DE HOJAS UTILIZADAS " + hojasUsadas)

}

function agregarP(params) {
    const p = document.createElement ("p")
    p.textContent = params
    infoGeneral.appendChild(p)
}







function reiniciarMenuCuadernillos() {
    infoCuadernillos.innerHTML=""
    ocultarButtonAceptar()
}

function reiniciarMenuFotocopias() {
    infoFotocopias.innerHTML=""
    ocultarButtonAceptarFotocopias ()
}

function calcularPrecioCuadernillo() {
    mostrarButtonAceptar()

    //borra contenido dentro del din info
    infoCuadernillos.innerHTML = ""
    //cantidad de hojas a usar
    const cantidadHojas = Math.floor((pages.value / 2)+ 0.5)
    const costoTotal = (cantidadHojas * costoHojas) + costoAnillos + (costoTapas*2) + (costoTinta*cantidadHojas)
    

    const infoProductHojas = document.createElement('p')
    const infoProductTapas = document.createElement('p')
    const infoProductAnillos = document.createElement('p')
    const infoProductTinta = document.createElement('p')
    const infoProductCostoFinal = document.createElement('p')
    const infoPecioFinal = document.createElement('p')
    infoProductHojas.innerText = "NECESITAS " + cantidadHojas + " HOJAS,  COSTO DE HOJAS $" + (cantidadHojas * costoHojas)
    infoProductTapas.innerText = "TAPAS X 2 $" + costoTapas*2     
    infoProductAnillos.innerText = "ANILLO $" + costoAnillos
    infoProductTinta.innerText = "TINTA $" + (costoTinta * cantidadHojas)
    infoProductCostoFinal.textContent ="COSTO DE CUADERNILLO $ " + costoTotal
    infoPecioFinal.innerText = "PRECIO FINAL $" + (costoTotal * 2.5)//calculo al 250 % de ganancia
    gananciaCuadernillos = 0 + ((costoTotal * 2.5)-costoTotal)
    infoCuadernillos.appendChild(infoProductHojas)
    infoCuadernillos.appendChild(infoProductTapas)
    infoCuadernillos.appendChild(infoProductAnillos)
    infoCuadernillos.appendChild(infoProductTinta)
    infoCuadernillos.appendChild(infoProductCostoFinal)
    infoCuadernillos.appendChild(infoPecioFinal)

    buttonAceptar.addEventListener("click",manejostock)
    
}

function manejostock() {

    const userConfirm = confirm ("segura que deseas cargar el pedido???")
    if (userConfirm){
    pages.disabled = true
    buttonCalcular.disabled = true
    // restar las hojas del stock
    stockHojas = stockHojas - Math.floor((pages.value / 2)+ 0.5)
    //restar tapas de stock
    stockTapas = stockTapas-2
    //restar anillo
    stockAnillos = stockAnillos - 1
    //sumar ganancias
    gananciaCuadernillosTotal = gananciaCuadernillosTotal + gananciaCuadernillos
    ganancia=ganancia+gananciaCuadernillos
    //sumar hojas utilizadas
    hojasUsadas = hojasUsadas + Math.floor((pages.value / 2)+ 0.5)

    const infoProductLoad = document.createElement('h2')
    infoProductLoad.innerText = "CUADERNILLO CARGADO CON EXITO"
    infoCuadernillos.appendChild(infoProductLoad)
    ocultarButtonAceptar ()


    console.log("QUEDAN " + stockHojas + " hojas en Stock")
    console.log("QUEDAN " + stockTapas + " tapas en Stock")
    console.log("QUEDAN " + stockAnillos + " anillos en Stock")
    console.log("GANANCIA DE CUADERNILLOS " + gananciaCuadernillos);
    console.log("GANANCIA TOTAL :" + ganancia);
    }
    else {
        pages.value = pagesOriginal
        ocultarButtonAceptar ()
        //borra contenido dentro del din info
         infoCuadernillos.innerHTML = ""
    }
}

function functionFotocopias() {
    mostrarButtonAceptarFotocopias()

    //borra contenido dentro del div infofotocopias
    infoFotocopias.innerHTML = ""
    //cantidad de hojas a usar
    const cantidadHojas = Math.floor((pagesFotocopias.value / 2)+ 0.5)
    const costoTotal = (cantidadHojas * costoHojas) + (costoTinta*cantidadHojas)
    gananciaFotocopias = 0 + ((cantidadHojas * 50) - costoTotal )

    const infoProductHojas = document.createElement('p')
    const infoProductTinta = document.createElement('p')
    const infoProductCostoFinal = document.createElement('p')
    const infoPrecioFinal = document.createElement('p')
    infoProductHojas.innerText = "NECESITAS " + cantidadHojas + " HOJAS,  COSTO DE HOJAS $" + (cantidadHojas * costoHojas)
    infoProductTinta.innerText = "TINTA $" + (costoTinta * cantidadHojas)
    infoProductCostoFinal.textContent ="COSTO DE LAS FOTOCOPIAS $" + costoTotal
    infoPrecioFinal.innerText = "PRECIO FINAL $" + (cantidadHojas * 50)//calculo al 3.125% de ganancia
    infoFotocopias.appendChild(infoProductHojas)
    infoFotocopias.appendChild(infoProductTinta)
    infoFotocopias.appendChild(infoProductCostoFinal)
    infoFotocopias.appendChild(infoPrecioFinal)

    buttonAceptarFotocopias.addEventListener("click",manejostockFotocopias)
}

function manejostockFotocopias() {
    const userConfirm = confirm ("segura que deseas cargar el pedido???")
    if (userConfirm){
    pagesFotocopias.disabled = true
    buttonCalcularFotocopias.disabled = true
    //sacar cantidad de hojas a usar
    const cantidadHojas = Math.floor((pagesFotocopias.value / 2)+ 0.5)
    // restar las hojas del stock
    stockHojas = stockHojas - Math.floor((pagesFotocopias.value / 2)+ 0.5)
    //sumar ganancia
    gananciaFotocopiasTotal = gananciaFotocopiasTotal + gananciaFotocopias
    ganancia= ganancia + gananciaFotocopias

    //sumar hojas utilizadas
    hojasUsadas = hojasUsadas + Math.floor((pagesFotocopias.value / 2)+ 0.5)
    
    const infoProductLoad = document.createElement('h2')
    infoProductLoad.innerText = "FOTOCOPIAS CARGADAS CON EXITO"
    infoFotocopias.appendChild(infoProductLoad)
    ocultarButtonAceptarFotocopias ()

    console.log("QUEDAN " + stockHojas + " hojas en Stock")
    console.log("QUEDAN " + stockTapas + " tapas en Stock")
    console.log("QUEDAN " + stockAnillos + " anillos en Stock")
    console.log("GANANCIA DE FOTOCOPIAS " + gananciaFotocopias);
    console.log("GANANCIA ACUMULADA " + ganancia);
    }
    else {
        pagesFotocopias.value = pagesFotocopiasOriginal
        ocultarButtonAceptarFotocopias ()
        //borra contenido dentro del din info
         infoFotocopias.innerHTML = ""
    }
}
