function magicButton(){

		//This variable is looking in the document to find the VALUE OF the object with the ID
		var url = document.getElementById("myURLinput").value;


		//This variable is looking in the HTML document to find whatever object has the ID magicBox
		var magicBox = document.getElementById("magicBox");


		//Now the HTML code that is inside of the DIV placeholder (magicBox) gets replaced/reset to this new code
		magicBox.src = url;

	}
