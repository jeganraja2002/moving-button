


	let name = document.querySelector(".name")
	let pass = document.querySelector(".password")
	let buttonNo = document.querySelector(".button-click-no")
	let buttonYes = document.querySelector(".button-click-yes")

	let event = document.querySelector(".event") 
	let count = 0

	buttonNo.addEventListener("mousemove",(e)=>{

				let random = Math.floor(Math.random()*(innerWidth-100))
				let randomT = Math.floor(Math.random()*(innerHeight-100))
				// let a = ["-","+"]
				// let randomletter = Math.floor(Math.random()*2)
		
				buttonNo.style.left=random+"px"
				buttonNo.style.top=randomT+"px"
				buttonNo.style.position="fixed"
		

		buttonNo.addEventListener("click",()=>{
			
			count++
			if (count==1) {
				alert("brilient move")
				location.reload()
			}

		})
	})


	buttonYes.addEventListener("click",()=>{
		alert(" well try")
	location.reload()
	})



	