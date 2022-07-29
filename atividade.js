function exercicio_2() {
	//----------------------------MONTANDO A SEQUENCIA DE FIBONACCI
	var fibonacci = new Array(100)
	fibonacci[0] = 0;
	fibonacci[1] = 1;
	for (var i = 2; i < fibonacci.length; i++) {
		fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
	}
	//---------------------------VERIFICANDO SE O NÚMERO INFORMADO CONSTA
	var numero = document.getElementById("tst").value;
	var achou = 0;
	for (var x = 0; x < fibonacci.length; x++) {
		if (fibonacci[x] == numero)
			achou = 1;
	}
	//----------------------------INFORMANDO AO USUÁRIO
	if (achou == 1 && numero != '')
		alert(numero + ', faz parte do Fibonacci!');

	else if (achou == 0 && numero != '')
		alert(numero + ', não foi encontrado!');

	else
		alert('Por favor, informe um número!');
}
function limpar() {
	document.getElementById("tst").value = '';
	document.getElementById("palavra").value = '';
}
function exercicio_3() {
	var menor = dados[0].valor;
	var auxMenor = 0;
	var maior = 0;
	var soma=0;
	var qtd=0;
	for (var i = 1; i < dados.length; i++) {
		auxMenor = dados[i].valor;
		if (menor > auxMenor) {
			if (maior < menor) {
				maior = menor;
			}
			menor = auxMenor;
		}
		else {
			if (maior < auxMenor) {
				maior = auxMenor;
			}
		}
	}
	for(var j=0;j<dados.length;j++)
	{
		soma=soma+dados[j].valor;
		if(dados[j].valor > 0)
			qtd++;
	}
	var media = soma/qtd;
	var acimaMedia = new Array();
	var cont=0;
	for(var x=0;x<dados.length;x++)
	{
		if(dados[x].valor > media)
		{
			acimaMedia[x]=dados[x].dia;
			cont++;
		}
	}
	alert('O menor faturamento do mês foi de: '+menor+'\nO maior faturamento do mês foi de: '+maior+'\n Foram '+cont+' dias com faturamento acima da média:\n'+acimaMedia);
}
function exercicio_4() {
	var total = 180759.98;
	var sp = 67836.43;
	var rj = 36678.66;
	var mg = 29229.88;
	var es = 27165.48;
	var outros = 19849.53;

	sp = ((sp / total) * 100).toFixed(2);
	rj = ((rj / total) * 100).toFixed(2);
	mg = ((mg / total) * 100).toFixed(2);
	es = ((es / total) * 100).toFixed(2);
	outros = ((outros / total) * 100).toFixed(2);
	alert('SP = +/- ' + sp + "%" +
		'\nRJ = +/- ' + rj + "%" +
		'\nMG = +/- ' + mg + "%" +
		'\nES = +/- ' + es + "%" +
		'\nOutros = +/- ' + outros + "%");
}
function exercicio_5() {
	var aux = document.getElementById("palavra").value;
	var TL = aux.length;
	var palav = new Array(TL);
	var novaP = new Array(TL);
	palav = aux;
	for (var i = 0, j = palav.length; i <= palav.length && j >= 0; i++, j--) {
		novaP[i] = palav[j];
	}
	novaP = novaP.toString();
	alert('Palavra invertida: ' + novaP);
}
