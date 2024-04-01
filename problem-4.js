// Create function that takes in one argument that is passed through a 
// conditional statement with if, else ifs, and else. Return the result 
// as an alert or console.log. Test all of your conditions to make sure 
// you can receive all of your results back. 

let cakeFlavor = "strawberry";


function cakeOrder(flavor){
	if (flavor == "strawberry"){
		alert("yumm you got strawberry shortcake!");
	}

	else if (flavor == "chocolate"){
		alert("omg you got lava cake!");

	}

	else if (flavor == "vanilla"){
		alert("you got the classic vanilla cake!");
	}

	else{
		alert("yay! it's a suprise. you have to come to the store to see what you got!");

	}
}


cakeOrder(cakeFlavor);

