var p = document.getElementsByTagName('p');

//alert(p[4].innerHTML);


for(var i = 0; i<p.length; i++){
    p[i].innerHTML = p[i].innerHTML + 'Manipulado via JS! p de indice:'+ i;
}