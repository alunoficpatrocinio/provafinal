  	
var lista = new array();
function cadastro(){
	var nome = document.getElementById("nome").value;
	var dtanasc = document.getElementById("dtanasc").value;
	var anolet = document.getElementById("ano").value;
	var matp = document.getElementById("mp").value;
	var dados1=[nome,dtanasc,anolet];
	lista.push(dados1);

		   document.getElementById("conteudo").innerHTML +=lista;
		}
   return 0;

}