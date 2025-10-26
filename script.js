const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	let prices=document.querySelectorAll(".price");
	let total=0;
    prices.forEach((a)=>total+=(Number(a.innerText)));

	let table=document.querySelector('table');

	let newrow=document.createElement('tr');
	let label=document.createElement('td');
	let labelcell=document.createElement('td');

	newrow.id="ans";

	labelcell.textContent=total;
	label.textContent='Total Price ';

	newrow.append(label,labelcell);
	table.append(newrow);
};

getSumBtn.addEventListener("click", getSum);

