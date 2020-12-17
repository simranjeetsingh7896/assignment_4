// AJAX for teacher Add can go in here!
// This file is connected to the project via Shared/_Layout.cshtml




function validateTeacher() {
	    var IsValid = true;
	    var ErrorMsg = "";
	    var ErrorBox = document.getElementById("ErrorBox");
	    var TeacherFname = document.getElementById('TeacherFname').value;
	    var TeacherLname = document.getElementById('TeacherLname').value;
	    var Employeenumber = document.getElementById('Employeenumber').value;
	    var Salary = document.getElementById('Salary').value;

	    if (TeacherFname === "") {
			IsValid = false;
			ErrorMsg += "please fill first name.<br>";
        }

	    if (TeacherLname === "") {
			IsValid = false;
			ErrorMsg += "please fill last name.<br>";
        }

	    if (Employeenumber === "") {
			IsValid = false;
			ErrorMsg += "please fill employee number.<br>";
        }

	    if (Salary === "") {
			IsValid = false;
			ErrorMsg += "please fill salary.<br>";
        }

	    if (!IsValid) {
		    ErrorBox.style.display = "block";
		    ErrorBox.innerHTML = ErrorMsg;
	    } else {
		   ErrorBox.style.display = "none";
		   ErrorBox.innerHTML = "";
	    }


	 return IsValid;
     }


function AddTeacher() {

	var IsValid = validateTeacher();
	if (!IsValid) return;

	//goal: send a request which looks like this:
	//POST : http://localhost:53360/api/TeacherData/AddTeacher
	//with POST data of teachername, employeenumber, salary, etc.

	var URL = "http://localhost:53360/api/TeacherData/AddTeacher/";

	var rq = new XMLHttpRequest();
	// where is this request sent to?
	// is the method GET or POST?
	// what should we do with the response?

	var TeacherFname = document.getElementById('TeacherFname').value;
	var TeacherLname = document.getElementById('TeacherLname').value;
	var Employeenumber = document.getElementById('Employeenumber').value;
	var Salary = document.getElementById('Salary').value;
	



	var TeacherData = {
		"TeacherFname": TeacherFname,
		"TeacherLname": TeacherLname,
		"Employeenumber": Employeenumber,
		"Salary": Salary
	};


	rq.open("POST", URL, true);
	rq.setRequestHeader("Content-Type", "application/json");
	rq.onreadystatechange = function () {
		//ready state should be 4 AND status should be 200
		if (rq.readyState == 4 && rq.status == 200) {
			//request is successful and the request is finished

			//nothing to render, the method returns nothing.


		}

	}
	//POST information sent through the .send() method
	rq.send(JSON.stringify(TeacherData));

}


function UpdateTeacher() {

	//check for validation straight away
	var IsValid = validateTeacher();
	if (!IsValid) return;

	//goal: send a request which looks like this:
	//POST : http://localhost:53360/api/TeacherData/AddTeacher
	//with POST data of teachername, employeenumber, salary, etc.

	var URL = "http://localhost:53360/api/TeacherData/AddTeacher/";

	var rq = new XMLHttpRequest();
	// where is this request sent to?
	// is the method GET or POST?
	// what should we do with the response?

	var TeacherFname = document.getElementById('TeacherFname').value;
	var TeacherLname = document.getElementById('TeacherLname').value;
	var Employeenumber = document.getElementById('Employeenumber').value;
	var Salary = document.getElementById('Salary').value;




	var TeacherData = {
		"TeacherFname": TeacherFname,
		"TeacherLname": TeacherLname,
		"Employeenumber": Employeenumber,
		"Salary": Salary
	};


	rq.open("POST", URL, true);
	rq.setRequestHeader("Content-Type", "application/json");
	rq.onreadystatechange = function () {
		//ready state should be 4 AND status should be 200
		if (rq.readyState == 4 && rq.status == 200) {
			//request is successful and the request is finished

			//nothing to render, the method returns nothing.


		}

	}
	//POST information sent through the .send() method
	rq.send(JSON.stringify(TeacherData));

}