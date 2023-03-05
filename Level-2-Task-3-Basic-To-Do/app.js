(function() {

    window.onload = function() {

        // initializing tooltips
        var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
        var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl)
        });

        // selectors
        const inputElement = document.getElementById("todo-input");
        const todoAdd = document.getElementById("todo-add");
        const ulElement = document.getElementById("todo-list");

        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            const infoSvg = document.getElementById('info-svg');
            infoSvg.remove();
        }

        todoAdd.addEventListener("click", function(event) {
            
            event.preventDefault();

            if(inputElement.value != ""){
                const liElement = document.createElement("li");
                ulElement.appendChild(liElement);
                liElement.className = "list-group-item";
            
                liElement.innerHTML = inputElement.value;
                inputElement.value = "";

                if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                    // Create Completed button
                    const completedButton = document.createElement("button");
                    completedButton.className = "btn rounded-0 border-0 position-absolute text-center"
                    completedButton.innerHTML = "<i class='fas fa-check'></i>";
                    completedButton.classList.add("check-btn");
                    liElement.appendChild(completedButton);

                    ulElement.addEventListener("click", function(event) {
                        if (event.target.classList.contains("check-btn")) {
                          liElement.click();
                        }
                    });

                    // Create Trash button
                    const trashButton = document.createElement("button");
                    trashButton.className = "btn rounded-0 border-0 position-absolute end-0 text-center"
                    trashButton.innerHTML = "<i class='fas fa-trash'></i>";
                    trashButton.classList.add("trash-btn");
                    liElement.appendChild(trashButton);

                    trashButton.addEventListener("click", function(event) {
                        event.preventDefault();
                        liElement.remove();
                    });
                }

                liElement.addEventListener("click", function() {
                    if(liElement.className == "list-group-item"){
                        liElement.className = "list-group-item text-decoration-line-through";
                    }
                    else {
                        liElement.className = "list-group-item";
                    }
                });
                

                liElement.addEventListener("contextmenu", function(event) {
                    event.preventDefault();
                    liElement.remove();
                });


                const all = document.querySelectorAll(".dropdown-menu a")[0];
                const complete = document.querySelectorAll(".dropdown-menu a")[1];
                const incomplete = document.querySelectorAll(".dropdown-menu a")[2];
                let hideCompleted = false;


                all.addEventListener("click", function() {
                    event.preventDefault();
                    hideCompleted = false;
                    Array.from(ulElement.children).forEach(function(task) {
                        if(task.className.includes("list-group-item")){
                            task.style.display = hideCompleted ? "none" : "block";
                        }
                    })
                });
                
                
                complete.addEventListener("click", function(){
                    event.preventDefault();
                    hideCompleted = true;
                    Array.from(ulElement.children).forEach(function(task) {
                        if(task.className.includes("text-decoration-line-through")){
                            task.style.display = hideCompleted ? "block" : "none";
                        }
                        else {
                            task.style.display = hideCompleted ? "none" : "block";
                        }
                    });
                });


                incomplete.addEventListener("click", function() {
                    event.preventDefault();
                    hideCompleted = true;
                    Array.from(ulElement.children).forEach(function(task) {
                        if(!task.className.includes("text-decoration-line-through")){
                            task.style.display = hideCompleted ? "block" : "none";
                        }
                        else {
                            task.style.display = hideCompleted ? "none" : "block";
                        }
                    })
                });
            }
        });
    };

})();