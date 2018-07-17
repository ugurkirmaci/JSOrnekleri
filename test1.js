/*var ilkÊlement = document.querySelector("li");*/

var Elementler = document.querySelectorAll("li");

for (var i = 0 ; i< Elementler.length; i++ ) {
	Elementler[i].addEventListener("mouseover",function () {
		this.style.color="blue";
		});


	Elementler[i].addEventListener("mouseout",function () {
		this.classList.toggle("benimClass")
		});


	Elementler[i].addEventListener("click",function () {
		this.style.color="blue";
		});

};






/*
ilkÊlement.addEventListener("mouseover",function () {
	
	this.style.color ="blue";


});
ilkÊlement.addEventListener("mouseout",function () {
	
	this.style.color ="black";


});*/