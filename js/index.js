const search = document.querySelector('#search-input');
const tableRows = document.querySelectorAll('#table tbody tr');

const onChange = (event) => {
	tableRows.forEach((row) => {
		const firstName = row.children[1].innerHTML.toLowerCase();
		if (firstName.indexOf(event.target.value.toLowerCase().trim()) === -1 ) {
			row.style.display = "none";
		} else {
			row.style.display = "";
		}
	})
}



// EVENTS 
search.addEventListener('keyup', onChange);