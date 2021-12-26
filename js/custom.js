const todoForm = document.getElementById("todoForm");
const appDataBody = document.querySelector(".app-data-body > ul");
const removeButton = document.getElementsByClassName("remove");

todoForm.addEventListener("submit", function(e) {
    e.preventDefault();

    var title = document.querySelector("#title").value;
    var description = document.querySelector("#des").value;

    if (title === "" || description === "") {
        alert("Please fill all fileds");
    } else {
        const li = `<li>
                <div class="data-body-card">
                    <ul>
                        <li>${title}</li>
                        <li>${description} </li>
                        <li> <a href="#" class="remove"> X </a> </li>
                    </ul>
                </div>
            </li>`;

        appDataBody.insertAdjacentHTML("afterbegin", li);

        appDataBody.querySelector("li:first-child .remove").addEventListener("click", function(e) {
            e.currentTarget.closest(".data-body-card").parentNode.remove();
        })

        // for (i = 0; i < removeButton.length; i++) {
        //     removeButton[i].addEventListener("click", function(e) {
        //         e.currentTarget.parentNode.parentNode.parentNode.remove();
        //     })
        // }

        document.querySelector("#title").value = "";
        document.querySelector("#des").value = "";


    }

});