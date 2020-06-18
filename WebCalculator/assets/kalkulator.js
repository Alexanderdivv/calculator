//tempat menyimpan data dan kondisi 
const calculator = {
	displayNumber: '0',//data diambil dari sini
	operator:null,
	firstNumber:null,
	waitingForSecondNumber:false
};

function updateDisplay(){
	document.querySelector("#displayNumber").innerText = calculator.displayNumber;
}

function clearCalculator(){
	calculator.displayNumber = '0';
	calculator.operator = null;
	calculator.firstNumber = null;
	calculator.waitingForSecondNumber = false;
}

function inputDigit(digit){
	if(calculator.displayNumber==='0'){
	calculator.displayNumber +=digit;
}
else{
	calculator.displayNumber+=digit;
}
}

//untuk mendapatkan seluruh nilai dari button
const button = document.querySelectorAll(".button");
for(let button of button){
	button.addEventListener('click', function(event){

		//mendapatkan objek elemen yang diklik
		const target = event.target;

		inputDigit(target.innerText);
		updateDisplay()
	});
}