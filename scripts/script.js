window.addEventListener("load", () => {
  const form = document.querySelector("#new-task-form");
  const input = document.querySelector("#new-task-input");
  const listEl = document.querySelector("#tasks");
  const category = document.querySelector('.category')
  const newCategoryButton = document.querySelector('#new-category-button')

  // createNewCategory = document.createElement('input')
  // createNewCategory.type = 'text'
  // createNewCategory.classList.add('category-input')

  // newCategoryButton.addEventListener('click', () => {
  //   category.appendChild(createNewCategory)
  // })

  form.addEventListener("submit", (el) => {
    el.preventDefault();
    const task = input.value;
    if (!task) {
      alert('undefined')
      listEl.removeChild(taskEl);
      
    }
    const taskEl = document.createElement("div");
    taskEl.classList.add("task");

    const taskContentEl = document.createElement("div");
    taskContentEl.classList.add("content");

    taskEl.appendChild(taskContentEl);

    const taskInputEl = document.createElement("input");
    taskInputEl.classList.add("text");
    taskInputEl.type = "text";
    taskInputEl.value = task;
    taskInputEl.setAttribute("readonly", "readonly");

    taskContentEl.appendChild(taskInputEl);

    const taskActions = document.createElement("div");
    taskActions.classList.add("actions");

    const taskActionsButtonEdit = document.createElement("button");
    taskActionsButtonEdit.classList.add("edit");
    taskActionsButtonEdit.innerHTML = "Edit";
    taskEl.appendChild(taskActions);

    taskActions.appendChild(taskActionsButtonEdit);

    const taskActionsButtonDelete = document.createElement("button");
    taskActionsButtonDelete.classList.add("delete");
    taskActionsButtonDelete.innerHTML = "Delete";

    taskActions.appendChild(taskActionsButtonDelete);

    listEl.appendChild(taskEl);

    input.value = [];

    taskActionsButtonEdit.addEventListener("click", () => {
      if (taskActionsButtonEdit.innerText.toLowerCase() == "edit") {
        taskInputEl.removeAttribute("readonly");
        taskInputEl.focus();
        taskActionsButtonEdit.innerText = "Save";
      } else {
        taskInputEl.setAttribute("readonly", "readonly");
        taskActionsButtonEdit.innerText = "Edit";
      }
    });

    taskActionsButtonDelete.addEventListener("click", () => {
      listEl.removeChild(taskEl);
    });

    
  });
  
})
