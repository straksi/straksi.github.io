window.addEventListener('DOMContentLoaded', () => {
	const overlay = document.querySelector('.overlay')
	if( screen.width>991 ){
		const navItem = document.querySelectorAll('.header-w>.header-menu>.header-list>.header-list__item');
		navItem.forEach(item=>{	
			if( item.querySelector('.header-list') ){			
				const navTest = item.querySelector('.header-list')				
				item.addEventListener('mouseenter', () => {
					if ( item.classList.contains('is-active') ) {
						item.classList.remove('is-active');
						// navTest.style.maxHeight = 0;
						navTest.style.opacity = 0;
						overlay.classList.remove('is-active');
					}
					else {
						item.classList.add('is-active');
						// navTest.style.maxHeight = navTest.scrollHeight + 'px';
						navTest.style.opacity = 1;
						overlay.classList.add('is-active');
					}			
				});
				item.addEventListener('mouseleave', () => {
					if (item.classList.contains('is-active')) {
						item.classList.remove('is-active');
						// navTest.style.maxHeight = 0;
						navTest.style.opacity = 0;
						overlay.classList.remove('is-active');
					}
				});			
			}
		});
	}else if(screen.width<=991 ){
		const menu = document.querySelector('.header-menu')	
		const burger = document.querySelector('.header-burger')	
		burger.addEventListener('click', () => {
			burger.classList.toggle('is-close')
			menu.classList.toggle('is-active')
			overlay.classList.toggle('is-active');
			if(menu.classList.contains('is-active')){
				document.querySelector('body').style.overflow = "hidden"
			}else{
				document.querySelector('body').style.overflow = ""
			}
		})
		const navItem = document.querySelectorAll('.header-list__item');
		navItem.forEach(item=>{	
		if( item.querySelector('.header-list') ){			
			const navTest = item.querySelector('.header-list')			
			const arrow = document.createElement("div")
			arrow.setAttribute('class', 'header-arrow')
			item.insertBefore(arrow, navTest)		
			arrow.addEventListener('click', ()=>{	
				const parent = arrow.parentElement.parentElement,
				allList = parent.querySelectorAll('.header-list__item.is-active');
				let ifClass = false;
				allList.forEach( item=>{
					if ( arrow.parentElement.classList.contains('is-active') ) {
						ifClass = true;
					}
					item.classList.remove('is-active');
				})	
				if(ifClass){
					arrow.parentElement.classList.add('is-active')
				}			
				if ( item.classList.contains('is-active') ) {
					item.classList.remove('is-active');
				}
				else {
					item.classList.add('is-active');
				}
				console.log(arrow.offsetHeight)
				// menu.scrollTop = 0;
				// menu.scrollTop = arrow.parentElement.getBoundingClientRect().top + pageYOffset - document.querySelector('.header').offsetHeight
				arrow.scrollIntoView({
					behavior: 'smooth',
					block: 'start'
				  })
			})
		}
	});
	}
	async function tester(){
		const url = 'https://tager.dev.ozitag.com/api';
		const data = { username: 'example' };

		try {
		const response = await fetch(url, {
			method: 'POST', // или 'PUT'
			body: JSON.stringify(data), // данные могут быть 'строкой' или {объектом}!
			headers: {
			'Content-Type': 'application/json'
			}
		});
		const json = await response.json();
		console.log('Успех:', JSON.stringify(json));
		} catch (error) {
			console.error('Ошибка:', error);
		}
	}
	tester()
	
		
});