const date = [];

let inputDate = document.querySelector("#inputDate").addEventListener('submit', x => {
    x.preventDefault();
    let listInput = {
            id: `${date.length + 1}`,
            tittle: `${document.querySelector("#text").value}`
        };
    date.push(listInput);
    let li = document.createElement("li");
    li.innerHTML = `<input type="checkbox" name="" id="task-${listInput.id}">
                    <label for="task-${listInput.id}">${listInput.tittle}</label>`;
    document.querySelector(".todo").append(li);

    // date.push({
    //     id: `${date.length + 1}`,
    //     tittle: `${document.querySelector("#text").value}`
    // });
    // date.forEach(task => {
    //     let li = document.createElement('li');
    //     li.innerHTML = `
    //     <input type="checkbox" name="" id="task-${task}">
    //     <label for="task-${task}">${task.tittle}</label>`;
    //     document.querySelector(".todo").append(li);
    // });
})

