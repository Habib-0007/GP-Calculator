var addBtn = document.querySelector("form button");
var courseNameInput = document.querySelector(".course_name_input");
var courseUnitInput = document.querySelector(".course_unit_input");
var courseGradeInput = document.querySelector(".course_grade_input");
var courses = document.querySelector(".courses");

function addNewCourse(event) {
	event.preventDefault();
	var courseNameInputVal = courseNameInput.value;
	var courseUnitInputVal = courseUnitInput.value;
	var courseGradeInputVal = courseGradeInput.value;

	if (
		courseNameInput.value == "" ||
		courseUnitInput.value == "" ||
		courseGradeInput.value == ""
	) {
		alert("Please, fill the input with the right value");
	} else {
		var newCourse = document.createElement("div");
		courses.appendChild(newCourse);

		var courseName = document.createElement("h6");
		courseName.classList.add("course_name");
		courseName.textContent = courseNameInputVal;
		var courseUnit = document.createElement("h6");
		courseName.classList.add("course_unit");
		courseUnit.textContent = `${courseUnitInputVal}`;
		var courseGrade = document.createElement("p");
		courseName.classList.add("course_grade");
		courseGrade.textContent = courseGradeInputVal;
		newCourse.appendChild(courseName);
		newCourse.appendChild(courseUnit);
		newCourse.appendChild(courseGrade);
	}

	/*	courseUnit.forEach(eachCourseUnit => {
		console.log(eachCourseGrade);
	});*/
	var courseUnitNew = document.querySelectorAll(".course_unit");
	var courseGradeNew = document.querySelectorAll(".course_grade");

	let arr1 = Array.from(courseUnitNew);
	let arr2 = Array.from(courseGradeNew);

	let numArr1 = arr1.map(el => Number(el.innerHTML));
	let numArr2 = arr2.map(el => Number(el.innerHTML));

	console.log(numArr1);
	console.log(numArr2);

	/*
	let totalSum = numArr1.reduce((acc, val, idx) => acc + val * numArr2[idx], 0);

	console.log(totalSum);
	*/
}

addBtn.addEventListener("click", addNewCourse);
