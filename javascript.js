
//STOCkK//
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
const cargaCuadernillos = document.querySelector("#cargaCuadernillo")
const pages = document.querySelector("#pages")
const infoAdicionalCuader = document.querySelector("#infoAdicional")
const pagesOriginal = pages.value
const buttonCalcular = document.querySelector("#calcular")
const buttonAceptar = document.querySelector("#buttonAceptar")
const buttonReiniciar = document.querySelector("#buttonReiniciar")
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
const buttonReiniciarFoto = document.querySelector("#buttonReiniciarFoto")
const info = document.querySelector("#info")
const seccionInfo = document.querySelector("#seccionInfoGeneral")
const infoGeneral = document.querySelector("#infoGeneral")
const inputCargaCliente = document.getElementById("opcionClient")
const inputCargaClienteValue = inputCargaCliente.value
const submitCliente = document.getElementById("submitCliente")
const opcionCliente = document.getElementById("opcionCliente")
const nuevoCliente = document.getElementById("nuevoCliente")
const btnCrearcliente = document.getElementById("btnCrearCliente")
const nombre = document.getElementById("nombre")
const apellido = document.getElementById("apellido")
const cel = document.getElementById("cel")
const otraInfo = document.getElementById("otraInfo")
const nombreValue = nombre.value
const apellidoValue = apellido.value
const celValue = cel.value
const otraInfoValue = otraInfo.value
const menuClientes = document.getElementById("clientes")
const infoClient = document.getElementById("infoClient")
const seccionClient = document.getElementById("seccionClient")
const infodeCliente = document.getElementById('infodeCliente')
const btnAtrasClient = document.getElementById('btnAtrasClient')
const cash = document.getElementById('cash')
const stock = document.getElementById('stock')
const costos = document.getElementById('costos')
const masInfo = document.getElementById('masInfo')


let resultado = document.querySelector("#result")

cuadernos.addEventListener("click",openCuadernillos)
fotocopias.addEventListener("click",openFotocopias)
buttonCalcular.addEventListener("click",calcularPrecioCuadernillo)
home.addEventListener("click",menuInicio)
buttonCalcularFotocopias.addEventListener("click",functionFotocopias)
info.addEventListener("click",openInfo)
pages.addEventListener("click",reiniciarMenuCuadernillos)
pagesFotocopias.addEventListener("click",reiniciarMenuFotocopias)
buttonReiniciar.addEventListener("click",reiniciarcuadernillos)
buttonReiniciarFoto.addEventListener("click",reiniciarFotocopias)
submitCliente.addEventListener("click",procesarCliente)
btnCrearcliente.addEventListener("click",crearClienteNuevo)
menuClientes.addEventListener("click",openClients)

infoClient.addEventListener('click',(event)=>{
    openSeccion (infodeCliente)
    for (let i = 0; i < clientes.length; i++) {
        const client = clientes[i]
        if (event.target && event.target.classList.contains ('client'+ i)){
            console.log(client.nombre);
            encontrarCliente (client.nombre)
        }    
    }
})


function encontrarCliente(nombre) {
    const elegido = clientes.find(persona => persona.nombre == nombre);
    const infoSelect = elegido.info
    mostrarCliente (nombre,infoSelect[0])
  }

  function mostrarCliente(nombre,params) { 
        ocultarSeccion (infoClient)
        const pnom = document.createElement ("p")
        pnom.textContent = nombre
        infodeCliente.appendChild(pnom)
        const pcel = document.createElement ("p")
        pcel.textContent = params.cel
        infodeCliente.appendChild(pcel)
        const pinfo = document.createElement ("p")
        pinfo.textContent = params.otraInfo
        infodeCliente.appendChild(pinfo)
        openSeccion (btnAtrasClient)
        btnAtrasClient.addEventListener('click',()=>{
            infodeCliente.innerHTML=""
            ocultarSeccion (infodeCliente)
            ocultarSeccion (btnAtrasClient)
            openSeccion (infoClient)
        })
  }
  

//funcionas para mostrar u ocultar secciones
function menuInicio () {
    menu.classList.remove("inactive")
    cuadernillos.classList.add("inactive")
    seccionFotocopias.classList.add("inactive")
    seccionInfo.classList.add("inactive")

    infoCuadernillos.innerHTML=""
    ocultarButtonAceptar()
    ocultarSeccion (nuevoCliente)
    inputCargaCliente.value = inputCargaClienteValue
    pages.value = pagesOriginal
    pages.disabled = false
    buttonCalcular.disabled = false

    infoFotocopias.innerHTML=""
    ocultarButtonAceptarFotocopias ()
    pagesFotocopias.value = pagesFotocopiasOriginal
    pagesFotocopias.disabled = false
    buttonCalcularFotocopias.disabled = false

    cash.innerHTML = ""
    stock.innerHTML = ""
    costos.innerHTML = ""
    masInfo.innerHTML = ""
    
    ocultarButtonReiniciar()
    ocultarSeccion(seccionClient)

    infodeCliente.innerHTML=""
    ocultarSeccion (infodeCliente)
    ocultarSeccion (btnAtrasClient)
}

function openCuadernillos() {
    
    menu.classList.toggle("inactive")
    cuadernillos.classList.remove("inactive")
    cargaCuadernillos.classList.add("inactive")
    opcionCliente.classList.remove("inactive")
}

