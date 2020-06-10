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
	if(peso <= 0 || peso > 700){
		console.log("Peso inválido");
		pBool = false;
		imc.textContent += "Peso inválido";
		/*'Style' acessa os estilos CSS. Muda a linha para vermelho (para separar background e 
		color se usa letra maiuscula)*/
		pacientes[i].style.backgroundColor = "#F00000";
	}
	if(altura <= 0 || altura > 7){
		if(pBool == false){
			imc.textContent += " e ";
		}
		console.log("Altura inválido");
		imc.textContent += "Altura inválida";
		/*Adiciona uma classe ao paciente, para deixar vermelho sem usar HardCode*/
		pacientes[i].classList.add("paciente-invalido");
	}
	else if(pBool == true){
		/*'toFixed(n)' mostra apenas a quantidade 'n' de casa decimais*/
		imc.textContent = (peso/(altura*altura)).toFixed(2);
		console.log(imc);
	}
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


var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click",
	function(event){
		/*Ao clicar no botão a pagina recarrega, então essa função previni que isso aconteca*/
		event.preventDefault();
		console.log("Botão Add Clicado");

		var form = document.querySelector("#form-adiciona");
		/*.id (e talvez .class) trás o valor do campo*/
		console.log(form.altura.value);

		var nome = form.nome.value;
		var peso = form.peso.value;
		var altura = form.altura.value;
		var gordura = form.gordura.value;

		/*Cria uma linha da lista*/
		var pacienteTr = document.createElement("tr");
		/*Cria cada cedula da linha*/
		var nomeTd = document.createElement("td");
		var pesoTd = document.createElement("td");
		var alturaTd = document.createElement("td");
		var gorduraTd = document.createElement("td");
		var imcTd = document.createElement("td");

		nomeTd.textContent = nome;
		pesoTd.textContent = peso;
		alturaTd.textContent = altura;
		gorduraTd.textContent = gordura;
		imcTd.textContent = peso/(altura*altura);

		/*Faz o Tr virar pai dos Td's*/
		pacienteTr.appendChild(nomeTd);
		pacienteTr.appendChild(pesoTd);
		pacienteTr.appendChild(alturaTd);
		pacienteTr.appendChild(gorduraTd);
		pacienteTr.appendChild(imcTd);

		/*Coloca a nova linha na tabela*/
		var table = document.querySelector("#tabela-pacientes");
		table.appendChild(pacienteTr);
	}
);