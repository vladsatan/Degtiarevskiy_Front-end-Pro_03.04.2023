const root = document.getElementById('root');

const arrayOfNumbers = [];

let numOfTd = 100;

for (let i = 1; i <= numOfTd; i++) {
   arrayOfNumbers.push(i);
}


function createTable(parent, cols, rows) {
	let table = document.createElement('table');
	
	for (let i = 0; i < rows; i++) {
		let tr = document.createElement('tr');
		
		for (let j = 0; j < cols; j++) {
			let td = document.createElement('td');
         td.style.textAlign = 'center';
         td.style.width = '30px';
         td.style.height = '30px';
         td.style.border = '1px solid black';
			tr.appendChild(td);
		}
		
		table.appendChild(tr);
	}
	
	parent.appendChild(table);
}

createTable(root, 10, 10);

const init = document.getElementsByTagName('td');

const initArr = Array.from(init);

let counter = 0

for (let i = 0; i < arrayOfNumbers.length; i++){
   initArr[counter].textContent = arrayOfNumbers[counter];
   counter++;
}