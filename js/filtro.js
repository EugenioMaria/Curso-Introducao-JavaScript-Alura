var filtro = document.querySelector("#filtro_tabela")

//Escuta o evento de digitar
filtro.addEventListener("input", function(){
	console.log(this.value);
	var pacientes = document.querySelectorAll(".paciente");

	if(this.value.length > 0){
		for(var i = 0; i < pacientes.length; i++){
			//A expressão regular é usada para poder fazer pesquisar com só uma parte da string, exemplo:
			//Procurar com 'Me' e achar as palavras Melancia e Melao
			//Tem como entrada o valor do input para pesquisa e se é case sensitivity ("i") ou nao
			var expressao = new RegExp(this.value, "i");
			//A funcao 'test' verifica se há a parte 'Me' do input nos dados Melancia e Melao
			if(!expressao.test(pacientes[i].querySelector(".info-nome").textContent)){
				pacientes[i].classList.add("invisivel");
			}
			else{
				pacientes[i].classList.remove("invisivel");
			}
		}
	}
	else{
		for(var i = 0; i < pacientes.length; i++){
			pacientes[i].classList.remove("invisivel");
		}
	}
});