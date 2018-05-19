// nested scopes: each nester inner scope has access 
// to outer scope vars but no viceversa
function foo(){
 var bar;
 function zip(){
	var quux;
 }
}