const btn = document.querySelector('.blog__btn');
const cards = Array.from(document.querySelectorAll('.blog__column'));

function openCatalog(){
	btn.addEventListener("click", (event) => {
		event.preventDefault();
		cards.forEach(item => item.classList.remove('hidden'));
		btn.classList.add('hidden');
	});
}
function response1() {
	if(window.innerWidth <= 543){
		btn.classList.add('hidden');

		cards.forEach((item, index) => {
			item.classList.add('hidden');
			if(index <= 2){
				item.classList.remove('hidden');
			} else{
				btn.classList.remove('hidden');
			}
			openCatalog();
		});
	}
}
response1();