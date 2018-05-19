// patron de busqueda de variables
// 1. la busca en el mismo scope
// 2. busca inmediatamente en el outer scope
// 3. de encontrarla -> asigna el valor
// de lo contrario itera el scope nuevamente
// Shadowing -> declaracion de una variable
// con 
function foo(){
	var bar;
	quux = 10
	function zip(){
		var quux = 5;
	}
}