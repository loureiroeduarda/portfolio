function validaForm() {
	let validaNomePet = document.forms["cadastrar"]["nomePet"].value;
	let validaNomeTutor = document.forms["cadastrar"]["nomeTutor"].value;
	let validaTelefone = document.forms["cadastrar"]["telefone"].value;
	let validaDataAgend = document.forms["cadastrar"]["data"].value;
	let validaRadio = document.forms["cadastrar"]["radio"].value;

	if(validaNomePet == "") {
		alert("O nome do Pet deve ser preenchido!");
		return false;
	}

	if(validaNomeTutor == "") {
		alert("O nome do Tutor deve ser preenchida!");
		return false;
	}

	if(validaTelefone == "") {
		alert("O telefone deve ser preenchido!");
		return false;
	}

	if(validaDataAgend == "") {
		alert("A data do agendamento deve ser preenchido!");
		return false;
	}

	if(validaRadio == "") {
		alert("O tipo de atendimento deve ser marcado!");
		return false;
	}
}

function insere() {
	let nomePet = document.forms["cadastrar"]["nomePet"].value;
	let nomeTutor = document.forms["cadastrar"]["nomeTutor"].value;
	let telefone = document.forms["cadastrar"]["telefone"].value;
	let data = document.forms["cadastrar"]["data"].value;
	let radio = document.forms["cadastrar"]["radio"].value;

	tbody = document.getElementById("tbody");
	let inserir = `<th>${nomePet}</th> <th>${nomeTutor}</th> <th>${telefone}</th> <th>${data}</th> <th>${radio}</th>`;
	tbody.innerHTML += inserir;
}