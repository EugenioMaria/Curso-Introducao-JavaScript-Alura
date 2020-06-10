var integrar = document.querySelector("#integrar_pacientes");

integrar.addEventListener("click", function(){
	//Funcao para fazer request em outros sites
	var xhr = new XMLHttpRequest();
	//Prepara a request para o site
	xhr.open("GET", "http://api-pacientes.herokuapp.com/pacientes");
	//Envia a request para o site
	xhr.send();
	//Espera a response e faz algo quando estiver load
	xhr.addEventListener("load", function(){
		erro = document.querySelector("#erro_ajax");
		//Verifica erros na integracao, 200 é a responta quando não há erros
		if(xhr.status == 200){
			erro.classList.add("invisivel");
			console.log("Buscando Pacientes...");
			//Transforma o JSON retornado em um objeto JS
			var pacientes = JSON.parse(xhr.responseText);
			console.log("Pacientes Carregados");

			for(var i = 0; i < pacientes.length; i++){
				addPacienteTabela(pacientes[i]);
			}
		}
		else{
			console.log("Integracao falhou");
			console.log("Status: " + xhr.status);
			console.log("Response: " + xhr.responseText);
			erro.classList.remove("invisivel");		}
	});
});