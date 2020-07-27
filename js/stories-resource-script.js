function addButtonListener() {
	let guidanceBtn = document.getElementById('guidance-btn');
	let guidance = document.getElementById('guidance');
	guidanceBtn.addEventListener('click', e => {
		if(guidance.style.display === 'none'){
			guidance.style.display = 'block';
		}
		else {
			guidance.style.display = 'none';
		}
	})
}

window.addEventListener('DOMContentLoaded', e => {
	addButtonListener();
});
