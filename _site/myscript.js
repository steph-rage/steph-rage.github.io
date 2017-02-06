/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("topnavbar");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}

function ProjectFunction() {
	if ($(window).width() <= 680){
	    var x = document.getElementById("projectlist");
	    if (x.className === "") {
	        x.className = "projects";
	    } else {
	        x.className = "";
	    }
	    var x = document.getElementById("namebox");
	    if (x.className === "name") {
	        x.className += " hidden";
	    } else {
	        x.className = "name";
	    }
	}
}

