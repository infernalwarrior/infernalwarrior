//clase para calibrar los parametros primarios
class calibrarParametros {
	constructor (parametro,unidad,genero){
		this.genero = genero;
		this.parametro= parametro;
		this.unidad = unidad;
		this.cantidad = 0;
		this.frase = "";
	}

	subirCantidad(numero){
		this.cantidad= this.cantidad+ numero
	}
	bajarCantidad(numero){
		let confirmar = this.cantidad-numero > 0
		console.log (confirmar)
		if (confirmar) {
			this.cantidad= this.cantidad- numero
		}
		else {
			this.cantidad = 0
		}
	}
	texto(){
		this.frase =`${this.genero} ${this.parametro} es de ${this.cantidad} ${this.unidad}`;
		}
}
//{}
//declaracion de los parametros primarios y variables 
let calibrarResistencia = new calibrarParametros("resistencia","ohmios","La");
let calibrarVoltaje = new calibrarParametros("voltaje","voltios","El");
let calibrarIntensidad = new calibrarParametros("intensidad","amperios","La");
let calibrarWatts = new calibrarParametros("potencia electrica","watts","La")
let subir = true
let bajar = false
let reiniciar = "reset"
calibrarResistencia.texto()
//conexion con los botones del html

function BotonesDeResistencia(indice,cantidad){
	if (indice == true) {
		calibrarResistencia.subirCantidad(cantidad)
	}
	if (indice == false) {
		 calibrarResistencia.bajarCantidad(cantidad)
		 }

	
	if (indice == "reset") {
		calibrarResistencia.cantidad = 0
	}
	calibrarResistencia.texto()
	document.getElementById("resistencia").innerHTML = `${calibrarResistencia.frase}`
	rellenarListas()
}
function BotonesDeVoltaje(indice,cantidad){
	if (indice == true){
		calibrarVoltaje.subirCantidad(cantidad)
	}
	if (indice == false) {
		if (calibrarVoltaje.cantidad > 0) {
			calibrarVoltaje.bajarCantidad(cantidad)
		}
	}
	if (indice == "reset") {
		calibrarVoltaje.cantidad = 0
	}
	calibrarVoltaje.texto()
	document.getElementById("voltaje").innerHTML = `${calibrarVoltaje.frase}`
	rellenarListas()
}
function BotonesDeIntensidad(indice,cantidad){
	if (indice == true) {
		calibrarIntensidad.subirCantidad(cantidad)
	}
	if (indice == false) {
		if (calibrarIntensidad.cantidad > 0) {
			calibrarIntensidad.bajarCantidad(cantidad)
		}
	}
	if (indice == "reset") {
		calibrarIntensidad.cantidad = 0
	}
	calibrarIntensidad.texto()
	document.getElementById("Intensidad").innerHTML = `${calibrarIntensidad.frase}`
	rellenarListas()
}

function BotonesDePotencia(indice,cantidad) {
	if (indice == true) {
		calibrarWatts.subirCantidad(cantidad)
	}
	if (indice == false) {
		if (calibrarWatts.cantidad >0) {
			calibrarWatts.bajarCantidad(cantidad)
		}
	}
	if (indice == "reset") {
		calibrarWatts.cantidad = 0
	}
	calibrarWatts.texto()
	document.getElementById("watts").innerHTML = `${calibrarWatts.frase}`
	rellenarListas()
}
//document.getElementById("texto").innerHTML = `${frase}`
//{}
//funciones de calculo
function calcularVoltaje (resistencia,intensidad) {
		let voltaje = resistencia * intensidad
		return voltaje
	}
function calcularIntensidad(voltaje,resistencia){
	let intensidad	= (voltaje/resistencia)
	return (intensidad)
}
function calcularResistencia(voltaje,intensidad){
	let resistencia= voltaje/intensidad
	return resistencia
}
function calcularWatts (voltaje,intensidad){
	let watts= voltaje * intensidad
	return watts
}
function calcularVoltaje2 (watts,intensidad){
	voltaje = watts/intensidad
	return (voltaje)
}
function calcularIntensidad2(watts,voltaje){
	intensidad = watts/voltaje
	return (intensidad)
}
//document.getElementById("encontrarParametro").innerHTML = ``
//reiniciar todo
function reiniciarTodo(){
	BotonesDeResistencia(reiniciar)
	BotonesDeVoltaje(reiniciar)
	BotonesDeIntensidad(reiniciar)
	BotonesDePotencia(reiniciar)
	rellenarListas()
	document.getElementById("encontrarParametro").innerHTML = `Elija que parametro quiere encontrar`


}


