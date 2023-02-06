const students = [
  {
    id: 1,
    name: "Ron Weasley",
    house: "Gryffindor",
  },
  {
    id: 2,
    name: "Cedric Diggory",
    house: "Gryffindor",
  }
  {
    id: 3,
    name: "Luna Lovegood",
    house: "Ravenclaw",
  }
  {
    id: 4,
    name: "Draco Malfoy",
    house: "Slytherin",
  }
];

// Empty array for expelled students//
const expelledStudents = [];

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
      <p class="card-text">${student.name}</p>
    </div>
    <button id="expelButton--${student.id}" class="btn btn-primary">Expel</button>
  </div>`;    
  }

//Rendering cards and adding event listener for expel button//
renderToDom ("#app", domString);

document.querySelector('#app').addEventListener("click", expelStudent);
};


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

  renderToDom("#expelled", domString);
};


//Function to actually expel a student//
const expelStudent = (event) => {
  // if the id includes "retireButton"
  if (event.target.id.includes("expelButton")) {
    // get that object id off of our target ID
    const [, studentId] = event.target.id.split("--");
    // Use it to find the index of the object
    const studentIndex = students.findIndex(
      (student) => Number(studentId) === student.id
    );

    // splice that object out of the array
    const expelledStudent = students.splice(studentIndex, 1);

    // push our instructor into the retiredInstructor array
    expelledStudents.push(expelledStudent);

    // Render both of our arrays! Retired and regular.
    expelledStudentsOnDom(expelledStudent);
    studentsOnDom(students);
  }
};


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
