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
