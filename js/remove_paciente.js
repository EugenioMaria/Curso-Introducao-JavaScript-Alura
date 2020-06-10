var pacientes = document.querySelectorAll("table");

//'forEach' é um for que ja passa por tudo
pacientes.forEach(
	function(paciente){
		//Escuta eventos de duplo click em toda a tabela
		paciente.addEventListener("dblclick",
			function(event){
				//Faz a linha sumir devagar
				event.target.parentNode.classList.add("sumir_devagar");
				//Executa a função so depois de 500 ms
				setTimeout(
					function(){
						//Ve quem é o pai da cedula clicada e o remove
						event.target.parentNode.remove();
					},
					500
				);
			}
		);
	}
);