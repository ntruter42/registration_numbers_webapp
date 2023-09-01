window.addEventListener('load', () => {
	function displayHelp() {
		let helpContent = 'Valid Registration Codes: ';
		helpContent += '<b>CA</b>, <b>CF</b>, <b>CG</b>, <b>CJ</b>, <b>CK</b>, <b>CL</b>';
		helpContent += '<hr>';
		helpContent += 'Examples of Valid Registration Numbers:<br>';
		helpContent += '<b>CA 456 789</b>&emsp;&emsp;<b>CF123456</b>&emsp;&emsp;<b>CG 345</b>';
		helpContent += '<br>'
		helpContent += '<b>CJ 789-012</b>&emsp;&emsp;<b>CK 7345 6</b>&emsp;&emsp;<b>CL 1-44</b>';
		document.querySelector('.reg-help').innerHTML = helpContent;
	}

	document.querySelector('.reg-input').addEventListener('focus', function () {
		helpBox.style.display = 'block';
	});
});