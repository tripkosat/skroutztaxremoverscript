
// ==UserScript==
// @name         taxremover
// @version      0.1
// @include     https://www.skroutz.gr/*

// ==/UserScript==

var fpa=0.23+1;
var list = document.getElementsByClassName("sku-link");
for (var i = 0; i < list.length; i++) {
    var price=list[i].firstChild.nodeValue;
	price=price.replace('.','');
	price=parseFloat(price);
    var newprice=price/fpa;
    newprice=newprice.toFixed(2);
    var node=document.createTextNode(newprice.toString()+" €");
     list[i].appendChild(document.createElement("br"));
    list[i].appendChild(node);
}

var list1 = document.getElementsByClassName("product-link");
var list2=document.getElementsByClassName("price");
for (var i = 0; i < list1.length; i++) {
var price=list1[i].firstChild.nodeValue;
	price=price.replace('.','');
    price=parseFloat(price);
    var newprice=price/fpa;
    newprice=newprice.toFixed(2);
    var node=document.createTextNode(newprice.toString()+" €");
   // list2[i].appendChild(document.createElement("br"));
    list2[i].appendChild(node);
    console.log(node);
}