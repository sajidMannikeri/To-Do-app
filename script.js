const title = document.getElementById("title")
const description = document.getElementById("description")
const form = document.querySelector("form")
const container = document.querySelector(".container")

//This will be the tasks that will be added as the user goes on adding
//  It will be an array of objects [{title: "Title1", description: "description1"}]
const tasks = [];


form.addEventListener('submit', submitForm)

function submitForm (e) {
    console.log(e);
    e.preventDefault();
    tasks.push( {
        title: title.value,
        description : description.value
    })
    console.log(tasks);
}

