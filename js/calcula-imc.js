/*Alerta pop-up na parte de cima do navegador*/
/*alert("Olá Mundo");*/
/*Texto no console do desenvolvedor*/
console.log("Olá Mundo");
/*'querySelector trás uma parte da pagina (document é a pagina toda)*/
var titulo = document.querySelector(".titulo");
/*'.textContent' trás só a parte de texto*/
console.log(titulo.textContent);
/*Para alterar o conteudo no HTML basta alterar aqui*/
titulo.textContent = "Teste";

/*'querySelectorALL' Trás todos pacientes*/
var pacientes = document.querySelectorAll(".paciente");
for(var i = 0; i < pacientes.length; i++){
	var altura = pacientes[i].querySelector(".info-altura").textContent;
	var peso = pacientes[i].querySelector(".info-peso").textContent;
	var imc = pacientes[i].querySelector(".info-imc");

	imc.textContent = "";
	var pBool = true;
	if(!validaPeso(peso)){
		console.log("Peso inválido");
		pBool = false;
		imc.textContent += "Peso inválido";
		//'Style' acessa os estilos CSS. Muda a linha para vermelho (para separar background e color se usa letra maiuscula
		pacientes[i].style.backgroundColor = "#F00000";
	}
	if(!validaAltura(altura)){
		if(pBool == false){
			imc.textContent += " e ";
		}
		console.log("Altura inválido");
		imc.textContent += "Altura inválida";
		//Adiciona uma classe ao paciente, para deixar vermelho sem usar HardCode
		pacientes[i].classList.add("paciente-invalido");
	}
	else if(pBool == true){
		//'toFixed(n)' mostra apenas a quantidade 'n' de casa decimais
		imc.textContent = calculaImc(peso, altura);
		console.log(imc);
	}
}

function calculaImc(peso, altura){
	var imc = 0;
	imc = peso / (altura*altura);

	/*'toFixed(n)' mostra apenas a quantidade 'n' de casa decimais*/
	return imc.toFixed(2);
}



/*Escuta o vedendo de 'click' e chama a funcao 'mostraMensagem'*/
titulo.addEventListener("click", mostraMensagem);
/*OU*/
titulo.addEventListener("click", 
	/*O click chama uma função anonima, que é feita só dentro do metodo*/
	function(){
		console.log("Olá, clicou-me");
	}
);

function mostraMensagem(){
	console.log("Olá, clicou-me");
}

function validaNome(nome){
	if(nome == null || nome == "")
		return false;

	return true;
}

function validaPeso(peso){
	if(peso <= 0 || peso > 700 || !isNumeric(peso)){
		return false;
	}

	return true;
}

function validaAltura(altura){
	if(altura <= 0 || altura > 7 || !isNumeric(altura)){
		return false;
	}

	return true;
}

function validaGordura(gordura){
	if(gordura == null || gordura == "")
		return false;

	return true;
}

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}