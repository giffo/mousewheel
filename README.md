# mousewheel

simple mousewheel jquery plugin

gives just the direction: **up, down, left, right**

usage:
 
	$(".some-page-class").on("mousewheel", function(event, dir){
		if(dir == "up") {
			console.log("mousewheel up");
		}
 
		// or you can use the switch statement

		switch(dir) {
			case 'up':
				// action up etc
				break;
			case 'down':
				// action down
				break;
			case 'left':
				// action 
				break;
			case 'right':
				// mouse wheel moved right
				break;
			default:
				console.log("mousewheel shouldn't reach this far");
		}
	});




There are some .html pages that have simple examples of usage:

index.html and example.html