//funcion de encontrar parametros}
function encontrarParametro(indice){
	if (indice == 0) {
		let resistencia = calcularResistencia(calibrarVoltaje.cantidad,calibrarIntensidad.cantidad);
		console.log (resistencia);
		document.getElementById("encontrarParametro").innerHTML = `La resistencia es de ${resistencia} ohmios`;
		calibrarResistencia.cantidad = resistencia;
		BotonesDeResistencia(null);


	}
	if (indice == 1){
		let voltaje = calcularVoltaje(calibrarResistencia.cantidad,calibrarIntensidad.cantidad)
		console.log (voltaje)
		document.getElementById("encontrarParametro").innerHTML = `El voltaje es de ${voltaje} voltios`
		calibrarVoltaje.cantidad = voltaje
		BotonesDeVoltaje(null)
	}
	if (indice == 2) {
		let corriente = calcularIntensidad(calibrarVoltaje.cantidad, calibrarResistencia.cantidad)
		console.log(corriente)
		document.getElementById("encontrarParametro").innerHTML = `La corriente es de ${corriente}`
		calibrarIntensidad.cantidad = corriente
		BotonesDeIntensidad(null)
	}	
	if (indice == 3){
		let potencia = calcularWatts(calibrarVoltaje.cantidad,calibrarIntensidad.cantidad)
		console.log (potencia)
		document.getElementById("encontrarParametro").innerHTML = `la potencia electrica es de ${potencia}`
		calibrarWatts.cantidad = potencia
		BotonesDePotencia(null)
	}
	if (indice == 4) {
		let voltaje =calcularVoltaje2 (calibrarWatts.cantidad,calibrarIntensidad.cantidad)
		console.log (voltaje)
		document.getElementById("encontrarParametro").innerHTML = `El voltaje es de ${voltaje} voltios`
		calibrarVoltaje.cantidad = voltaje
		BotonesDeVoltaje(null)
	}
	if (indice == 5) {
		let corriente = calculaIntensidad2 (calibrarWatts.cantidad,calibrarVoltaje.cantidad)
		console.log(corriente)
		document.getElementById("encontrarParametro").innerHTML = `La corriente es de ${corriente}`
		calibrarIntensidad.cantidad = corriente
		BotonesDeIntensidad(null)
	}
		
}
function rellenarListas(){
	calibrarVoltaje.texto()
	calibrarIntensidad.texto()
	calibrarResistencia.texto()
	calibrarWatts.texto()
	document.getElementById("numeroDeVoltaje").innerHTML = `${calibrarVoltaje.frase}`
	document.getElementById("numeroDeIntencidad").innerHTML = `${calibrarIntensidad.frase}`
	document.getElementById("numeroDeResistencia").innerHTML = `${calibrarResistencia.frase}`
	document.getElementById("numeroDePotencia").innerHTML = `${calibrarWatts.frase}`


}

function rellenar(voltaje,intensidad,resistencia,potencia){
	calibrarVoltaje.cantidad = voltaje
	calibrarIntensidad.cantidad = intensidad
	calibrarResistencia.cantidad = resistencia
	calibrarWatts.cantidad = potencia
	BotonesDeIntensidad(null)
	BotonesDeVoltaje(null)
	BotonesDePotencia(null)
	BotonesDeResistencia(null)
	rellenarListas()
}


function autoCompletar (indice){
	let voltaje= calibrarVoltaje.cantidad
	let resistencia = calibrarResistencia.cantidad
	let intensidad = calibrarIntensidad.cantidad
	let potencia = calibrarWatts.cantidad
	if (indice == 0){
		voltaje = calcularVoltaje(resistencia,intensidad)
		potencia = calcularWatts (voltaje,intensidad)

	}
	else if (indice == 1) {
		intensidad = calcularIntensidad(voltaje,resistencia)
		potencia = calcularWatts(voltaje,intensidad)
	}
	else if (indice == 2) {
		resistencia = calcularResistencia (voltaje,intensidad)
		potencia = calcularWatts(voltaje,intensidad)
	}
	else if (indice == 3) {
		voltaje = calcularVoltaje2 (potencia,intensidad)
		resistencia = calcularResistencia(voltaje,intensidad)
	}
	else if (indice == 4){
		intensidad = calculaIntensidad2(potencia,voltaje)
		resistencia = calcularResistencia(voltaje,intensidad)
	}

	rellenar(voltaje,intensidad,resistencia,potencia)
}
//{}
