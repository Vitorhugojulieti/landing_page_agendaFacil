export default class Acender{
	constructor(campos){
		this.campos = campos;
	}
	
	init(){
		for(int i = 0; i <= this.campos.length; i++){
			setInterval(()=>{
				let campoHtml = document.querySelector('#'+campos[i]);
				campoHtml.classList.add('acender');
			},1000);
		}
	}
}