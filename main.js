const students = [
  {
    id: 1,
    name: "Ron Weasley",
    house: "Gryffindor",
  },
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
