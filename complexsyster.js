class parametrosEspeciales {
	constructor(parametro,unidad,genero,proceso,cantidad,frase){
		this.genero = genero;
		this.parametro= parametro;
		this.unidad = unidad;
		this.proceso = proceso;
		this.cantidad = 0;
		this.frase = "";
		this.fraseInductancia = "";
		this.cantidadReal = "";
		this.inductancia = "0";
	}
	calibrarInductancia(frecuenciadada){
		if (this.cantidadReal != 0) {
			if (this.proceso == 1) {
				 this.inductancia = 2*3.1418*frecuenciadada*this.cantidadReal
				 

				 console.log(`${this.parametro} ${this.inductancia}`)
			}
			if (this.proceso == 2) {
				  this.inductancia = 1/(2*3.1418*frecuenciadada*this.cantidadReal)
				  this.fraseInductancia =`La Inductancia de capacitancia es de ${this.inductancia} ohmio`
			}

		}
		else  {
			alert(`se requiere un/a${this.parametro}valido`)
		}
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
	textoInduccion(){
		if (this.proceso ==1) {
			this.fraseInductancia = `La Inductancia de Bobina es de ${this.inductancia} ohmio`}
		if (this.proceso ==2) {
			this.fraseInductancia =`La Inductancia de capacitancia es de ${this.inductancia} ohmio`

		}
	}


	CalcularCantidadReal(){
		if (this.proceso == 0) {
			console.log ("return")
			return}
		if (this.proceso == 1) {
			this.cantidadReal = this.cantidad*10**-3
			console.log (this.cantidadReal)
		}
		if (this.proceso == 2) {
			this.cantidadReal = this.cantidad*10**-6
			console.log (this.cantidadReal)
		}
	}
}

let calibrarFrecuencia = new parametrosEspeciales ("frecuencia","hz","La",0)
let calibrarBobina = new parametrosEspeciales ("embobinado","henrio","El",1)
let calibrarCapacitancia = new parametrosEspeciales("capacitancia","farad","La",2)
let calibrarResistenciaZ = new parametrosEspeciales ("Resistencia real","ohmio","La",0)
function BotonesDeBobina (indice,cantidad) {
	
	if (indice == true) {
		calibrarBobina.subirCantidad(cantidad)
		calibrarBobina.CalcularCantidadReal()
		console.log (2*3.1416*calibrarFrecuencia.cantidad*calibrarBobina.cantidadReal)
	}	
	if (indice == false) {
		calibrarBobina.bajarCantidad(cantidad)
		calibrarBobina.CalcularCantidadReal()
	}
	if (indice == "reset"){
		calibrarBobina.cantidad = 0
		calibrarBobina.CalcularCantidadReal()

	}

	calibrarBobina.texto()
	rellenaListas()
	document.getElementById("Bobina").innerHTML = `${calibrarBobina.frase}`
}
function BotonesDeFrecuencia (indice,cantidad){
	if (indice == true) {
		calibrarFrecuencia.subirCantidad(cantidad)
	}
	if (indice == false) {
		calibrarFrecuencia.bajarCantidad(cantidad)
	}
	if (indice == "reset") {
		calibrarFrecuencia.cantidad = 0
	}
	rellenaListas()
	calibrarFrecuencia.texto()
	document.getElementById("frecuencia").innerHTML = `${calibrarFrecuencia.frase}`
}
function BotonesDeCapacitancia (indice,cantidad){
	if (indice == true) {
		calibrarCapacitancia.subirCantidad(cantidad)
		calibrarCapacitancia.CalcularCantidadReal()
	}
	if (indice == false) {
		calibrarCapacitancia.bajarCantidad(cantidad)
		calibrarCapacitancia.CalcularCantidadReal()
	}
	if (indice == "reset") {
		calibrarCapacitancia.cantidad= 0
		calibrarCapacitancia.CalcularCantidadReal()
	}
	rellenaListas()
	calibrarCapacitancia.texto()
	document.getElementById("capacitancia").innerHTML = `${calibrarCapacitancia.frase}`
}

function rellenaListas(){
	calibrarVoltaje.texto()
	calibrarIntensidad.texto()
	calibrarResistencia.texto()
	calibrarWatts.texto()
	calibrarBobina.texto()
	calibrarBobina.textoInduccion()
	calibrarCapacitancia.textoInduccion()
	calibrarCapacitancia.texto()
	calibrarFrecuencia.texto()
	calibrarResistenciaZ.texto()

	document.getElementById("numeroDeVoltaje").innerHTML = `${calibrarVoltaje.frase}`
	document.getElementById("numeroDeIntencidad").innerHTML = `${calibrarIntensidad.frase}`
	document.getElementById("numeroDeResistencia").innerHTML =`${calibrarResistencia.frase}`
	document.getElementById("numeroDePotencia").innerHTML =`${calibrarWatts.frase}`
	document.getElementById("numeroDeBoBina").innerHTML = `${calibrarBobina.frase}`
	document.getElementById("numeroDeCapacitancia").innerHTML =`${calibrarCapacitancia.frase}`
	document.getElementById("numeroDeFrencuencia").innerHTML =`${calibrarFrecuencia.frase}`
	document.getElementById("numeroDeInductanciaCapacitiva").innerHTML= `${calibrarCapacitancia.fraseInductancia}`
	document.getElementById("numeroDeInductanciaEmbobina").innerHTML =`${calibrarBobina.fraseInductancia}`
	document.getElementById("numeroDeResistenciaZ").innerHTML = `${calibrarResistenciaZ.frase}`
	//`${}`
}

function calcularResistenciaReal(){
	if (calibrarCapacitancia.cantidadReal == 0 ) {
		alert (`ingrese un valor valido de ${calibrarCapacitancia.parametro}`)
	}
	if (calibrarBobina.cantidadReal == 0) {
		alert (`ingrese un valor valido de ${calibrarBobina.parametro}`)	
	}
	if (calibrarResistencia.cantidad == 0) {
		alert (`ingrese un valor valido de ${calibrarResistencia.parametro}`) 
	}
		if (calibrarBobina.cantidadReal != 0 && calibrarCapacitancia.cantidadReal != 0 && calibrarResistencia.cantidad != 0) {
		calibrarBobina.calibrarInductancia(calibrarFrecuencia.cantidad)
		calibrarCapacitancia.calibrarInductancia(calibrarFrecuencia.cantidad)
		proceso = (calibrarBobina.inductancia - calibrarCapacitancia.inductancia)**2
		calibrarResistenciaZ.cantidad = Math.sqrt(calibrarResistencia.cantidad + proceso)
		console.log ( `resistencia real ${calibrarResistenciaZ.cantidad}`)
		console.log (calibrarCapacitancia.fraseInductancia)
		console.log (calibrarBobina.fraseInductancia)
		
		rellenaListas()
	}


} 

function calcularParametrosBasicos(){
	let Parametros = [calibrarResistencia.cantidad, calibrarIntensidad.cantidad, calibrarVoltaje.cantidad, calibrarWatts.cantidad]
	if (Parametros[0] != 0 && Parametros[1] != 0) {
		Parametros[2] = calcularVoltaje(Parametros[0],Parametros[1])
		Parametros[3] = calcularWatts(Parametros[2],Parametros[1])
		console.log (0)

	}
	else if (Parametros[0] != 0 && Parametros[2] != 0) {
		Parametros[1] = calcularIntensidad(Parametros[2],Parametros[0])
		Parametros[3] = calcularWatts(Parametros[2],Parametros[1])
		console.log (1)
	}
	else if (Parametros[1] != 0 && Parametros[2] != 0) {
		Parametros[0] = calcularResistencia(Parametros[2],Parametros[1])
		Parametros[3] = calibrarWatts(Parametros[2],Parametros[1])
		console.log (2)
	}
	else if (Parametros[1] != 0 && Parametros[3] != 0) {
		Parametros[2] = calcularVoltaje2(Parametros[3],Parametros[1])
		Parametros[0] = calcularResistencia(Parametros[2],Parametros[1])
		console.log (3)
	}
	else if (Parametros[2] != 0 && Parametros[3] != 0) {
		Parametros[1] = calcularIntensidad2(Parametros[3],Parametros[2])
		Parametros[0] = calcularResistencia(Parametros[2],Parametros[1])
		console.log (4)
	}
	else {
		alert ("Ingrese Valores Validos")
	}
	calibrarResistencia.cantidad = Parametros[0]
	calibrarIntensidad.cantidad = Parametros[1]
	calibrarVoltaje.cantidad = Parametros [2]
	calibrarWatts.cantidad = Parametros[3]
	rellenaListas()

}
function Reiniciar(){
 	BotonesDeResistencia(reiniciar)
	BotonesDeVoltaje(reiniciar)
	BotonesDeIntensidad(reiniciar)
	BotonesDePotencia(reiniciar)
	BotonesDeFrecuencia(reiniciar)
	BotonesDeCapacitancia(reiniciar)
	BotonesDeBobina(reiniciar)
	rellenarListas()
	
 }
 BotonesDeFrecuencia(true,60)

