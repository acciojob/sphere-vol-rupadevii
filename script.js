function volume_sphere(e) {
    //Write your code here
	e.preventDefault()
	const radius = document.querySelector('input[name="radius"]').value;
	const volumeInput = document.querySelector('input[name="volume"]');
	
	if(Number(radius) > 0){
		const volume = (4/3) * Math.PI * radius * radius * radius;
		volumeInput.value=volume.toFixed(4)
	}
	else{
		volumeInput.value = NaN
	}
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