function openCargaCuadernillos() {
    
    opcionCliente.classList.add("inactive")
    cargaCuadernillos.classList.remove("inactive")
    ocultarSeccion(nuevoCliente)
    nombre.value = nombreValue
    apellido.value = apellidoValue
    cel.value = celValue
    otraInfo.value = otraInfoValue
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

function mostrarButtonReiniciar() {
    buttonReiniciar.classList.remove("inactive")
    buttonReiniciar.classList.add("active")
}

function ocultarButtonReiniciar() {
    buttonReiniciar.classList.remove("active")
    buttonReiniciar.classList.add("inactive")
}

function reiniciarcuadernillos() {
    infoCuadernillos.innerHTML=""
    ocultarButtonAceptar()
    ocultarButtonReiniciar ()
    ocultarSeccion (cargaCuadernillos)
    openSeccion (opcionCliente)
    inputCargaCliente.value = inputCargaClienteValue
    pages.value = pagesOriginal
    pages.disabled = false
    buttonCalcular.disabled = false

}

function mostrarButtonReiniciarFoto() {
    buttonReiniciarFoto.classList.remove("inactive")
    buttonReiniciarFoto.classList.add("active")
}

function ocultarbuttonReiniciarFoto() {
    buttonReiniciarFoto.classList.remove("active")
    buttonReiniciarFoto.classList.add("inactive")
}

function reiniciarFotocopias() {
    infoFotocopias.innerHTML=""
    pagesFotocopias.value = pagesFotocopiasOriginal
    pagesFotocopias.disabled = false
    buttonCalcularFotocopias.disabled = false
    ocultarSeccion (cargaCuadernillos)
    ocultarButtonAceptarFotocopias ()
    ocultarbuttonReiniciarFoto()
}

function mostrarButtonAceptarFotocopias() {
    buttonAceptarFotocopias.classList.remove("inactive")
    buttonAceptarFotocopias.classList.add("active")
}

function ocultarButtonAceptarFotocopias() {
    buttonAceptarFotocopias.classList.remove("active")
    buttonAceptarFotocopias.classList.add("inactive")
}

function ocultarOpcionCliente() {
    opcionCliente.classList.add("inactive")
}
//modificar DOM
function agregarP(text,seccion) {
    const p = document.createElement ("p")
    p.textContent = text
    seccion.appendChild(p)
}


function ocultarSeccion (params){
    params.classList.add("inactive")
}

function openSeccion(params) {
    params.classList.remove("inactive")
}

function reiniciarMenuCuadernillos() {
    infoCuadernillos.innerHTML=""
    ocultarButtonAceptar()
}

function reiniciarMenuFotocopias() {
    infoFotocopias.innerHTML=""
    ocultarButtonAceptarFotocopias ()
}

function openClients() {
    ocultarSeccion(menu)
    openSeccion(seccionClient)
    openSeccion (infoClient)
    //borra contenido dentro del din info
    infoClient.innerHTML = ""
    cargarCliente()
}



function openInfo() {
    menu.classList.toggle("inactive")
    seccionInfo.classList.remove("inactive")

    agregarP ("GANANCIAS " + ganancia,cash)
    agregarP ("GANANCIAS CON CUADERNILLOS " + gananciaCuadernillosTotal,cash)
    agregarP ("GANANCIAS CON FOTOCOPIAS " + gananciaFotocopiasTotal,cash)
    //agregarP (".............................................")
    agregarP ("STOCK",stock)
    agregarP ("HOJAS RESTANTES " + stockHojas,stock)
    agregarP ("TAPAS RESTANTES " + stockTapas,stock)
    agregarP ("ANILLOS RESTANTES " + stockAnillos,stock)
   // agregarP (".............................................")
    agregarP ("COSTOS ACTUALES",costos)
    agregarP ("COSTO POR HOJA " + costoHojas,costos)
    agregarP ("COSTO POR TAPA " + costoTapas,costos)
    agregarP ("COSTO POR ANILLO " + costoAnillos,costos)
    agregarP ("COSTO POR ANILLO XL " + costoAnillosXL,costos)
    agregarP ("COSTO DE TINTA POR HOJA " + costoTinta,costos)
    //agregarP (".............................................")
    agregarP ("OTRA INFO",masInfo)
    agregarP ("CANTIDAD DE HOJAS UTILIZADAS " + hojasUsadas,masInfo)

}

function procesarCliente (event) {
    event.preventDefault ()//evita que se auto envie el formulario
    const seleccion = inputCargaCliente.value
    switch (seleccion) {
        case "Nuevo Cliente":
        crearCliente ()
        break;
        case "Cliente ya Ingresado":
        cargarCliente ()
        break;
        case "Cliente Comun":
        openCargaCuadernillos()
        break;
        default:
            break;
    }
}

function crearCliente() {
    console.log("Crear Cliente");
    openSeccion (nuevoCliente)
    ocultarSeccion (opcionCliente)
}

function crearClienteNuevo() {
    const userConfirm = confirm("Segura que Deseas Cargar un Cliente Nuevo")
    if (userConfirm){
    console.log("casi listo");
    clientes.push({
        nombre:nombre.value + " " + apellido.value,
        info:[({
            cel:cel.value,
            otraInfo:infoAdicionalCuader.value,
        })]
    })
    openCargaCuadernillos ()
    }
    else {
        nombre.value = nombreValue
        apellido.value = apellidoValue
        cel.value = celValue
        otraInfo.value = otraInfoValue
    }
}

function cargarCliente() {
    for (let i = 0; i < clientes.length; i++) {
        const element = clientes[i];
        const infoCliente = document.createElement('p')
        infoCliente.classList.add('client'+i)
        infoCliente.innerText = element.nombre
        infoClient.appendChild(infoCliente)
    }
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
    mostrarButtonReiniciar ()


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
    mostrarButtonReiniciarFoto ()

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
