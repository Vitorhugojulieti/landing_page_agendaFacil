// menu mobile
const btnOpenMenu = document.querySelector('#btnOpenMenu');
const btnCloseMenu = document.querySelector('#btnCloseMenu');
const menuMobile = document.querySelector('#menuMobile');
let openMenu = false; // bool flag menu

btnOpenMenu.addEventListener('click',()=>{
	menuMobile.style.display = 'flex';
	openMenu = true;
});

menuMobile.addEventListener('click',(e)=>{
	if(openMenu){
		menuMobile.style.display = 'none';
		openMenu = false;
	}
});

// form contato
const formContato = document.querySelector("#formContato");
const inputNome = document.querySelector("#inputNome");
const inputEmail = document.querySelector("#inputEmail");
const inputMensagem = document.querySelector("#inputMensagem");
const messageNome = document.querySelector("#messageNome");
const messageEmail = document.querySelector("#messageEmail");
const messageMensagem = document.querySelector("#messageMensagem");

formContato.addEventListener("submit",(e)=>{
	e.preventDefault();
	let valid = true;
	
	if(inputNome.value == ''){
		valid = false;
		messageNome.innerText = 'Campo nome esta vazio!';
	}
	
	if(inputEmail.value == ''){
		valid = false;
		messageEmail.innerText = 'Campo e-mail esta vazio!';
	}
	
	if(inputMensagem.value.trim() == ''){
		valid = false;
		messageMensagem.innerText = 'Campo mensagem esta vazio!';
	}

	if(valid){
		formContato.submit();
	}
});

// efeito ao scrollar

