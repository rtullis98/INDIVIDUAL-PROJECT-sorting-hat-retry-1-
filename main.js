const students = [
  {
    id: 1,
    name: "Ron Weasley",
    house: "Gryffindor",
  },
  {
    id: 2,
    name: "Cedric Diggory",
    house: "Hufflepuff",
  },
  {
    id: 3,
    name: "Luna Lovegood",
    house: "Ravenclaw",
  },
  {
    id: 4,
    name: "Draco Malfoy",
    house: "Slytherin",
  }
];

// Empty array for expelled students//
const expelledStudents = [
  {
    id: 1,
    name: "Evil McBadperson"
  }
];

//Render to DOM utility function//
const renderToDom = (divID, htmlToRender) => {
  const selectedDiv = document.querySelector(divID);

  selectedDiv.innerHTML = htmlToRender
}

//Getting my student cards on the DOM//
const studentsOnDom = (array) => {
  let domString = "";
  for (const student of array) {
    domString += `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-header">${student.name}</h5>
      <p class="card-text">${student.house}</p>
    </div>
    <button id="expelButton--${student.id}" class="btn btn-primary">Expel</button>
  </div>`;    
  }

  //Rendering cards and adding event listener for expel button//
  renderToDom (".regularStudents", domString);

};



//document.querySelector('#app').addEventListener("click", expelStudent);
//};


//Function to render Expelled cards on the DOM//
const expelledStudentsOnDom = (array) => {
  let domString = "";
  for (const student of array) {
    domString += `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <p class="card-text">${student.name}</p>
    </div>
  </div>`;    
  }

  renderToDom(".expelledStudents", domString);
};

//Function to actually expel a student//
const newVar = document.querySelector(".regularStudents");

newVar.addEventListener("click", (event) => {
  console.log(event.target.id)
  //Checking if id includes expelButton
  if (event.target.id.includes("expelButton")) {

    //Splitting that id with the target id
    const [, studentId] = event.target.id.split("--");

    // Using that id to find the index of the object
    const studentIndex = students.findIndex(
      (event) => event.id  === Number(studentId)
    );

    // Using splice to move the expelled student out of the students array
    const badStudent = students.splice(studentIndex, 1);

    //Pushing the expelled student into the expelledStudents array
    expelledStudents.push(...badStudent);
      console.log(badStudent)
    //Then finally rendering both arrays
    studentsOnDom(students);
    expelledStudentsOnDom(expelledStudents);
  }
});


//Function to filter students by house//
const filter = (array, houseString) => {
  const studentsArray = [];

  for (const student of array) {
    if (student.house === houseString) {
      studentsArray.push(student);
    }
  }

  return studentsArray;
};

//Targeting house filter buttons on the DOM//
const allButton = document.querySelector("#allButton");
const gButton = document.querySelector("#gButton");
const hButton = document.querySelector("#hButton");
const rButton = document.querySelector("#rButton");
const sButton = document.querySelector("#sButton");

//Adding click events to add functionality to the buttons//

studentsOnDom(students)
expelledStudentsOnDom(expelledStudents)

//ALL BUTTON//
allButton.addEventListener("click", () => {
  studentsOnDom(students);
});

//Gryffindor//
gButton.addEventListener("click", () => {
  const gStudents = filter(students, "Gryffindor")
  studentsOnDom(gStudents);
});

//Hufflepuff//
hButton.addEventListener("click", () => {
  const hStudents = filter(students, "Hufflepuff")
  studentsOnDom(hStudents);
});

//Ravenclaw//
rButton.addEventListener("click", () => {
  const rStudents = filter(students, "Ravenclaw")
  studentsOnDom(rStudents);
});

//Slytherin//
sButton.addEventListener("click", () => {
  const sStudents = filter(students, "Slytherin")
  studentsOnDom(sStudents);
});


//****FORM FUNCTIONS */ */

//Function to show the form input - creating domString to input form into//

const showForm = () => {
  const domString = 

//Form from Bootstrap below://
'<input id="nameForm" type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping"/><button type="submit" class="btn btn-success" id="form-submit">Sort</button>';

  // Render that to the Dom (#form referring to empty DIV for form.)//
  renderToDom("#form", domString);

  //Adding an event listener to my submit button (found within the form from bootstrap code above - cut form and button from HTML into JS)//
  document.querySelector("#form-submit")
  .addEventListener("click", addNewStudent)
};

//Target Begin button to show the form once clicked//
document.querySelector("#beginButton").addEventListener("click", showForm)

//***Function to add new student using the form***//

//Declare variable and event//
const addNewStudent = (event) => {
  event.preventDefault();

//Using math random (*4 for complete range of student array) to create random number for new student
const randNum = Math.floor(Math.random() *6);

//New variable to grab a random student template for new student. Random number is an index.//
const randomStudent = students[randNum];

//New student object//
const newStudent = {
  id: students.length + 1,
  name: document.querySelector("#nameForm").value,
  house: randomStudent.house
};



//Finally, pushing the new student to the students array, and adding it to the DOM//
console.log(newStudent)
students.push(newStudent)
studentsOnDom(students)

document.querySelector("nameForm").reset()
};

//const startApp = () => {
  //renderStudents(students);
//};

//startApp();
