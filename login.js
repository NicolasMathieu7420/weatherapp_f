// Insert your code here
document.querySelector('#connection').addEventListener('click', function () {
    let data = {email:document.querySelector('#connectionEmail').value,
                password:document.querySelector('#connectionPassword').value }
    fetch(`weatherapp-b.vercel.app/users/signin`, {
		method: 'POST',
		headers: {
        "Content-Type": "application/json",
        },
		body: JSON.stringify(data)})
				.then(response => response.json())
				.then(data => {
                    //console.log(data)
					if (data.result) {
						window.location.assign('./index.html')
					}
				})
      
})

document.querySelector('#register').addEventListener('click', function () {

    let data = {email:document.querySelector('#registerName').value,
                password:document.querySelector('#registerPassword').value,
                name: document.querySelector('#registerPassword').value}
    //console.log(data)
    fetch(`weatherapp-b.vercel.app/users/signup`, {
		method: 'POST',
		headers: {
        "Content-Type": "application/json",
        },
		body: JSON.stringify(data)})
				.then(response => response.json())
				.then(data => {
                    //console.log(data)
					if (data.result) {
						window.location.assign('./index.html')
					}
				})
      
})