window.onload = function () { 
	var menuBurger = document.querySelector('.menu-burger');
	var menu = document.querySelector('.menu');
	
	menuBurger.addEventListener('click', function(){
		
		this.classList.toggle('menu-burger_closed');
		this.classList.toggle('menu-burger_opened');
		
		menu.classList.toggle('menu-closed');
		menu.classList.toggle('menu-opened');
		
	});

	var portfolioList = document.querySelectorAll('.portfolio-list');

	portfolioList.addEventListener('click', (event) => {
		console.log(event.target);
	});
	


}