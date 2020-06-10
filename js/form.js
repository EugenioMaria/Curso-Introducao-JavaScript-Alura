var botaoAdicionar = document.querySelector("#adicionar-paciente");
//Escuta o evento de click
botaoAdicionar.addEventListener("click",
	function(event){
		/*Ao clicar no botão a pagina recarrega, então essa função previni que isso aconteca*/
		event.preventDefault();
		console.log("Botão Add Clicado");

		//Trás o form
		var form = document.querySelector("#form-adiciona");

		/*.id (e talvez .class) trás o valor do campo*/
		console.log(form.altura.value);

		//Passa todos os dados para o objeto paciente
		var paciente = pacientes_objeto(form);

		//Valida se os dados estão nos padroes
		console.log(validaPaciente(paciente));

		//Verifica se existe erros, se sim mostra ao usuario e retorna
		var erro = document.querySelector("#mensagem-erro");
		erros = validaPaciente(paciente);
		erro.textContent = erros;
		if(erros.length != 0)
			return;

		//Adiciona o paciente na tabela
		addPacienteTabela(paciente);

		/*Limpa campos do form*/
		form.reset();
	}
);

function addPacienteTabela(paciente){
	//Cria a linha da tabela para o novo paciente
	var pacienteTr = montaTr(paciente);

	/*Coloca a nova linha na tabela*/
	var table = document.querySelector("#tabela-pacientes");
	table.appendChild(pacienteTr);
}

function pacientes_objeto(form){

	/*Objeto em JS*/
	var paciente = {
		nome: form.nome.value,
		peso: form.peso.value,
		altura: form.altura.value,
		gordura: form.gordura.value,
		imc: calculaImc(form.peso.value, form.altura.value)
	}

	return paciente;
}

function montaTr(paciente){
	/*Cria uma linha da lista*/
	var pacienteTr = document.createElement("tr");
	/*Adiciona a classe paciente*/
	pacienteTr.classList.add("paciente");

	/*Faz o Tr virar pai dos Td's*/
	pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
	pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
	pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
	pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
	pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

	return pacienteTr;
}

/*Monta Td, adicionando classe nele*/
function montaTd(dado, classe){
	var td = document.createElement("td");
	td.textContent = dado;
	td.classList.add(classe);

	return td;
}

function validaPaciente(paciente){
	var erros = [];

	if(!validaNome(paciente.nome))
		erros.push("Nome vazio");
	if(!validaPeso(paciente.peso))
		//Adiciona uma string no array
		erros.push(" Peso inválido");
	if(!validaAltura(paciente.altura))
		erros.push(" Altura inválida");
	if(!validaGordura(paciente.gordura))
		erros.push(" Gordura vazia");

	return erros;
}