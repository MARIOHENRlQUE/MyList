const date = [];
let inputDate = document.querySelector("#inputDate").addEventListener('submit', x => {
    x.preventDefault();
    document.querySelector(".todo").innerHTML = "";
    date.push({
        id: `${date.length + 1}`,
        tittle: `${document.querySelector("#text").value}`
    });
    date.forEach(task => {
        let li = document.createElement('li');
        li.innerHTML = `
        <input type="checkbox" name="" id="task-${task}">
        <label for="task-${task}">${task.tittle}</label>`;
        document.querySelector(".todo").append(li);
    });
    document.querySelector("#text").value = "";
})
//Capiturar tecla enter usando o keyup



    // let listInput = {
    //         id: `${date.length + 1}`,
    //         tittle: `${document.querySelector("#text").value}`
    //     };
    // date.push(listInput);
    // let li = document.createElement("li");
    // li.innerHTML = `<input type="checkbox" name="" id="task-${listInput.id}">
    //                 <label for="task-${listInput.id}">${listInput.tittle}</label>`;
    
    // document.querySelector(".todo").append(li);
    // document.querySelector("input").addEventListener("change", e =>{
    //     if(e.target.checked){
    //         li.classList.add("complete");
    //     }else{
    //         li.classList.remove("complete");
    //     }
    // });
    