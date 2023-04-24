menuListArray = ["Pizza Vegetariana",
"Pizza de Frango", 
"Pizza Portuguesa", 
"Pizza Quatro Queijos", 
"Pizza de Calabresa", 
"Pizza Extravaganza"];

function getMenu(){
var htmldata;
function addItem(){ 
var htmldata; var imgtags='<img id="im1" src="images/pizzaImg.png"/>' 
var item=document.getElementById("addItem").value; menuListArray.sort(); htmldata="" 
for(var i=0;i<menuListArray.length;i++){ htmldata=htmldata+imgtags+ menuListArray[i]+'<br>';
 } document.getElementById
 ("displayAddedMenu").innerHTML = htmldata; }
}

/**a função addItem() recebe um item digitado pelo usuário e adiciona-o 
a uma lista de menu existente, atualizando a exibição na página com a nova 
lista classificada alfabeticamente e com uma imagem correspondente para cada item da lista. */

//Declara três variáveis: htmldata, imgtags e item.
function addItem(){
    //htmldata é uma string vazia que será usada para armazenar o HTML a ser exibido na página.
    var htmldata;
    // imgtags é uma string que contém um elemento <img> com um ID e um caminho de imagem específico.
    var imgtags='<img id="im1" src="pizzaImg.png">'
    //item é atribuído com o valor inserido no elemento de entrada HTML com o ID addItem.
    var item=document.getElementById("addItem").value;
    //A matriz menuListArray é classificada em ordem alfabética usando o método sort().
    menuListArray.sort();
    
    htmldata=""
    for(var i=0;i<menuListArray.length;i++){
    htmldata=htmldata+imgtags+ menuListArray[i]+'<br>';
    }
    document.getElementById("displayAddedMenu").innerHTML = htmldata;
    
    }
    
    function addTop(){
        var item=document.getElementById("addItem").value;
        menuListArray.push(item);
        addItem();
    }